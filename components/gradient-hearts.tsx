"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type GradientHeart = {
  id: string
  x: number
  size: number
  delay: number
  duration: number
  gradient: string
  rotate: number
  scale: number
}

export function GradientHearts() {
  const [hearts, setHearts] = useState<GradientHeart[]>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: GradientHeart[] = []
      const gradients = [
        // "from-pink-300 to-pink-500",
        // "from-pink-400 to-rose-600",
         "from-rose-2x00 to-rose-400",
        // "from-red-300 to-red-500",
        // "from-blue-300 to-blue-500",
        // "from-purple-300 to-purple-500",
        // "from-pink-300 to-purple-500",
        // "from-blue-300 to-purple-500",
        // "from-rose-300 to-blue-400",
      ]

      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i.toString(),
          x: Math.random() * 100,
          size: 30 + Math.random() * 40,
          delay: Math.random() * 8,
          duration: 15 + Math.random() * 20,
          gradient: gradients[Math.floor(Math.random() * gradients.length)],
          rotate: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
        })
      }

      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: "-100px",
          }}
          initial={{ y: 0, opacity: 0, rotate: heart.rotate, scale: heart.scale }}
          animate={{
            y: [0, -window.innerHeight - 200],
            opacity: [0, 0.7, 0],
            rotate: heart.rotate + 360,
            scale: [heart.scale, heart.scale * 1.2, heart.scale],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 5,
            ease: "easeOut",
          }}
        >
          <div
            className={`bg-gradient-to-b ${heart.gradient} w-full h-full`}
            style={{
              width: heart.size,
              height: heart.size,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /%3E%3C/svg%3E")`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
