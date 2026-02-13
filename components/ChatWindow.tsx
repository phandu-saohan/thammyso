import React, { useState, useRef, useEffect } from 'react';

interface ChatWindowProps {
  doctorName: string;
  doctorImage: string;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ doctorName, doctorImage, onClose }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; time: string }[]>([
    { text: `Xin chào! Tôi là trợ lý của ${doctorName}. Tôi có thể giúp gì cho bạn hôm nay?`, isUser: false, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      text: inputValue,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Cảm ơn tin nhắn của bạn. Bác sĩ sẽ phản hồi sớm nhất có thể ạ.",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center sm:items-end sm:justify-end sm:p-6 p-0 bg-slate-900/20 backdrop-blur-[1px]">
      <div className="w-full sm:w-[360px] h-full sm:h-[500px] bg-white sm:rounded-xl shadow-2xl flex flex-col border border-border-light animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Header */}
        <div className="p-4 bg-brand-blue sm:rounded-t-xl flex justify-between items-center shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
                <img src={doctorImage} alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-brand-blue rounded-full"></span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">{doctorName}</h3>
              <p className="text-[10px] text-blue-100 flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-200 rounded-full animate-pulse"></span>
                Đang hoạt động
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 custom-scrollbar">
          <div className="text-center text-[10px] text-slate-400 font-medium my-4">Hôm nay</div>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm shadow-sm ${
                msg.isUser 
                  ? 'bg-brand-blue text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              }`}>
                <p>{msg.text}</p>
                <span className={`text-[9px] block text-right mt-1 opacity-70 ${msg.isUser ? 'text-blue-100' : 'text-slate-400'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus-within:border-brand-blue focus-within:ring-1 focus-within:ring-brand-blue/20 transition-all">
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400"
                    placeholder="Nhập tin nhắn..."
                    autoFocus
                />
                <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className={`p-1.5 rounded-full transition-all ${
                        inputValue.trim() 
                            ? 'text-brand-blue hover:bg-blue-50' 
                            : 'text-slate-300 cursor-not-allowed'
                    }`}
                >
                    <span className="material-symbols-outlined text-xl fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;