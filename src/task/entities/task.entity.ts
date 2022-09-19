import {
  Column,
  Entity,
  OneToMany, PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './../../user/entities/user.entity';

@Entity('tbl_task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column()
  status: string;

  @OneToMany(() => User, (users) => users.task)
  users: User[];
}
