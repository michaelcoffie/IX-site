import { motion } from "framer-motion";

const stats = [
  {
    number: "1911",
    label: "Founded",
    description: "Year of fraternity founding",
  },
  {
    number: "500+",
    label: "Alumni",
    description: "Proud Iota Chi graduates",
  },
  {
    number: "1000+",
    label: "Service Hours",
    description: "Annual community impact",
  },
  {
    number: "25+",
    label: "Active Members",
    description: "Current chapter strength",
  },
];

const StatsSection = () => {
  return (
    <motion.div
      className="w-full bg-gradient-to-r from-[#70110c] to-[#f23bd7] py-12 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-2 text-4xl font-bold">{stat.number}</div>
              <div className="mb-1 text-xl font-semibold">{stat.label}</div>
              <div className="text-sm opacity-75">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
