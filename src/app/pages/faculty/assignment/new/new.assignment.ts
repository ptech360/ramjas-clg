import {Component} from '@angular/core';
import { FormBuilder } from "@angular/forms";
@Component({
  selector:'new-assignment',
  templateUrl: './new.assignment.html'
})
export class NewAssignmentComponent{
  files:any[]=[];
  constructor(public fb:FormBuilder){

  }

  getFiles(event:any){
    console.log(this.files)
    const file = event.srcElement.files;
    Object.keys(file).forEach(key => {
      this.files.push(file[key]);
    });
    console.log(this.files);
  }

  deleteFile(index:any){
    this.files.splice(index,1);
  }
}