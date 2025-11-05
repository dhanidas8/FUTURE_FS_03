"use client";
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

export default async function Home() {
  const products = [
    { id: 1, title: 'Motion Runner', price: '₹12,999', image: '/nike-shoes-for-men-price.png' },
    { id: 2, title: 'Adaptive Jacket', price: '₹7,499', image: '/nike2.jpg' },
    { id: 3, title: 'Trail Shoes', price: '₹9,299', image: '/nike3.jpg' }
  ]

  return (
    <div>
      <Hero title="Move with Intelligence" subtitle="AI-designed gear for every motion" cta="Shop Now" />
      <section className="max-w-7xl mx-auto px-6 py-12" id="shop">
        <h2 className="text-2xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
