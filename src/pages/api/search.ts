import type { APIContext } from 'astro'
import { getModels } from '../../lib/pocketbase'

export const prerender = false

export async function GET(context: APIContext) {
  const searchStrings = []

  const searchParams = context.url.searchParams
  const name = searchParams.get('name')
  const furnace = searchParams.get('furnace')

  if (name) {
    searchStrings.push(`name ?~ "${name}"`)
  }

  if (furnace) {
    searchStrings.push(`furnaces?="${furnace}"`)
  }

  const models = await getModels(searchStrings.join('&&'))

  if (!models) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    })
  }

  return new Response(
    JSON.stringify(models), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  }
  )
}
