
import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, Navigation, Hospital, Loader2, 
  Activity, Globe, Shield, Zap, Radio, 
  Clock, Siren, Users, Search, X, BarChart3
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ToastType } from './Toast';

interface NearbyServicesProps {
  notify?: (message: string, type: ToastType) => void;
}

interface DispatchLog {
  id: string;
  time: string;
  event: string;
  type: 'info' | 'success' | 'warning';
}

interface Asset {
  id: string;
  label: string;
  type: 'ambulance' | 'center' | 'doctor';
  top: string;
  left: string;
  active?: boolean;
  delay?: number;
}

const NearbyServices: React.FC<NearbyServicesProps> = ({ notify }) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [scanStep, setScanStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({ providers: 142, ambulances: 18, patientsServed: 1240 });
  const isRtl = i18n.language === 'ar';
  
  // Dynamic Assets State
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', label: 'AE-04', type: 'ambulance', top: '30%', left: '40%', active: true },
    { id: '2', label: 'MC-JED-01', type: 'center', top: '60%', left: '25%' },
    { id: '3', label: 'AE-12-RESCUE', type: 'ambulance', top: '45%', left: '75%', delay: 2000, active: true },
    { id: '4', label: 'AE-PRO-DR', type: 'doctor', top: '20%', left: '80%', delay: 1000 },
    { id: '5', label: 'MC-NORTH', type: 'center', top: '15%', left: '15%', delay: 500 },
    { id: '6', label: 'AE-09-QUICK', type: 'ambulance', top: '75%', left: '60%', active: true },
  ]);

  const [logs, setLogs] = useState<DispatchLog[]>([
    { id: '1', time: '14:20', event: t('nearby.logs.0'), type: 'warning' },
    { id: '2', time: '14:18', event: t('nearby.logs.1'), type: 'success' },
    { id: '3', time: '14:15', event: t('nearby.logs.2'), type: 'info' },
  ]);

  // Filtering Logic
  const filteredAssets = useMemo(() => {
    if (!searchQuery.trim()) return assets;
    const query = searchQuery.toLowerCase();
    return assets.filter(asset => 
      asset.label.toLowerCase().includes(query) || 
      asset.type.toLowerCase().includes(query)
    );
  }, [searchQuery, assets]);

  // Chart Data Calculation
  const chartData = useMemo(() => {
    const counts = { ambulance: 0, center: 0, doctor: 0 };
    filteredAssets.forEach(a => counts[a.type]++);
    const total = filteredAssets.length || 1;
    return [
      { label: t('nearby.ambulance'), count: counts.ambulance, color: 'bg-amber-500', pct: (counts.ambulance / total) * 100 },
      { label: t('nearby.center'), count: counts.center, color: 'bg-[#4d8080]', pct: (counts.center / total) * 100 },
      { label: t('nearby.doctor'), count: counts.doctor, color: 'bg-blue-500', pct: (counts.doctor / total) * 100 },
    ];
  }, [filteredAssets, t]);

  // Real-time Simulation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Move assets
      setAssets(prev => prev.map(asset => {
        if (!asset.active) return asset;
        
        const parsePos = (val: string) => parseFloat(val);
        const currentTop = parsePos(asset.top);
        const currentLeft = parsePos(asset.left);
        
        const deltaTop = (Math.random() * 6) - 3;
        const deltaLeft = (Math.random() * 6) - 3;
        
        const newTop = Math.min(90, Math.max(10, currentTop + deltaTop));
        const newLeft = Math.min(90, Math.max(10, currentLeft + deltaLeft));

        return { ...asset, top: `${newTop}%`, left: `${newLeft}%` };
      }));

      // 2. Update Stats
      setStats(prev => ({
        ...prev,
        providers: prev.providers + (Math.random() > 0.5 ? 1 : -1),
        ambulances: Math.max(5, prev.ambulances + (Math.random() > 0.7 ? 1 : -1)),
        patientsServed: prev.patientsServed + (Math.random() > 0.9 ? 1 : 0)
      }));

      // 3. Add random logs
      if (Math.random() > 0.7) {
        const events = [
          t('nearby.randomLogs.0'),
          t('nearby.randomLogs.1'),
          t('nearby.randomLogs.2'),
          t('nearby.randomLogs.3'),
          t('nearby.randomLogs.4')
        ];
        const newLog: DispatchLog = {
          id: `${Date.now()}-${Math.random()}`,
          time: new Date().toLocaleTimeString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
          event: events[Math.floor(Math.random() * events.length)],
          type: Math.random() > 0.7 ? 'warning' : 'info'
        };
        setLogs(prev => [newLog, ...prev.slice(0, 3)]); // Keep max 4 to fit in fixed height
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [t, i18n.language]);

  const handleGetLocation = () => {
    setLoading(true);
    setScanStep(1);
    setTimeout(() => setScanStep(2), 1500);
    setTimeout(() => setScanStep(3), 3000);

    if (!navigator.geolocation) {
      setTimeout(() => {
        setLoading(false);
        setScanStep(0);
        notify?.(t('nearby.geoNotSupported'), 'error');
      }, 3500);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setTimeout(() => {
          setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setLoading(false);
          setScanStep(0);
          notify?.(t('nearby.geoSuccess'), 'success');
        }, 4500);
      },
      () => {
        setTimeout(() => {
          setLoading(false);
          setScanStep(0);
          notify?.(t('nearby.geoError'), 'error');
        }, 4500);
      }
    );
  };

  const mapUrl = location 
    ? `https://maps.google.com/maps?q=${location.lat},${location.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    : `https://maps.google.com/maps?q=Jeddah,KSA&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const scanLabels = [
    '',
    t('nearby.scanSteps.0'),
    t('nearby.scanSteps.1'),
    t('nearby.scanSteps.2')
  ];

  return (
    <section className="py-24 bg-[#002b2b] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stats & Info */}
          <div className={`lg:col-span-4 space-y-8 order-2 lg:order-1 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#4d8080]/10 border border-[#4d8080]/20 rounded-full text-[#4d8080] text-sm font-black ${isRtl ? 'flex-row' : 'flex-row'}`}>
              <Radio size={16} className="animate-pulse" />
              {t('nearby.liveCenter')}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              {t('nearby.title')} <br />
              <span className="text-[#4d8080]">{t('nearby.subtitle')}</span>
            </h2>

            {/* Asset Distribution Chart */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-sm text-white/80 flex items-center gap-2">
                  <BarChart3 size={16} className="text-[#4d8080]" />
                  {t('nearby.distribution')}
                </h3>
              </div>
              <div className="flex items-end gap-3 h-32 px-2">
                {chartData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full relative bg-white/5 rounded-t-lg overflow-hidden h-full flex items-end">
                      <div 
                        className={`w-full ${data.color} transition-all duration-1000 ease-out relative group-hover:opacity-110`}
                        style={{ height: `${Math.max(data.pct, 5)}%` }}
                      >
                         <div className="absolute top-0 inset-x-0 h-[1px] bg-white/50"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="block text-xs font-bold text-white/60">{data.label}</span>
                      <span className="block text-sm font-black text-white">{data.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex items-center gap-5 group hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-[#4d8080]/20 text-[#4d8080] rounded-2xl flex items-center justify-center border border-[#4d8080]/30">
                  <Hospital size={28} />
                </div>
                <div>
                  <div className="text-2xl font-black">{stats.providers}</div>
                  <div className="text-xs text-[#4d8080]/60 font-bold">{t('nearby.activeProviders')}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                <Clock size={12} /> {t('nearby.fieldLogs')}
              </h4>
              {/* Fixed height container to prevent layout jumping */}
              <div className="space-y-3 min-h-[140px]">
                {logs.map(log => (
                  <div key={log.id} className={`flex items-center gap-4 text-xs animate-in slide-in-from-right-4 duration-500 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                    <span className="text-white/30 font-mono">{log.time}</span>
                    <span className={`w-2 h-2 rounded-full ${log.type === 'warning' ? 'bg-amber-400' : 'bg-[#4d8080]'}`}></span>
                    <span className="font-bold text-white/80">{log.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Map with Search */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
            <div className="relative group/search">
               <div className={`absolute inset-y-0 ${isRtl ? 'right-0 pr-6' : 'left-0 pl-6'} flex items-center pointer-events-none text-[#4d8080] group-focus-within/search:text-white transition-colors`}>
                 <Search size={22} />
               </div>
               <input 
                 type="text" 
                 placeholder={t('nearby.searchPlaceholder')}
                 className={`w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 focus:border-[#4d8080]/50 outline-none ${isRtl ? 'pr-14 pl-12' : 'pl-14 pr-12'} py-5 rounded-[2rem] font-black text-white placeholder:text-white/30 transition-all shadow-2xl`}
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
               <div className={`absolute inset-y-0 ${isRtl ? 'left-6' : 'right-6'} flex items-center`}>
                 {searchQuery ? (
                   <button onClick={() => setSearchQuery('')} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all">
                     <X size={18} />
                   </button>
                 ) : (
                   <div className="flex items-center gap-2 px-3 py-1 bg-[#4d8080]/20 border border-[#4d8080]/30 rounded-full">
                      <span className="text-[10px] font-black text-[#4d8080] uppercase tracking-widest">Tracking {filteredAssets.length} Units</span>
                   </div>
                 )}
               </div>
            </div>

            <div className="relative group">
              <div className={`absolute -top-4 ${isRtl ? '-right-4' : '-left-4'} w-12 h-12 border-t-4 ${isRtl ? 'border-r-4' : 'border-l-4'} border-teal-500/40 ${isRtl ? 'rounded-tr-3xl' : 'rounded-tl-3xl'}`}></div>
              <div className={`absolute -bottom-4 ${isRtl ? '-left-4' : '-right-4'} w-12 h-12 border-b-4 ${isRtl ? 'border-l-4' : 'border-r-4'} border-teal-500/40 ${isRtl ? 'rounded-bl-3xl' : 'rounded-br-3xl'}`}></div>
              
              <div className="relative w-full aspect-[16/10] bg-[#001a1a] rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <iframe
                  title="Tactical Map"
                  width="100%"
                  height="100%"
                  src={mapUrl}
                  className={`transition-all duration-1000 grayscale-[0.8] contrast-[1.2] brightness-[0.7] ${loading ? 'opacity-30 blur-md' : 'opacity-100'}`}
                  style={{ filter: 'invert(90%) hue-rotate(150deg) brightness(0.8) contrast(1.3)' }}
                />

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] origin-center animate-[spin_10s_linear_infinite] opacity-20">
                     <div className="w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/40 to-transparent rounded-tr-full"></div>
                  </div>

                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #2dd4bf 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                  {filteredAssets.map(asset => (
                    <AssetMarker 
                      key={asset.id}
                      top={asset.top} 
                      left={asset.left} 
                      label={asset.label} 
                      type={asset.type} 
                      active={asset.active} 
                      delay={asset.delay} 
                      isRtl={isRtl}
                    />
                  ))}

                  {filteredAssets.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                       <div className="text-center p-8 bg-black/60 rounded-3xl border border-white/10">
                          <Search size={48} className="mx-auto text-teal-500 mb-4 opacity-50" />
                          <h4 className="text-xl font-black mb-1">{t('nearby.noResults')}</h4>
                          <p className="text-sm text-white/50 font-bold">{t('nearby.noResultsDesc')}</p>
                       </div>
                    </div>
                  )}

                  <div className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'} p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl`}>
                    <div className="flex items-center gap-3 mb-2">
                       <Zap size={14} className="text-[#4d8080]" />
                       <span className="text-[10px] font-black tracking-tighter">{t('nearby.detectionSystem')}</span>
                    </div>
                    <div className="font-mono text-[9px] text-teal-200 opacity-60">
                      LAT: {location?.lat.toFixed(4) || '21.5433'}<br />
                      LNG: {location?.lng.toFixed(4) || '39.1728'}<br />
                      QUERY: {searchQuery || 'NONE'}
                    </div>
                  </div>
                </div>

                {loading && (
                  <div className="absolute inset-0 bg-[#002b2b]/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                    <div className="relative mb-8">
                       <div className="w-24 h-24 border-4 border-[#4d8080]/20 border-t-[#4d8080] rounded-full animate-spin"></div>
                       <div className="absolute inset-0 flex items-center justify-center text-[#4d8080]">
                         <Navigation size={32} />
                       </div>
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-white">{t('nearby.protocolTitle')}</h3>
                    <p className="text-[#4d8080] font-bold mb-6">{scanLabels[scanStep]}</p>
                    <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-[#4d8080] transition-all duration-500 ease-out" 
                         style={{ width: `${(scanStep / 3) * 100}%` }}
                       ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-between">
              <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#4d8080] rounded-full"></span>
                    <span className="text-xs font-bold text-white/60">{t('nearby.center')}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    <span className="text-xs font-bold text-white/60">{t('nearby.ambulance')}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-xs font-bold text-white/60">{t('nearby.doctor')}</span>
                 </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleGetLocation}
                  disabled={loading}
                  className="px-10 py-5 bg-[#4d8080] text-white rounded-3xl font-black flex items-center gap-3 hover:bg-[#3d6666] transition-all disabled:opacity-50 shadow-2xl shadow-teal-900/40"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Navigation size={22} />}
                  {t('nearby.startScan')}
                </button>
                <button className="p-5 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                  <Globe size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AssetMarker = ({ top, left, label, type, active, delay = 0, isRtl }: any) => {
  const color = type === 'ambulance' ? 'bg-amber-500' : type === 'doctor' ? 'bg-blue-500' : 'bg-teal-500';
  
  return (
    <div 
      className="absolute flex flex-col items-center transition-all duration-[2000ms] ease-linear"
      style={{ top, left }}
    >
      <div className={`relative group/marker cursor-crosshair animate-in fade-in zoom-in duration-500`} style={{ animationDelay: `${delay}ms` }}>
        <div className={`absolute -inset-4 ${color} rounded-full opacity-20 animate-ping`}></div>
        <div className={`w-3 h-3 ${color} rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border-2 border-white`}></div>
        <div className={`absolute top-5 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-black tracking-widest text-white whitespace-nowrap opacity-60 group-hover/marker:opacity-100 transition-opacity`}>
          {label} {active && (isRtl ? '• متحرك' : '• MOVING')}
        </div>
      </div>
    </div>
  );
};

export default NearbyServices;
