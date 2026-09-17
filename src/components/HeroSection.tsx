import React from 'react';
import { Heart, Sparkles, Flame, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { FloatingHearts } from './FloatingHearts';
import { LOVE_IMAGES } from '../assets/loveImages';

interface HeroSectionProps {
  onStartReading: () => void;
  onExploreStories: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartReading,
  onExploreStories,
}) => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      {/* Dynamic Romantic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0836] via-[#140626] to-[#0c051a] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-hero-glow blur-3xl pointer-events-none opacity-80" />
      
      {/* Decorative SVG Flowers and Romantic Glow Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pink-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

      {/* Romantic Floating Hearts and Sparkles in background */}
      <FloatingHearts />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Glowing badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold mb-6 border border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <span className="text-pink-400 animate-pulse">🌸</span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-200">
            Kituo Namba Moja cha Simulizi za Mapenzi Tanzania & Afrika Mashariki
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif-title font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-[0_4px_18px_rgba(236,72,153,0.35)]">
          <span className="inline-block animate-heart-pulse text-pink-500 mr-2 sm:mr-3">💕</span>
          <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">
            STORY TAMU ZA DADA MARRY
          </span>
          <span className="inline-block animate-heart-pulse text-pink-500 ml-2 sm:mr-3">💕</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl md:text-2xl text-pink-100/90 font-light max-w-2xl mx-auto leading-relaxed italic drop-shadow-sm font-serif-title">
          “Hadithi zinazogusa moyo, kuchanganya hisia na kukuacha ukitamani ukurasa unaofuata...”
        </p>

        {/* Call to action note */}
        <p className="mt-3 text-xs sm:text-sm text-pink-300/80 font-medium">
          Simulizi za kusisimua, mapenzi ya siri, maumivu ya usaliti, na ushindi wa penzi la kweli.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            id="btn-hero-read-now"
            onClick={onStartReading}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-pink-500 via-rose-500 to-red-600 hover:from-pink-400 hover:to-rose-500 glow-button transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Heart className="w-5 h-5 fill-white group-hover:scale-125 transition-transform text-white" />
            <span>SOMA STORY SAA HII</span>
            <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="btn-hero-explore"
            onClick={onExploreStories}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-amber-200 glass-panel hover:bg-white/10 border border-amber-400/40 glow-card-gold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>EXPLORE STORIES</span>
          </button>
        </div>

        {/* Romantic Couple Visual Showcase */}
        <div 
          onClick={onStartReading}
          className="mt-10 relative max-w-2xl mx-auto rounded-3xl overflow-hidden glass-panel-gold border-2 border-pink-500/40 p-2 sm:p-3 shadow-[0_0_35px_rgba(236,72,153,0.35)] group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
        >
          <div className="relative rounded-2xl overflow-hidden h-44 sm:h-56 w-full">
            <img
              src={LOVE_IMAGES.heroCouple}
              alt="Story Tamu za Dada Marry"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e041f] via-black/30 to-transparent flex items-end justify-between p-4 sm:p-6">
              <div className="text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-600/90 text-white backdrop-blur-md mb-1.5 border border-pink-300/30">
                  <Heart className="w-3 h-3 fill-white text-white" />
                  SIMULIZI ZA MAHABA YA KWELI
                </span>
                <p className="font-serif-title text-base sm:text-xl font-bold text-white drop-shadow">
                  “Kila ukurasa ni hisia, kila hadithi ni mapigo ya moyo”
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-black/60 px-3 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-md flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5" /> Anza Kusoma
              </span>
            </div>
          </div>
        </div>

        {/* Highlight trust badges */}
        <div className="mt-12 pt-8 border-t border-pink-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="glass-panel p-3 rounded-2xl border border-pink-500/20">
            <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              50,000+
            </p>
            <p className="text-[11px] text-pink-200/70 mt-0.5">Wasomaji Walioridhika</p>
          </div>

          <div className="glass-panel p-3 rounded-2xl border border-pink-500/20">
            <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
              TSh 300 Tu
            </p>
            <p className="text-[11px] text-amber-200/70 mt-0.5">Kufungua Story Nzima</p>
          </div>

          <div className="glass-panel p-3 rounded-2xl border border-pink-500/20">
            <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              100% Asilia
            </p>
            <p className="text-[11px] text-purple-200/70 mt-0.5">Kutoka kwa Dada Marry</p>
          </div>

          <div className="glass-panel p-3 rounded-2xl border border-pink-500/20">
            <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
              4.9 ★★★★★
            </p>
            <p className="text-[11px] text-rose-200/70 mt-0.5">Ukadiriaji wa Wasomaji</p>
          </div>
        </div>
      </div>
    </section>
  );
};
