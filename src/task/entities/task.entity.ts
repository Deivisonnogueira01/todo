import { User } from './../../user/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  status: string;


  /*@OneToMany(() => User, (user) => user.task)
  user: User;
  /*@OneToOne( () => user)
  user: User;*/
}
