import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MemberComponent } from './member/member.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BalanceReportComponent } from './balance-report/balance-report.component';


@NgModule({
  declarations: [
    AppComponent,
    LedgerComponent,
    MemberComponent,
    TransactionComponent,
    BalanceReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
