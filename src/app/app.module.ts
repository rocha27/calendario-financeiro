import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioFinanceiroComponent } from './components/calendario-financeiro/calendario-financeiro.component';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarioTraduzidoService } from './services/calendario-traduzido.service';
import { PrimeNGConfig } from 'primeng/api';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioFinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private calendarioTraduzido: CalendarioTraduzidoService,
    private primengConfig: PrimeNGConfig
  ) {
    this.calendarioTraduzido.setPortugueseTranslation();
  }
 }
