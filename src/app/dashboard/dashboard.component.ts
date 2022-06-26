import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['tweet'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;
  tweets: any;

  constructor(private dialog : MatDialog, private api : ApiService){}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  getAllpost(){
    this.api.getAddpost()
    .subscribe({
      next:(res)=> {
        this.tweets = res;
        this.getAllpost();
      },
      error:(err)=> {
        alert("Unexpected error occured")
      }
    })
  }

  ngOnInit(): void {
    this.getAllpost();
  }

}

