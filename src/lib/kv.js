import { getRequestContext } from '@cloudflare/next-on-pages'

export default async function kv(key, getValue) {
  const requestContext = getRequestContext()
  const kv = requestContext.env.CF_KV_DATA_CACHE
  const cachedValue = await kv.get(key)
  if (cachedValue) {
    return cachedValue
  }
  const value = await getValue()
  await kv.put(key, value)
  
  return value
}
