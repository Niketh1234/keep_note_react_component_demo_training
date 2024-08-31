import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes:Array<Note> = [];
  addToNotes(note:Note){
    this.notes.push(note);
  }
  get Notes(){
    return this.notes;
  }
  constructor() { }
}
