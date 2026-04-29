
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Smartphone, Apple, PlayCircle, X, Info } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  nameEn: string;
  specialty: string;
  specialtyEn: string;
  hospital: string;
  hospitalEn: string;
  image: string;
  brief: string;
  briefEn: string;
  experience: string;
  experienceEn: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "د. خالد السقاف",
    nameEn: "Dr. Khalid Al-Saqqaf",
    specialty: "استشاري أمراض القلب",
    specialtyEn: "Consultant Cardiologist",
    hospital: "مستشفى الملك فهد",
    hospitalEn: "King Fahd Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    brief: "خبير في جراحة القسطرة وأمراض صمامات القلب مع خبرة تزيد عن 15 عاماً.",
    briefEn: "Expert in catheter surgery and valvular heart diseases with over 15 years of experience.",
    experience: "عضو زميل في الكلية الأمريكية لأمراض القلب.",
    experienceEn: "Fellow of the American College of Cardiology."
  },
  {
    id: 2,
    name: "د. هند الغامدي",
    nameEn: "Dr. Hind Al-Ghamdi",
    specialty: "استشارية طب الأطفال",
    specialtyEn: "Consultant Pediatrician",
    hospital: "مركز الرعاية التخصصي",
    hospitalEn: "Specialized Care Center",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    brief: "متخصصة في طب الأطفال لحديثي الولادة ومتابعة النمو البدني والذهني.",
    briefEn: "Specializing in neonatal pediatrics and monitoring physical and mental growth.",
    experience: "البورد السعودي في طب الأطفال.",
    experienceEn: "Saudi Board in Pediatrics."
  },
  {
    id: 3,
    name: "د. عمر منصور",
    nameEn: "Dr. Omar Mansour",
    specialty: "استشاري جراحة العظام",
    specialtyEn: "Consultant Orthopedic Surgeon",
    hospital: "مستشفى الأمل التخصصي",
    hospitalEn: "Al-Amal Specialized Hospital",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    brief: "خبير في استبدال المفاصل وإصابات الملاعب والطب الرياضي.",
    briefEn: "Expert in joint replacement, sports injuries, and sports medicine.",
    experience: "زمالة جراحة العظام من جامعة سيدني.",
    experienceEn: "Orthopedic Fellowship from the University of Sydney."
  },
  {
    id: 4,
    name: "د. سارة بخش",
    nameEn: "Dr. Sarah Bakhsh",
    specialty: "استشارية الأمراض الجلدية",
    specialtyEn: "Consultant Dermatologist",
    hospital: "مجمع النخبة الطبي",
    hospitalEn: "Elite Medical Complex",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    brief: "متخصصة في علاج الأمراض الجلدية المزمنة وتقنيات الليزر التجميلي.",
    briefEn: "Specialize in treating chronic skin diseases and cosmetic laser technologies.",
    experience: "عضو الجمعية الأوروبية للأمراض الجلدية.",
    experienceEn: "Member of the European Academy of Dermatology."
  }
];

const AvailableDoctors: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section id="available-doctors" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#003d3d] mb-4"
          >
            {isRtl ? 'أطباء متاحون 24 ساعة' : 'Doctors Available 24/7'}
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#4d8080] mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <motion.div 
            animate={{ x: isRtl ? ["50%", "0%"] : ["0%", "-50%"] }}
            transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
            }}
            className="flex gap-6 w-max whitespace-nowrap"
          >
            {[...doctors, ...doctors, ...doctors].map((doc, idx) => (
              <div 
                key={`${doc.id}-${idx}`}
                className="w-[300px] md:w-[350px] bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group p-6 shrink-0"
              >
                {/* Doctor Image */}
                <div className="h-48 rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={doc.image} 
                    alt={isRtl ? doc.name : doc.nameEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    {isRtl ? 'متاح الآن' : 'Available Now'}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{isRtl ? doc.name : doc.nameEn}</h3>
                  <p className="text-[#4d8080] font-bold text-sm mb-3 uppercase tracking-wide">
                    {isRtl ? doc.specialty : doc.specialtyEn}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs font-bold">
                    <Info size={14} className="text-[#4d8080]" />
                    <span>{isRtl ? doc.hospital : doc.hospitalEn}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                   <button 
                     onClick={() => setSelectedDoctor(doc)}
                     className="py-3 px-4 bg-slate-50 text-gray-600 rounded-2xl font-black text-xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                   >
                     {isRtl ? 'الملف الشخصي' : 'Profile'}
                   </button>
                   <button 
                     onClick={() => setIsBookingModalOpen(true)}
                     className="py-3 px-4 bg-[#4d8080] text-white rounded-2xl font-black text-xs hover:bg-[#3d6666] transition-colors shadow-lg shadow-teal-900/10 flex items-center justify-center gap-2"
                   >
                     <Calendar size={14} />
                     {isRtl ? 'حجز موعد' : 'Book Now'}
                   </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Doctor Detail Modal */}
        <AnimatePresence>
          {selectedDoctor && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDoctor(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
              >
                <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative p-8 md:p-12">
                   <button 
                     onClick={() => setSelectedDoctor(null)}
                     className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-gray-400 hover:text-gray-900 transition-colors"
                   >
                     <X size={24} />
                   </button>
                   
                   <div className="text-center mb-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-50">
                        <img src={selectedDoctor.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900">{isRtl ? selectedDoctor.name : selectedDoctor.nameEn}</h3>
                      <p className="text-[#4d8080] font-black">{isRtl ? selectedDoctor.specialty : selectedDoctor.specialtyEn}</p>
                   </div>

                   <div className="space-y-6">
                      <div className={isRtl ? 'text-right' : 'text-left'}>
                         <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
                           {isRtl ? 'نبذة' : 'Brief'}
                         </h4>
                         <p className="text-gray-600 font-bold leading-relaxed">
                           {isRtl ? selectedDoctor.brief : selectedDoctor.briefEn}
                         </p>
                      </div>
                      <div className={isRtl ? 'text-right' : 'text-left'}>
                         <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
                           {isRtl ? 'الخبرات' : 'Experience'}
                         </h4>
                         <p className="text-gray-600 font-bold leading-relaxed">
                           {isRtl ? selectedDoctor.experience : selectedDoctor.experienceEn}
                         </p>
                      </div>
                   </div>

                   <button 
                    onClick={() => { setSelectedDoctor(null); setIsBookingModalOpen(true); }}
                    className="w-full mt-10 py-5 bg-[#4d8080] text-white rounded-2xl font-black text-lg shadow-xl shadow-teal-900/10 hover:bg-[#3d6666] transition-all"
                   >
                     {isRtl ? 'حجز موعد الآن' : 'Book Appointment Now'}
                   </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Booking App CTA Modal */}
        <AnimatePresence>
          {isBookingModalOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsBookingModalOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-[111] flex items-center justify-center p-4 pointer-events-none"
              >
                <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative p-8 text-center">
                   <button 
                     onClick={() => setIsBookingModalOpen(false)}
                     className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-gray-400 hover:text-gray-900 transition-colors"
                   >
                     <X size={20} />
                   </button>

                   <div className="w-20 h-20 bg-teal-50 text-[#4d8080] rounded-3xl flex items-center justify-center mx-auto mb-6">
                     <Smartphone size={40} />
                   </div>

                   <h3 className="text-2xl font-black text-gray-900 mb-2">
                     {isRtl ? 'حمل التطبيق الآن' : 'Download App Now'}
                   </h3>
                   <p className="text-gray-500 font-bold mb-8">
                     {isRtl ? 'لحجز موعدك والاستفادة من كافة خدماتنا، يرجى تحميل تطبيق أمان إيفر.' : 'To book your appointment and benefit from all our services, please download the Aman Ever app.'}
                   </p>

                   <div className="flex flex-col gap-4">
                      <button className="flex items-center justify-center gap-3 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                        <Apple size={24} />
                        <span className="text-left leading-tight">
                          <span className="block text-[8px] opacity-60">Download on the</span>
                          <span className="block text-sm">App Store</span>
                        </span>
                      </button>
                      <button className="flex items-center justify-center gap-3 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                        <PlayCircle size={24} />
                        <span className="text-left leading-tight">
                          <span className="block text-[8px] opacity-60">GET IT ON</span>
                          <span className="block text-sm">Google Play</span>
                        </span>
                      </button>
                      <button className="flex items-center justify-center gap-3 py-4 bg-[#4d8080] text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                        <Smartphone size={24} />
                        <span className="text-left leading-tight">
                          <span className="block text-[8px] opacity-60">Explore it on</span>
                          <span className="block text-sm">App Gallery</span>
                        </span>
                      </button>
                   </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AvailableDoctors;
