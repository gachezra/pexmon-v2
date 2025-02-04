"use client";

import Lottie from "lottie-react";

export default function LottieClient({ animationData, className }) {
  return <Lottie animationData={animationData} className={className} />;
}
