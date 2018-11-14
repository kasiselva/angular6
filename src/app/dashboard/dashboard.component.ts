import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/loginservice';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userGriViewList = [];
  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginService.getLoginList().subscribe(userres => {
      if(userres!=null && userres!= undefined && userres.length>0)
      {
        this.userGriViewList = userres;
      }
    });
  }
  generate() {
debugger;
    var doc = new jsPDF();
    var col = ["Name", "Username","Email"];
    var rows = [];

/* The following array of object as response from the API req  */

//  var itemNew = [    
//   { id: 'Case Number', name : '101111111' },
//   { id: 'Patient Name', name : 'UAT DR' },
//   { id: 'Hospital Name', name: 'Dr Abcd' }    
// ]

this.userGriViewList.forEach(element => {      
  var temp = [element.name,element.username,element.email];
  rows.push(temp);

// itemNew.forEach(element => {      
//     var temp = [element.id,element.name];
//     rows.push(temp);

 });        

    doc.autoTable(col, rows);
    doc.save('Test1.pdf');
  }
}
