import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-area',
  templateUrl: './note-area.component.html',
  styleUrl: './note-area.component.css'
})
export class NoteAreaComponent {
  s:Note= new Note();
  constructor(private ss:NoteService) {
  
  }
  addNoteFunction(){
    this.ss.addToNotes(this.s)
    this.s = new Note();
  }
}
