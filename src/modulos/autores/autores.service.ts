import { Injectable } from '@nestjs/common';
import { CriarAutorDto } from './autores.dto';

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
    const autor = autores.find((autor) => autor.id === id);

    if (autor) {
      return autor;
    }

    return 'Autor não encontrado';
  }

  criarAutor(body: CriarAutorDto) {
    autores.push({
      id: autores.length + 1,
      nome: body.nome,
      email: body.email,
    });
    return autores;
  }
  atualizarAutor(idAutor: number, bodyRequest: any) {
    const autorEncontrado = autores.find((autor) => autor.id === idAutor);

    if (!autorEncontrado) {
      return 'Autor não ecnontrado';
    }
    autorEncontrado.nome = bodyRequest.nome;
    autorEncontrado.email = bodyRequest.email;

    return autorEncontrado;
  }
}
