"use client";

import Image from "next/image";
import CentralNode from "./svgs/centralNode.svg";
import Node from "./svgs/node.svg";
import LandingPageBackground from "./svgs/landingpage_background.svg";
import { useEffect, useRef, useState } from "react";
import Connector from "@/components/landingPage/connector";

import { motion, useInView } from "framer-motion";

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
import { html } from "framer-motion/client";
import DropDown from "@/components/input/dropDown";
import { text } from "stream/consumers";
import SimpleInput from "@/components/input/simpleInput";

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

  // CTA section ref for scrolling
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  // CTA form state
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  // classnames for features card:
  const [portfolioCardClassName, setPortfolioCardClassName] = useState("flex-row w-fit" )
  const [chatCardClassName, setChatCardClassName] = useState("flex-row w-fit")
  const [workspaceCardClassName, setWorkspaceCardClassName] = useState("w-fit")
  const [assistantCardClassName, setAssistantCardClassName] = useState("")

  const handlePortfolioCardClassName = (screenSize: number) => {
    if (screenSize < 957) {
      setPortfolioCardClassName("flex-col-reverse w-full")
    }


  }


  const handleAssistantCardClassName = (screenSize: number) => {
    if (screenSize < 957) {
      setPortfolioCardClassName("flex-col-reverse w-full")
    }

  }

  const handleChatCardClassName = (screenSize: number) => {
    if (screenSize < 957) {
      setChatCardClassName("w-full flex-col-reverse")
    }

  }

  const handleWorkspaceCardClassName = (screenSize: number) => {
    if (screenSize < 957) {
      setWorkspaceCardClassName("w-full")
    }

  }

  useEffect(() => {
    const size = innerWidth

    handlePortfolioCardClassName(size);
    handleAssistantCardClassName(size);
    handleChatCardClassName(size);
    handleWorkspaceCardClassName(size);



  }, [])

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

  const features_section_container_ref = useRef(null);
  const features_container_inview = useInView(features_section_container_ref);

  const features_section_container = {
    initial: {},
    inView: {},
  };

  const bottom_container = {
    initial: {},
    inView: {},
  };

  const header_section_container = {
    initial: {
      opacity: 0,
      y: -100,
    },
    inView: {
      opacity: 1,
      y: 0,
    },
  };

  const portfolio_card = {
    initial: {
      opacity: 0,
      x: -100,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

  const chat_card = {
    initial: {
      opacity: 0,
      x: 100,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

  const workspace_card = {
    initial: {
      opacity: 0,
      x: -100,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

  const assistant_card = {
    initial: {
      opacity: 0,
      x: 100,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

  const cta_container = {
    initial: {},
    inView: {},
  };

  const cta_left = {
    initial: {
      opacity: 0,
      x: -100,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

  const cta_right = {
    initial: {
      opacity: 0,
      x: 100,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

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

  // Scroll to CTA section
  const scrollToCTA = () => {
    ctaSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Handle form submission to Google Sheets
  const handleSubmitWaitlist = async () => {
    // Reset messages
    setSubmitError("");
    setSubmitMessage("");

    // Validate inputs
    if (!email || !role) {
      setSubmitError("Please fill in both email and role");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("Successfully added to waitlist! We'll be in touch soon.");
        setEmail("");
        setRole("");
      } else {
        setSubmitError(data.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
      console.error('Error submitting waitlist:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 w-full min-h-screen overflow-x-hidden relative">
      {/* Slogan*/}
      <div className="flex flex-col">
        {/* hero text */}
        <div className="flex flex-col justify-center items-center gap-5 z-1000 mt-44 sm:p-0 px-10 ">
          <span className="sm:text-6xl text-4xl  font-medium  text-center text-primary-500">
            Where Talent Meets Opportunity
          </span>
          <span className="font-normal sm:text-3xl text-xl text-center text-neutral-50">
            Unlock Your Potential
          </span>
          <span className="font-normal text-xl text-center text-neutral-200  w-full max-w-2xl">

          </span>
          <div className="">
            <Button3 title="Get Started" radius="rounded-full" onClick={scrollToCTA} />
          </div>
        </div>
        {/* hero section */}
        <div className="flex justify-center items-center w-full relative overflow-x-hidden overflow-y-hidden ">
          <div className=" landing-page-hero-circle-gradient z-50 lg:w-[120%] lg:h-[120%] w-[130%] h-[130%] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
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
            <div className="node-l-2 relative sm:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[-20%] left-[7%] "
                ref={node_l_1}
              />
            </div>
            <div className="node-l-3 relative sm:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[20%] left-[47%] lg:opacity-100 opacity-0"
                ref={node_l_2}
              />
            </div>
            <div className="node-l-4 relative sm:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[-55%] left-[15%]"
                ref={node_l_3}
              />
            </div>
            <div className="node-l-5 relative sm:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute top-0 left-[60%] lg:opacity-100 opacity-0"
                ref={node_l_4}
              />
            </div>
            <div className="node-r-6 relative sm:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute top-0 right-[40%] lg:opacity-100 opacity-0"
                ref={node_r_1}
              />
            </div>
            <div className="node-r-7 relative sm:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute top-[20%] right-[10%] "
                ref={node_r_2}
              />
            </div>
            <div className="node-r-8 relative lg:opacity-100 opacity-0">
              <Image
                src={Node}
                alt={""}
                className="absolute bottom-[20%] right-[37%]"
                ref={node_r_3}
              />
            </div>
            <div className="node-r-9 relative sm:opacity-100 opacity-0">
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
      <div className="absolute w-full h-full sm:opacity-100 opacity-0">
        <Connector
          startRef={node_l_1}
          endRef={central_node}
          radius={50}
          percentage={0.6}
          y_margin={-40}
          color="#41D1FF"
          className=""
        />
        <Connector
          startRef={node_l_2}
          endRef={central_node}
          radius={50}
          percentage={0.3}
          y_margin={-5}
          color="#41D1FF"
          className="lg:opacity-100 opacity-0"
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
          className="lg:opacity-100 opacity-0"
        />
        <Connector
          startRef={node_r_1}
          endRef={central_node}
          radius={50}
          percentage={0.4}
          y_margin={60}
          color="#FF1A00"
          className="lg:opacity-100 opacity-0"
        />
        <Connector
          startRef={node_r_2}
          endRef={central_node}
          radius={50}
          percentage={0.4}
          y_margin={30}
          color="#41D1FF"
          className=""
        />
        <Connector
          startRef={node_r_3}
          endRef={central_node}
          radius={50}
          percentage={0.2}
          y_margin={-10}
          color="#41D1FF"
          className="lg:opacity-100 opacity-0"
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
      {/* {currentElement} */}
      {/* Features */}
      <motion.div
        className="flex flex-col gap-10 justify-center items-center sm:m-20 m-10 relative "
        ref={features_section_container_ref}
        variants={features_section_container}
        initial="initial"
        whileInView={"inView"}
      >
        <div className="w-full absolute flex justify-center items-center">
          <Image src={rectBG} alt="" />
        </div>
        {/* features */}
        <div className="flex flex-col gap-5 z-1">
      
          <div className="flex md:flex-row flex-col gap-4">
            <div className="self-end flex flex-col gap-16">
              {/* header */}
              <motion.div
                className="flex flex-col gap-4"
                variants={header_section_container}
                transition={{
                  duration: 0.9,
                }}
              >
                <div className="text-primary-100 bg-primary-600 text-sm font-normal w-fit px-5 py-1 rounded-full border border-primary-100">
                  Features
                </div>
                <div className="text-4xl font-light text-neutral-50 max-w-80">
                  Whether you’re chasing projects or chasing talent
                </div>
                <div className="text-4xl font-medium text-neutral-100">
                  we’ve got you both covered!
                </div>
              </motion.div>
              {/* portfolio card */}
              <motion.div
                className=""
                variants={portfolio_card}
                transition={{ duration: 0.8 }}
              >
                <DreamPortfolioCard className={portfolioCardClassName} />
              </motion.div>
            </div>
            {/* assitant card */}
            <motion.div
              className="self-end"
              variants={assistant_card}
              transition={{ duration: 0.8 }}
            >
              <AssistantCard className={assistantCardClassName} />
            </motion.div>
          </div>
          <motion.div
            className="flex md:flex-row flex-col gap-4"
            variants={bottom_container}
            initial="initial"
            whileInView="inView"
          >
            {/* portfolio */}
            <motion.div
              className=""
              variants={workspace_card}
              transition={{ duration: 0.8 }}
            >
              <FeatureWorkspaceCard className={workspaceCardClassName} />
            </motion.div>
            {/* header + workspace card */}
            <motion.div
              className="flex flex-col gap-6"
              variants={chat_card}
              transition={{ duration: 0.8 }}
            >
              <MatchingSystemCard className={chatCardClassName} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* CTA */}
      <div ref={ctaSectionRef} className="sm:m-20 m-5 mt-0 mb-0 relative h-screen">
        {/* line */}
        <div className="h-[3px] w-full px-10 overflow-hidden ">
          <div className="w-full aspect-square edge-highlight-1 p-5 "></div>
        </div>
        {/* elipse */}
        <div className="sm:block hidden">
          <div className="h-80  w-full p-10 relative flex justify-center items-center overflow-hidden opacity-35 mix-blend-hard-light">
            <div className="w-full aspect-square edge-highlight-2 rounded-full absolute bottom-[5px] "></div>
          </div>
        </div>
        {/* content */}
        <motion.div
          className="flex flex-row gap-48 mb-20 absolute top-[100px] sm:px-10 px-4"
          variants={cta_container}
          initial="initial"
          whileInView="inView"
        >
          {/* headeline */}
          <motion.div
            className="flex flex-col justify-start gap-10 "
            variants={cta_left}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl font-medium text-neutral-50">
              Happy Freelancers, Satisfied Companies
            </div>
            <div className="text-xl font-light text-neutral-300">

            </div>
            <div className="flex flex-col justify-start gap-6">
              <div className="w-full">
                <SimpleInput 
                  label="Enter your email:" 
                  value={email} 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email"
                  ref={undefined} 
                  error={submitError && !email ? "Email is required" : undefined}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-fit">
                <DropDown 
                  label="Choose Role:" 
                  options={[{
                    id: "company",
                    text: "I'm a Company"
                  },
                  {
                    id: "freelancer",
                    text: "I'm a Freelancer"
                  }]}
                  placeholder="Role"
                  onChange={(selectedRole: string) => setRole(selectedRole)}
                />
              </div>
              
              {/* Success/Error Messages */}
              {submitMessage && (
                <div className="text-success-400 text-sm font-medium">
                  {submitMessage}
                </div>
              )}
              {submitError && (
                <div className="text-error-400 text-sm font-medium">
                  {submitError}
                </div>
              )}
              
              <div className="w-fit">
                <Button3 
                  title={isSubmitting ? "Submitting..." : "Get Started"} 
                  radius="rounded-full"
                  onClick={handleSubmitWaitlist}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            className="bg-neutral-600 border w-fit h-fit border-neutral-400 rounded-[42px] rotate-15 xl:block hidden"
            variants={cta_right}
            transition={{ duration: 0.8 }}
          >
            <Image src={ctaBG} alt={""} />
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
