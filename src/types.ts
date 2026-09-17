export interface Chapter {
  chapterNumber: number;
  title: string;
  previewSnippet?: string;
  content: string; // The text of the chapter
  isFreePreview?: boolean;
  chapterImage?: string;
}

export interface Story {
  id: string;
  title: string;
  teaser: string;
  category: string;
  readingTime: string;
  likes: number;
  views: number;
  coverImage: string;
  author: string;
  isPremium: boolean;
  priceTsh: number;
  chapters: Chapter[];
  isTrending?: boolean;
  isStoryOfTheDay?: boolean;
  featuredOrder?: number;
  buttonLabel?: string;
  tags?: string[];
  createdAt: string;
}

export interface Comment {
  id: string;
  storyId: string;
  userName: string;
  userAvatar: string;
  text: string;
  date: string;
  likes: number;
  isLikedByUser?: boolean;
}

export interface PaymentRecord {
  id: string;
  storyId: string;
  storyTitle: string;
  amountTsh: number;
  phoneNumber: string;
  senderName: string;
  transactionCode: string;
  network: string; // 'M-Pesa' | 'Tigo Pesa' | 'Airtel Money' | 'Halopesa'
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  verifiedAt?: string;
}

export interface UserAccount {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
  unlockedStoryIds: string[];
  bookmarks: string[]; // Story IDs
  favoriteStoryIds: string[]; // Story IDs
  readingHistory: {
    storyId: string;
    chapterNumber: number;
    progressPercent: number;
    lastRead: string;
  }[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'new_story' | 'new_chapter' | 'payment_verified' | 'announcement';
  storyId?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}
