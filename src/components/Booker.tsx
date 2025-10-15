import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Booker() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min", "embedJsUrl": "https://booking.strangeways.co/embed/embed.js" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#1f2b35" }, "dark": { "cal-brand": "#fafafa" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (<>
        <div className="mb-6 text-center items-center">
            <h2 className="text-3xl font-semibold tracking-tight">Schedule a free consultation</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">We offer a free 15-minute consultation to discuss your project and answer any questions you may have.</p>
        </div>
        <Cal namespace="15min"
            calLink="studio/15min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ "layout": "month_view" }}
            calOrigin="https://booking.strangeways.co"
            embedJsUrl="https://booking.strangeways.co/embed/embed.js"
            className="w-full h-full pb-16"
        /></>);
};
