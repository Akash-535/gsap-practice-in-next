import ProgressLine from "@/components/common/ProgressLine";
import GsapComponent from "@/components/GsapComponent";
import GsapSwiper from "@/components/GsapSwiper";
import Hero from "@/components/Hero";
import ImageReavelAnimation from "@/components/ImageReavelAnimation";
import TextAnimation from "@/components/TextAnimation";
import ThreeD from "@/components/ThreeD";

export default function Home() {
  return (
    <>
      <ProgressLine />
      <Hero />
      <GsapComponent />
      <ThreeD />
      <GsapSwiper />
      <ImageReavelAnimation />
      <TextAnimation />
    </>
  );
}
