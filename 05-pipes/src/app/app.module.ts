import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración Locale
import localeEsEs from "@angular/common/locales/es";
import localeFr from "@angular/common/locales/fr";
import localeRu from "@angular/common/locales/ru"
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeEsEs)
registerLocaleData(localeFr)
registerLocaleData(localeRu)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
  {provide:LOCALE_ID, useValue:"es"}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
