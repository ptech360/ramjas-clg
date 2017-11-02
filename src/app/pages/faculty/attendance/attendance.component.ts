import {Component} from '@angular/core';

@Component({
  selector:'attendance',
  templateUrl:'./attendance.component.html',
  styleUrls:['./attendance.component.css']
})
export class AttendaceComponent{
  isSubmited:boolean=false;
  absentStudent:any[]=[];
  students:any[] = [
    {name:"A GOLDAN NIVETHITHA",present:"true"},
    {name:"AARTHY R",present:"true"},
    {name:"ABHIJJITH V",present:"true"},
    {name:"ABIRAAMI SIVARAMAKRISHNAN",present:"true"},
    {name:"ACHYUTHA VISHNUVARDHAN",present:"true"},
    {name:"ADITHYA VIKRAM SAKTHIVEL",present:"true"},
    {name:"AISHWARYAA VASUDEVAN",present:"true"},
    {name:"AKSHAYA R",present:"true"},
    {name:"ALLAN KEVIN T",present:"true"},
    {name:"AMIRTHA VARSHINI A S",present:"true"},
    {name:"ANKIT ARORA",present:"true"},
    {name:"ANUJ SUNIL",present:"true"},
    {name:"ANUMALASETTY JAYAPRAKASH",present:"true"},
    {name:"APUURVA S",present:"true"},
    {name:"ARAVINTH RAMESH",present:"true"},
    {name:"ARVIND NATARAJ S",present:"true"},
    {name:"ASHWIN C",present:"true"},
    {name:"ASHWIN R",present:"true"},
    {name:"ASHWIN RAM",present:"true"},
    {name:"AVULA MANASA",present:"true"},
    {name:"AVUNOORI SHASHANK",present:"true"},
    {name:"BALAJI AATHITHAN true",present:"true"},
    {name:"BHAMIDIPATI MOHAN VAMSI",present:"true"},
    {name:"BIJJAM AMULYA",present:"true"},
    {name:"BOMMAGANI PRAHARSHA",present:"true"}
  ];
  studentsCopy:any[] = this.students;
  constructor(){
    
  }

  search(key:any){
    this.students = JSON.parse(JSON.stringify(this.studentsCopy));
    let val = key.target.value;
    if (val && val.trim() != '') {
      this.students = this.studentsCopy.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  countPresent(student:any){
    if(!student.present&&this.absentStudent.indexOf(student)===-1) this.absentStudent.push(student);
    else if(student.present){
      this.absentStudent.splice(this.absentStudent.indexOf(student),1)
    }
  }

  submitAttendance(){
    this.isSubmited = true;
  }

  editAttendance(){
    this.isSubmited = false;
  }
}