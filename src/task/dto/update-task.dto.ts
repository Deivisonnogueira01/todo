import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {

    @IsOptional()
    @IsString({
      message: 'Descrição Incorreta',
    })
    description: string;
}
 