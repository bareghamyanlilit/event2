import { anim } from "@/data/data";
import { useEffect, useState } from "react";

const weddingDate: any = new Date("2026-06-17T12:00:00");

export function TimeBox() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          finished: false,
        });
      } else {
        setTimeLeft((prev) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className=" flex flex-col gap-5 text-center  text-[#ffffff]  px-0 ">
      <h2 className=" font-bold text-lg">
        Միջոցառմանը մնաց
      </h2>
      <div className="">
        {timeLeft.finished ? (
          <div className="text-white text-2xl font-semibold px-4 bg-red-500 rounded-xl shadow">
            Հարսանիքն արդեն սկսվել է 🎉
          </div>
        ) : (
          <div className="flex justify-center text-4xl font-extralight ">
            <TimeBoxItem label="Օր" value={timeLeft.days} /> |
            <TimeBoxItem label="Ժամ" value={timeLeft.hours} /> |
            <TimeBoxItem label="Րոպե" value={timeLeft.minutes} /> |
            <TimeBoxItem label="Վայրկյան" value={timeLeft.seconds} />
          </div>
        )}
      </div>
    </section>
  );
}

const TimeBoxItem = ({ label, value }) => (
  <div className="px-2 text-center ">
    <h2>{value}</h2>
  </div>
);
