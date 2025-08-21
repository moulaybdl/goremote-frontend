"use client";

import Image from "next/image";
import CentralNode from "./svgs/central_node.svg";
import Node from "./svgs/node.svg";
import LandingPageBackground from "./svgs/landingpage_background.svg";
import { useEffect, useRef } from "react";
import Connector from "@/components/landingPage/connector";

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
    )
      return;
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full min-h-screen overflow-x-hidden">
      {/* Slogan*/}
      <div className="flex flex-col justify-center items-center gap-5 z-1000 mt-72">
        <span className="text-6xl  font-medium  text-center text-[#009E88]">
          SLOGAN GOES HERE
        </span>
        <span className="font-normal text-3xl text-center text-white">
          SLOGAN GOES HERE
        </span>
        <span className="font-normal text-xl text-center text-secondary w-full max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
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
  );
}
