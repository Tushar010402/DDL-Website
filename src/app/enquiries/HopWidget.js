'use client';
import Script from 'next/script';

export default function HopWidget() {
    return (
        <>
            <div id="hop-widget-root" data-widget-id="698c50deb5448e056863a48c"></div>
            <Script
                src="https://dashboard.hopwellness.ai/widgets/embed.js?widgetId=698c4d48f72518efea07b558&widgetType=dangs"
                strategy="afterInteractive"
            />
        </>
    );
}
