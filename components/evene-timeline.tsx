"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function EventTimeline() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-serif text-rose-400 mb-10"
      >
        WEDDING TIMELINE
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-md md:text-5xl font-eng text-black mb-4"
      >

20 MAY 2025 
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
              <p className="uppercase tracking-wider text-xl text-gray-600">
                พิธีสงฆ์
              </p>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <Image
                src="/timeline_1.svg"
                alt="Timeline"
                width={30}
                height={30}
              />
            </div>
          </motion.div>

          {/* พิธีแห่ขันหมาก (Khan Maak ceremony) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-10 flex justify-end">
              <Image
                src="/timeline_2.svg"
                alt="Timeline"
                width={30}
                height={30}
              />
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <p className="text-md font-eng text-gray-800">08:29 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">
                พิธีแห่ขันหมาก
              </p>
            </div>
          </motion.div>

          {/* พิธีหลั่งน้ำพระพุทธมนต์ (Water blessing ceremony) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-10 text-right">
              <p className="text-md font-eng text-gray-800">09:29 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">
                พิธีหลั่งน้ำพระพุทธมนต์
              </p>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
            <Image
                src="/timeline_6.svg"
                alt="Timeline"
                width={30}
                height={30}
              />
            </div>
          </motion.div>

          {/* รับประทานอาหาร (Reception) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center"
          >
            <div className="w-1/2 pr-8 flex justify-end">
            <Image
                src="/timeline_4.svg"
                alt="Timeline"
                width={30}
                height={30}
              />
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-8">
              <p className="text-md font-eng text-gray-800">11:30 AM</p>
              <p className="uppercase tracking-wider text-xl text-gray-600">
                รับประทานอาหาร
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-5xl font-serif text-gray-800 mt-12 mb-6"
      >
        # THEME
      </motion.h2>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-rose-600 font-medium mb-2 text-xl text-center">
            สีเจ้าสาว
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-200"></div>
            <div className="w-8 h-8 rounded-full bg-pink-300"></div>
            <div className="w-8 h-8 rounded-full bg-pink-400"></div>
            <div className="w-8 h-8 rounded-full bg-pink-500"></div>
            <div className="w-8 h-8 rounded-full bg-pink-600"></div>
          </div>
        </div>
        <div>
          <p className="text-blue-600 font-medium mb-2 text-xl text-center">
            สีเจ้าบ่าว
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-200"></div>
            <div className="w-8 h-8 rounded-full bg-blue-300"></div>
            <div className="w-8 h-8 rounded-full bg-blue-400"></div>
            <div className="w-8 h-8 rounded-full bg-blue-500"></div>
            <div className="w-8 h-8 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
