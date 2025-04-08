import { Component, OnInit } from '@angular/core';
import { CalendarioTraduzidoService } from '../../services/calendario-traduzido.service';

interface CalendarioDate {
  day: number;
  month: number;
}
@Component({
  selector: 'app-calendario-financeiro',
  templateUrl: './calendario-financeiro.component.html',
  styleUrl: './calendario-financeiro.component.scss',
})
export class CalendarioFinanceiroComponent implements OnInit {
  valorTotalMensal: number = 0;
  dataSelecionada: Date = new Date();
  diasDoMes: { data: Date; valor: string }[] = [];

  constructor(
    private calendarioTraduzido: CalendarioTraduzidoService,
  ) {}

  ngOnInit(): void {
    this.calendarioTraduzido.setPortugueseTranslation();
    this.calcularValorDiario();
  }

  private formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  private obterDiasDoMes(ano: number, mes: number): number {
    return new Date(ano, mes + 1, 0).getDate();
  }

  calcularValorDiario(): void {
    if (this.valorTotalMensal <= 0) {
      this.diasDoMes = [];
      return;
    }

    const ano = this.dataSelecionada.getFullYear();
    const mes = this.dataSelecionada.getMonth();
    const diasNoMes = this.obterDiasDoMes(ano, mes);
    const valorDiario = this.valorTotalMensal / diasNoMes;

    this.diasDoMes = Array.from({ length: diasNoMes }, (_, i) => ({
      data: new Date(ano, mes, i + 1),
      valor: this.formatarMoeda(valorDiario)
    }));
  }

  onValorChange(valorInput: number): void {
    this.valorTotalMensal = valorInput || 0;
    this.calcularValorDiario();
  }

  shouldShowDate(dateObj: CalendarioDate): boolean {
    return dateObj?.month === this.dataSelecionada.getMonth();
  }

  getValorDoDia(dateObj: CalendarioDate): string {
    if (!dateObj) return '';

    const ano = this.dataSelecionada.getFullYear();
    const mes = this.dataSelecionada.getMonth();

    const diaEncontrado = this.diasDoMes.find((d) =>
      d.data.getDate() === dateObj.day &&
      d.data.getMonth() === mes &&
      d.data.getFullYear() === ano
    );

    return diaEncontrado?.valor ?? '';
  }

  onDataChange(data: Date) {
    this.dataSelecionada = data;
    this.calcularValorDiario(); // Recalcula sempre que mudar a data
  }

}
