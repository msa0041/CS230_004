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




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ImagesGalleryComponent,
    PurchaseItemsComponent,
    LayoutMainComponent,
    PurchaseItems2Component,
    DownAdvComponent,
    BottomNavBarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
