'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
    "/images/Prewedding-243.jpg?height=1000&width=800&text=Wedding+Photo+1",
    "/images/Prewedding-72.jpg?height=1000&width=800&text=Wedding+Photo+2",
    "/images/Prewedding-232.jpg?height=1000&width=800&text=Wedding+Photo+3",
    "/images/Prewedding-279.jpg?height=1000&width=800&text=Wedding+Photo+4",
  ]

export default function PreWeddingGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 gap-2 max-w-3xl mx-auto mb-2"
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden  shadow"
        >
          <Image
            src={src}
            alt={`prewedding-${index}`}
            width={800}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
