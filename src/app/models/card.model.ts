import { List } from "./list.model";

export interface Card {
  id: string;
  title: string;
  description?: string;
  position: number;
  list: List;
}

export interface createCardDto extends Omit<Card, 'id' | 'list'> {
  listId: string | number;
  boardId: string;
}

// export interface UpdateCardDto {
//   title?: string;
//   description?: string;
//   position?: number;
//   listId?: string | number;
//   boardId?: string;
// }

export interface UpdateCardDto extends Partial<Omit<Card, 'id' | 'list'>> {
  listId?: number | string;
  boardId?: string;
}
