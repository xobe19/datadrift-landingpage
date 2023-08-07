import Head from "next/head";
import Benefits from "../blocks/Benefits";
import Break from "../blocks/Break";
import Epilogue from "../blocks/Epilogue";
import Features from "../blocks/Features";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import Hero from "../blocks/Hero";
import Highlights from "../blocks/Highlights";
import Notice from "../components/Notice";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex items-center p-2">
      <img src={"/logo.png"} alt="logo" className="h-7"></img>
      <div className="flex-1"></div>
      <div className="mx-3">
        <Link href={"/waitlist"}>
          <p>Drill-Down</p>
        </Link>
      </div>

      <div className="mx-3">
        <Link href={"/waitlist"}>
          <p>Blog</p>
        </Link>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex flex-col justify-center items-center my-48 text-center">
      <p className="text-3xl font-semibold my-3">
        The Context Layer for your metrics
      </p>
      <p className="font-light my-3">
        Supercharge your semantic layer with context for your data consumers.
        Build actionnable and trusted metrics.
      </p>
      <div className="flex">
        <input
          className="border border-lime-400 bg-transparent p-2 text-lime-400 decoration-lime-400 placeholder-lime-400"
          placeholder="Enter your email"
        ></input>
        <div className="flex flex-col justify-center items-enter text-center bg-lime-400 px-3 mx-3">
          <p className="text-black">GET EARLY ACCESS</p>
        </div>
      </div>
    </div>
  );
}

function CopyrightFooter() {
  return (
    <div>
      <div className="bg-white h-px my-2"></div>
      <div className="flex justify-center items-center">
        <div className="max-w-5xl">
          <div className="flex items-center ">
            <p className="flex-1">&copy; 2023 Datadrift. All rights reserved</p>
            <div className="flex-1"></div>
            <p className="flex-1">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center">
        <div className="max-w-5xl">
          <NavBar></NavBar>
          <Main></Main>
        </div>
      </div>
      <CopyrightFooter></CopyrightFooter>
    </div>
  );
}
