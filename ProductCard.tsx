"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductCard({ product }: any) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="card rounded-xl p-4">
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-white/5">
        <Image src={product.image} alt={product.title} width={800} height={600} className="object-cover"/>
      </div>
      <h3 className="text-lg font-medium">{product.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{product.price}</p>
      <div className="mt-4">
        <button className="w-full rounded-full py-2 btn-volt font-semibold">Add to cart</button>
      </div>
    </motion.div>
  )
}
