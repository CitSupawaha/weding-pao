"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Heart,
  MapPin,
  Gift,
  PauseCircle,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FloatingHearts } from "@/components/floating-hearts";
import { GradientHearts } from "@/components/gradient-hearts";
import { SparkleHearts } from "@/components/sparkle-hearts";
import { FaHeart } from "react-icons/fa";

export default function WeddingLandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  // Animation refs
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [detailsRef, detailsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [rsvpRef, rsvpInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Setup audio element
  useEffect(() => {
    if (audioRef.current) {
      // Set up event listeners for the audio element
      const audio = audioRef.current;

      const handleCanPlay = () => {
        setAudioReady(true);
      };

      audio.addEventListener("canplaythrough", handleCanPlay);

      // Clean up event listeners
      return () => {
        audio.removeEventListener("canplaythrough", handleCanPlay);
      };
    }
  }, []);

  // Toggle music play/pause
  const toggleMusic = async () => {
    if (!audioRef.current || !audioReady) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Use the play() Promise API with proper error handling
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Playback error:", error);
              // If autoplay is prevented, we should keep isPlaying as false
              setIsPlaying(false);
            });
        }
      }
    } catch (error) {
      console.error("Audio control error:", error);
      setIsPlaying(false);
    }
  };

  // Calculate countdown
  useEffect(() => {
    const weddingDate = new Date("May 25, 2025 07:29:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const heartbeat = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] overflow-x-hidden">
      {/* Floating Hearts Animation */}
      <FloatingHearts />
      <GradientHearts />
      <SparkleHearts />

      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/rak-puk-anchalee.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-rose-50 transition-all duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        disabled={!audioReady}
      >
        {isPlaying ? (
          <PauseCircle className="h-8 w-8 text-rose-600" />
        ) : (
          <div className="relative">
            <PlayCircle className="h-8 w-8 text-rose-600" />
            <motion.div
              animate={heartbeat}
              className="absolute inset-0 bg-rose-200 rounded-full -z-10"
              style={{ opacity: 0.5 }}
            ></motion.div>
          </div>
        )}
      </button>

      {/* Header/Navigation */}
      {/* <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-rose-600">
            <span className="flex items-center gap-2">
              <motion.div animate={heartbeat}>
                <Heart className="h-5 w-5 fill-rose-600 text-rose-600" />
              </motion.div>
              <span>มาร์ช & เปา</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-rose-600 transition">
              หน้าแรก
            </Link>
            <Link href="#story" className="text-gray-700 hover:text-rose-600 transition">
              เรื่องราวของเรา
            </Link>
            <Link href="#details" className="text-gray-700 hover:text-rose-600 transition">
              รายละเอียดงาน
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-rose-600 transition">
              แกลเลอรี่
            </Link>
            <Link href="#rsvp" className="text-gray-700 hover:text-rose-600 transition">
              ตอบรับเข้าร่วมงาน
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex border-rose-600 text-rose-600 hover:bg-rose-50">
            ตอบรับเข้าร่วมงาน
          </Button>
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header> */}

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Prewedding-196.jpg?height=1080&width=1920"
            alt="Wedding couple"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className="absolute inset-0 bg-black/30 z-0"
        ></motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 0.5,
              ease: "easeOut",
            },
          }}
          className="relative z-10 text-center text-white px-10 max-w-4xl mx-auto -mt-[26rem]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.8 },
            }}
            className="font-serif text-xl md:text-5xl mb-8 text-gray-100"
          >
            YOU ARE INVITED TO OUR WEDDING CEREMONY AND TO THE CELEBRATION OF
            OUR MARRIAGE .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 1.2 },
            }}
            className="text-xl md:text-xl mb-8 font-light text-rose-100"
          >
            25.05.2025
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 1.6 },
            }}
            className="text-xl md:text-xl font-serif mb-8 flex items-center justify-center text-gray-100"
          >
            P A O <FaHeart className="mx-2 text-rose-100" /> M A R C H .
          </motion.div>
          
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-rose-100/20">
        <div className="container mx-auto px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="font-sans text-2xl md:text-4xl mb-12 text-rose-400"
            >
              นับถอยหลังสู่วันพิเศษของเรา
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                
                }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-rose-200">
                  {countdown.days}
                  </span>
                </div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  วัน
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                
                }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24  bg-white  rounded-lg shadow-md flex items-center justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-rose-200">
                  {countdown.hours}
                  </span>
                </div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  ชั่วโมง
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                
                }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-rose-200">
                  {countdown.minutes}
                  </span>
                </div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  นาที
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                
                }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white  rounded-lg shadow-md flex items-center justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-rose-200">
                  {countdown.seconds}
                  </span>
                </div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                 วินาที
                </span>
              </motion.div>
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" ref={storyRef} className="py-20 bg-[#faf7f5]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl md:text-4xl mb-12 text-center text-rose-400"
          >
            เรื่องราวของเรา
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Couple"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-sans text-2xl mb-4 text-gray-800">เจ้าสาว</h3>
              <p className="text-gray-600 mb-6">
                นางสาวเพียงอัมพร ปิ่นทอง (มาร์ช)
                <br />
                บุตรีของ พ.ต.อ.อาญ ปิ่นทอง และ นางประนาถรา ปิ่นทอง
              </p>
              <h3 className="font-sans text-2xl mb-4 text-gray-800">
                เจ้าบ่าว
              </h3>
              <p className="text-gray-600 mb-6">
                นายกวินวีร์ โคตรเพชร (เปา)
                <br />
                บุตรของ นายสมบท โคตรเพชร และ นางบุลภา โคตรเพชร
              </p>
              <p className="text-gray-600 italic">
                "มีความยินดีขอเรียนเชิญท่านเพื่อเป็นเกียรติในงานเลี้ยงฉลองมงคลสมรส
                ระหว่าง นางสาวเพียงอัมพร ปิ่นทอง (มาร์ช) และ นายกวินวีร์
                โคตรเพชร (เปา)"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" ref={detailsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl md:text-4xl mb-12 text-center text-gray-800"
          >
            รายละเอียดงาน
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[#faf7f5] p-8 rounded-lg text-center shadow-md"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Calendar className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-sans text-2xl mb-4 text-gray-800">
                วันและเวลา
              </h3>
              <p className="text-gray-600 mb-2">
                วันอาทิตย์ที่ 25 พฤษภาคม 2568
              </p>
              <p className="text-gray-600 mb-2">(ตรงกับแรม 14 ค่ำ เดือน 6)</p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-rose-50 p-2 rounded">
                  <p className="text-rose-600 font-bold">07:29 น.</p>
                  <p className="text-gray-600 text-sm">พิธีหมั้น</p>
                </div>
                <div className="bg-rose-50 p-2 rounded">
                  <p className="text-rose-600 font-bold">08:29 น.</p>
                  <p className="text-gray-600 text-sm">พิธีบ่าวสาว</p>
                </div>
                <div className="bg-rose-50 p-2 rounded">
                  <p className="text-rose-600 font-bold">09:29 น.</p>
                  <p className="text-gray-600 text-sm">
                    พิธีหลั่งน้ำพระพุทธมนต์
                  </p>
                </div>
                <div className="bg-rose-50 p-2 rounded">
                  <p className="text-rose-600 font-bold">11:30 น.</p>
                  <p className="text-gray-600 text-sm">งานเลี้ยงฉลองมงคลสมรส</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[#faf7f5] p-8 rounded-lg text-center shadow-md"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-sans text-2xl mb-4 text-gray-800">สถานที่</h3>
              <p className="text-gray-600 mb-2">
                หอประชุมโรงเรียนสามบุรีวิทยาคาร
              </p>
              <p className="text-gray-600 mb-4">
                ต.สามบุก อ.สามบุก จ.สุพรรณบุรี
              </p>
              <div className="flex items-center justify-center gap-2 text-rose-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span>ดูแผนที่</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[#faf7f5] p-8 rounded-lg text-center md:col-span-2 lg:col-span-1 shadow-md"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Gift className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-sans text-2xl mb-4 text-gray-800">
                การแต่งกาย
              </h3>
              <p className="text-gray-600 mb-4">
                ขอเชิญแต่งกายด้วยโทนสีตามที่กำหนด
                เพื่อเป็นส่วนหนึ่งในความทรงจำอันสวยงาม
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-rose-600 font-medium mb-2">สีเจ้าสาว</p>
                  <div className="flex justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-200"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-300"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-400"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-600"></div>
                  </div>
                </div>
                <div>
                  <p className="text-blue-600 font-medium mb-2">สีเจ้าบ่าว</p>
                  <div className="flex justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-300"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="py-20 bg-[#faf7f5]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl md:text-4xl mb-12 text-center text-gray-800"
          >
            แกลเลอรี่
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  galleryInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={`/images/weding1.jpg?height=400&width=400&text=Photo+${item}`}
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-10"
          >
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              ดูรูปเพิ่มเติม
            </Button>
          </motion.div> */}
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" ref={rsvpRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={rsvpInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-[#faf7f5] p-8 md:p-12 rounded-lg shadow-lg"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={rsvpInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-3xl md:text-4xl mb-8 text-center text-gray-800"
            >
              ตอบรับเข้าร่วมงาน
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={rsvpInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-gray-600 mb-8"
            >
              กรุณาตอบรับการเข้าร่วมงานภายในวันที่ 25 เมษายน 2568
            </motion.p>
            <motion.form
              initial={{ opacity: 0 }}
              animate={rsvpInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ท่านจะเข้าร่วมงานหรือไม่
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      className="h-4 w-4 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="ml-2 text-gray-700">ยินดีเข้าร่วม</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      className="h-4 w-4 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="ml-2 text-gray-700">
                      ขอปฏิเสธด้วยความเสียใจ
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  จำนวนผู้ร่วมงาน
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ข้อความถึงคู่บ่าวสาว (ไม่บังคับ)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                ></textarea>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} className="text-center">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-2 text-lg">
                  ส่งคำตอบ
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl mb-6"
          >
            เพียงอัมพร & กวินวีร์
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            25 พฤษภาคม 2568 • สุพรรณบุรี
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a href="#" className="hover:text-rose-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="hover:text-rose-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-400"
          >
            ด้วยความรัก © {new Date().getFullYear()}
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
