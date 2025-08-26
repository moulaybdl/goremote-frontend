"use client";

import Image from "next/image";
import CentralNode from "./svgs/central_node.svg";
import Node from "./svgs/node.svg";
import LandingPageBackground from "./svgs/landingpage_background.svg";
import { useEffect, useRef, useState } from "react";
import Connector from "@/components/landingPage/connector";

import VertSeperator from "@/public/vert-seperator.svg";
import FeatureWorkspaceCard from "./cards/workspaceCard";
import DreamPortfolioCard from "./cards/dreamPortfolio";
import MatchingSystemCard from "./cards/matchingSystem";
import AssistantCard from "./cards/assistantCard";

import ctaBG from "@/app/(landing)/landing-page/svgs/cta.svg";
import rectBG from "@/app/(landing)/landing-page/svgs/rectBackground.svg";

import InputField1 from "@/components/input/inputField1";
import Button2 from "@/components/buttons/button2";
import { Button } from "@/components/ui/button";
import Button3 from "@/components/buttons/buttons3";
import ConnectorAnimated from "./svgs/ConnectorAnimated";

function randomIndex<T>(arr: T[]): number {
  if (arr.length === 0) throw new Error("Array is empty");
  return Math.floor(Math.random() * arr.length);
}

export default function LandingPage() {
  const central_node = useRef<HTMLImageElement>(null);
  const node_l_1 = useRef<HTMLImageElement>(null);
  const node_l_2 = useRef<HTMLImageElement>(null);
  const node_l_3 = useRef<HTMLImageElement>(null);
  const node_l_4 = useRef<HTMLImageElement>(null);
  const node_r_1 = useRef<HTMLImageElement>(null);
  const node_r_2 = useRef<HTMLImageElement>(null);
  const node_r_3 = useRef<HTMLImageElement>(null);
  const node_r_4 = useRef<HTMLImageElement>(null);

  const left = [
    {
      element: node_l_1,
      radius: 50,
      percentage: 0.6,
      y_margin: -40,
      color: "#FF1A00",
    },
    {
      element: node_l_2,
      radius: 50,
      percentage: 0.3,
      y_margin: -5,
      color: "#FF1A00",
    },
    {
      element: node_l_3,
      radius: 50,
      percentage: 0.1,
      y_margin: 40,
      color: "#FF1A00",
    },
    {
      element: node_l_4,
      radius: 50,
      percentage: 0.4,
      y_margin: 60,
      color: "#FF1A00",
    },
  ];

  const right = [
    {
      element: node_r_1,
      radius: 50,
      percentage: 0.4,
      y_margin: 60,
      color: "#41D1FF",
    },
    {
      element: node_r_2,
      radius: 50,
      percentage: 0.4,
      y_margin: 30,
      color: "#41D1FF",
    },
    {
      element: node_r_3,
      radius: 50,
      percentage: 0.2,
      y_margin: -10,
      color: "#41D1FF",
    },
    {
      element: node_r_4,
      radius: 50,
      percentage: 0.6,
      y_margin: -40,
      color: "#41D1FF",
    },
  ];

  const all = [left, right];

  const selectedSide = useRef(0);
  const [currentElement, setCurrentElement] = useState(<></>);

  useEffect(() => {
    if (
      central_node.current === null ||
      node_l_1.current === null ||
      node_l_2.current === null ||
      node_l_3.current === null ||
      node_l_4.current === null ||
      node_r_1.current === null ||
      node_r_2.current === null ||
      node_r_3.current === null ||
      node_r_4.current === null
    ) {
      return;
    } else {
    }
    setInterval(() => {
      const index = randomIndex(all[selectedSide.current % 2]);
      selectedSide.current += 1;
      setCurrentElement(
        <ConnectorAnimated
          startRef={all[selectedSide.current % 2][index].element}
          endRef={central_node}
          radius={all[selectedSide.current % 2][index].radius}
          percentage={all[selectedSide.current % 2][index].percentage}
          y_margin={all[selectedSide.current % 2][index].y_margin}
          color={all[selectedSide.current % 2][index].color}
        />
      );
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-16 w-full min-h-screen overflow-x-hidden relative">
      {/* Slogan*/}
      <div className="flex flex-col">
        {/* hero text */}
        <div className="flex flex-col justify-center items-center gap-5 z-1000 mt-44 ">
          <span className="text-6xl  font-medium  text-center text-primary-500">
            SLOGAN GOES HERE
          </span>
          <span className="font-normal text-3xl text-center text-neutralt-50">
            SLOGAN GOES HERE
          </span>
          <span className="font-normal text-xl text-center text-neutral-200  w-full max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
          <div className="">
            <Button3 title="Get Started" radius="rounded-full" />
          </div>
        </div>
        {/* hero section */}
        <div className="flex justify-center items-center w-full relative overflow-x-hidden overflow-y-hidden">
          <div className="landing-page-hero-circle-gradient z-50 w-[115%] h-[115%] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          {/* node */}
          <div className="w-full h-screen nodes-container relative z-20 ">
            <div className="node-center  place-self-center  relative">
              <Image
                src={CentralNode}
                className="elevation-3"
                alt={""}
                ref={central_node}
              />
            </div>
            <div className="node-l-2 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[-20%] left-[5%]"
                ref={node_l_1}
              />
            </div>
            <div className="node-l-3 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[20%] left-[40%]"
                ref={node_l_2}
              />
            </div>
            <div className="node-l-4 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[-55%] left-[15%]"
                ref={node_l_3}
              />
            </div>
            <div className="node-l-5 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute top-0 left-[50%]"
                ref={node_l_4}
              />
            </div>
            <div className="node-r-6 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute top-0 right-[40%]"
                ref={node_r_1}
              />
            </div>
            <div className="node-r-7 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute top-[20%] right-[-10%]"
                ref={node_r_2}
              />
            </div>
            <div className="node-r-8 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[20%] right-[37%]"
                ref={node_r_3}
              />
            </div>
            <div className="node-r-9 relative">
              <Image
                src={Node}
                alt={""}
                className="absolute top-[10%] right-[10%]"
                ref={node_r_4}
              />
            </div>
          </div>
          {/* -bacgkround */}
          <div className="w-full aspect-square flex justify-center items-center absolute rounded-full">
            <Image
              src={LandingPageBackground}
              className="w-full h-full bg-cover bg-center"
              alt={""}
            />
          </div>
        </div>
      </div>
      {/* connections */}
      <div className="absolute w-full h-full">
        <Connector
          startRef={node_l_1}
          endRef={central_node}
          radius={50}
          percentage={0.6}
          y_margin={-40}
          color="#41D1FF"
        />
        <Connector
          startRef={node_l_2}
          endRef={central_node}
          radius={50}
          percentage={0.3}
          y_margin={-5}
          color="#41D1FF"
        />
        <Connector
          startRef={node_l_3}
          endRef={central_node}
          radius={50}
          percentage={0.1}
          y_margin={40}
          color="#FF1A00"
        />
        <Connector
          startRef={node_l_4}
          endRef={central_node}
          radius={50}
          percentage={0.4}
          y_margin={60}
          color="#FF1A00"
        />
        <Connector
          startRef={node_r_1}
          endRef={central_node}
          radius={50}
          percentage={0.4}
          y_margin={60}
          color="#FF1A00"
        />
        <Connector
          startRef={node_r_2}
          endRef={central_node}
          radius={50}
          percentage={0.4}
          y_margin={30}
          color="#41D1FF"
        />
        <Connector
          startRef={node_r_3}
          endRef={central_node}
          radius={50}
          percentage={0.2}
          y_margin={-10}
          color="#41D1FF"
        />
        <Connector
          startRef={node_r_4}
          endRef={central_node}
          radius={50}
          percentage={0.6}
          y_margin={-40}
          color="#41D1FF"
        />
      </div>
      {/* animated pulse */}
      {currentElement}
      {/* <ConnectorAnimated
        startRef={node_r_1}
        endRef={central_node}
        radius={50}
        percentage={0.4}
        y_margin={60}
        color="#FF1A00"
      /> */}
      {}
      {/* Features */}
      <div className="flex flex-col gap-10 justify-center items-center m-20 relative ">
        <div className="w-full absolute flex justify-center items-center">
          <Image src={rectBG} alt="" />
        </div>
        <div className="flex flex-col gap-5 z-1">
          <div className="flex flex-row gap-4">
            <div className="self-end flex flex-col gap-16">
              <div className="flex flex-col gap-4">
                <div className="text-primary-100 bg-primary-600 text-sm font-normal w-fit px-5 py-1 rounded-full border border-primary-100">
                  Features
                </div>
                <div className="text-4xl font-light text-neutral-50 max-w-80">
                  Whether you’re chasing projects or chasing talent
                </div>
                <div className="text-4xl font-medium text-neutral-100">
                  we’ve got you both covered!
                </div>
              </div>
              <DreamPortfolioCard />
            </div>
            <div className="self-end">
              <AssistantCard />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            {/* portfolio */}
            <FeatureWorkspaceCard />
            {/* header + workspace card */}
            <div className="flex flex-col gap-6">
              <MatchingSystemCard />
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="m-20 mt-0 mb-0 relative h-screen">
        {/* line */}
        <div className="h-[3px] w-full px-10 overflow-hidden">
          <div className="w-full aspect-square edge-highlight-1 p-5 "></div>
        </div>
        <div className="">
          <div className="h-80  w-full p-10 relative flex justify-center items-center overflow-hidden opacity-35 mix-blend-hard-light">
            <div className="w-full aspect-square edge-highlight-2 rounded-full absolute bottom-[5px] "></div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-row gap-48 mb-20 absolute top-[100px] px-10">
          <div className="flex flex-col gap-10 ">
            {/* headeline */}
            <div className="text-4xl font-medium text-neutral-50">
              Happy Freelancers, Satisfied Companies
            </div>
            <div className="text-xl font-light text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore
            </div>
            <div className="flex gap-4">
              <InputField1 />
              <Button3 title={"Get Started"} radius="rounded-[9px]" />
            </div>
          </div>
          {/* image */}
          <div className="bg-neutral-600 border w-fit h-fit border-neutral-400 rounded-[42px] rotate-15">
            <Image src={ctaBG} alt={""} />
          </div>
        </div>
      </div>

      {/* CTA 2 */}
    </div>
  );
}
