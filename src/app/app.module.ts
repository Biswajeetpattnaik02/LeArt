import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverFlowComponent } from './cover-flow/cover-flow.component';
import { SwiperModule } from "swiper/angular";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaintVideoComponent } from './paint-video/paint-video.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    CoverFlowComponent,
    HeaderComponent,
    SidebarComponent,
    PaintVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, FormsModule,
    SwiperModule,MatGridListModule,MatCardModule,MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
