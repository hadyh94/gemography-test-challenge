import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ScrollTableComponent } from './components/scroll-table/scroll-table.component';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ScrollTableComponent,
    RepositoryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
