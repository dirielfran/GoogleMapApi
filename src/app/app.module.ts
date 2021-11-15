import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GoogleMapsModule} from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {ImageModule} from 'primeng/image';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CopSidebarMenuComponent } from './cop-sidebar-menu/cop-sidebar-menu.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AccordionModule} from 'primeng/accordion';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CopSidebarMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentesModule,
    SidebarModule,
    ButtonModule,
    ImageModule,
    ScrollPanelModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
