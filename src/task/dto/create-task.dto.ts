import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateTaskDto {
    
  id: string;

  description: string;

  users: CreateUserDto[];
}
