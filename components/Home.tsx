"use client";
import { Calendar } from "../components/calendar";
import { motion } from "framer-motion";
import { anim } from "@/data/data";
import { Program } from "@/components/Program";
import { TimeBox } from "@/components/TimeBox";
import { Footer } from "./footer";

export default function Home() {
  return (
    <div className="max-w-xl m-auto h-screen">
      {/* 1 img */}
      <div
        className=" min-h-screen gap-50 justify-end max-w-xl m-auto bg-cover font-bold  bg-no-repeat  bg-center  text-[#ffffff] flex flex-col items-center text-center p-8 py-20 "
        style={{
          backgroundImage: "url('/first.jpg')",
        }}
      >
        <div>
          <h1 className=" text-shadow-2xs  p-2 rounded-2xl text-4xl md:text-7xl">
            Լեա <span className="mx-2">և</span> Լեո
          </h1>
          <p>Գեղեցիկ օր և մենք կդառնանք ամուսիններ</p>
        </div>
        <TimeBox />
      </div>

      <div className=" flex flex-col gap-5 text-center text-[#1b1b1b]  px-6 py-10">
        <motion.h2 {...anim} className=" font-bold text-lg">
          Սիրելի՛ ընկերներ և բարեկամներ
        </motion.h2>
        <motion.p {...anim} className=" text-base  opacity-90">
          Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան
        </motion.p>
      </div>
      <Program />

      <Calendar year={2026} month={6} highlightDay={22} />

      {/* text info */}
      <section className="text-center bg-white text-[#1b1b1b]  px-2 py-8">
        <motion.h2 {...anim} className="my-4 font-bold text-base">
          Խնդրում ենք նախապես տեղեկացնել Ձեր մասնակցության մասին մինչև Մայիսի
          15-ը
        </motion.h2>
      </section>

      <Footer />
    </div>
  );
}
