export interface Message {
  id: string;
  uid: string | number;
  username: string;
  role: string;
  timestamp: number;
  content: string;
  isOwn: boolean;
}

export interface Conversation {
  userName: string;
  userUuid: string;
  unreadMessageCount: number;
  messages: Message[]
}

export type ChatEvent = {
  type: 'room' | 'conversation' | 'conversation-list',
  conversation?: Conversation
}