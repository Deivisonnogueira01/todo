import * as bcrypt from 'bcrypt';
import { Task } from 'src/task/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tbl_aluno')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column()
  status: boolean;

  @Column()
  confirmationToken: string;


  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => Task, (task) => task.users)
  task: Task;


  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password);
    return hash === this.password;
  }
}
