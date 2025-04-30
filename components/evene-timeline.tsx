"use client"

import { motion } from "framer-motion"

export function EventTimeline() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-16"
      >
        WEDDING TIMELINE
      </motion.h2>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

        {/* Timeline events */}
        <div className="space-y-12 relative">
          {/* พิธีสงฆ์ (Monk ceremony) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-8 text-right">
              <p className="text-md font-eng text-gray-800">07:29 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">พิธีสงฆ์</p>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.4 2.667 8.333 8 11.8.533.267 1.2.267 1.733 0C15.333 18.333 20 14.4 20 10zm-10 4c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              </svg>
            </div>
          </motion.div>

          {/* พิธีแห่ขันหมาก (Khan Maak ceremony) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-8 text-right">
              <svg className="w-12 h-12 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M7 2v4h10V2M1 9h22M12 12v10M8 22h8" />
              </svg>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <p className="text-md font-eng text-gray-800">08:29 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">พิธีแห่ขันหมาก</p>
            </div>
          </motion.div>

          {/* พิธีหลั่งน้ำพระพุทธมนต์ (Water blessing ceremony) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-8 text-right">
              <p className="text-md font-eng text-gray-800">09:29 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">พิธีหลั่งน้ำพระพุทธมนต์</p>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </motion.div>

          {/* รับประทานอาหาร (Reception) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-8 text-right">
              <svg className="w-12 h-12 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M3 5h18M3 19h18M4 5v14M20 5v14M8 9h8M8 13h5" />
              </svg>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <p className="text-md font-eng text-gray-800">11:30 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">รับประทานอาหาร</p>
            </div>
          </motion.div>
        </div>
      </div>

     
    </div>
  )
}
