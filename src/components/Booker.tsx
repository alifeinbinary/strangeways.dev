import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Booker() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min", "embedJsUrl": "https://booking.strangeways.co/embed/embed.js" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#1f2b35" }, "dark": { "cal-brand": "#fafafa" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="15min"
        calLink="studio/15min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view" }}
        calOrigin="https://booking.strangeways.co"
        embedJsUrl="https://booking.strangeways.co/embed/embed.js"
    />;
};
