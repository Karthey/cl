import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
  export class TabComponent implements OnInit {
    
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

    statusChoices = [ 
    'Open',
    'Assigned',
    'InProgress',
    'Closed'
  ];
  searchText;

    form1: HTMLFormElement = document.querySelector('#myForm');
  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.buildForm()
   }
   searchCallLogs = new Array<CallLog>();
   loadCallLogs = new Array<CallLog>();

  buildForm(){
    this.myForm = this.fb.group({
      id:[''],
      date:[""],
      name: [""],
      title:[""],
      problem: [""],
     solution: [""],
      searchCL: [''],   })
  }


  ngOnInit() {
    this.loadSampleCallLogs();
    
  }
  loadSampleCallLogs(){

   //loadCallLogs = new Array<CallLog>();
   this.searchCallLogs = [
   
    { id:'8', date:'4/26/2021', name: 'Jonathan', title:'userid expired' , problem:'My userid is expired', solution:''    ,status: 'open' },
    { id:'7', date:'4/23/2021', name: 'Tina'  ,title:'laptop reboots' , problem:'Laptop reboots every few hours', solution:'',status: 'open'},
    {id:'6',  date:'4/19/2021', name: 'Mathew' , title:'Outlook not working' , problem:'Outlook not connecting', solution:'' ,status: 'in-progress'},
    {id:'5',  date:'4/17/2021', name: 'Sandra' ,  title:'login not working' , problem:'', solution:'' ,status: 'closed'},
    {id:'4',  date:'4/07/2021', name: 'Magneta' ,  title:'Need DB access' , problem:'', solution:'' ,status: 'in-progress'},
    { id:'3', date:'4/01/2021', name: 'Ruby' ,  title:'LAT app access request' , problem:'LAT application login access request ', solution:'Acess provided' ,status: 'closed' },
    { id:'2', date:'3/27/2021', name: 'Dynama' , title:'IE not working' , problem:'IE doesnt open', solution:'' ,status: 'in-progress'},
    {id:'1',  date:'3/25/2021', name: 'Sam' ,  title:' COPA form not saving' , problem:'COPA application is not saving the details', solution:'' ,status: 'open' }
    
  ];


  }


   onSubmit() {
 
 
      const obj = new CallLog();

       obj.name = this.myForm.get('name').value;
        obj.title = this.myForm.get('title').value;
         obj.problem = this.myForm.get('problem').value;
       obj.date =this.GetFormattedDate(); // new Date().toISOString().slice(0, 10);
       debugger;
       obj.status= 'Open';//"Open";
       this.searchCallLogs.unshift(obj);

     

      this.myForm.reset();
      return;
    

    alert('not valid, try again')
  }
 GetFormattedDate() {
    var todayTime = new Date();
    var month = (todayTime .getMonth() + 1).toString();
    var day = (todayTime .getDate()).toString();
    var year = (todayTime .getFullYear()).toString();
    return month + "/" + day + "/" + year;
}


      }

class CallLog {
  id: string;
  date: string;
  name: string;
  title: string;
  problem: string;
  solution: string;
  status: string;
  

  constructor() {
   
  }
}