import { Component, OnInit } from '@angular/core';
import { CalendarioTraduzidoService } from '../../services/calendario-traduzido.service';

@Component({
  selector: 'app-calendario-financeiro',
  templateUrl: './calendario-financeiro.component.html',
  styleUrl: './calendario-financeiro.component.scss'
})
export class CalendarioFinanceiroComponent implements OnInit {

  valorTotal: number = 1000; // Valor inicial
  dataSelecionada: Date = new Date();

  constructor(private calendarioTraduzido: CalendarioTraduzidoService) {}

  ngOnInit(): void {
    this.calendarioTraduzido.setPortugueseTranslation(); // Ativa a tradução
  }
}
