import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { CtaComponent } from './common/cta/cta.component';
import { NewsLetterComponent } from './common/news-letter/news-letter.component';
import { SharedModule } from './features/shared/shared/shared.module';
import { LoaderComponent } from './common/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ResponsiveHeaderComponent } from './common/responsive-header/responsive-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CtaComponent,
    NewsLetterComponent,
    LoaderComponent,
    ResponsiveHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
