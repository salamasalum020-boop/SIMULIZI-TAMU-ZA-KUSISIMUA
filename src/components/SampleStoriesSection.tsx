import React from 'react';
import { Sparkles, Heart, Flame } from 'lucide-react';
import { Story } from '../types';
import { StoryCard } from './StoryCard';

interface SampleStoriesSectionProps {
  stories: Story[];
  onReadStory: (storyId: string) => void;
  onToggleLike: (storyId: string) => void;
  likedStoryIds: string[];
  onToggleBookmark: (storyId: string) => void;
  bookmarkedStoryIds: string[];
}

export const SampleStoriesSection: React.FC<SampleStoriesSectionProps> = ({
  stories,
  onReadStory,
  onToggleLike,
  likedStoryIds,
  onToggleBookmark,
  bookmarkedStoryIds
}) => {
  // Sort or pick the 5 specific sample stories by their IDs or featured order
  const featuredSamples = stories.filter(s => 
    s.id === 'mapenzi-ya-siri-darasa-la-mwisho' ||
    s.id === 'nilimuamini-kuliko-kila-mtu' ||
    s.id === 'yule-kijana-wa-stendi' ||
    s.id === 'tulianza-kwa-chuki' ||
    s.id === 'ujumbe-uliokuja-usiku-wa-harusi'
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold mb-3">
          <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-pulse" />
          <span>SIMULIZI BORA ZILIZOANDALIWA MAHUSUSI KWA AJILI YAKO</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>
        
        <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          💕 SAMPLE STORIES ZA DADA MARRY 💕
        </h2>
        <p className="mt-3 text-sm sm:text-base text-pink-200/80 leading-relaxed font-serif-title italic">
          “Chagua story unayoipenda, soma sehemu ya kwanza bure kisha fungua utamu wote kwa TSh 300 tu!”
        </p>
      </div>

      {/* Grid of the 5 stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredSamples.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onReadStory={onReadStory}
            onToggleLike={onToggleLike}
            isLiked={likedStoryIds.includes(story.id)}
            onToggleBookmark={onToggleBookmark}
            isBookmarked={bookmarkedStoryIds.includes(story.id)}
            customButtonLabel={story.buttonLabel}
            badge={story.isStoryOfTheDay ? '👑 KIPENZI' : '🔥 INAVUMA'}
          />
        ))}
      </div>

      {/* Call to action card */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-900/40 via-purple-900/50 to-rose-900/40 border border-pink-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h4 className="font-serif-title font-bold text-xl sm:text-2xl text-white">
            Je, ungeweza kuendelea na story hii bila kujua mwisho wake? 😍
          </h4>
          <p className="text-sm text-pink-200/80 mt-1">
            Usiishie kwenye preview—fungua story nzima kwa TSh 300 tu kupitia 0716614099.
          </p>
        </div>
        <button
          onClick={() => {
            if (featuredSamples.length > 0) {
              onReadStory(featuredSamples[0].id);
            }
          }}
          className="whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 glow-button transition-all cursor-pointer"
        >
          ANZA KUSOMA SASA ❤️
        </button>
      </div>
    </section>
  );
};
