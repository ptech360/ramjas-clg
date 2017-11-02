import { Injectable } from '@angular/core';

@Injectable()
export class AssignmentService {

  public assignments: any[] = [
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
    { id: 101, subject: 'English', title: 'Short Note', description: 'Write note about MP Foundation\'s day', dueDate: '14/11/2017', createdAt: '01/11/2017' },
  ];

  public getCurrentAssignments() {
    return this.assignments.filter((item: any) => {
      return (new Date(item.dueDate) < new Date());
    });
  }

  public getOldAssignment() {
    return this.assignments.filter((item: any) => {
      return (new Date(item.dueDate) < new Date());
    })
  }

  public addNewAssignment(data: any) {
    if (this.assignments.indexOf(data) === -1)
      this.assignments.unshift(data);
    else
      alert("Duplicate Entry");
  }

}