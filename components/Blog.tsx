
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
  sourceName: string;
  sourceUrl: string;
}

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  const posts = t('blog.posts', { returnObjects: true }) as BlogPost[];

  return (
    <section id="blog" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-[#4d8080] rounded-full text-xs font-black mb-4 border border-teal-100"
          >
            <span className="w-2 h-2 bg-[#4d8080] rounded-full animate-pulse" />
            {t('blog.title')}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
          >
            {t('blog.subtitle')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#4d8080] text-[10px] font-black rounded-full shadow-sm border border-white/20">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold mb-4">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-snug group-hover:text-[#4d8080] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase mb-1">{t('blog.source')}</span>
                    <a 
                      href={post.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-black text-[#4d8080] hover:underline flex items-center gap-1"
                    >
                      {post.sourceName}
                      <ExternalLink size={10} />
                    </a>
                  </div>
                  
                  <button className="w-10 h-10 rounded-full bg-teal-50 text-[#4d8080] flex items-center justify-center group-hover:bg-[#4d8080] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-gray-800 transition-all shadow-xl hover:scale-105 active:scale-95">
            {t('blog.readMore')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
