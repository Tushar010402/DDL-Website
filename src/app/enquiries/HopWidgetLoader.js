'use client';
import dynamic from 'next/dynamic';

const HopWidget = dynamic(() => import('./HopWidget'), { ssr: false });

export default function HopWidgetLoader() {
    return <HopWidget />;
}
