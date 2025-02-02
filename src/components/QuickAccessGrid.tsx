import { CalendarDays, Users, Info, Mail } from "lucide-react";
import { Button } from "./ui/button";

const items = [
  {
    title: "Events",
    icon: CalendarDays,
    description: "View upcoming chapter events and activities",
    link: "/events",
  },
  {
    title: "Member Portal",
    icon: Users,
    description: "Access exclusive member resources and information",
    link: "/portal",
  },
  {
    title: "Rush Information",
    icon: Info,
    description: "Learn about joining Kappa Alpha Psi",
    link: "/rush",
  },
  {
    title: "Contact Us",
    icon: Mail,
    description: "Get in touch with chapter leadership",
    link: "/contact",
  },
];

const QuickAccessGrid = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-[#f23bd7]/20"
            >
              <item.icon className="mb-4 h-8 w-8 text-[#70110c] group-hover:text-[#f23bd7] transition-colors duration-300" />
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{item.description}</p>
              <Button
                variant="outline"
                className="mt-auto hover:bg-[#f23bd7] hover:text-white transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccessGrid;
