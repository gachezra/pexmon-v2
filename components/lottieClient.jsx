"use client";

import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });


export default function LottieClient({ animationData, className }) {
  return <DynamicLottie animationData={animationData} className={className} />;
}
