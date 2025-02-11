import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Instagram } from "lucide-react";

interface Member {
  name: string;
  position: string;
  email: string;
  phone: string;
  instagram: string;
  imageUrl: string;
  year: string;
  major: string;
}

const members: Member[] = [
  {
    name: "Marcus Johnson",
    position: "Polemarch (President)",
    email: "mjohnson@miami.edu",
    phone: "(305) 555-0123",
    instagram: "@marcus_kap",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    year: "Senior",
    major: "Business Administration",
  },
  {
    name: "David Williams",
    position: "Vice Polemarch",
    email: "dwilliams@miami.edu",
    phone: "(305) 555-0124",
    instagram: "@david_kap",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    year: "Junior",
    major: "Computer Science",
  },
  {
    name: "Brandon Thompson",
    position: "Keeper of Records",
    email: "bthompson@miami.edu",
    phone: "(305) 555-0125",
    instagram: "@brandon_kap",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=brandon",
    year: "Senior",
    major: "Finance",
  },
  {
    name: "Michael Davis",
    position: "Keeper of Exchequer",
    email: "mdavis@miami.edu",
    phone: "(305) 555-0126",
    instagram: "@michael_kap",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    year: "Junior",
    major: "Marketing",
  },
  {
    name: "Christopher Wilson",
    position: "Strategus",
    email: "cwilson@miami.edu",
    phone: "(305) 555-0127",
    instagram: "@chris_kap",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
    year: "Sophomore",
    major: "Psychology",
  },
  {
    name: "James Anderson",
    position: "Lt. Strategus",
    email: "janderson@miami.edu",
    phone: "(305) 555-0128",
    instagram: "@james_kap",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    year: "Junior",
    major: "Engineering",
  },
];

const RosterPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#F7F1E6] py-16">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-[#70110c] md:text-5xl">
          Chapter Roster
        </h1>

        <p className="mb-8 text-lg text-gray-700">
          Meet the brothers of the Iota Chi Chapter. Our members are dedicated
          to achievement, leadership, and service in every field of human
          endeavor.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-[#70110c] text-white">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-white">
                      <AvatarImage src={member.imageUrl} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-sm opacity-90">{member.position}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">
                      Year & Major
                    </p>
                    <p className="text-gray-700">
                      {member.year} - {member.major}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-4 w-4 text-[#70110c]" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-[#70110c] transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4 text-[#70110c]" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-[#70110c] transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Instagram className="h-4 w-4 text-[#70110c]" />
                      <a
                        href={`https://instagram.com/${member.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#70110c] transition-colors"
                      >
                        {member.instagram}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RosterPage;
