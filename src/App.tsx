import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Cpu, ArrowRight, X, Globe, Sparkles, BookOpen, ShieldAlert, Send, Share2, Youtube, Phone } from 'lucide-react';
import { TRANSLATIONS, Language } from './types';
import { IPShield } from './components/IPShield';

export default function App() {
  const [lang, setLang] = useState<Language>('RU');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(null);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Monitor scroll for stateful header transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = TRANSLATIONS[lang];

  // List of active navigation items
  const navItems = [
    { name: t.navHome, link: '#home' },
    { name: t.navServices, link: '#services' },
    { name: t.navProjects, link: '#projects' },
    { name: t.navBlog, link: '#blog' },
    { name: t.navAcademy, link: '#academy' },
  ];

  // Hidden in main desktop nav, but visible in mobile full-screen menu
  const mobileExtraItems = [
    { name: t.navResources, link: '#resources' },
    { name: t.navMedia, link: '#media' },
    { name: t.navInnovations, link: '#innovations' },
  ];

  return (
    <div className="relative min-h-screen bg-[#F5F7FA] text-[#1A1A1A] font-sans antialiased selection:bg-[#c02828] selection:text-white" id="home">
      
      {/* HEADER SECTION */}
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500 ease-out flex items-center ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo Zone */}
          <a
            id="logo-link"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#c02828] focus:ring-offset-2 rounded-lg py-1 px-2"
          >
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <IPShield
                width={40}
                height={40}
                color={isScrolled ? '#0F2B6B' : '#FFFFFF'}
              />
            </div>
            <div className="flex flex-col select-none">
              <span
                className={`text-[15px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 leading-none ${
                  isScrolled ? 'text-[#0F2B6B]' : 'text-white'
                }`}
              >
                {t.logoTitle}
              </span>
              <span
                className={`text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 mt-[3px] leading-none ${
                  isScrolled ? 'text-[#6B7280]' : 'text-[#b0b0bd]'
                }`}
              >
                {t.logoSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu (>= 1024px) */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  id={`nav-item-${idx}`}
                  href={item.link}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative text-14px font-medium tracking-wide transition-colors duration-300 py-1 ${
                    isScrolled
                      ? hoveredIndex === idx
                        ? 'text-[#0F2B6B]'
                        : 'text-[#6B7280]'
                      : hoveredIndex === idx
                      ? 'text-white'
                      : 'text-white/80'
                  }`}
                >
                  {item.name}
                  {/* Underline hover effect */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transform scale-x-0 transition-transform duration-300 origin-left ${
                      isScrolled ? 'bg-[#0F2B6B]' : 'bg-white'
                    } ${hoveredIndex === idx ? 'scale-x-100' : ''}`}
                  />
                </a>
              ))}
            </div>

            {/* Separator Dot */}
            <span className={`select-none transition-colors duration-300 ${isScrolled ? 'text-[#9CA3AF]' : 'text-white/40'}`}>
              ·
            </span>

            {/* Tools Red Badge */}
            <a
              id="nav-tools-badge"
              href="#tools"
              onMouseEnter={() => setHoveredIndex('tools')}
              onMouseLeave={() => setHoveredIndex(null)}
              className="px-2.5 py-1 rounded-none text-[13px] font-semibold text-white tracking-wide bg-[#c02828] hover:bg-[#9b1616] transition-colors duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#c02828]"
              style={{ padding: '4px 10px' }}
            >
              <Cpu className="w-3.5 h-3.5" />
              {t.navTools}
            </a>
          </nav>

          {/* Right Group (Languages + CTA) */}
          <div id="header-right-group" className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 select-none text-[13px] font-medium">
              {(['RU', 'EN', 'ZH'] as Language[]).map((langOption, idx) => (
                <div key={langOption} className="flex items-center">
                  <button
                    id={`lang-btn-${langOption}`}
                    onClick={() => setLang(langOption)}
                    className={`cursor-pointer transition-colors duration-300 focus:outline-none ${
                      lang === langOption
                        ? 'text-[#c02828] font-semibold scale-105'
                        : isScrolled
                        ? 'text-[#6B7280] hover:text-[#0F2B6B]'
                        : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    {langOption === 'ZH' ? '中' : langOption.charAt(0) + langOption.slice(1).toLowerCase()}
                  </button>
                  {idx < 2 && (
                    <span
                      className={`ml-2 text-[11px] transition-colors duration-300 select-none ${
                        isScrolled ? 'text-[#9CA3AF]' : 'text-white/30'
                      }`}
                    >
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              id="header-cta-btn"
              href="#discuss"
              className={`border text-[12px] font-medium tracking-[0.12em] uppercase transition-all duration-500 py-[10px] px-6 select-none focus:outline-none ${
                isScrolled
                  ? 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  : 'border-[#c02828] text-[#c02828] hover:bg-[#c02828] hover:text-white'
              }`}
            >
              {t.ctaText}
            </a>
          </div>

          {/* Mobile Hamburguer Button (< 1024px) */}
          <button
            id="mobile-burger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden flex flex-col justify-between items-end w-8 h-[22px] py-[2px] px-[2px] group focus:outline-none cursor-pointer z-50"
          >
            {/* Custom 4-line burger button described in guide */}
            <span
              className={`h-[2px] transition-all duration-300 rounded-full ${
                isMenuOpen
                  ? 'w-6 transform rotate-45 translate-y-[8px] bg-[#1A1A1A]'
                  : `w-6 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
            <span
              className={`h-[2px] transition-all duration-300 rounded-full ${
                isMenuOpen
                  ? 'w-0 opacity-0'
                  : `w-5 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
            <span
              className={`h-[2px] transition-all duration-300 rounded-full ${
                isMenuOpen
                  ? 'w-0 opacity-0'
                  : `w-6 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
            <span
              className={`h-[2px] transition-all duration-300 rounded-full ${
                isMenuOpen
                  ? 'w-6 transform -rotate-45 -translate-y-[8px] bg-[#1A1A1A]'
                  : `w-4 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
          </button>

        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-6"
          >
            {/* Mobile menu container */}
            <div className="flex flex-col items-center justify-between h-full w-full max-w-sm pt-20 pb-12 select-none">
              
              {/* Main 8 items list vertically vertically centered */}
              <div className="flex flex-col items-center gap-6 text-center">
                {[...navItems, ...mobileExtraItems].map((item, idx) => (
                  <motion.a
                    key={idx}
                    id={`mobile-nav-item-${idx}`}
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                    className="text-[26px] font-medium text-[#1A1A1A] hover:text-[#0F2B6B] transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Separator · */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-400 text-xl"
                >
                  ·
                </motion.span>

                {/* Tools Badge */}
                <motion.a
                  id="mobile-tools-badge"
                  href="#tools"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-[26px] font-semibold text-[#c02828] hover:text-[#9b1616] flex items-center gap-2"
                >
                  <Cpu className="w-6 h-6 text-[#c02828]" />
                  {t.navTools}
                </motion.a>
              </div>

              {/* Bottom Elements: CTA Button and Language Switcher */}
              <div className="w-full flex flex-col items-center gap-8 mt-10">
                {/* CTA Button */}
                <motion.a
                  id="mobile-cta-btn"
                  href="#discuss"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="w-full border-2 border-[#c02828] text-[#c02828] hover:bg-[#c02828] hover:text-white transition-all duration-500 py-3 px-8 text-center text-[14px] font-medium tracking-[0.12em] uppercase cursor-pointer"
                >
                  {t.ctaText}
                </motion.a>

                {/* Language Switcher */}
                <motion.div
                  id="mobile-language-switcher"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-4 text-[16px]"
                >
                  {(['RU', 'EN', 'ZH'] as Language[]).map((langOption, idx) => (
                    <div key={langOption} className="flex items-center">
                      <button
                        id={`mobile-lang-btn-${langOption}`}
                        onClick={() => setLang(langOption)}
                        className={`font-medium transition-all duration-300 ${
                          lang === langOption
                            ? 'text-[#c02828] font-semibold scale-110'
                            : 'text-[#D1D5DB]'
                        }`}
                      >
                        {langOption === 'ZH' ? '中' : langOption.charAt(0) + langOption.slice(1).toLowerCase()}
                      </button>
                      {idx < 2 && (
                        <span className="ml-4 text-[#D1D5DB] select-none">/</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-black text-white"
      >
        
        {/* Background Grayscale Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://codex.nexusbots.ru/videos/lawyers.mp4"
            autoPlay
            loop
            muted
            playsInline
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
          />
        </div>

        {/* Decorative dark and radial gradient layers */}
        {/* Dark overlay: rgba(0, 0, 1, 0.6) */}
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 0, 1, 0.6)' }}
        />

        {/* Cool glowing blue radial aura on the right */}
        <div
          className="absolute inset-0 z-2 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(59, 130, 246, 0.12) 0%, rgba(0, 0, 0, 0) 70%)'
          }}
        />

        {/* Huge, slow rotating decorative transparent shield on the right */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-2 hidden lg:block pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            className="transform-gpu origin-center animate-spin-slow"
          >
            <IPShield
              width={280}
              height={280}
              color="rgba(255, 255, 255, 0.06)"
            />
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 pt-32 pb-20 flex flex-col justify-center h-full">
          
          {/* Upper Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
            className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            {/* Pulsing indicator dot */}
            <span className="relative flex h-2 w-2">
              <span className="dot-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
            </span>
            <span className="text-[13px] font-medium tracking-wide text-white/90 select-none">
              {t.heroBadge}
            </span>
          </motion.div>

          {/* Heading (h1) */}
          <h1 className="text-white tracking-[-0.02em] leading-[0.95] mb-6 flex flex-col select-none">
            {/* Line 1 - Light */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.175, 0.885, 0.32, 1.2], // back.out(1.2) equivalent
              }}
              className="text-4xl sm:text-5xl md:text-7xl xl:text-[90px] font-light"
            >
              {t.heroHeadingRow1}
            </motion.span>
            
            {/* Line 2 - Semibold */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.58,
                duration: 0.8,
                ease: [0.175, 0.885, 0.32, 1.2],
              }}
              className="text-4xl sm:text-5xl md:text-7xl xl:text-[90px] font-bold text-white py-1"
            >
              {t.heroHeadingRow2}
            </motion.span>
            
            {/* Line 3 - Light */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.66,
                duration: 0.8,
                ease: [0.175, 0.885, 0.32, 1.2],
              }}
              className="text-4xl sm:text-5xl md:text-7xl xl:text-[90px] font-light text-white/90"
            >
              {t.heroHeadingRow3}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            className="text-white/75 font-light text-[18px] md:text-[22px] leading-relaxed max-w-[540px] mb-10 select-none"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* CTA Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5, ease: 'easeOut' }}
            className="mb-16 md:mb-24"
          >
            <a
              id="hero-cta-button"
              href="#discuss"
              className="group inline-flex items-center gap-4 bg-[#c02828] hover:bg-[#9b1616] text-white text-[13px] font-medium uppercase tracking-[0.15em] py-4 px-8 transition-all duration-300 select-none outline-none focus:ring-4 focus:ring-red-500/30"
            >
              {t.ctaText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>

          {/* Awards grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl border-t border-white/15 pt-10"
          >
            {/* Award Item 1 */}
            <div className="flex gap-4 items-start group select-none">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#3B82F6] transition-transform duration-300 group-hover:scale-105">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-white">{t.award1Title}</h3>
                <p className="text-[13px] text-white/60 font-light leading-snug">{t.award1Subtitle}</p>
                <span className="text-[12px] text-white/40 leading-snug mt-1">{t.award1Note}</span>
              </div>
            </div>

            {/* Award Item 2 */}
            <div className="flex gap-4 items-start group select-none">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#3B82F6] transition-transform duration-300 group-hover:scale-105">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-white">{t.award2Title}</h3>
                <p className="text-[13px] text-white/60 font-light leading-snug">{t.award2Subtitle}</p>
                <span className="text-[12px] text-white/40 leading-snug mt-1">{t.award2Note}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* EXPERTISE SECTION (Секция «Направления») */}
      <section
        id="services"
        className="relative py-[120px] bg-white border-t border-gray-100 z-10 overflow-hidden select-none"
      >
        {/* Decorative background pattern */}
        <div
          className="absolute top-[80px] right-[10%] w-[400px] h-[400px] pointer-events-none z-0 hidden md:block"
          style={{ opacity: 0.04 }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <path d="M200 20 L380 100 L380 300 L200 380 L20 300 L20 100 Z" stroke="#0F2B6B" strokeWidth="1" fill="none" />
            <path d="M200 60 L340 120 L340 280 L200 340 L60 280 L60 120 Z" stroke="#0F2B6B" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="80" stroke="#0F2B6B" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="120" stroke="#3B82F6" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8">
          
          {/* Header Block with animations */}
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-[32px] lg:text-[36px] font-medium text-[#1A1A1A]"
            >
              {t.expertiseTitle}
            </motion.h2>

            {/* Two Column Layout below header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
              {/* Left Column - Years of practice */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="flex flex-col select-none"
              >
                <span className="text-[48px] sm:text-[72px] lg:text-[96px] xl:text-[110px] font-light text-[#0F2B6B] leading-none tracking-[-0.02em]">
                  {t.expertiseYears}
                </span>
                <span className="text-[14px] sm:text-[16px] uppercase tracking-[0.2em] text-[#c02828] font-semibold mt-2">
                  {t.expertiseYearsLabel}
                </span>
              </motion.div>

              {/* Right Column - Description */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-[400px] lg:pt-4"
              >
                <p className="text-[18px] text-[#6B7280] leading-[1.7] font-light">
                  {t.expertiseDesc}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Decorative Separator with center diamond */}
          <div className="flex items-center my-20 gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0F2B6B]/20 to-transparent" />
            <div className="text-[#3B82F6]/60 flex-shrink-0 animate-pulse">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r via-[#0F2B6B]/20 to-transparent from-transparent" />
          </div>

          {/* Grid of Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border border-gray-200/80 bg-white">
            {[
              {
                title: t.service1Title,
                desc: t.service1Desc,
                id: 'service-card-1',
                icon: (
                  <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#0F2B6B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                    <path d="M50 18 L76 28 L76 58 Q76 78 50 88 Q24 78 24 58 L24 28 Z" stroke="#0F2B6B" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                    <path d="M50 32 A11 11 0 1 1 39 51 L39 57 L61 57 L61 51 A11 11 0 1 1 50 32 Z" fill="none" stroke="#c02828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45 57 L55 57 M45 61 L55 61 M48 65 L52 65" stroke="#c02828" strokeWidth="2" strokeLinecap="round" />
                    <path d="M50 11 L50 15 M25 25 L29 28 M75 25 L71 28 M13 50 L17 50 M87 50 L83 50" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                title: t.service2Title,
                desc: t.service2Desc,
                id: 'service-card-2',
                icon: (
                  <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                    <rect x="25" y="16" width="50" height="68" rx="5" stroke="#0F2B6B" strokeWidth="2.5" fill="none" />
                    <line x1="36" y1="28" x2="64" y2="28" stroke="#0F2B6B" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                    <line x1="36" y1="40" x2="64" y2="40" stroke="#0F2B6B" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                    <line x1="36" y1="52" x2="54" y2="52" stroke="#0F2B6B" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                    <circle cx="44" cy="65" r="11" stroke="#3B82F6" strokeWidth="2.5" fill="none" />
                    <circle cx="56" cy="65" r="11" stroke="#c02828" strokeWidth="2.5" fill="none" />
                    <path d="M72 17 L76 21 L84 13" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: t.service3Title,
                desc: t.service3Desc,
                id: 'service-card-3',
                icon: (
                  <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                    <path d="M15 50 H85 M50 15 V85" stroke="#0F2B6B" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="25" y1="36" x2="75" y2="36" stroke="#0F2B6B" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="50" y1="24" x2="50" y2="76" stroke="#0F2B6B" strokeWidth="2.5" />
                    <rect x="41" y="41" width="18" height="18" rx="3" fill="none" stroke="#c02828" strokeWidth="2.5" />
                    <path d="M41 45 H34 M41 55 H34 M59 45 H66 M59 55 H66 M45 41 V34 M55 41 V34 M45 59 V66 M55 59 V66" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                    <path d="M25 36 L20 58 H30 Z" fill="none" stroke="#0F2B6B" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M75 36 L70 58 H80 Z" fill="none" stroke="#0F2B6B" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: t.service4Title,
                desc: t.service4Desc,
                id: 'service-card-4',
                icon: (
                  <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                    <ellipse cx="50" cy="50" rx="44" ry="19" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="4 2" transform="rotate(-15 50 50)" opacity="0.6" />
                    <rect x="24" y="46" width="11" height="34" rx="2" fill="none" stroke="#0F2B6B" strokeWidth="2.5" />
                    <rect x="44" y="30" width="12" height="50" rx="2" fill="none" stroke="#c02828" strokeWidth="2.5" />
                    <rect x="65" y="41" width="11" height="39" rx="2" fill="none" stroke="#0F2B6B" strokeWidth="2.5" />
                    <line x1="12" y1="80" x2="88" y2="80" stroke="#0F2B6B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M18 71 L36 53 L54 59 L78 33" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M68 33 H78 V43" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
            ].map((service, index) => {
              return (
                <motion.div
                  key={index}
                  id={service.id}
                  className="group relative p-8 border border-gray-100 bg-[#FFFFFF] transition-all duration-500 hover:border-transparent cursor-pointer flex flex-col justify-between overflow-hidden"
                  style={{ minHeight: '380px' }}
                  whileHover={{
                    backgroundColor: '#FFFFFF',
                    backgroundImage: 'linear-gradient(to bottom, #eff4f9 0%, #ffffff 100%)',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Decorative corner top-right */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M32 0 L32 32 L0 0 Z" fill="rgba(59, 130, 246, 0.12)" />
                    </svg>
                  </div>

                  <div>
                    {/* Hexagonal icon container (72x72px) */}
                    <div
                      className="w-[72px] h-[72px] mb-6 flex items-center justify-center bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-500 overflow-hidden"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-semibold text-[#1A1A1A] group-hover:text-[#0F2B6B] transition-colors duration-300 leading-tight mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] text-[#6B7280] leading-[1.6] font-light">
                      {service.desc}
                    </p>
                  </div>

                  {/* Learn More link - translates from left (-10px) to center (0px) on hover */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0F2B6B] opacity-0 -translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      {t.commonLearnMore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section className="consultation w-full px-4 sm:px-6 md:px-8 z-10" id="consultation">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -3 }}
          className="consultation__container w-full max-w-[1200px] bg-gradient-to-r from-white via-[#FCFDFE] to-[#FAF9F7] border border-[#E5DED6] border-l-[6px] border-l-[#BE2F2F] flex flex-col lg:flex-row lg:items-center lg:justify-between py-8 px-6 sm:px-10 lg:py-8 lg:px-12 mx-auto my-[60px] gap-6 lg:gap-10 shadow-[0_10px_30px_rgba(15,43,107,0.03)] hover:shadow-[0_15px_40px_rgba(15,43,107,0.06)] transition-all duration-500 relative overflow-hidden"
        >
          {/* Subtle elegant background vector ornament */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
            <svg width="128" height="128" viewBox="0 0 128 128" fill="none">
              <path d="M128 0 L128 128 L0 128 Z" fill="#BE2F2F" />
            </svg>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full py-4 flex flex-col items-center justify-center text-center font-montserrat"
            >
              <div className="text-[20px] lg:text-[24px] font-bold text-[#BE2F2F] mb-1.5 uppercase tracking-wider">
                {lang === 'RU' ? 'Спасибо!' : lang === 'EN' ? 'Thank You!' : '谢谢！'}
              </div>
              <div className="text-[14px] lg:text-[16px] text-[#4B5563] font-light">
                {lang === 'RU' 
                  ? 'Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.' 
                  : lang === 'EN' 
                  ? 'Your request has been successfully submitted. We will contact you shortly.' 
                  : '您的申请已成功提交。我们将尽快与您联系。'}
              </div>
            </motion.div>
          ) : (
            <>
              {/* Left Column - Elegant Title with smaller and balanced text */}
              <div className="consultation__title lg:max-w-[48%] w-full flex items-start gap-4">
                <div className="w-1.5 h-12 bg-[#0F2B6B]/20 mt-1.5 hidden sm:block rounded-full shrink-0" />
                <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-normal leading-[1.2] text-[#1A1A1A] font-montserrat tracking-tight">
                  {t.consultationTitle.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Right Column - Snug & Sleek Inputs */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (phone.trim().length > 4) {
                    setSubmitted(true);
                  }
                }}
                className="consultation__form flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:max-w-[50%] w-full justify-end"
              >
                <div className="relative flex-1 sm:max-w-[300px]">
                  {/* Subtle input prefix icon */}
                  <Phone className="absolute left-0 bottom-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.consultationPlaceholder}
                    className="w-full h-[44px] bg-transparent border-0 border-b border-[#E5DED6] focus:border-[#BE2F2F] outline-none text-[16px] text-black placeholder-[#9D9D9D] font-light transition-colors duration-300 pl-6 pb-2 font-montserrat"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full sm:w-[190px] h-[54px] bg-[#BE2F2F] hover:bg-[#A52323] active:bg-[#8D1E1E] text-white border-0 text-[15px] font-bold tracking-[1px] cursor-pointer flex items-center justify-center transition-all duration-300 select-none font-montserrat uppercase shrink-0 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-0.5 transition-transform duration-300">
                    {t.consultationSubmit}
                    <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <div className="absolute inset-0 bg-black/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </section>

      {/* TRACKING SECTION */}
      <section className="tracking w-full min-h-[580px] bg-white relative overflow-hidden flex justify-center py-8 lg:py-0 select-none">
        {/* Repeating diagonal lines backdrop */}
        <div className="tracking-bg-pattern" />

        <div className="tracking__container w-full max-w-[1300px] mx-auto px-6 sm:px-[60px] py-8 lg:py-[45px] relative z-10 flex items-center">
          <div className="tracking__content w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-[60px]">
            
            {/* Left Column */}
            <div className="tracking__left w-full lg:w-[48%] flex flex-col items-start">
              <h2 className="tracking__title text-[26px] sm:text-[36px] lg:text-[46px] font-normal leading-[1.12] text-black font-montserrat mb-4 lg:mb-[32px] max-w-[540px]">
                {t.trackingTitle.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="tracking__text text-[14px] sm:text-[15px] lg:text-[18px] leading-[1.6] text-[#2D2D2D] mb-6 lg:mb-[44px] font-light max-w-[540px]">
                {t.trackingText}
              </p>

              <a 
                href="#portal" 
                className="tracking__link inline-flex items-center gap-[12px] text-[#B53032] hover:text-[#0F2B6B] text-[16px] sm:text-[18px] font-normal transition-all duration-300 group"
              >
                <span>{t.trackingLink}</span>
                <svg 
                  className="tracking__icon w-[16px] h-[16px] stroke-[#B53032] group-hover:stroke-[#0F2B6B] fill-none transition-colors duration-300" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </a>
            </div>

            {/* Right Column */}
            <div className="tracking__right w-full lg:w-[52%] flex flex-col items-center justify-center relative pt-6 lg:pt-0">
              
              {/* Interactive Phone Mock */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 20, y: 30 }}
                whileInView={{ opacity: 1, scale: 0.9, rotate: 38, y: -20 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="tracking__phone w-[240px] sm:w-[280px] lg:w-[380px] aspect-[9/19] bg-[#0E131F] rounded-[32px] sm:rounded-[40px] p-2 sm:p-2.5 border-[5px] border-[#252E3F] relative overflow-hidden select-none"
                style={{
                  filter: 'drop-shadow(0 20px 28px rgba(0,0,0,0.15))',
                  transformOrigin: 'center center'
                }}
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[75px] sm:w-[90px] h-3.5 sm:h-4 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                  <div className="w-1 h-1 bg-[#1C1F26] rounded-full" />
                  <div className="w-0.5 h-0.5 bg-[#0A0D14] rounded-full" />
                </div>

                {/* Status Bar */}
                <div className="w-full flex justify-between items-center px-4 sm:px-5 pt-2 sm:pt-3 pb-1.5 text-[8px] sm:text-[9px] text-white/90 font-medium z-20 font-sans">
                  <span>09:41</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[7.5px] tracking-wider opacity-80">5G</span>
                    <div className="w-3.5 h-1.5 border.5 border-white/60 rounded-[2px] p-[1px] flex items-center">
                      <div className="w-1.5 h-full bg-white rounded-[0.5px]" />
                    </div>
                  </div>
                </div>

                {/* App Interface Container */}
                <div className="w-full h-[calc(100%-20px)] flex flex-col justify-between font-sans">
                  
                  {/* Top Bar inside mockup */}
                  <div className="px-3 sm:px-4 py-2 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 sm:w-5 h-4 sm:h-5 rounded bg-[#BE2F2F] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white font-montserrat">
                        C
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white font-montserrat">КОДЕКС ОНЛАЙН</span>
                    </div>
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] text-[7px] sm:text-[8px] font-semibold">
                      <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                      <span>ОНЛАЙН</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 px-3 sm:px-4 py-3 overflow-y-auto space-y-3.5 sm:space-y-4 scrollbar-none">
                    
                    {/* Active case card */}
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-[7.5px] sm:text-[8px] text-white/40 uppercase tracking-widest mb-0.5 font-montserrat">Активное дело</div>
                      <div className="text-[11px] sm:text-[13px] text-white font-bold tracking-wide font-montserrat">№ 2026/IT-947-S</div>
                      <div className="text-[9px] sm:text-[10px] text-white/60 mt-0.5 font-light">Международный патент на ПО</div>
                    </div>

                    {/* Timeline Tracker */}
                    <div className="space-y-3">
                      
                      {/* Step 1 */}
                      <div className="flex gap-2.5 text-left">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-[7.5px] sm:text-[8px] text-white font-bold">
                            ✓
                          </div>
                          <div className="w-0.5 h-4 sm:h-5 bg-[#10B981]" />
                        </div>
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-semibold text-white/90">Аудит и раскрытие кода</div>
                          <div className="text-[7.5px] sm:text-[8px] text-white/50 font-light">Завершено 12 июня 2026</div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex gap-2.5 text-left">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-[7.5px] sm:text-[8px] text-white font-bold">
                            ✓
                          </div>
                          <div className="w-0.5 h-4 sm:h-5 bg-[#10B981]" />
                        </div>
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-semibold text-white/90">Разработка договоров</div>
                          <div className="text-[7.5px] sm:text-[8px] text-white/50 font-light">Завершено 28 июня 2026</div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex gap-2.5 text-left">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full border border-dashed border-[#BE2F2F] bg-[#BE2F2F]/15 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-[#BE2F2F] animate-pulse" />
                          </div>
                          <div className="w-0.5 h-4 sm:h-5 bg-white/10" />
                        </div>
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-semibold text-[#FF4D4D] flex items-center gap-1">
                            Регистрация патента
                            <span className="text-[6.5px] bg-[#BE2F2F]/20 px-1 py-0.2 rounded text-white uppercase tracking-wider font-semibold">АКТИВНО</span>
                          </div>
                          <div className="text-[7.5px] sm:text-[8px] text-white/50 font-light">На проверке — вероятность успеха 85%</div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex gap-2.5 text-left">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full border border-white/20 bg-transparent flex items-center justify-center" />
                        </div>
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-semibold text-white/30">Выплата из эскроу</div>
                          <div className="text-[7.5px] sm:text-[8px] text-white/20 font-light">Планируется 15 июля 2026</div>
                        </div>
                      </div>

                    </div>

                    {/* Interactive metric bubble */}
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-left">
                      <div>
                        <div className="text-[7.5px] text-white/40 uppercase tracking-wider font-montserrat">Архив документов</div>
                        <div className="text-[11px] sm:text-[13px] font-bold text-white mt-0.5">18 файлов</div>
                      </div>
                      <span className="text-[7.5px] bg-white/10 text-white px-1.5 py-0.5 rounded font-mono">ЗАЩИЩЕНО</span>
                    </div>

                  </div>

                  {/* Safe Area Indicator */}
                  <div className="w-full flex justify-center pb-1.5 pt-1">
                    <div className="w-20 sm:w-24 h-1 bg-white/20 rounded-full" />
                  </div>

                </div>
              </motion.div>

              {/* Stores badge alignment */}
              <div className="tracking__stores flex gap-[14px] mt-[30px] justify-center items-center relative z-20">
                {/* App Store */}
                <a 
                  href="#appstore" 
                  className="appstore w-[130px] h-[39px] bg-[#000000] text-white rounded-[5px] px-2.5 flex items-center justify-center gap-1.5 border border-[#333333] hover:bg-[#111111] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.1,22 C7.79,22.05 6.8,20.68 5.96,19.48 C4.25,17 2.94,12.45 4.7,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.1,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.1,16.67 C20.08,16.74 19.67,18.11 18.71,19.5 M15.97,4.17 C16.63,3.37 17.07,2.28 16.95,1 C16,1.04 14.9,1.6 14.24,2.38 C13.68,3.04 13.19,4.14 13.34,5.39 C14.39,5.47 15.4,4.88 15.97,4.17 Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[6.5px] uppercase tracking-wider font-light text-gray-400">Download on the</span>
                    <span className="text-[11px] font-semibold font-sans">App Store</span>
                  </div>
                </a>

                {/* Google Play */}
                <a 
                  href="#googleplay" 
                  className="googleplay w-[130px] h-[39px] bg-[#000000] text-white rounded-[5px] px-2.5 flex items-center justify-center gap-1.5 border border-[#333333] hover:bg-[#111111] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M3.25 2.148v19.704a1 1 0 0 0 1.555.832l15.111-9.852a1 1 0 0 0 0-1.664L4.805 1.316a1 1 0 0 0-1.555.832z" fill="url(#google-play-grad)" />
                    <defs>
                      <linearGradient id="google-play-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4CAF50" />
                        <stop offset="40%" stopColor="#FFC107" />
                        <stop offset="70%" stopColor="#FF5722" />
                        <stop offset="100%" stopColor="#00BCD4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[6.5px] uppercase tracking-wider font-light text-gray-400">GET IT ON</span>
                    <span className="text-[11px] font-semibold font-sans">Google Play</span>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION (Футер) */}
      <footer
        id="discuss"
        className="relative bg-[#2F3B55] text-white overflow-hidden select-none"
        style={{ paddingTop: '100px', paddingBottom: '40px' }}
      >
        {/* Top decorative line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.5) 50%, transparent 100%)',
          }}
        />

        {/* Bottom ambient overlay gradient (height 1/3 of the section) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 20, 35, 0.6) 100%)',
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8">
          
          {/* Upper Block: CTA + Contacts (two columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - Large CTA */}
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] mb-8 select-none text-white">
                <span className="font-light block">{t.footerCtaTitleLine1}</span>
                <span className="font-semibold block">{t.footerCtaTitleLine2}</span>
              </h2>

              <a
                id="footer-cta-action"
                href="#discuss"
                onClick={(e) => {
                  e.preventDefault();
                  alert(lang === 'RU' ? 'Для получения индивидуальной консультации, пожалуйста, напишите на info@codex.nexusbots.ru' : lang === 'EN' ? 'For consultations, please write to info@codex.nexusbots.ru' : '欲获取法律咨询，请致信 info@codex.nexusbots.ru');
                }}
                className="group inline-flex items-center gap-3 bg-[#c02828] hover:bg-[#9b1616] text-white text-[16px] font-semibold rounded-lg py-5 px-10 transition-all duration-300 shadow-[0_0_0_0_rgba(192,40,40,0)] hover:shadow-[0_0_50px_rgba(155,22,22,0.4)] focus:outline-none focus:ring-4 focus:ring-[#c02828]/50"
              >
                <span>{t.commonConsultation}</span>
                <ArrowRight className="w-[18px] h-[18px] transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Column - Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-10">
              
              {/* Block 1 - Contacts */}
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-white/50 uppercase tracking-[0.15em] mb-5">
                  {t.footerContacts}
                </span>
                <a
                  href="mailto:info@codex.nexusbots.ru"
                  className="text-[15px] text-white/70 hover:text-[#93C5FD] transition-colors duration-300 mb-2 focus:outline-none focus:underline"
                >
                  info@codex.nexusbots.ru
                </a>
                <a
                  href="https://codex.nexusbots.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-white/70 hover:text-[#93C5FD] transition-colors duration-300 mb-4 focus:outline-none focus:underline"
                >
                  codex.nexusbots.ru
                </a>
                <p className="text-[14px] text-white/60 leading-[1.6] font-light">
                  {lang === 'RU'
                    ? 'Москва, Пресненская наб., 12, ММДЦ «Москва-Сити», Башня «Федерация»'
                    : lang === 'EN'
                    ? 'Federation Tower, MMDC Moscow-City, 12 Presnenskaya Nab., Moscow'
                    : '莫斯科市莫斯科国际商务中心联邦大厦'}
                </p>
              </div>

              {/* Block 2 - Social Networks */}
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-white/50 uppercase tracking-[0.15em] mb-5">
                  {t.footerSocials}
                </span>
                
                {/* 3 social buttons in a row */}
                <div className="flex items-center gap-4">
                  {[
                    {
                      name: 'Telegram',
                      icon: <Send className="w-[18px] h-[18px]" />,
                      url: 'https://t.me/nikeli33',
                    },
                    {
                      name: 'VK',
                      icon: <Share2 className="w-[18px] h-[18px]" />,
                      url: 'https://vk.com/id2778777',
                    },
                    {
                      name: 'YouTube',
                      icon: <Youtube className="w-[18px] h-[18px]" />,
                      url: 'https://www.youtube.com/@ai.samurai.studio',
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-blue-500/30 border border-white/20 hover:border-blue-500/50 rounded-lg text-white/70 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Requisites Block */}
          <div className="border-t border-white/10 pt-8 mb-10">
            <span className="text-[12px] font-semibold text-white/50 uppercase tracking-[0.15em] mb-4 block">
              {t.footerRequisites}
            </span>

            {/* Requisites grid 5 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-[13px] text-white/50 select-text">
              <div>
                <span className="text-[12px] text-white/30 block mb-1">{t.requisitesIpLabel}</span>
                <span>{t.requisitesIpValue}</span>
              </div>
              <div>
                <span className="text-[12px] text-white/30 block mb-1">{t.requisitesInnLabel}</span>
                <span>772603180960</span>
              </div>
              <div>
                <span className="text-[12px] text-white/30 block mb-1">{t.requisitesOgrnipLabel}</span>
                <span>322774600709243</span>
              </div>
              <div>
                <span className="text-[12px] text-white/30 block mb-1">{t.requisitesRknLabel}</span>
                <span>77-26-554007</span>
              </div>
              <div>
                <span className="text-[12px] text-white/30 block mb-1">{t.requisitesOkvedLabel}</span>
                <span>{t.requisitesOkvedValue}</span>
              </div>
            </div>
          </div>

          {/* Bottom strip line separator and legal credits */}
          <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
            <div className="flex items-center gap-3">
              <IPShield width={28} height={28} color="#FFFFFF" />
              <span className="font-light">
                &copy; 2010 — {new Date().getFullYear()} IT Legal Group
              </span>
            </div>

            <div className="flex items-center gap-6 text-[12px] text-white/40">
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  alert(lang === 'RU' ? 'Все персональные данные обрабатываются в соответствии с ФЗ-152 РФ.' : lang === 'EN' ? 'All personal data is processed in accordance with national security regulations.' : '根据法规处理所有个人数据。');
                }}
                className="hover:text-white/80 transition-colors duration-300 focus:outline-none focus:underline"
              >
                {t.footerLegalInfo}
              </a>
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  alert(lang === 'RU' ? 'Политика конфиденциальности: Данный сайт является демонстрационной моделью высокого разрешения.' : lang === 'EN' ? 'Privacy Policy: This website serves as a high-resolution interactive showcase.' : '隐私权政策说明。');
                }}
                className="hover:text-white/80 transition-colors duration-300 focus:outline-none focus:underline"
              >
                {t.footerPrivacyPolicy}
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
