import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "Guide Right",
    description: "Mentoring program for local high school students",
    impact: "50+ students mentored annually",
  },
  {
    title: "Community Service",
    description: "Regular volunteer work at local organizations",
    impact: "1000+ service hours contributed",
  },
  {
    title: "Academic Excellence",
    description: "Study groups and tutoring services",
    impact: "Chapter GPA above 3.2",
  },
  {
    title: "Leadership Development",
    description: "Workshops and professional development",
    impact: "Monthly leadership training",
  },
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen w-full bg-white py-16">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-[#70110c] md:text-5xl">
          Programs & Community Service
        </h1>

        <p className="mb-12 text-lg text-gray-700">
          The Iota Chi Chapter is committed to making a positive impact through
          various programs and initiatives.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-[#70110c]">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">{program.description}</p>
                  <p className="text-sm font-semibold text-[#70110c]">
                    Impact: {program.impact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramsPage;
