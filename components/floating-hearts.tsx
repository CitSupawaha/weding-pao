// FloatingHearts.tsx
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Heart = {
  id: string
  x: number
  size: number
  delay: number
  duration: number
  color: string
  rotate: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = []
      const colors = [
        //"text-pink-300", "text-pink-400", "text-pink-500",
         "text-rose-100", "text-rose-200", "text-gray-300",
        // "text-red-300", "text-red-400", "text-blue-300",
        // "text-blue-400", "text-purple-300", "text-purple-400",
      ]

      for (let i = 0; i < 10; i++) {
        newHearts.push({
          id: i.toString(),
          x: Math.random() * 100,
          size: 10 + Math.random() * 30,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 15,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotate: Math.random() * 360,
        })
      }

      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${heart.color} fill-current`}
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            width: heart.size,
            height: heart.size,
          }}
          initial={{ y: 0, opacity: 0, rotate: heart.rotate }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.8, 0],
            rotate: heart.rotate + 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
            ease: "easeOut",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                     2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                     C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42
                     22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}