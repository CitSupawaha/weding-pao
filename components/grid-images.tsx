'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
    "/images/Prewedding-13.jpg?height=1000&width=800&text=Wedding+Photo+1",
    "/images/Prewedding-75.jpg?height=1000&width=800&text=Wedding+Photo+3",
    "/images/Prewedding-105.jpg?height=1000&width=800&text=Wedding+Photo+4",
    "/images/Prewedding-255.jpg?height=1000&width=800&text=Wedding+Photo+2",
    "/images/Prewedding-120.jpg?height=1000&width=800&text=Wedding+Photo+3",
    "/images/Prewedding-229.jpg?height=1000&width=800&text=Wedding+Photo+1",
    "/images/Prewedding-275.jpg?height=1000&width=800&text=Wedding+Photo+2",
    "/images/Prewedding-344.jpg?height=1000&width=800&text=Wedding+Photo+4",
    "/images/Prewedding-290.jpg?height=1000&width=800&text=Wedding+Photo+1",

  ]

export default function PreWeddingGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-3 gap-2 max-w-3xl mx-auto mb-2"
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
