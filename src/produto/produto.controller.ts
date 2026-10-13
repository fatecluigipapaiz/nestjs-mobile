import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { CriarProdutoDto } from './dto/criar-produto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async listar(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Post()
  async criar(@Body() criarProdutoDto: CriarProdutoDto): Promise<Produto> {
    return this.produtoService.create(criarProdutoDto);
  }
}
