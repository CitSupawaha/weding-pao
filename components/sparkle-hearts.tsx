"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type SparkleHeart = {
  id: string
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: string
}

export function SparkleHearts() {
  const [sparkles, setSparkles] = useState<SparkleHeart[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: SparkleHeart[] = []
      const colors = [
     //    "bg-pink-300", "bg-pink-400", "bg-rose-300",
         "bg-rose-200", "bg-rose-100", "bg-rose-50",
        // "bg-purple-300", "bg-yellow-200", "bg-white",
      ]

      for (let i = 0; i < 10; i++) {
        newSparkles.push({
          id: i.toString(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 2 + Math.random() * 4,
          delay: Math.random() * 10,
          duration: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className={`absolute rounded-full ${sparkle.color}`}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
