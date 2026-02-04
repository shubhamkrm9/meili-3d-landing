
'use client';

import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { ImageSequence } from './ImageSequence';
import { Overlay } from './Overlay';
import { Suspense } from 'react';

export function MainScene() {
    return (
        <div className="h-screen w-full relative">
            <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <ScrollControls pages={8} damping={0.2}>
                        <ImageSequence />
                        <Overlay />
                    </ScrollControls>
                </Suspense>
            </Canvas>

            {/* Optional helper to visualize scroll for debugging, remove in prod */}
            {/* <div className="absolute top-0 left-0 text-white p-4">Scroll to explore</div> */}
        </div>
    );
}
