import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
}

export default function TravelliIntelligence() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<'initial' | 'residenza' | 'investitore' | 'cantieri' | 'capture'>('initial');
  const [userInput, setUserInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      sendBotMessage(
        "Benvenuto in Travelli SRL. Sono il suo assistente digitale. Come posso orientarla oggi?",
        [
          "Cerco una Residenza Esclusiva",
          "Sono un Investitore",
          "Info su Cantieri e Disponibilità"
        ]
      );
    }
  }, [isOpen]);

  const sendBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        options
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
  };

  const handleOptionClick = (option: string) => {
    handleUserMessage(option);

    if (currentStep === 'initial') {
      if (option === "Cerco una Residenza Esclusiva") {
        setCurrentStep('residenza');
        sendBotMessage(
          "Eccellente. Le nostre collezioni Signature offrono standard unici. Preferisce Firenze città o le zone collinari?",
          ["Firenze Città", "Zone Collinari", "Vorrei vedere entrambe"]
        );
      } else if (option === "Sono un Investitore") {
        setCurrentStep('investitore');
        sendBotMessage(
          "Operiamo con rendimenti solidi su riqualificazioni premium. Desidera ricevere il nostro Company Profile?",
          ["Sì, inviatemi il profilo", "Preferirei un incontro", "Datemi più dettagli sui progetti"]
        );
      } else if (option === "Info su Cantieri e Disponibilità") {
        setCurrentStep('cantieri');
        sendBotMessage(
          "I nostri progetti Urban sono pensati per il vivere moderno. Sta cercando per consegna immediata o futura?",
          ["Consegna Immediata", "Progetti Futuri", "Entrambe le opzioni"]
        );
      }
    } else if (currentStep === 'residenza' || currentStep === 'investitore' || currentStep === 'cantieri') {
      setCurrentStep('capture');
      setShowInput(true);
      sendBotMessage(
        "Perfetto. Un nostro Senior Consultant è la persona adatta per approfondire. Mi lasci un recapito (email o telefono) e la faremo contattare entro 24 ore."
      );
    }
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    handleUserMessage(userInput);
    setUserInput('');
    setShowInput(false);

    sendBotMessage(
      "Grazie. Un nostro consulente la contatterà entro 24 ore. Nel frattempo, può esplorare i nostri progetti sul sito. Buona giornata!"
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Travelli Intelligence</h3>
                  <p className="text-xs text-white/60">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-[80%]">
                    <div
                      className={`rounded-lg px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-[#2A2A2A] text-white'
                          : 'bg-white border-2 border-[#A68966] text-gray-800'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-4 py-2 bg-white border border-[#A68966] text-[#A68966] rounded-lg hover:bg-[#A68966] hover:text-white transition-colors text-sm font-medium"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-[#A68966] rounded-lg px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#A68966] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-[#A68966] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#A68966] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {showInput && (
              <form onSubmit={handleSubmitContact} className="border-t border-gray-200 p-4 bg-white">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Email o telefono..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A68966] text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-[#A68966] text-white p-2 rounded-lg hover:bg-[#8F7555] transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#A68966] text-white rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-[#8F7555] transition-colors group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
          )}
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-full bg-[#A68966]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </>
  );
}
