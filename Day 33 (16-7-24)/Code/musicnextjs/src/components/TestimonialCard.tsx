"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    name: "Emma Johnson",
    title: "Piano Enthusiast",
    quote:
      "Joining Music Masters Coaching Classes has been a game-changer for my piano skills. The personalized attention and expert guidance have truly elevated my playing to the next level!",
  },
  {
    name: "David Smith",
    title: "Guitar Enthusiast",
    quote:
      "I am amazed at how much I've learned in such a short time at Music Masters Coaching Classes. The instructors are passionate and dedicated, and their teaching methods are both effective and enjoyable.",
  },
  {
    name: "Sophia Brown",
    title: "Vocalist",
    quote:
      "Music Masters Coaching Classes has been instrumental in refining my vocal technique. The supportive environment and constructive feedback have boosted my confidence and improved my performance.",
  },
  {
    name: "Michael Clark",
    title: "Drummer",
    quote:
      "As a drummer, finding the right coaching is crucial. Music Masters Coaching Classes not only improved my technical skills but also helped me understand rhythm and dynamics better than ever before.",
  },
];

function TestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
