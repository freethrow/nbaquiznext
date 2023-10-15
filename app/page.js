import Image from "next/image";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="h-full">
      <div className="hero bg-base-200  rounded m-3 p-2">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/imageedit_1_4973738336.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            width={1920}
            height={1280}
          />
          <div>
            <h1 className="md:text-5xl text-2xl font-bold">
              Play basketball stats!
            </h1>
            <p className="py-6">
              It's pretty simple: you get an amount of time and a statline
              together with five players. Your task is to guess / identify which
              player had the given statline in the last NBA season. You can ask
              for help, and 3 point will be deducted from your total score. Once
              the time runs out, your score will be recorded.
              <br /> Have fun!
            </p>
            <Link className="btn btn-primary" href="/play">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
