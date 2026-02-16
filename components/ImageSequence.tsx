
'use client';

import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

type SequenceManifest = {
    [key: string]: {
        path: string;
        frames: string[];
    };
};

const SEQUENCE_DEF = [
    { id: 'center-to-right', start: 0, end: 0.20 },
    { id: 'right-to-center', start: 0.20, end: 0.40 },
    { id: 'center-to-left', start: 0.40, end: 0.60 },
    { id: 'left-to-center', start: 0.60, end: 0.80 },
    { id: 'image-7', start: 0.80, end: 1.0 },
];

export function ImageSequence() {
    const scroll = useScroll();
    const { viewport } = useThree();
    const meshRef = useRef<THREE.Mesh>(null);
    const textureRef = useRef<THREE.Texture | null>(null);

    const [manifest, setManifest] = useState<SequenceManifest | null>(null);
    const [images, setImages] = useState<Record<string, HTMLImageElement[]>>({});


    // Load manifest
    useEffect(() => {
        fetch('/sequences/manifest.json')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => setManifest(data))
            .catch(err => console.error("Failed to load manifest:", err));
    }, []);

    // Preload images (progressive)
    // Logic: We assume frames are ~50KB. 5 sequences * 100 frames = 500 images.
    // We can lazy load or preload the active sequence.
    // For smoothest scrub, we really want them in memory.
    // Let's implement a smart preloader: Load current sequence + next sequence.

    // Use a map to store loaded images: sequenceId -> [Image, Image...]
    const imageCache = useRef<Record<string, HTMLImageElement[]>>({});

    const loadSequence = async (id: string, frames: string[], path: string) => {
        if (imageCache.current[id]) return; // already loading/loaded

        // Create placeholders
        imageCache.current[id] = new Array(frames.length).fill(null);

        // Load one by one or in batches
        frames.forEach((frame, index) => {
            const img = new Image();
            img.src = `/sequences/${path}/${frame}`;
            img.onload = () => {
                if (imageCache.current[id]) {
                    imageCache.current[id][index] = img;
                }
            };
        });
    };

    useFrame(() => {
        if (!manifest || !meshRef.current) return;

        // Calculate global progress
        const r1 = scroll.range(0, 1); // 0 to 1
        // The scroll.offset or scroll.scroll.current is what we want.
        // scroll.offset is 0..1 based on current page / pages
        const progress = scroll.offset;

        // Find active sequence
        const active = SEQUENCE_DEF.find(s => progress >= s.start && progress <= s.end) || SEQUENCE_DEF[SEQUENCE_DEF.length - 1]; // fallback to last if 1.0

        // Check if we need to load this sequence
        if (manifest[active.id] && !imageCache.current[active.id]) {
            loadSequence(active.id, manifest[active.id].frames, manifest[active.id].path);
        }

        // Also preload the next one if close to end?
        // Simplified: Just trigger load for active.

        // Calculate local progress in segment
        // prevent division by zero
        const duration = active.end - active.start;
        const localProgress = Math.max(0, Math.min(1, (progress - active.start) / duration));

        // Determine frame
        if (imageCache.current[active.id]) {
            const frames = manifest[active.id].frames;
            const frameIndex = Math.floor(localProgress * (frames.length - 1));

            // Get the loaded image
            const img = imageCache.current[active.id][frameIndex];

            if (img && textureRef.current) {
                // Efficient texture update
                textureRef.current.image = img;
                textureRef.current.needsUpdate = true;
            } else if (img && !textureRef.current) {
                // Init texture
                const tex = new THREE.Texture(img);
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.needsUpdate = true;
                textureRef.current = tex;
                if (meshRef.current.material instanceof THREE.MeshBasicMaterial) {
                    meshRef.current.material.map = tex;
                    meshRef.current.material.needsUpdate = true;
                }
            }
        }

        // Cover logic
        const imageAspect = 16 / 9;
        const viewportAspect = viewport.width / viewport.height;
        if (viewportAspect > imageAspect) {
            meshRef.current.scale.set(viewport.width, viewport.width / imageAspect, 1);
        } else {
            meshRef.current.scale.set(viewport.height * imageAspect, viewport.height, 1);
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry />
            <meshBasicMaterial transparent opacity={1} />
        </mesh>
    );
}
