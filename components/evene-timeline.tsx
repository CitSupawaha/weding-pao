"use client";

import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

export function EventTimeline() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-5xl font-serif text-rose-400 mb-16"
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
              <p className="uppercase tracking-wider text-xl text-gray-600">
                พิธีสงฆ์
              </p>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-10">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
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
            <div className="w-1/2 pr-10 text-right">
              <svg
                className="w-10 h-10 ml-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M7 2v4h10V2M1 9h22M12 12v10M8 22h8" />
              </svg>
            </div>
            <div className="absolute left-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="w-1/2 pl-10">
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
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
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
              <svg
                className="w-10 h-10 ml-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3 5h18M3 19h18M4 5v14M20 5v14M8 9h8M8 13h5" />
              </svg>
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
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-5xl font-serif text-gray-800 mt-12 mb-6"
        >
          # LOCATION
        </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        className=" rounded-lg text-center mt-6"
      >
        {/* <div className="inline-flex items-center justify-center w-16 h-16  rounded-full">
          <MapPin className="h-8 w-8 text-rose-400" />
        </div> */}

        {/* <h3 className="font-sans text-2xl  text-gray-800">สถานที่</h3> */}
        <p className="text-gray-600 text-xl">
          หอประชุมโรงเรียนสามชุกรัตนโภคาราม
        </p>
        <p className="text-gray-600 text-xl mb-6">
          ต.สามชุก อ.สามชุก จ.สุพรรณบุรี
        </p>

        {/* Google Maps Embed */}
        <div className="w-full h-[400px]  overflow-hidden shadow  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.3336287480047!2d100.09106140000002!3d14.750224200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2263ab4bcded3%3A0x6f4925e16baed9f8!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Liq4Liy4Lih4LiK4Li44LiB4Lij4Lix4LiV4LiZ4LmC4Lig4LiE4Liy4Lij4Liy4Lih!5e0!3m2!1sth!2sth!4v1745997599102!5m2!1sth!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
