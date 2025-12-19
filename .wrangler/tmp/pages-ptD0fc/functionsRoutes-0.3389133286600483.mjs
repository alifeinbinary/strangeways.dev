import { onRequestPost as __api_contact_ts_onRequestPost } from "/Users/andrew/www/strangeways/strangeways.dev/functions/api/contact.ts"
import { onRequestGet as __media___all___ts_onRequestGet } from "/Users/andrew/www/strangeways/strangeways.dev/functions/media/[[all]].ts"
import { onRequest as __index_ts_onRequest } from "/Users/andrew/www/strangeways/strangeways.dev/functions/index.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_ts_onRequestPost],
    },
  {
      routePath: "/media/:all*",
      mountPath: "/media",
      method: "GET",
      middlewares: [],
      modules: [__media___all___ts_onRequestGet],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__index_ts_onRequest],
    },
  ]