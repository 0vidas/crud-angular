
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Contato } from './contato';



@Injectable({

  providedIn: 'root'

})

export class ContatoService {

  listaContatosRef: AngularFireList<Contato>;

  contatoRef: AngularFireObject<Contato>;



  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listaContatosRef = this.db.list('list-contatos');

    this.contatoRef = this.db.object('list-contatos/' + 0);

  }



  // Inserir Contato

  insertContato(contato: Contato) {

    this.listaContatosRef.push({

      nome: contato.nome,

      preco: contato.preco,

      autor: contato.autor,

    });

  }



  // Buscar um único Objeto Contato pelo seu ID

  getContatoById(id: string): AngularFireObject<Contato> {

    this.contatoRef = this.db.object('list-contatos/' + id);

    return this.contatoRef;

  }



  // Fetch Students List

  getContatoList(): AngularFireList<Contato> {

    return this.listaContatosRef;

  }



  // Update Student Object

  updateContato(contato: Contato) {

    this.contatoRef.update({

      nome: contato.nome,

      preco: contato.preco,

      autor: contato.autor,

    });

  }



  // Delete Student Object

  deleteContato(id: string) {

    this.contatoRef = this.db.object('list-contatos/' + id);

    this.contatoRef.remove();

  }

}
