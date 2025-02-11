import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MembershipPage = () => {
  const requirements = [
    "Must be enrolled as a full-time student",
    "Minimum GPA of 2.5",
    "Demonstrated leadership potential",
    "Community service involvement",
    "Strong character and values",
  ];

  const values = [
    {
      title: "Leadership",
      description:
        "Developing tomorrow's leaders through mentorship and guidance",
    },
    {
      title: "Achievement",
      description: "Striving for excellence in academics and personal growth",
    },
    {
      title: "Service",
      description: "Dedicated to making a positive impact in our community",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white py-16">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-[#70110c] md:text-5xl">
          Membership & Intake
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">
              Join Our Brotherhood
            </h2>
            <p className="mb-6 text-gray-700">
              Kappa Alpha Psi seeks men of strong character who are dedicated to
              achievement, leadership, and service. Our intake process is
              designed to develop future leaders and strengthen the bonds of
              brotherhood.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  {requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button
              className="w-full bg-[#70110c] hover:bg-[#70110c]/80"
              size="lg"
            >
              Express Interest
            </Button>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MembershipPage;
