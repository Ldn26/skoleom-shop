import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Bot, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SkyAssistant() {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,255,255,0.07),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,255,53,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 pb-16 pt-28 text-center lg:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            {t('app.skyAssistant.badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-white sm:text-5xl"
        >
          {t('app.skyAssistant.title')}
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-xs"
        >
          {!imageError ? (
            <img
              src="/logo/sky-avatar.png"
              alt="Sky Assistant"
              className="mx-auto block w-full object-contain"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 72%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 72%)',
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
              <Bot size={64} className="text-white" />
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-sm text-base text-white/70"
        >
          {t('app.skyAssistant.description')}
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            <Home size={18} />
            {t('app.skyAssistant.backHome')}
          </Link>
          <a
            href="mailto:assistance@skoleom.com"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <Mail size={18} />
            {t('app.skyAssistant.sendTicket')}
          </a>
          <a
            href="tel:+33000000000"
            className="inline-flex items-center gap-2 rounded-full border border-univ-lime/40 bg-univ-lime/10 px-6 py-3 font-semibold text-univ-lime transition hover:bg-univ-lime/20"
          >
            <Phone size={18} />
            {t('app.skyAssistant.requestCallback')}
          </a>
        </motion.div>
      </div>

      {/* ── Desktop : image gauche / texte droite ── */}
      <div className="relative z-10 hidden min-h-screen items-center lg:flex">
        {/* Image gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-[55%] shrink-0 xl:w-[58%]"
          style={{ marginLeft: '-3vw' }}
        >
          {!imageError ? (
            <img
              src="/logo/sky-avatar.png"
              alt="Sky Assistant"
              className="block h-auto w-full object-contain"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 42%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 42%, transparent 70%)',
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-[70vh] w-full items-center justify-center">
              <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                <Bot size={96} className="text-white" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Texte droite */}
        <div className="flex flex-1 flex-col items-start gap-8 pb-24 pr-12 xl:pr-20 2xl:pr-28">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              {t('app.skyAssistant.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="-mt-2 text-6xl font-bold leading-tight text-white xl:text-7xl"
          >
            {t('app.skyAssistant.title')}
          </motion.h1>

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md text-lg leading-relaxed text-white/65"
          >
            {t('app.skyAssistant.description')}
          </motion.p>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              <Home size={18} />
              {t('app.skyAssistant.backHome')}
            </Link>
            <a
              href="mailto:assistance@skoleom.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3.5 font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              <Mail size={18} />
              {t('app.skyAssistant.sendTicket')}
            </a>
            <a
              href="tel:+33000000000"
              className="inline-flex items-center gap-2 rounded-full border border-univ-lime/40 bg-univ-lime/10 px-6 py-3.5 font-semibold text-univ-lime transition hover:bg-univ-lime/20"
            >
              <Phone size={18} />
              {t('app.skyAssistant.requestCallback')}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
