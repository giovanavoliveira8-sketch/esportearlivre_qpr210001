import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.component.html',
  styleUrl: './atleta-component.component.css'
})
export class AtletaComponentComponent {
  //DECLARANDO ATRIBUTOS
  nome = ''
  cpf = 0
  sexo = ''
  cep =  0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DAS FUNÇÕES
  exibirDados(){
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)

    this.limparDados()
  }

  limparDados(){
     this.nome = ''
     this.cpf = 0
     this.sexo = ''
     this.cep = 0
     this.ruaLogradouro = ''
     this.bairro = ''
     this.cidade = ''
     this.uf = ''

  }
}
