import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl overflow-hidden z-50"
          >
            <div className="bg-bronze-metallic p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Travelli Intelligence
                  </h3>
                  <p className="text-white/80 text-sm">Assistente Digitale</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="h-80 overflow-y-auto p-6 bg-gray-50">
              <div className="mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Benvenuto. Sono il tuo assistente digitale.
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed mt-2">
                    Sei interessato a un investimento o a una residenza privata?
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Investimento
                </button>
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Residenza Privata
                </button>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
              <form className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Scrivi un messaggio..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A68966] text-sm"
                />
                <button
                  type="submit"
                  className="bg-bronze-metallic bg-bronze-metallic-hover text-white p-3 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-bronze-metallic bg-bronze-metallic-hover text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center z-50 group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </>
  );
}
