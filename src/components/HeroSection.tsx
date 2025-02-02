import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-[680px] w-full bg-[#70110c] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=174&oauth2_token_id=57447761"
        />
      </div>
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Iota Chi Chapter
        </h1>
        <p className="mb-8 text-xl md:text-2xl">
          Achievement in Every Field of Human Endeavor
        </p>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white hover:bg-[#f23bd7] hover:text-white border-[#f23bd7]"
          >
            Join Us
          </Button>
        </div>
        <motion.div
          className="absolute bottom-8 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
