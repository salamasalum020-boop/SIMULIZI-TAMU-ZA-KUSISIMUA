import React from 'react';
import { Crown, Sparkles, Heart, Eye, Clock, ArrowRight, Lock, BookOpen } from 'lucide-react';
import { Story } from '../types';

interface StoryOfTheDayProps {
  story: Story;
  onReadStory: (storyId: string) => void;
  onToggleLike: (storyId: string) => void;
  isLiked: boolean;
}

export const StoryOfTheDay: React.FC<StoryOfTheDayProps> = ({
  story,
  onReadStory,
  onToggleLike,
  isLiked,
}) => {
  if (!story) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-3xl overflow-hidden glass-panel-gold border-2 border-amber-400/50 shadow-[0_0_50px_rgba(245,158,11,0.25)] p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#240e3d]/90 via-[#190930]/95 to-[#100424]">
        {/* Subtle decorative glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image with golden frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl group cursor-pointer" onClick={() => onReadStory(story.id)}>
              <img
                src={story.coverImage}
                alt={story.title}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-3.5 h-3.5" />
                  KIPENZI CHA LEO
                </span>
                <span className="text-xs text-amber-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30">
                  {story.readingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Teaser */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4">
                <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>👑 STORY OF THE DAY — CHAGUO LA DADA MARRY</span>
              </div>

              {/* Title */}
              <h2 
                onClick={() => onReadStory(story.id)}
                className="font-serif-title font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white hover:text-amber-300 transition-colors cursor-pointer leading-tight"
              >
                {story.title}
              </h2>

              {/* Author & Stats */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-pink-200/80">
                <span className="font-semibold text-pink-300">Mwandishi: {story.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  {story.views.toLocaleString()} Wasomaji
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-rose-400">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  {story.likes} Likes
                </span>
              </div>

              {/* Teaser quote */}
              <div className="mt-5 p-4 rounded-2xl bg-black/30 border-l-4 border-amber-400 text-slate-200 text-sm sm:text-base leading-relaxed italic">
                “{story.teaser}”
              </div>

              {/* Tags */}
              {story.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {story.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center gap-4">
              <button
                id="btn-read-story-of-the-day"
                onClick={() => onReadStory(story.id)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 glow-button-gold shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>SOMA HADITHI HII YA LEO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleLike(story.id)}
                className={`w-full sm:w-auto px-5 py-3.5 rounded-full text-xs font-semibold glass-panel border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isLiked
                    ? 'border-rose-500 text-rose-300 bg-rose-500/20'
                    : 'border-pink-500/30 text-pink-200 hover:bg-white/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{isLiked ? 'Umeipenda ❤️' : 'Penda Story Hii'}</span>
              </button>

              <div className="text-xs text-amber-300/80 font-medium flex items-center gap-1.5 ml-auto">
                <Lock className="w-3.5 h-3.5" />
                <span>Fungua yote kwa TSh 300 tu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
