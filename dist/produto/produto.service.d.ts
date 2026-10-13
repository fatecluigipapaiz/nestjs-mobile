import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { CriarProdutoDto } from './dto/criar-produto.dto';
export declare class ProdutoService {
    private produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    findAll(): Promise<Produto[]>;
    create(criarProdutoDto: CriarProdutoDto): Promise<Produto>;
}
