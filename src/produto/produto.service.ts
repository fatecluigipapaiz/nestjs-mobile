import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { CriarProdutoDto } from './dto/criar-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async create(criarProdutoDto: CriarProdutoDto): Promise<Produto> {
    const produto = this.produtoRepository.create(criarProdutoDto);
    return this.produtoRepository.save(produto);
  }
}
