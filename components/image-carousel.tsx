"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Images array - replace with your actual images
  const images = [
    "/images/Prewedding-243.jpg?height=1200&width=800&text=Wedding+Photo+1",
    "/images/Prewedding-72.jpg?height=1200&width=800&text=Wedding+Photo+2",
    "/images/Prewedding-232.jpg?height=1200&width=800&text=Wedding+Photo+3",
    "/images/Prewedding-279.jpg?height=1200&width=800&text=Wedding+Photo+4",
    "/images/Prewedding-283.jpg?height=1200&width=800&text=Wedding+Photo+5",
    "/images/Prewedding-306.jpg?height=1200&width=800&text=Wedding+Photo+6",
    "/images/Prewedding-344.jpg?height=1200&width=800&text=Wedding+Photo+7",
  ]

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection
        if (nextIndex < 0) nextIndex = images.length - 1
        if (nextIndex >= images.length) nextIndex = 0
        return nextIndex
      })
    },
    [images.length],
  )

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        paginate(1)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused, paginate])

  return (
    <div
      className="relative overflow-hidden  mx-auto max-w-4xl aspect-[16/9] h-[65vh] w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Wedding gallery image ${currentIndex + 1}`}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {/* <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 z-10 transition-all duration-200"
        onClick={() => paginate(-1)}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 z-10 transition-all duration-200"
        onClick={() => paginate(1)}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button> */}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
