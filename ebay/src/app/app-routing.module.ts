import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SellComponent} from './header/sell.component';
import {SigninComponent} from './header/signin.component';
import {RegisterComponent} from './header/register.component';
import {HomeComponent} from './header/home.component';
import {HelpContactComponent} from './body/help-contact.component';
import {TopTopBarComponent} from './header/top-top-bar.component';
import {TopMiddleBarComponent} from './header/top-middle-bar.component';
import {TopDownBarComponent} from './header/top-down-bar.component';
import {DailyDealsComponent} from './body/daily-deals.component';
import {BrandOutletComponent} from './body/brand-outlet.component';
import {BuyComponent} from './body/buy.component';

const routes: Routes = [
  {path: 'Sell', component: SellComponent },
  {path: 'Signin', component: SigninComponent },
  {path: 'Register', component: RegisterComponent },
  {path: '', component: HomeComponent },
  {path: 'Help & Contact', component: HelpContactComponent },
  {path: 'Top Top Bar', component: TopTopBarComponent },
  {path: 'Top Middle Bar', component: TopMiddleBarComponent },
  {path: 'Top Down Bar', component: TopDownBarComponent },
  {path: 'Daily Deals', component: DailyDealsComponent },
  {path: 'Brand Outlet', component: BrandOutletComponent },
  {path: 'Buy', component: BuyComponent },

]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
