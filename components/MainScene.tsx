
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

            {/* Debug helper - shows scroll is working */}
            <div className="absolute top-4 left-4 text-white p-4 bg-black/50 rounded-lg backdrop-blur-sm z-50 pointer-events-none">
                <p className="text-sm">Scroll to explore ↓</p>
            </div>
        </div>
    );
}
