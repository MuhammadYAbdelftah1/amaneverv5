
import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const styles = {
    success: 'bg-[#4d8080]/10 text-[#4d8080] border-[#4d8080]/20',
    error: 'bg-red-50 text-red-800 border-red-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-[#4d8080]" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
    info: <AlertCircle className="w-5 h-5 text-blue-600" />,
  };

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] min-w-[320px] max-w-md p-4 rounded-2xl border shadow-2xl animate-in slide-in-from-bottom-4 duration-300 flex items-center gap-4 ${styles[type]}`}>
      <div className="shrink-0">{icons[type]}</div>
      <p className="flex-1 font-bold text-sm">{message}</p>
      <button onClick={onClose} className="shrink-0 p-1 hover:bg-black/5 rounded-lg transition-colors">
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
