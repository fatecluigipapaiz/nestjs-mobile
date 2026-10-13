import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CriarProdutoDto {
  @IsString({ message: 'O nome precisa ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  nome: string;

  @IsNumber({}, { message: 'O preço precisa ser um número.' })
  @Min(0, { message: 'O preço não pode ser negativo.' })
  preco: number;
}
