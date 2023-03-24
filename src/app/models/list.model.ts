import { Card } from './card.model';

export interface List {
  id: string;
  title: string;
  position: number;
  cards: Card[];
  showCardForm?: boolean;
}

export interface createListDto extends Omit<List, 'id' | 'cards'> {
  boardId: string;
}
