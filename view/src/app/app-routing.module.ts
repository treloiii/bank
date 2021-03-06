import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from "./components/signin/signin.component";
import {MainComponent} from "./components/main/main.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AuthGuard} from "./guards/auth.guard";
import {PaymentHistoryComponent} from "./components/payment-history/payment-history.component";
import {SendMoneyComponent} from "./components/send-money/send-money.component";
import {CardComponent} from "./components/card/card.component";
import {PaymentsComponent} from "./components/payments/payments.component";
import {DailyRateComponent} from "./components/daily-rate/daily-rate.component";


const routes: Routes = [
  { path: "login", component: SigninComponent },
  { path: "register", component: SignupComponent },
  { path: "main", component: MainComponent, canActivate: [AuthGuard]},
  { path: "history", component: PaymentHistoryComponent, canActivate: [AuthGuard]},
  { path: "payments", component: PaymentsComponent, canActivate: [AuthGuard]},
  { path: "send_money", component: SendMoneyComponent, canActivate: [AuthGuard]},
  { path: "daily_rate", component: DailyRateComponent, canActivate: [AuthGuard]},
  { path: "card/:id", component: CardComponent, canActivate: [AuthGuard]},
  { path: "", redirectTo: "main", pathMatch: "full"},
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
