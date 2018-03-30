import {Component} from '@angular/core';

@Component({
  selector:'assessment',
  templateUrl:'./assessment.component.html',
  styleUrls:['./assessment.component.css']
})
export class AssessmentComponent{  
  studentsCopy:any[];
  students:any[] = [
    {name:"A GOLDAN NIVETHITHA",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"AARTHY R",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ABHIJJITH V",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ABIRAAMI SIVARAMAKRISHNAN",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ACHYUTHA VISHNUVARDHAN",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ADITHYA VIKRAM SAKTHIVEL",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"AISHWARYAA VASUDEVAN",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"AKSHAYA R",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ALLAN KEVIN T",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"AMIRTHA VARSHINI A S",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ANKIT ARORA",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ANUJ SUNIL",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ANUMALASETTY JAYAPRAKASH",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"APUURVA S",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ARAVINTH RAMESH",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ARVIND NATARAJ S",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ASHWIN C",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ASHWIN R",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"ASHWIN RAM",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"AVULA MANASA",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"AVUNOORI SHASHANK",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"BALAJI AATHITHAN true",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"BHAMIDIPATI MOHAN VAMSI",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"BIJJAM AMULYA",present:"true",assessmentFileUrl:'assets/assignmentFile.jpg',uploadedAt:'02/11/2017', subjectName:'English'},
    {name:"BOMMAGANI PRAHARSHA",present:"true"}
  ];

  constructor(){
    this.studentsCopy = this.students;
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
}