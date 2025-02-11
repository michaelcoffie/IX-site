import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen w-full bg-white py-16">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-[#70110c] md:text-5xl">
          Contact Us
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Input placeholder="Subject" required />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#70110c] hover:bg-[#70110c]/80"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#70110c]" />
                  <span>University of Miami Campus, Coral Gables, FL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#70110c]" />
                  <a
                    href="mailto:contact@iotachi.org"
                    className="hover:text-[#70110c]"
                  >
                    contact@iotachi.org
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#70110c]" />
                  <a href="tel:+13055550123" className="hover:text-[#70110c]">
                    (305) 555-0123
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-full bg-[#70110c] p-2 text-white hover:bg-[#70110c]/80"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-[#70110c] p-2 text-white hover:bg-[#70110c]/80"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-[#70110c] p-2 text-white hover:bg-[#70110c]/80"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
