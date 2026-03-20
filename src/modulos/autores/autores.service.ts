import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
  },
  {
    id: 4,
    nome: 'Ana Julia',
    email: 'ana.julia@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  listarAutores() {
    return autores;
  }
  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      throw new NotFoundException('Autor não encontrado');
    }

    return autorEncontrado;
  }

  criarAutor(body: CriarAutorDto) {
    autores.push({
      id: autores.length + 1,
      nome: body.nome,
      email: body.email,
    });
    return autores;
  }
  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    const autorEncontrado = this.listarAutor(idAutor);

    if (!bodyRequest.nome && !bodyRequest.email) {
      throw new BadRequestException('Nome e email são obrigatórios');
    }

    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }
    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }
    return autorEncontrado;
  }
}
