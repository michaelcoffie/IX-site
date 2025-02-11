import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-white py-16">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-[#70110c] md:text-5xl">
          About Iota Chi Chapter
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Our History</h2>
              <p className="text-gray-700">
                The Iota Chi Chapter of Kappa Alpha Psi Fraternity, Inc. has
                been a beacon of achievement at the University of Miami since
                its founding. Our chapter continues to uphold the rich
                traditions and values of our fraternity while adapting to meet
                the needs of today's students and community.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-700">
                We are dedicated to nurturing, developing, and producing
                exceptional leaders who excel in academics, service, and
                personal growth. Our mission is to unite men of culture,
                patriotism, and honor in a bond of fraternity.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
              alt="Chapter History"
              className="rounded-xl shadow-lg"
            />

            <div className="rounded-xl bg-[#70110c] p-6 text-white">
              <h3 className="mb-4 text-xl font-semibold">Core Values</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Achievement in Every Field of Human Endeavor</li>
                <li>Brotherhood and Unity</li>
                <li>Service to the Community</li>
                <li>Leadership Development</li>
                <li>Academic Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
