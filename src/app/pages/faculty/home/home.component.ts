import { Component, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";


declare let $:any;

@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class  HomeComponent{
  public timeSlots:any[]=[{time:'8:40',period:'A.M'},{time:'9:35',period:'A.M'},{time:'10:30',period:'A.M'},{time:'11:25',period:'A.M'},{time:'12:20',period:'P.M'},{time:'1:15',period:'P.M'},{time:'2:10',period:'P.M'},{time:'3:05',period:'P.M'},{time:'4:00',period:'P.M'}];
  public days:any[] = ['Mon','Tue','Wed','Thu','Fri','Sat'];
  public fullDays:any[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  public slots:any[]=[[
    {
      course:'B.A.',
      speciality:'ENGLISH',
      paper:'British Literature: The Early 20th Century',
      standard:'1st SEM',
      room:'201'
    },
    {
      course:'B.A.',
      speciality:'ENGLISH',
      paper:'Indian Classical Literature',
      standard:'2nd SEM',
      room:'202'
    },
    {
      course:'B.A.',
      speciality:'English',
      paper:'Modern European Drama',
      standard:'3rd SEM',
      room:'203'
    },
    {
      course:'B.A.',
      speciality:'ENGLISH',
      paper:'Postcolonial Literatures',
      standard:'4th SEM',
      room:'204'
    },
    {
      course:'B.A.',
      speciality:'English',
      paper:'Modern Indian Writing in English Translation',
      standard:'5th SEM',
      room:'205'
    },
    {
      course:'B.A.',
      speciality:'ENGLISH',
      paper:'British Literature after the 1960s',
      standard:'1st SEM',
      room:'201'
    },
    {
      course:'B.A.',
      speciality:'English',
      paper:'Nineteenth Century European Realism',
      standard:'4th SEM',
      room:'204'
    },
    {
      course:'M.A.',
      speciality:'English',
      paper:'Global Politics and the Media',
      standard:'2nd SEM',
      room:'304'
    },
    {
      course:'M.A.',
      speciality:'Philosophy',
      paper:'Greek Philosophy',
      standard:'1st SEM',
      room:'303'
    }],
    [{
      course:'M.A.',
      speciality:'philosopy',
      paper:' Continental Philosophy',
      standard:'4th SEM',
      room:'305'
    },
    {
      course:'B.A.',
      speciality:'History',
      paper:' Social Formations and Cultural Patterns of the Ancient World ',
      standard:'1st SEM',
      room:'402'
    },
    {
      course:'B.Sc',
      speciality:'Economics',
      paper:'Introductory Microeconomics',
      standard:'1st SEM',
      room:'402'
    },
    {
      course:'B.Sc',
      speciality:'Mathematics',
      paper:'C 3 Real Analysis',
      standard:'2nd SEM',
      room:'502'
    },
    {
      course:'M.Sc',
      speciality:'Mathematics',
      paper:'C 6 Group Theory-I',
      standard:'2nd SEM',
      room:'405'
    },
    {
      course:'M.Sc',
      speciality:'Physics',
      paper:'Atomic Spectroscopy',
      standard:'1st SEM',
      room:'402'
    },
    {
      course:'B.Sc',
      speciality:'Botany',
      paper:'Biology-I (Introduction to Biology) ',
      standard:'1st SEM',
      room:'501'
    },
    {
      course:'B.Sc',
      speciality:'Zoology',
      paper:'Animal Physiology and Functional Histology -I ',
      standard:'3rd SEM',
      room:'203'
    },
    {
      course:'B.Sc',
      speciality:'Chemistry',
      paper:'Inorganic Chemistry- I ',
      standard:'1st SEM',
      room:'208'
    }],
    [{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{}]    
  ];
  public papers:any[]=[];
  public courses:any[]=[];
  public standards:any[]=[];
  public specialities:any[]=[];
  public rooms:any[]=[];
  timeTableForm:FormGroup;
  currentWeek:any = new Date;
  currentMonth:any = new Date().getMonth();
  constructor(private fb:FormBuilder){
    this.currentWeek = this.weekAndDay();
    this.slots.forEach(element => {
      element.forEach(e => {
        this.papers.push(e.paper);
        if(this.courses.indexOf(e.course) === -1)
          this.courses.push(e.course);
        if(this.standards.indexOf(e.standard) === -1)
          this.standards.push(e.standard);
        if(this.specialities.indexOf(e.speciality) === -1)
          this.specialities.push(e.speciality);
        if(this.rooms.indexOf(e.room) === -1)
          this.rooms.push(e.room);
        
      });
    });
    this.timeTableForm = fb.group({
      day:[''],
      time:[''],
      slot:this.fb.group({
        course:['',Validators.required],
        speciality:['',Validators.required],
        paper:['',Validators.required],
        standard:['',Validators.required],
        room:['',Validators.required]
      })
    });
  }
  isUpdating:boolean = false;
  editTimeTable(day:any,time:any,slot:any){
    console.log("day = "+this.days[day],this.timeSlots[time], slot);
    this.timeTableForm.controls["day"].patchValue(this.days[day]);
    this.timeTableForm.controls["time"].patchValue(this.timeSlots[time]);
    if(slot){
      this.isUpdating = true;
      this.timeTableForm.controls["slot"].patchValue(slot);
    }
    else
      this.isUpdating = false;
  }
  assignSlot(){
    console.log(this.timeTableForm.value);
    this.slots[this.days.indexOf(this.timeTableForm.controls['day'].value)][this.timeSlots.indexOf(this.timeTableForm.controls['time'].value)]=this.timeTableForm.value['slot'];
    $('#myModal').modal('hide');
    console.log(this.slots);
  }

  weekAndDay() {
    
        var date = new Date,
            days = ['Sunday','Monday','Tuesday','Wednesday',
                    'Thursday','Friday','Saturday'],
            prefixes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    
        return prefixes.indexOf(prefixes[0 | date.getDate() / 7]);
    
    }

    
}