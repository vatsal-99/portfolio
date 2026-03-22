import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLines = [
  "Booting Vatsal.dev…",
  "Frontend → React · JavaScript",
  "Backend → ASP.NET Core · APIs · SQL",
  "AI → Chatbot · Python",
  "All systems ready 🚀",
];

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]]);
        setProgress((prev) => prev + 100 / bootLines.length);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onWelcomeComplete();
        }, 1200);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [onWelcomeComplete]);

  return (
    <div className="fixed inset-0 bg-black text-orange-400 font-mono flex justify-center items-start sm:items-center pt-20 sm:pt-0 z-50">
      <div className="w-full max-w-2xl px-6">

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d1117] border border-orange-500 rounded-lg shadow-2xl p-6"
        >

          {/* Header */}
          <div className="flex items-center justify-between mb-4">

            <span className="text-xs text-gray-400">
              vatsal@portfolio:~$
            </span>

            {/* Apple buttons on right */}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full ml-2" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full ml-2" />
              <div className="w-3 h-3 bg-green-500 rounded-full ml-2" />
            </div>

          </div>

          {/* Boot lines */}
          <div className="space-y-1 text-sm">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}

            {/* blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ▋
            </motion.span>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-800 rounded h-2 overflow-hidden">
              <motion.div
                className="bg-orange-500 h-2"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-500 mt-3">
            Booting developer environment...
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;