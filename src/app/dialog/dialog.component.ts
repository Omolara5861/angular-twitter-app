import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  addpostForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.addpostForm = this.formBuilder.group({
      addPost : ['', Validators.required]
    })
  }

  savePost(){
    if(this.addpostForm.valid) {
      this.api.postAddpost(this.addpostForm.value)
      .subscribe({
        next:(res)=>{
          alert("Posted successfully");
          this.addpostForm.reset();
          this.dialogRef.close('Post');

        },
        error:()=>{
          alert("error occured");
        }

      })
    }
  }

}