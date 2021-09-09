import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav.bar.component';
import { ImagesGalleryComponent } from './gallery/images-gallery.component';
import { PurchaseItemsComponent } from './items/purchase-items.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ImagesGalleryComponent,
    PurchaseItemsComponent,
    BottomNavBarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
