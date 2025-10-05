import React from 'react';

export enum View {
  LOGIN,
  DASHBOARD,
  SUBJECT,
  CHAT,
  PROFILE,
}

export enum MessageAuthor {
  USER = 'user',
  AI = 'ai',
}

export interface ChatMessage {
  author: MessageAuthor;
  text: string;
}

export interface Subject {
  id: string;
  name: string;
  // Fix: Use React.ReactElement instead of JSX.Element to avoid global JSX namespace issues in .ts files.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  color: string;
  bgColor: string;
}

export interface User {
  name: string;
  email: string;
  ra?: string;
  phone?: string;
}