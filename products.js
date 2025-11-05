import axios from 'axios'

export default async function handler(req, res) {
  try {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
    const url = `${STRAPI_URL}/api/products?populate=images`
    const { data } = await axios.get(url)
    const items = data.data.map(item => ({ id: item.id, title: item.attributes.title, price: item.attributes.price, image: item.attributes.images?.data?.[0]?.attributes?.url }))
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')
    res.status(200).json(items)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'failed' })
  }
}
