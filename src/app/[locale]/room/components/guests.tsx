"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Guest1 from "@/assets/images/guests/guest1.png";
import Guest2 from "@/assets/images/guests/guest2.png";
import Guest3 from "@/assets/images/guests/guest3.png";
import Guest4 from "@/assets/images/guests/guest4.png";
import Guest5 from "@/assets/images/guests/guest5.png";

interface IGuestCard {
  name: string;
  img: StaticImageData;
}
const guestList: IGuestCard[] = [
  {
    name: "Alex",
    img: Guest1,
  },
  {
    name: "Martha",
    img: Guest2,
  },
  {
    name: "Anna",
    img: Guest3,
  },
  {
    name: "Leroy",
    img: Guest4,
  },
];

const Guests = () => {
  return (
    <div className="w-[15rem] h-full bg-[#191D21] rounded-md flex flex-col items-center justify-between gap-4 py-4">
      <div className="flex flex-col items-center w-full">
        {guestList.map((section) => (
          <GuestCard key={section.name} name={section.name} img={section.img} />
        ))}
      </div>
      <GuestCard name={"Me"} img={Guest5} />
    </div>
  );
};

export default Guests;

const GuestCard = ({ name, img }: IGuestCard) => {
  return (
    <div className="flex items-center gap-2 h-[120px] border border-1 border-gray-500 bg-blue-500 relative w-[90%] rounded-md overflow-hidden">
      <Image alt="cam" src={img} objectFit="cover" fill />
      <div className="absolute bottom-1 left-1 bg-[#2C3138] rounded-md opacity-90">
        <h2 className="text-white p-1 text-sm ">{name}</h2>
      </div>
    </div>
  );
};
