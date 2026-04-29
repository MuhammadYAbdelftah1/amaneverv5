import React, { useState } from 'react';
import { X, User, Mail, Phone, Hash, Eye, EyeOff, ArrowRight, Shield, CheckCircle2, UserCircle, CreditCard, Stethoscope, Building2, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

type UserRole = 'visitor' | 'subscriber' | 'doctor' | 'facility' | 'affiliate';
type LoginMethod = 'id' | 'username' | 'email' | 'phone';

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  const [mode, setMode] = useState<'role-select' | 'login' | 'signup' | 'otp'>('role-select');
  const [userRole, setUserRole] = useState<UserRole>('visitor');
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    username: '',
    otp: ['', '', '', '', '', '']
  });

  if (!isOpen) return null;

  const userRoles = [
    { value: 'visitor', label: 'زائر', icon: UserCircle, desc: 'تصفح الخدمات والعروض', color: 'bg-blue-50 border-blue-200 hover:border-blue-400', iconColor: 'text-blue-600' },
    { value: 'subscriber', label: 'مشترك', icon: CreditCard, desc: 'لديك بطاقة أمان إيفر', color: 'bg-teal-50 border-teal-200 hover:border-teal-400', iconColor: 'text-teal-600' },
    { value: 'doctor', label: 'طبيب', icon: Stethoscope, desc: 'مقدم خدمة طبية', color: 'bg-green-50 border-green-200 hover:border-green-400', iconColor: 'text-green-600' },
    { value: 'facility', label: 'منشأة طبية', icon: Building2, desc: 'مستشفى أو مركز طبي', color: 'bg-purple-50 border-purple-200 hover:border-purple-400', iconColor: 'text-purple-600' },
    { value: 'affiliate', label: 'مسوق بالعمولة', icon: Briefcase, desc: 'اربح من التسويق', color: 'bg-orange-50 border-orange-200 hover:border-orange-400', iconColor: 'text-orange-600' }
  ];

  const loginMethods = [
    { value: 'phone', label: 'رقم الجوال', icon: Phone, placeholder: '05xxxxxxxx' },
    { value: 'email', label: 'البريد الإلكتروني', icon: Mail, placeholder: 'example@email.com' },
    { value: 'username', label: 'اسم المستخدم', icon: User, placeholder: 'username' },
    { value: 'id', label: 'رقم الهوية', icon: Hash, placeholder: '1xxxxxxxxx' }
  ];

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    // المشترك يروح مباشرة للـ Login
    if (role === 'subscriber') {
      setMode('login');
    } else {
      // باقي الأنواع يختاروا بين Login و Signup
      setMode(initialMode);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmitLogin = () => {
    // Simulate OTP send
    setMode('otp');
  };

  const handleSubmitSignup = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setMode('otp');
    }
  };

  const renderRoleSelection = () => (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-black text-gray-900">
          مرحباً بك في أمان إيفر
        </h3>
        <p className="text-gray-600">
          اختر نوع حسابك للمتابعة
        </p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 gap-3">
        {userRoles.map((role) => {
          const IconComponent = role.icon;
          return (
            <button
              key={role.value}
              onClick={() => handleRoleSelect(role.value as UserRole)}
              className={`p-5 rounded-2xl border-2 transition-all text-right hover:shadow-lg transform hover:scale-[1.02] ${role.color}`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex-shrink-0 ${role.iconColor}`}>
                  <IconComponent size={40} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="font-black text-lg mb-1">{role.label}</div>
                  <div className="text-sm text-gray-600">{role.desc}</div>
                </div>
                <div className="text-gray-400">
                  <ArrowRight size={24} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info Note */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-right">
        <p className="text-sm text-gray-700">
          💡 <strong>نصيحة:</strong> إذا كنت مشتركاً في بطاقة أمان إيفر، اختر "مشترك" لتسجيل الدخول مباشرة.
        </p>
      </div>
    </div>
  );

  const renderLoginForm = () => (
    <div className="space-y-6">
      {/* Login Method Tabs */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
        {loginMethods.map((method) => {
          const Icon = method.icon;
          return (
            <button
              key={method.value}
              onClick={() => setLoginMethod(method.value as LoginMethod)}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg font-bold text-sm transition-all ${
                loginMethod === method.value
                  ? 'bg-white text-[#4d8080] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{method.label}</span>
            </button>
          );
        })}
      </div>

      {/* Input Field */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-700">
          {loginMethods.find(m => m.value === loginMethod)?.label}
        </label>
        <div className="relative">
          <input
            type="text"
            value={formData.identifier}
            onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
            placeholder={loginMethods.find(m => m.value === loginMethod)?.placeholder}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-right"
            autoFocus
            dir={loginMethod === 'email' || loginMethod === 'username' ? 'ltr' : 'rtl'}
          />
        </div>
      </div>

      {/* Password Field (optional for OTP) */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <button className="text-sm text-[#4d8080] hover:underline font-bold">
            نسيت كلمة المرور؟
          </button>
          <label className="block text-sm font-bold text-gray-700">
            كلمة المرور (اختياري)
          </label>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="أدخل كلمة المرور أو استخدم OTP"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-right"
            dir="rtl"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <p className="text-xs text-gray-500 text-right">
          💡 يمكنك تسجيل الدخول بدون كلمة مرور باستخدام رمز OTP
        </p>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmitLogin}
        className="w-full bg-[#4d8080] text-white py-3.5 rounded-xl font-black text-lg hover:bg-[#3d6666] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
      >
        <span>تسجيل الدخول</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 font-bold">أو</span>
        </div>
      </div>

      {/* Switch to Signup */}
      <div className="text-center">
        <p className="text-gray-600">
          ليس لديك حساب؟{' '}
          <button
            onClick={() => setMode('signup')}
            className="text-[#4d8080] font-black hover:underline"
          >
            إنشاء حساب جديد
          </button>
        </p>
      </div>

      {/* Back to Role Selection */}
      <div className="text-center pt-2 border-t border-gray-200">
        <button
          onClick={() => setMode('role-select')}
          className="text-gray-500 text-sm hover:text-gray-700 font-bold"
        >
          ← العودة لاختيار نوع الحساب
        </button>
      </div>
    </div>
  );

  const renderSignupForm = () => {
    const selectedRole = userRoles.find(r => r.value === userRole);
    const SelectedIcon = selectedRole?.icon || UserCircle;
    
    return (
      <div className="space-y-6">
        {/* Show selected role */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center gap-3">
          <div className={`${selectedRole?.iconColor || 'text-teal-600'}`}>
            <SelectedIcon size={32} strokeWidth={2} />
          </div>
          <div className="flex-1 text-right">
            <div className="text-sm text-gray-600">نوع الحساب المختار:</div>
            <div className="font-black text-[#4d8080]">
              {selectedRole?.label}
            </div>
          </div>
          <button
            onClick={() => setMode('role-select')}
            className="text-xs text-[#4d8080] hover:underline font-bold"
          >
            تغيير
          </button>
        </div>

      {step === 1 ? (
        <>
          {/* Basic Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 text-right">
                الاسم الكامل
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-right"
                dir="rtl"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 text-right">
                رقم الجوال
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="05xxxxxxxx"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-right"
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 text-right">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@email.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-left"
                dir="ltr"
              />
            </div>
          </div>

          <button
            onClick={handleSubmitSignup}
            className="w-full bg-[#4d8080] text-white py-3.5 rounded-xl font-black text-lg hover:bg-[#3d6666] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>التالي</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
          </button>
        </>
      ) : (
        <>
          {/* Step 2: Additional Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 text-right">
                رقم الهوية / الإقامة
              </label>
              <input
                type="text"
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                placeholder="1xxxxxxxxx"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-right"
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 text-right">
                اسم المستخدم
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="اختر اسم مستخدم فريد"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-left"
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 text-right">
                كلمة المرور (اختياري)
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="اتركها فارغة للدخول بـ OTP فقط"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors text-right"
                  dir="rtl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 text-right">
                💡 يمكنك تسجيل الدخول دائماً باستخدام OTP بدون كلمة مرور
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-black hover:bg-gray-50 transition-all"
            >
              رجوع
            </button>
            <button
              onClick={handleSubmitSignup}
              className="flex-1 bg-[#4d8080] text-white py-3 rounded-xl font-black hover:bg-[#3d6666] transition-all shadow-lg hover:shadow-xl"
            >
              إنشاء الحساب
            </button>
          </div>
        </>
      )}

      {/* Switch to Login */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-gray-600">
          لديك حساب بالفعل؟{' '}
          <button
            onClick={() => {
              setMode('login');
              setStep(1);
            }}
            className="text-[#4d8080] font-black hover:underline"
          >
            تسجيل الدخول
          </button>
        </p>
      </div>

      {/* Back to Role Selection */}
      {step === 1 && (
        <div className="text-center">
          <button
            onClick={() => setMode('role-select')}
            className="text-gray-500 text-sm hover:text-gray-700 font-bold"
          >
            ← العودة لاختيار نوع الحساب
          </button>
        </div>
      )}
    </div>
  );
};

  const renderOtpForm = () => (
    <div className="space-y-6">
      {/* OTP Info */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
          <Shield className="text-[#4d8080]" size={32} />
        </div>
        <h3 className="text-xl font-black text-gray-900">
          تحقق من هويتك
        </h3>
        <p className="text-gray-600">
          تم إرسال رمز التحقق إلى
        </p>
        <p className="text-[#4d8080] font-black text-lg" dir="ltr">
          {formData.phone || formData.email || formData.identifier}
        </p>
      </div>

      {/* OTP Input */}
      <div className="space-y-4">
        <label className="block text-sm font-bold text-gray-700 text-center">
          أدخل رمز التحقق المكون من 6 أرقام
        </label>
        <div className="flex gap-2 justify-center" dir="ltr">
          {formData.otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              className="w-12 h-14 text-center text-2xl font-black border-2 border-gray-200 rounded-xl focus:border-[#4d8080] focus:outline-none transition-colors"
            />
          ))}
        </div>
      </div>

      {/* Resend OTP */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          لم تستلم الرمز؟
        </p>
        <button className="text-[#4d8080] font-black hover:underline text-sm">
          إعادة إرسال الرمز (00:45)
        </button>
      </div>

      {/* Verify Button */}
      <button
        onClick={() => {
          // Handle verification
          onClose();
        }}
        className="w-full bg-[#4d8080] text-white py-3.5 rounded-xl font-black text-lg hover:bg-[#3d6666] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <CheckCircle2 size={20} />
        <span>تأكيد الرمز</span>
      </button>

      {/* Back Button */}
      <button
        onClick={() => setMode(mode === 'otp' && step === 2 ? 'signup' : 'login')}
        className="w-full text-gray-600 py-2 font-bold hover:text-gray-900 transition-colors"
      >
        العودة
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" style={{ paddingTop: '360px' }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[65vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-right">
            <h2 className="text-2xl font-black text-gray-900">
              {mode === 'role-select' ? 'اختر نوع حسابك' : mode === 'login' ? 'تسجيل الدخول' : mode === 'signup' ? 'إنشاء حساب جديد' : 'التحقق من الهوية'}
            </h2>
            {mode === 'signup' && (
              <p className="text-sm text-gray-500 mt-1">
                الخطوة {step} من 2
              </p>
            )}
            {mode === 'role-select' && (
              <p className="text-sm text-gray-500 mt-1">
                ابدأ رحلتك مع أمان إيفر
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {mode === 'role-select' && renderRoleSelection()}
          {mode === 'login' && renderLoginForm()}
          {mode === 'signup' && renderSignupForm()}
          {mode === 'otp' && renderOtpForm()}
        </div>

        {/* Note for Subscribers */}
        {mode === 'role-select' && (
          <div className="px-6 pb-6">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-4 text-right">
              <p className="text-sm text-gray-800">
                <strong className="text-[#4d8080]">💳 مشترك بالفعل؟</strong> اختر "مشترك" للدخول مباشرة باستخدام رقم جوالك أو بريدك الإلكتروني المسجل في بطاقة أمان إيفر.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
