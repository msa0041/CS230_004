import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav.bar.component';
import { ImagesGalleryComponent } from './gallery/images-gallery.component';
import { PurchaseItemsComponent } from './items/purchase-items.component';
import { PurchaseItems2Component } from './items2/purchase-items2.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { DownAdvComponent } from './Advertisment/Down-Adv.component';
import { SellComponent } from './header/sell.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './header/signin.component';
import { RegisterComponent } from './header/register.component';
import { HomeComponent } from './header/home.component';
import { HelpContactComponent } from './body/help-contact.component';
import { TopTopBarComponent } from './header/top-top-bar.component';
import { TopMiddleBarComponent } from './header/top-middle-bar.component';
import { TopDownBarComponent } from './header/top-down-bar.component';
import { BrandOutletComponent } from './body/brand-outlet.component';
import { DailyDealsComponent } from './body/daily-deals.component';
import { BuyComponent } from './body/buy.component';
import { UnderNavbarComponent } from './dailyDeals/under-navbar.component';
import { ItemsOnSaleComponent } from './dailyDeals/items-on-sale.component';
import { PurchasItemsDailyComponent } from './dailyDeals/purchas-items-daily.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ImagesGalleryComponent,
    PurchaseItemsComponent,
    LayoutMainComponent,
    PurchaseItems2Component,
    DownAdvComponent,
    BottomNavBarComponent,
    SellComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    HelpContactComponent,
    TopTopBarComponent,
    TopMiddleBarComponent,
    TopDownBarComponent,
    BrandOutletComponent,
    DailyDealsComponent,
    BuyComponent,
    UnderNavbarComponent,
    ItemsOnSaleComponent,
    PurchasItemsDailyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
