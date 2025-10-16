import { useEffect } from "react";

export default function Booker() {

    useEffect(() => {
        (async function () {
            const { getCalApi } = await import("@calcom/embed-react");
            const cal = await getCalApi({ "namespace": "15min", "embedJsUrl": "https://booking.strangeways.co/embed/embed.js" });
            cal("floatingButton", { "calLink": "studio/15min", "calOrigin": "https://booking.strangeways.co", "config": { "layout": "month_view", "theme": "auto" }, "buttonText": "Book a free consultation", "hideButtonIcon": false, "buttonColor": "#1a1d3f", "buttonTextColor": "#f5f7ff" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#1a1d3f" }, "dark": { "cal-brand": "#f5f7ff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
}
