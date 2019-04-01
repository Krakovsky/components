import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgSemanticModule } from "ng-semantic";
import { MultiselectComponent } from './multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    ImageZoomComponent,
    MultiselectComponent,

  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    NgxImageZoomModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }