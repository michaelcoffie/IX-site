import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const instagramPosts = [
  {
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    caption: "Spring '24 Line presenting at the yard! 🔥 #IXNUPES",
    likes: 243,
    comments: 18,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    caption: "Achievement Week - Celebrating Excellence in our Community 🏆",
    likes: 156,
    comments: 23,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    caption: "Brothers making an impact at the local food bank 🤝",
    likes: 189,
    comments: 27,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    caption: "Chapter meeting - Planning our next big moves 📈",
    likes: 212,
    comments: 31,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
    caption: "Throwback to Homecoming 2023! 🎉",
    likes: 278,
    comments: 42,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    caption: "Kappa League mentorship session 📚",
    likes: 198,
    comments: 25,
  },
];

const SocialFeed = () => {
  return (
    <motion.div
      className="w-full bg-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-center space-x-2">
          <Instagram className="h-6 w-6 text-[#E4405F]" />
          <h2 className="text-3xl font-bold text-[#70110c]">@IXNUPES</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={post.imageUrl}
                  alt={`Instagram post ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm">{post.caption}</p>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-sm">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/IXNUPES"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#70110c] to-[#f23bd7] px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow @IXNUPES on Instagram</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialFeed;
