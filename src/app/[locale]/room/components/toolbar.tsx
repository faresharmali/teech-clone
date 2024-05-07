"use client";
import Image from "next/image";
import React, { Component } from "react";
import { Tooltip } from "@chakra-ui/react";
import { cn } from "@/lib/utils";

interface ISectionItem {
  title: string;
  img: string;
  isActive?: boolean;
}
const section1: ISectionItem[] = [
  {
    title: "Videos",
    img: "https://app.teech.de/img/room/btn_videos.svg",
  },
  {
    title: "Whiteboard",
    img: "https://app.teech.de/img/room/btn_whiteboard.svg",
    isActive: true,
  },
  {
    title: "Editor",
    img: "https://app.teech.de/img/room/btn_editor.svg",
  },
  {
    title: "Screen sharing",
    img: "https://app.teech.de/img/room/screen-mirroring-roll-up-full-screen.svg",
  },
];
const section2: ISectionItem[] = [
  {
    title: "Poll",
    img: "https://app.teech.de/img/room/chart-bar-bargraph.svg",
  },
  {
    title: "Attachments",
    img: "https://app.teech.de/img/room/school,bag.white.svg",
  },
  {
    title: "Chat",
    img: "https://app.teech.de/img/room/messages,chat.6.white.svg",
  },
  {
    title: "People",
    img: "https://app.teech.de/img/room/User,Profile.1.svg",
  },
];

const Toolbar = () => {
  return (
    <div className="w-[5rem] h-fit bg-[#191D21] rounded-md flex flex-col items-center gap-4 py-4">
      {section1.map((section: ISectionItem) => (
        <Tooltip key={section.title} label={section.title} placement="right">
          <div className={cn('cursor-pointer rounded-md p-2',{
            'bg-[#20C6AE]': section.isActive,
          })}>
            <Image alt="cam" src={section.img} width={30} height={30} />
          </div>
        </Tooltip>
      ))}
      <div className="h-[1px] w-[80%] bg-[#2C3138]" />
      {section2.map((section: ISectionItem) => (
        <Tooltip key={section.title} label={section.title} placement="right">
          <div className="cursor-pointer py-2">
            <Image alt="cam" src={section.img} width={30} height={30} />
          </div>
        </Tooltip>
      ))}
      <div className="h-[1px] w-[80%] bg-[#2C3138]" />
      <Tooltip label="Close room" placement="right">
        <div className="cursor-pointer py-2">
          <Image
            alt="cam"
            src={"https://app.teech.de/img/room/Door Handle, Lock.svg"}
            width={30}
            height={30}
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default Toolbar;
