
import React, { useState } from 'react';
import { 
  Hospital, Stethoscope, Pill, Dumbbell, Apple, Heart, 
  Sparkles, Eye, Accessibility, Package, FlaskConical, Baby, 
  Glasses, Waves, LucideIcon 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const MedicalNetwork: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [activeTab, setActiveTab] = useState<'medical' | 'health'>('medical');

  const medicalData = [
    { 
      title: isRtl ? 'مستشفيات كبرى' : 'Major Hospitals', 
      desc: isRtl ? 'شراكات استراتيجية مع أرقى وأكبر المستشفيات في المملكة' : 'Strategic partnerships with the finest and largest hospitals in the Kingdom',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d3fd0d?auto=format&fit=crop&q=80&w=600',
      icon: Hospital 
    },
    { 
      title: isRtl ? 'مجمعات وعيادات تخصصية' : 'Specialized Centers & Clinics', 
      desc: isRtl ? 'مراكز طبية متكاملة في كافة أحياء ومدن المملكة' : 'Integrated medical centers in all neighborhoods and cities of the Kingdom',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      icon: Stethoscope 
    },
    { 
      title: isRtl ? 'الاسنان والجلدية والتجميل' : 'Dental, Derma & Beauty', 
      desc: isRtl ? 'رعاية متكاملة لصحة الأسنان والجلدية وأحدث الخدمات التجميلية' : 'Integrated care for dental and dermatology health and latest cosmetic services',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
      icon: Sparkles 
    },
    { 
      title: isRtl ? 'العيون والليزر' : 'Ophthalmology & Laser', 
      desc: isRtl ? 'أفضل مراكز تصحيح النظر والعناية بصحة العيون بأحدث تقنيات الليزر' : 'Best vision correction centers and eye health care with latest laser technologies',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600',
      icon: Eye 
    },
    { 
      title: isRtl ? 'العلاج الطبيعي' : 'Physical Therapy', 
      desc: isRtl ? 'برامج إعادة التأهيل والعلاج الطبيعي التخصصي تحت إشراف خبراء' : 'Specialized rehabilitation and physical therapy programs under expert supervision',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
      icon: Accessibility 
    },
    { 
      title: isRtl ? 'المستلزمات الطبية' : 'Medical Supplies', 
      desc: isRtl ? 'تأمين كافة الأجهزة والمستلزمات الطبية المنزلية بجودة عالية' : 'Providing all high-quality home medical devices and supplies',
      image: 'https://images.unsplash.com/photo-1581594634731-137b8d80f807?auto=format&fit=crop&q=80&w=600',
      icon: Package 
    },
    { 
      title: isRtl ? 'صيدليات معتمده' : 'Certified Pharmacies', 
      desc: isRtl ? 'شبكة واسعة من كبرى الصيدليات لتأمين كافة احتياجاتكم الدوائية' : 'A wide network of major pharmacies to secure all your medicinal needs',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600',
      icon: Pill 
    },
    { 
      title: isRtl ? 'جميع الكشوفات والتحاليل والأشعه' : 'Lab Tests & Radiology', 
      desc: isRtl ? 'وصول مباشر لكافة أنواع الفحوصات المخبرية والأشعة التشخيصية' : 'Direct access to all types of laboratory tests and diagnostic radiology',
      image: 'https://images.unsplash.com/photo-1579154235602-3c2ae20db3fd?auto=format&fit=crop&q=80&w=600',
      icon: FlaskConical 
    },
    { 
      title: isRtl ? 'متابعه الحمل' : 'Pregnancy Follow-up', 
      desc: isRtl ? 'برامج متابعة الحمل ورعاية الأمومة والطفولة في أرقى المراكز' : 'Pregnancy monitoring, mother and child care programs in the finest centers',
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=600',
      icon: Baby 
    },
    { 
      title: isRtl ? 'كافة العمليات الجراحية' : 'All Surgical Operations', 
      desc: isRtl ? 'تغطية شاملة للعمليات الجراحية الكبرى والصغرى بأعلى المعايير' : 'Comprehensive coverage for major and minor surgical operations with highest standards',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=600',
      icon: Heart 
    }
  ];

  const healthData = [
    { 
      title: isRtl ? 'التغذية الصحية والمكملات الغذائية' : 'Healthy Nutrition & Supplements', 
      desc: isRtl ? 'استشارات غذائية ومكملات معتمدة لنمط حياة أكثر صحة' : 'Certified nutritional consultations and supplements for a healthier lifestyle',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
      icon: Apple 
    },
    { 
      title: isRtl ? 'الأندية الرياضية' : 'Sports Clubs', 
      desc: isRtl ? 'خصومات حصرية على اشتراكات أرقى مراكز اللياقة والأندية الرياضية' : 'Exclusive discounts on subscriptions to the finest fitness centers and sports clubs',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
      icon: Dumbbell 
    },
    { 
      title: isRtl ? 'البصريات' : 'Optics', 
      desc: isRtl ? 'أفضل مزودي النظارات والعدسات والخدمات البصرية المعتمدة' : 'Best providers of eyeglasses, lenses, and certified optical services',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
      icon: Glasses 
    },
    { 
      title: isRtl ? 'السبأ SPA والمساج' : 'SPA & Massage', 
      desc: isRtl ? 'خدمات الرفاهية والمساج العلاجي لتعزيز الصحة والنشاط' : 'Wellness services and therapeutic massage to enhance health and activity',
      image: 'https://images.unsplash.com/photo-1544161515-4af6b1d46afc?auto=format&fit=crop&q=80&w=600',
      icon: Waves 
    }
  ];

  const currentItems = activeTab === 'medical' ? medicalData : healthData;

  return (
    <section id="network" className="py-12 md:py-24 bg-[#f8fcfc] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-black text-[#003d3d] mb-6 md:mb-8 leading-tight">
              {t('network.title')}
            </h2>
          </motion.div>
          
          <div className="inline-flex flex-col sm:flex-row bg-white p-2 rounded-2xl md:rounded-[1.5rem] shadow-xl border border-teal-100 mb-8 md:mb-12 w-full sm:w-auto">
            <button 
              onClick={() => setActiveTab('medical')}
              className={`px-6 md:px-10 py-3 rounded-xl font-black transition-all text-sm md:text-base ${activeTab === 'medical' ? 'bg-[#4d8080] text-white shadow-lg' : 'text-gray-400 hover:text-teal-600'}`}
            >
              {t('network.medicalTab')}
            </button>
            <button 
              onClick={() => setActiveTab('health')}
              className={`px-6 md:px-10 py-3 rounded-xl font-black transition-all text-sm md:text-base ${activeTab === 'health' ? 'bg-[#4d8080] text-white shadow-lg' : 'text-gray-400 hover:text-teal-600'}`}
            >
              {t('network.healthTab')}
            </button>
          </div>
        </div>

        {/* Horizontal Moving Carousel */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Fading Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#f8fcfc] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#f8fcfc] to-transparent z-10 pointer-events-none" />

          <motion.div 
            key={activeTab}
            initial={{ x: 0 }}
            animate={{ x: isRtl ? ["50%", "0%"] : ["0%", "-50%"] }}
            transition={{ 
              duration: currentItems.length * 5, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex gap-6 md:gap-10 w-max whitespace-nowrap"
          >
            {/* Multiplied items for a truly seamless and long loop */}
            {[...currentItems, ...currentItems, ...currentItems, ...currentItems].map((item: any, idx) => (
              <div 
                key={`${item.title}-${idx}`} 
                className="bg-white rounded-[2.5rem] shadow-sm border border-teal-50 flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 w-[280px] md:w-[350px] shrink-0 group"
              >
                {/* Image Section */}
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'} w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={24} className="text-[#4d8080]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-lg md:text-xl font-black text-gray-800 mb-2 whitespace-normal">{item.title}</h3>
                  <p className="text-gray-500 font-bold text-xs md:text-sm leading-relaxed whitespace-normal line-clamp-2">{item.desc}</p>
                  <div className="mt-6 px-4 py-1.5 rounded-full border border-teal-100 text-[#4d8080] text-[10px] font-black uppercase tracking-wider">
                    {activeTab === 'medical' ? t('network.medicalTab') : t('network.healthTab')}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedicalNetwork;
