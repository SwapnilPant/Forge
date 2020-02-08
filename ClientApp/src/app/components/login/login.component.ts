import { Component, OnInit } from  '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from  '@angular/material';
import {MessageComponent} from '../message/message.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export  class  LoginComponent{

    public  email:  string  =  "";
    public  password:  string  =  "";

    constructor(private  dialog:  MatDialog, private  router:  Router) { }
    login(){
        debugger;
        if(this.email  ===  "admin"  &&  this.password  === "admin")
        {
            this.dialog.closeAll();
            this.router.navigate(['dashboard']);
        }
        else
        {
            this.dialog.open(MessageComponent,{ data: {
            message:  "Error!!!"
            }});
        }
    }
}