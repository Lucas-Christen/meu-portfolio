import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-primary"
        >
          {/* Logo com efeito sutil */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              src="/logo.png"
              alt="Logo Lucas Christen"
              className="w-100% h-100% object-contain"
              initial={{ filter: "blur(8px) brightness(0.7)" }}
              animate={{ filter: "blur(0px) brightness(1)" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Glow leve */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 to-yellow-200/5 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </motion.div>

          {/* Linha de carregamento corrigida */}
          <motion.div className="relative mt-12 w-48 h-[3px] bg-white/15 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Texto Loading minimalista */}
          <motion.p
            className="mt-6 text-sm uppercase tracking-[0.3em] text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
