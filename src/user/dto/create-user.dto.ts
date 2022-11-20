import { CreateTaskDto } from "src/task/dto/create-task.dto";

export class CreateUserDto {
  id: string;

  nome: string;

  email: string;

  status: boolean;

  password: string;

  passwordConfirmation: string;

  confirmationToken: string;

  createAt: Date;

  updateAt: Date;

  task: CreateTaskDto;
}
