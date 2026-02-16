import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Plus, Trees } from 'lucide-react';
import confetti from 'canvas-confetti';

const App = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);
  const [localImages, setLocalImages] = useState<string[]>([]);
  
  // Only the images that actually exist!
  const allImages = [
    "WhatsApp Image 2026-02-14 at 1.49.00 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.00 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.02 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.02 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.03 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.04 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.04 AM (2).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.04 AM (3).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.04 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.05 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.05 AM (2).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.05 AM (3).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.05 AM (4).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.05 AM (5).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.05 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.06 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.08 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.08 AM (2).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.08 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.09 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.09 AM (2).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.09 AM (3).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.09 AM.jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.10 AM (1).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.10 AM (2).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.10 AM (3).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.10 AM (4).jpeg",
    "WhatsApp Image 2026-02-14 at 1.49.10 AM.jpeg",
  ];

  const handleNoHover = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoButtonPos({ x: newX, y: newY });
  };

  const handleYes = () => {
    setIsAccepted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fb7185', '#fda4af', '#f43f5e']
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImgs = Array.from(files).map(file => URL.createObjectURL(file));
      setLocalImages([...localImages, ...newImgs]);
      confetti({ particleCount: 40, spread: 40, origin: { y: 0.9 } });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f6] scrapbook-paper text-slate-800 p-3 md:p-8 font-handwritten overflow-x-hidden">
      {/* Floating Rats */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: Math.random() * 100 + 'vw', opacity: 0 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 1, 1, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: 8 + Math.random() * 8, 
              repeat: Infinity, 
              delay: Math.random() * 10 
            }}
            className="absolute text-3xl md:text-4xl"
          >
            🐀
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 md:py-16 bg-white/40 backdrop-blur-sm rounded-[2.5rem] md:rounded-[4rem] border-2 md:border-4 border-white shadow-inner mb-8 md:mb-12 relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-full opacity-10 flex justify-around items-end pointer-events-none">
            <Mountain size={100} />
            <Mountain size={150} />
            <Mountain size={80} />
            <Mountain size={120} />
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block mb-2 relative z-10"
          >
            <span className="text-6xl md:text-8xl">🐀</span>
          </motion.div>
          <h1 className="text-4xl md:text-8xl font-romantic text-rose-500 drop-shadow-sm mb-2 px-2 leading-tight relative z-10">
            Happy Valentine's Day Baby Rat!
          </h1>
          <p className="text-xl md:text-3xl text-rose-400 italic font-romantic relative z-10">To my favorite little badass, Claire Garson 💖</p>
        </motion.header>

        {/* Restore Section with Mountain Theme */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:my-20 px-2 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border-b-8 border-rose-100 rotate-[-1deg]"
          >
             <div className="flex items-center gap-2 mb-4">
               <Mountain className="text-emerald-500" size={32} />
               <Trees className="text-emerald-600" size={24} />
             </div>
             <h2 className="text-3xl md:text-4xl font-romantic text-rose-500 mb-6 underline decoration-wavy decoration-rose-200 underline-offset-8">
               Why You're My Favorite
             </h2>
             <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
                <p className="text-slate-600">
                    You’re literally a mountain queen. Ski patrol, lifeguarding, 
                    trekking across Nepal... you’ve got more grit than anyone I know. 🏔️
                </p>
                <div className="pt-4 border-t border-rose-50">
                  <p className="italic text-rose-400 text-2xl">
                    "You are one of the best things to ever happen to me."
                  </p>
                </div>
             </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="polaroid w-full max-w-sm rotate-[4deg] bg-white p-4 pb-12 shadow-2xl">
              <img 
                src="/images/WhatsApp Image 2026-02-14 at 1.49.03 AM.jpeg" 
                alt="Claire being badass" 
                className="w-full h-72 md:h-80 object-cover rounded-sm"
              />
              <p className="text-center mt-4 text-rose-500 text-2xl font-romantic">Mountain Queen 👑</p>
            </div>
          </motion.div>
        </section>

        {/* Will You Be My Valentine Section */}
        <section className="text-center py-12 md:py-20 my-12 md:my-20 bg-white/60 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] border-2 md:border-4 border-dashed border-rose-200 shadow-xl mx-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 rotate-12">
            <Mountain size={100} />
          </div>
          {!isAccepted ? (
            <div className="px-4 relative z-10">
              <h2 className="text-3xl md:text-6xl font-romantic text-rose-500 mb-12">Will you be my Valentine, baby rat? 🐀💖</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 relative min-h-[180px]">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleYes}
                  className="bg-rose-500 text-white px-12 md:px-20 py-5 md:py-7 rounded-full text-3xl md:text-5xl shadow-[0_8px_0_rgb(225,29,72)] active:shadow-none active:translate-y-[8px] transition-all z-20 w-full md:w-auto"
                >
                  YES! ❤️
                </motion.button>
                <motion.button
                  animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                  onMouseEnter={handleNoHover}
                  onClick={handleNoHover}
                  className="bg-slate-300 text-slate-500 px-10 py-4 rounded-full text-2xl shadow-lg cursor-not-allowed w-full md:w-auto opacity-80"
                >
                  No way 🐀
                </motion.button>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4"
            >
              <h2 className="text-6xl md:text-8xl font-romantic text-rose-500 mb-6">HELL YEAH! 🎉</h2>
              <p className="text-2xl md:text-4xl text-rose-400 italic mb-8">Best decision ever! 🐀💖</p>
              <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border-4 md:border-8 border-white shadow-2xl overflow-hidden rotate-[-8deg]">
                    <img src="/images/WhatsApp Image 2026-02-14 at 1.49.10 AM.jpeg" className="w-full h-full object-cover" />
                </div>
                <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border-4 md:border-8 border-white shadow-2xl overflow-hidden rotate-[5deg] mt-4">
                    <img src="/images/WhatsApp Image 2026-02-14 at 1.49.05 AM (1).jpeg" className="w-full h-full object-cover" />
                </div>
                <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border-4 md:border-8 border-white shadow-2xl overflow-hidden rotate-[-4deg]">
                    <img src="/images/WhatsApp Image 2026-02-14 at 1.49.08 AM (1).jpeg" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          )}
        </section>

        {/* Interactive Scrapbook */}
        <section className="my-16 md:my-24 px-2">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-6xl font-romantic text-rose-500 mb-4 text-center">Our Rat Scrapbook</h2>
            <div className="flex items-center gap-2 text-rose-400 mb-8">
               <Mountain size={20} />
               <p className="text-xl italic text-center">Tap to add more memories! ✨</p>
               <Mountain size={20} />
            </div>
            
            <label className="cursor-pointer bg-white border-2 border-rose-200 px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-3 text-rose-500 hover:bg-rose-50 group">
              <Plus className="group-hover:rotate-90 transition-transform" />
              <span className="text-xl md:text-2xl font-bold">Add a Memory</span>
              <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
             {/* Local Images */}
             <AnimatePresence>
              {localImages.map((url, idx) => (
                <motion.div
                  key={`local-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="polaroid bg-white shadow-xl mx-auto w-full max-w-[320px]"
                  style={{ '--rotate': `${Math.random() * 10 - 5}deg` } as any}
                >
                  <img src={url} alt="New memory" className="w-full aspect-square object-cover rounded-sm mb-4" />
                  <div className="h-1 w-full bg-rose-50 rounded-full" />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Existing Images */}
            {allImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 40 }}
                className="polaroid bg-white shadow-lg mx-auto w-full max-w-[320px]"
                style={{ '--rotate': `${(idx % 2 === 0 ? 1 : -1) * (Math.random() * 8 + 3)}deg` } as any}
              >
                <img 
                  src={`/images/${img}`} 
                  alt="Scrapbook moment" 
                  className="w-full aspect-[4/5] object-cover rounded-sm mb-4"
                />
                <div className="h-1 w-3/4 bg-slate-50 rounded-full opacity-60 mx-auto" />
              </motion.div>
            ))}

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="polaroid bg-white shadow-xl sm:col-span-2 lg:col-span-3 flex flex-col items-center p-4 md:p-8"
            >
               <video 
                controls 
                className="w-full max-h-[600px] rounded-lg shadow-inner"
                poster="/images/WhatsApp Image 2026-02-14 at 1.49.02 AM.jpeg"
              >
                <source src="/images/WhatsApp Video 2026-02-14 at 1.49.01 AM.mp4" type="video/mp4" />
              </video>
              <p className="text-center mt-6 text-rose-500 text-3xl font-romantic">Baby Rat in Motion 🐀📽️</p>
            </motion.div>
          </div>
        </section>

        {/* Heartfelt Note */}
        <motion.footer 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl my-20 md:my-32 text-center border-t-8 border-rose-200 relative overflow-hidden mx-2"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-100 via-rose-300 to-rose-100" />
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-4xl md:text-5xl font-romantic text-rose-500 mb-8">A Note for Claire</h3>
            <div className="text-2xl md:text-3xl leading-relaxed text-slate-700 space-y-6 italic">
              <p>
                Sorry I have been so busy recently, but I really wanted to make something special just for you.
              </p>
              <p>
                You are my favorite person, my mountain queen, and the cutest baby rat in the world. 
              </p>
              <p className="text-3xl md:text-4xl text-rose-500 font-romantic not-italic pt-6">
                To us rats! 🐀💖🐀
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-3">
               <span className="text-3xl">🐀</span>
               <span className="text-2xl">🏔️</span>
               <span className="text-3xl">🐀</span>
            </div>
          </div>
        </motion.footer>

        <p className="text-center text-rose-300 pb-12 italic opacity-60 text-base">Made with ❤️ for Claire Garson</p>
      </div>
    </div>
  );
};

export default App;
