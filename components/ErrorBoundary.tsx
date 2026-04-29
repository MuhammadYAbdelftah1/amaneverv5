import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary class component to catch rendering errors in children components.
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-8 bg-gray-50 rounded-[3rem] my-12 border-2 border-dashed border-gray-200">
          <div className="text-center max-w-md">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 text-red-600 mb-6">
              <AlertTriangle size={40} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">عذراً، حدث خطأ غير متوقع</h2>
            <p className="text-gray-500 font-bold mb-8">
              نواجه حالياً صعوبة في تحميل هذا الجزء. يرجى المحاولة مرة أخرى أو تحديث الصفحة.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-[#4d8080] text-white rounded-full font-black flex items-center justify-center gap-3 mx-auto hover:bg-[#3d6666] transition-all shadow-lg"
            >
              <RefreshCw size={20} /> إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;