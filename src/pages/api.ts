import type { APIRoute } from "astro"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData()

  return new Response(JSON.stringify(Object.fromEntries(formData.entries())))
}

export const PUT: APIRoute = async ({ request }) => {
  const formData = await request.formData()

  return new Response(JSON.stringify(Object.fromEntries(formData.entries())))
}

export const ALL: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    }),
    { status: 405 }
  )
}
