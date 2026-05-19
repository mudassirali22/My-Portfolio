import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, XCircle, X } from "lucide-react";
import React, { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 glass border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[320px] max-w-md pointer-events-auto select-none"
    >
      {type === "success" ? (
        <CheckCircle className="text-emerald-400 shrink-0" size={20} />
      ) : (
        <XCircle className="text-rose-400 shrink-0" size={20} />
      )}
      
      <div className="flex-1">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-0.5">
          Notification
        </p>
        <p className="text-xs font-bold text-white leading-relaxed">
          {message}
        </p>
      </div>

      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-white transition-colors p-1"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}
