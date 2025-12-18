type R2ObjectLike = {
  body: unknown
  httpMetadata?: {
    contentType?: unknown
  }
}

function isBodyInit(value: unknown): value is BodyInit {
  return (
    typeof value === 'string' ||
    value instanceof ArrayBuffer ||
    value instanceof Blob ||
    value instanceof FormData ||
    value instanceof URLSearchParams ||
    value instanceof ReadableStream
  )
}

function isR2ObjectLike(value: unknown): value is R2ObjectLike {
  return typeof value === 'object' && value !== null && 'body' in value
}

export async function onRequestGet(ctx: {
  request: Request
  env: {
    MEDIA: {
      get: (key: string) => Promise<unknown>
    }
  }
}) {
  const path = new URL(ctx.request.url).pathname.replace('/media/', '')
  const file = await ctx.env.MEDIA.get(path)
  if (!file) return new Response(null, { status: 404 })
  if (!isR2ObjectLike(file)) return new Response(null, { status: 500 })
  if (!isBodyInit(file.body)) return new Response(null, { status: 500 })
  try {
    const contentType =
      typeof file.httpMetadata?.contentType === 'string'
        ? file.httpMetadata.contentType
        : 'application/octet-stream'
    return new Response(file.body, {
      headers: { 'Content-Type': contentType },
    })
  } catch (e: unknown) {
    const err = e instanceof Error ? e : new Error(String(e))
    console.error(err)
    return new Response(null, { status: 500 })
  }
}
