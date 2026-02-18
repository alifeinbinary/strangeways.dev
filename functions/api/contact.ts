export const onRequestPost = async (context: {
  env: { PLUNK_API_KEY?: string; PLUNK_API_URL?: string }
  request: Request
}) => {
  const env = context.env as {
    PLUNK_API_KEY?: string
    PLUNK_API_URL?: string
  }
  const token = env.PLUNK_API_KEY?.trim()

  if (!token) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Missing API token' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const body = (await context.request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null

  if (!body) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Invalid JSON body' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const normalisedBody = {
    ...body,
    '': typeof body[''] === 'string' ? body[''] : '',
  }

  const upstreamRes = await fetch(env.PLUNK_API_URL + '/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(normalisedBody),
  })

  return new Response(upstreamRes.body, {
    status: upstreamRes.status,
    headers: {
      'Content-Type':
        upstreamRes.headers.get('Content-Type') ?? 'application/json',
    },
  })
}
