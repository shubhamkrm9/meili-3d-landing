
'use client';

import { useScroll } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import { createRoot, Root } from 'react-dom/client';

export function HtmlScroll({ children, style, ...props }: { children: React.ReactNode; style?: React.CSSProperties;[key: string]: any }) {
    const scroll = useScroll();

    // Create a persistent container element
    const container = useMemo(() => {
        if (typeof document === 'undefined') return null; // SSR safety
        const div = document.createElement('div');
        Object.assign(div.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            ...style
        });
        return div;
    }, []); // style dependency ignored in memo creation to keep ref stable, but updated in effect

    // Apply styles updates
    useEffect(() => {
        if (container && style) {
            Object.assign(container.style, style);
        }
    }, [style, container]);

    // Manage mounting to the scroll container
    useEffect(() => {
        if (!container || !scroll.el) return;
        const target = scroll.el as HTMLElement;
        target.appendChild(container);
        return () => {
            if (target.contains(container)) {
                target.removeChild(container);
            }
        };
    }, [scroll.el, container]);

    // Manage React Root
    const rootRef = useRef<Root | null>(null);

    useEffect(() => {
        if (!container) return;

        if (!rootRef.current) {
            rootRef.current = createRoot(container);
        }

        rootRef.current.render(children);

    }, [children, container]);

    // Cleanup root on unmount
    useEffect(() => {
        return () => {
            if (rootRef.current) {
                rootRef.current.unmount();
                rootRef.current = null;
            }
        };
    }, []);

    return null;
}
