import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Corrida } from '../models/Corrida';
import { CorridaService } from '../../service/corrida.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
