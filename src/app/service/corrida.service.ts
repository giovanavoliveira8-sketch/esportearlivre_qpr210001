import { Injectable } from '@angular/core';
import { Corrida } from '../component/models/Corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  corridas: Corrida [] = [];

  adicionarCorrida(corrida: Corrida) {

    this.corridas.push(corrida);

    console.log('Corrida cadastradas', this.corridas);

  }

  listarCorrida(): Corrida[] {
 
    return this.corridas;
    }
  }

