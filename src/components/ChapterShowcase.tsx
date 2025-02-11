import { motion } from "framer-motion";

const ChapterShowcase = () => {
  return (
    <motion.div
      className="w-full bg-[#70110c] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Meet Our Chapter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Dedicated to achievement, leadership, and service in every field of
            human endeavor.
          </p>
        </div>

        <motion.div
          className="overflow-hidden rounded-xl bg-white/10 p-2 backdrop-blur-sm"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3"
              alt="Iota Chi Chapter Members"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="mx-auto max-w-2xl text-white/90">
            Our brothers exemplify the values of Kappa Alpha Psi through
            academic excellence, community service, and leadership development.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterShowcase;
