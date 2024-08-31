import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NoteAreaComponent } from './note-area/note-area.component';
import { ShowAreaComponent } from './show-area/show-area.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { StartComponentComponent } from './start-component/start-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteAreaComponent,
    ShowAreaComponent,
    StartComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
