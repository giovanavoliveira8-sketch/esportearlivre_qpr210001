import { Component } from '@angular/core';
import { Corrida } from '../models/Corrida';
import { CorridaService } from '../../service/corrida.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-corridas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-corridas.component.html',
  styleUrl: './cadastro-corridas.component.css'
})

export class CadastroCorridasComponent {

   // Cria um objeto Corrida vazio para receber os dados do formulário
corrida: Corrida = new Corrida();

// Injeta o serviço de corrida no componente
constructor(
  private CorridaService: CorridaService
) {}

 // Função executada quando o botão "Cadastrar Corrida" é clicado
cadastrar (){

  // Envia a corrida preenchida para o serviço
  this.CorridaService.adicionarCorrida(this.corrida);

  // Mostra no console os dados da corrida cadastrada
  console.log('Corrida Cadastrada', this.corrida);

  // Cria uma nova corrida vazia para limpar o formulário
  this.corrida = new Corrida ();

}
}
