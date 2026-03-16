import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface GalleryItem {
  keyIndex: "i1" | "i2" | "i3" | "i4" | "i5" | "i6" | "i7" | "i8";
  img: string;
  span?: "row" | "col";
}

const items: GalleryItem[] = [
  {
    keyIndex: "i1",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    span: "col",
  },
  {
    keyIndex: "i2",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    keyIndex: "i3",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    keyIndex: "i4",
    img: "https://images.unsplash.com/photo-1500390364154-0b9be6b2e28c?auto=format&fit=crop&w=1200&q=80",
    span: "row",
  },
  {
    keyIndex: "i5",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    keyIndex: "i6",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    keyIndex: "i7",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    keyIndex: "i8",
    img: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1200&q=80",
    span: "col",
  },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const shuffled = useMemo(() => items, []);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? shuffled : shuffled.slice(0, 6);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-white via-school-sage/20 to-school-peach/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide">{t('gallery', 'subtitle')}</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
              {t('gallery', 'title')}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              {t('gallery', 'desc')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-5">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={item.keyIndex}
              className={`relative overflow-hidden rounded-3xl bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] group ${
                item.span === "col" ? "md:col-span-2" : ""
              } ${item.span === "row" ? "md:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.img
                src={item.img}
                alt={t('gallery', item.keyIndex + 'T')}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <motion.div
                className="absolute bottom-4 left-4 right-4 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
              >
                <div className="text-xs uppercase tracking-[0.08em] text-white/80 mb-1">{t('gallery', item.keyIndex + 'C')}</div>
                <div className="text-lg font-semibold leading-tight">{t('gallery', item.keyIndex + 'T')}</div>
              </motion.div>
              <motion.div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-foreground shadow-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.08 + idx * 0.05 }}
              >
                {t('gallery', 'explore')}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t('gallery', 'viewAll')}
              <span className="text-lg">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
