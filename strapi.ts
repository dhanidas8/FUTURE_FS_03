export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function fetchProducts() {
  const res = await fetch(`${STRAPI_URL}/api/products?populate=images`)
  if (!res.ok) throw new Error('Failed to fetch')
  const json = await res.json()
  return json.data.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    price: item.attributes.price,
    image: item.attributes.images?.data?.[0]?.attributes?.url || '/placeholder-ai-hero.jpg'
  }))
}
