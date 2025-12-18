export enum ScreenType {
  INTRO_DECISION = 'INTRO_DECISION',
  STORY_REVEAL = 'STORY_REVEAL',
  CLIMAX_DECISION = 'CLIMAX_DECISION',
  INPUT = 'INPUT'
}

export interface StoryScreen {
  id: number;
  type: ScreenType;
  imageSrc: string; // Placeholder or path
  imageAlt: string;
  title?: string;
  
  // For STORY_REVEAL
  lines?: string[];
  nextButtonText?: string;

  // For DECISIONS (Intro & Climax)
  initialText?: string;
  badButtonText?: string;
  goodButtonText?: string;
  badOutcomeText?: string; // Text shown on overlay

  // For INPUT
  placeholder?: string;
  submitButtonText?: string;
}

export interface SubmissionData {
  instagramHandle: string;
  timestamp: string;
}