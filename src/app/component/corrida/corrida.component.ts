import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Corrida } from '../models/Corrida';
import { CorridaService } from '../../service/corrida.service';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'
})

export class CorridaComponent implements OnInit {

  corridas: Corrida [] = [];

constructor(
  private CorridaService: CorridaService
){ }

ngOnInit(): void {

 this.corridas = this.CorridaService.listarCorrida();
}
}
