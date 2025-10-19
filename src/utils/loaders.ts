import { type LoaderFunction, type LoaderFunctionArgs } from "react-router-dom";
import { portfolio } from "../data/portfolio";

export const appLoader: LoaderFunction = async () => {
    return ({});
};

export const postPageLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
    const id = params.id as string | undefined;
    if (!id) {
        throw new Response("Not Found", { status: 404, statusText: "Missing id" });
    }
    const item = portfolio.find(p => p.id === id);
    if (!item) {
        throw new Response("Not Found", { status: 404, statusText: `No portfolio item for id: ${id}` });
    }
    return { item };
};