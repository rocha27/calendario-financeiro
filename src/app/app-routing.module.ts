import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioFinanceiroComponent } from './components/calendario-financeiro/calendario-financeiro.component';

const routes: Routes = [
  { path: '', component: CalendarioFinanceiroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
