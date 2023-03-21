import { User } from '@models/user.model';

export interface Board {
  id: string;
  title: string;
  backgroundColor: string;
  members: User[];
}
