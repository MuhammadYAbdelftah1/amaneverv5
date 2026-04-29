
import React, { useState, useMemo } from 'react';
import { MapPin, Star, Phone, Clock, Search, Filter, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

type Provider = {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  distance: number;
  status: 'open' | 'closed';
  address: string;
  image: string;
};

const providers: Provider[] = [
  {
    id: 1,
    name: 'Jeddah International Hospital',
    category: 'hospitals',
    rating: 4.8,
    reviews: 1250,
    distance: 1.2,
    status: 'open',
    address: 'Al-Rawdah District, Jeddah',
    image: 'https://images.unsplash.com/photo-1587350859728-1176c2bc88fb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Derma Clinic Premium',
    category: 'beauty',
    rating: 4.9,
    reviews: 850,
    distance: 2.5,
    status: 'open',
    address: 'Tahliah Street, Jeddah',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Central Health Pharmacy',
    category: 'pharmacies',
    rating: 4.7,
    reviews: 2100,
    distance: 0.8,
    status: 'open',
    address: 'King Abdullah Rd, Jeddah',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Elite Orthopedics Center',
    category: 'clinics',
    rating: 4.6,
    reviews: 420,
    distance: 3.1,
    status: 'closed',
    address: 'Sari Street, Jeddah',
    image: 'https://images.unsplash.com/photo-1629909613654-28a3a7c4d4e9?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    name: 'Aman General Clinic',
    category: 'clinics',
    rating: 4.5,
    reviews: 650,
    distance: 1.5,
    status: 'open',
    address: 'Al-Fayha, Jeddah',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d3fd0d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    name: 'Beauty & Glow Spa',
    category: 'beauty',
    rating: 4.9,
    reviews: 320,
    distance: 4.2,
    status: 'open',
    address: 'Obhur, Jeddah',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=400'
  }
];

const NearbyProviders: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = useMemo(() => {
    return providers.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: 'all', label: t('nearbyProviders.categories.all') },
    { id: 'hospitals', label: t('nearbyProviders.categories.hospitals') },
    { id: 'clinics', label: t('nearbyProviders.categories.clinics') },
    { id: 'pharmacies', label: t('nearbyProviders.categories.pharmacies') },
    { id: 'beauty', label: t('nearbyProviders.categories.beauty') }
  ];

  return (
    <section id="nearby-providers" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-[#003d3d] mb-4 leading-tight">
                {t('nearbyProviders.title')}
              </h2>
              <p className="text-gray-500 font-bold text-lg">
                {t('nearbyProviders.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="shrink-0">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder={isRtl ? 'البحث عن مراكز...' : 'Search for centers...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl w-full md:w-[300px] font-bold focus:outline-none focus:ring-2 focus:ring-[#4d8080]/20 focus:bg-white transition-all shadow-sm"
                />
             </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-10 overflow-x-auto pb-4 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-black whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-[#4d8080] text-white shadow-lg shadow-teal-900/20' 
                  : 'bg-gray-50 text-gray-400 hover:bg-teal-50 hover:text-[#4d8080]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProviders.map((provider) => (
              <motion.div
                layout
                key={provider.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={provider.image} 
                    alt={provider.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-black text-gray-800">{provider.rating}</span>
                      <span className="text-[10px] text-gray-400 font-bold">({provider.reviews})</span>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${
                      provider.status === 'open' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-red-500/90 text-white'
                    }`}>
                      {provider.status === 'open' ? (isRtl ? 'مفتوح' : 'Open') : (isRtl ? 'مغلق' : 'Closed')}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-teal-50 text-[#4d8080] rounded-lg text-[10px] font-bold uppercase tracking-wide">
                      {t(`nearbyProviders.categories.${provider.category}`)}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold">
                      <MapPin size={14} />
                      <span>{provider.distance} {t('nearbyProviders.distance')}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 truncate group-hover:text-[#4d8080] transition-colors line-clamp-1">
                    {provider.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-6 text-sm font-medium">
                    <MapPin size={16} className="shrink-0" />
                    <span className="truncate">{provider.address}</span>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button className="flex-1 py-3 bg-[#4d8080] text-white rounded-xl font-black text-sm shadow-lg shadow-teal-900/10 hover:bg-[#3d6b6b] transition-all transform hover:-translate-y-1 active:scale-95">
                      {t('nearbyProviders.bookNow')}
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-teal-50 hover:text-[#4d8080] transition-all">
                      <ArrowRight size={20} className={isRtl ? 'rotate-180' : ''} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={40} className="text-gray-300" />
            </div>
            <h4 className="text-2xl font-black text-gray-400 mb-2">{t('nearby.noResults')}</h4>
            <p className="text-gray-400 font-bold">{t('nearby.noResultsDesc')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NearbyProviders;
