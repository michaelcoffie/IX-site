import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Menu, X } from "lucide-react";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "About",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Chapter Roster", href: "/roster" },
        { title: "Leadership", href: "/about/leadership" },
      ],
    },
    {
      title: "Membership",
      items: [
        { title: "Interest Form", href: "/membership/interest" },
        { title: "Requirements", href: "/membership/requirements" },
        { title: "FAQ", href: "/membership/faq" },
      ],
    },
    {
      title: "Programs",
      items: [
        { title: "Our Programs", href: "/programs" },
        { title: "Community Service", href: "/programs#service" },
        { title: "Philanthropy", href: "/programs#philanthropy" },
      ],
    },
    {
      title: "Alumni",
      items: [
        { title: "Alumni Network", href: "/alumni/network" },
        { title: "Spotlight", href: "/alumni/spotlight" },
        { title: "Give Back", href: "/alumni/give" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Kappa Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-[#70110c]">Iota Chi</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="text-[#70110c] hover:bg-[#70110c] hover:text-white">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#70110c] hover:text-white focus:bg-[#70110c] focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-4 flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-[#70110c] hover:bg-[#70110c] hover:text-white"
              asChild
            >
              <Link to="/member-portal">Member Portal</Link>
            </Button>
            <Button
              className="bg-[#70110c] text-white hover:bg-[#70110c]/80"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-[#70110c]" />
          ) : (
            <Menu className="h-6 w-6 text-[#70110c]" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="font-medium text-[#70110c]">{item.title}</div>
                <div className="ml-4 space-y-1">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.href}
                      className="block text-sm text-gray-600 hover:bg-[#70110c] hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="space-y-2">
              <Link
                to="/member-portal"
                className="block text-[#70110c] hover:bg-[#70110c] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Member Portal
              </Link>
              <Link
                to="/contact"
                className="block text-[#70110c] hover:bg-[#70110c] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MainNav;
