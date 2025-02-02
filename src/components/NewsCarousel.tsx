import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const newsItems = [
  {
    title: "Annual Achievement Week Celebration",
    date: "November 15, 2023",
    description:
      "Join us for our annual celebration of achievement and excellence.",
  },
  {
    title: "Community Service Initiative",
    date: "December 1, 2023",
    description:
      "Making a difference in our community through dedicated service.",
  },
  {
    title: "Spring Rush Information",
    date: "January 20, 2024",
    description: "Learn about joining the Iota Chi Chapter of Kappa Alpha Psi.",
  },
];

const NewsCarousel = () => {
  return (
    <motion.div
      className="w-full bg-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#70110c]">
          Latest News
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {newsItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:border-[#f23bd7] transition-colors duration-300">
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mb-3 text-sm text-gray-500">{item.date}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default NewsCarousel;
