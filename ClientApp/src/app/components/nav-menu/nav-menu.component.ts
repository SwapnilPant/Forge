import { Component, OnInit } from '@angular/core';
import { MenulistService } from '../../services/menulist.service'
import { Router } from '@angular/router';
import { MenuList } from '../../model/menulist';
import { MatDialog, MatDialogRef } from  '@angular/material';
import {LoginComponent} from '../login/login.component';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  public isLogin = false;
  menulists: MenuList[] = [];
  public  email:  string  =  "";
  public  password:  string  =  "";
  constructor(private menulistservice: MenulistService,private  dialog:  MatDialog, private  router:  Router,private localSt:LocalStorageService) {
  }
  ngOnInit() {
    this.getmenulist();
    this.localSt.observe('key')
                .subscribe((value) => console.log('new value', value));
  }
  login(){
        this.dialog.open(LoginComponent);
}
  getmenulist(): void {
    this.menulistservice.getMenuList()
      .subscribe(resp => {
        for (const data of resp.body) {
          this.menulists.push(data);
        }
      });

  }
}
