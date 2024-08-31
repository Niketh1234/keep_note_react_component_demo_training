import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteAreaComponent } from './note-area/note-area.component';
import { ShowAreaComponent } from './show-area/show-area.component';
import { StartComponentComponent } from './start-component/start-component.component';

const routes: Routes = [
  {path:'take-note',component:NoteAreaComponent},
  {path:'show-note',component:ShowAreaComponent},
  {path:'',component:StartComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
