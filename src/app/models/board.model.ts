import { User } from '@models/user.model';

export interface Board {
  id: string;
  title: string;
  backgroundColor: 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray';
  members: User[];
}
