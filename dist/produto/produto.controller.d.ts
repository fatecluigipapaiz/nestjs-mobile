import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { CriarProdutoDto } from './dto/criar-produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    listar(): Promise<Produto[]>;
    criar(criarProdutoDto: CriarProdutoDto): Promise<Produto>;
}
