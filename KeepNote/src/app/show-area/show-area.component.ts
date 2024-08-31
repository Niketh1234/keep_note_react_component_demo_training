import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-show-area',
  templateUrl: './show-area.component.html',
  styleUrl: './show-area.component.css'
})
export class ShowAreaComponent {
  notes:Array<Note> = [];
  constructor(private ss:NoteService){
    this.notes = this.ss.notes;
  }
}
