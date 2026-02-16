
'use client';

import { useScroll } from '@react-three/drei';
import { useEffect, useLayoutEffect, useRef, useMemo, createContext } from 'react';
import { createRoot, Root } from 'react-dom/client';

export const HtmlScrollContext = createContext<HTMLElement | null>(null);

export function HtmlScroll({ children, style, ...props }: { children: React.ReactNode; style?: React.CSSProperties;[key: string]: any }) {
    const scroll = useScroll();

    // Create container
    const container = useMemo(() => {
        if (typeof document === 'undefined') return null;
        const div = document.createElement('div');
        Object.assign(div.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            ...style,
        });
        // Override pointerEvents if style has it, or default to auto for interaction
        if (!style?.pointerEvents) {
            div.style.pointerEvents = 'auto';
        }
        return div;
    }, []);

    // Update style
    useEffect(() => {
        if (container && style) Object.assign(container.style, style);
    }, [style, container]);

    // Append to scroll.el
    useEffect(() => {
        if (!container || !scroll.el) return;
        const target = scroll.el as HTMLElement;
        target.appendChild(container); // Append container to scrollable element
        return () => {
            if (target.contains(container)) {
                target.removeChild(container);
            }
        }
    }, [scroll.el, container]);

    // Render using createRoot
    const rootRef = useRef<Root | null>(null);

    // Initial creation and cleanup
    useEffect(() => {
        if (!container) return;

        // Ensure root exists
        if (!rootRef.current) {
            rootRef.current = createRoot(container);
        }

        const root = rootRef.current;

        return () => {
            // In React 18/19 strict mode, this cleanup runs.
            // We unmount asynchronously to avoid conflicts if re-mounting happens immediately
            // or just unmount synchronously. 
            // Ideally synchronous unmount is safest for cleanup.
            // However, checking if root exists prevents re-creation errors.
            // We'll rely on refs.
            setTimeout(() => {
                root.unmount();
                rootRef.current = null;
            }, 0);
        };
    }, [container]);

    // Update children
    useLayoutEffect(() => {
        if (rootRef.current) {
            rootRef.current.render(
                <HtmlScrollContext.Provider value={scroll.el}>
                    {children}
                </HtmlScrollContext.Provider>
            );
        }
    }, [children, scroll.el]);

    return null;
}
