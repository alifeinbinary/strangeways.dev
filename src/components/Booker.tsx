import { Suspense, useEffect, useRef, useState, lazy } from "react";

export default function Booker() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [showEmbed, setShowEmbed] = useState(false);

    useEffect(() => {
        if (!containerRef.current || showEmbed) return;
        const el = containerRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setShowEmbed(true);
                    observer.disconnect();
                }
            },
            { root: null, rootMargin: "200px", threshold: 0.01 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [showEmbed]);

    useEffect(() => {
        if (!showEmbed) return;
        (async function () {
            const { getCalApi } = await import("@calcom/embed-react");
            const cal = await getCalApi({ namespace: "15min", embedJsUrl: "https://booking.strangeways.co/embed/embed.js" });
            cal("ui", { cssVarsPerTheme: { light: { "cal-brand": "#1f2b35" }, dark: { "cal-brand": "#fafafa" } }, hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, [showEmbed]);

    const Cal = lazy(() => import("@calcom/embed-react").then((m) => ({ default: m.default })));

    return (<>
        <div className="mb-6 text-center items-center">
            <h2 className="text-3xl font-semibold tracking-tight">Schedule a free consultation</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">We offer a free 15-minute consultation to discuss your project and answer any questions you may have.</p>
        </div>
        <div ref={containerRef} className="w-full h-full pb-16">
            {showEmbed ? (
                <Suspense fallback={<div className="py-16 text-center text-sm text-neutral-500">Loading scheduler…</div>}>
                    <Cal
                        namespace="15min"
                        calLink="studio/15min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: "month_view" }}
                        calOrigin="https://booking.strangeways.co"
                        embedJsUrl="https://booking.strangeways.co/embed/embed.js"
                        className="w-full h-full"
                    />
                </Suspense>
            ) : (
                <div className="py-16 text-center text-sm text-neutral-500">Scheduler loads on demand…</div>
            )}
        </div>
    </>);
}
