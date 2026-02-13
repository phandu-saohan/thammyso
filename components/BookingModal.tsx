import React, { useState } from 'react';

interface BookingModalProps {
  doctorName: string;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ doctorName, onClose }) => {
  // Generate next 7 days
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  const [selectedDate, setSelectedDate] = useState<Date>(dates[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'success'>('select');

  // Mock time slots
  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"
  ];

  const handleConfirm = () => {
    if (selectedTime) {
      setStep('success');
    }
  };

  const getDayName = (date: Date, index: number) => {
    if (index === 0) return 'Hôm nay';
    const day = date.getDay();
    if (day === 0) return 'CN';
    return `Thứ ${day + 1}`;
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full text-center animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Đặt lịch thành công!</h3>
          <p className="text-sm text-secondary mb-6 leading-relaxed">
            Bạn đã đặt lịch hẹn với <br/><strong>{doctorName}</strong><br/>
            vào lúc <strong className="text-brand-blue">{selectedTime}</strong> ngày <strong>{selectedDate.toLocaleDateString('vi-VN')}</strong>.
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
          >
            Hoàn tất
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Đặt lịch hẹn tư vấn</h3>
            <p className="text-[11px] text-brand-blue font-bold mt-0.5">{doctorName}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {/* Date Selection */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-blue text-lg">calendar_month</span>
              Chọn ngày khám
            </h4>
            <div className="flex gap-2 overflow-x-auto pb-4 -mx-2 px-2 snap-x">
              {dates.map((date, idx) => {
                const isSelected = date.toDateString() === selectedDate.toDateString();
                const dayName = getDayName(date, idx);
                return (
                  <button
                    key={idx}
                    onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                    className={`snap-start flex flex-col items-center justify-center min-w-[72px] p-2.5 rounded-lg border transition-all duration-200 ${
                      isSelected 
                        ? 'bg-brand-blue border-brand-blue text-white shadow-md shadow-blue-200 scale-105' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-brand-blue/50 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase mb-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>{dayName}</span>
                    <span className="text-sm font-bold">{date.getDate()}/{date.getMonth() + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Selection */}
          <div className="mb-2">
             <h4 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-blue text-lg">schedule</span>
              Chọn khung giờ
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {timeSlots.map((time, idx) => {
                const isSelected = time === selectedTime;
                 return (
                  <button
                    key={idx}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 text-xs font-bold rounded border transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-blue border-brand-blue text-white shadow-sm'
                        : 'bg-slate-50 border-transparent text-slate-700 hover:bg-white hover:border-brand-blue/30 hover:shadow-sm'
                    }`}
                  >
                    {time}
                  </button>
                 )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3 text-xs font-bold uppercase text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Hủy bỏ
          </button>
          <button 
            onClick={handleConfirm}
            disabled={!selectedTime}
            className={`flex-1 py-3 text-xs font-bold uppercase text-white rounded-lg transition-all shadow-sm ${
              selectedTime 
                ? 'bg-brand-blue hover:bg-blue-700 shadow-blue-200 transform active:scale-95' 
                : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;