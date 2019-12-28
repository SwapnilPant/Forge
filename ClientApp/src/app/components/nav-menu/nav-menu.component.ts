import { Component, OnInit } from '@angular/core';
import { MenulistService } from '../../services/menulist.service'
import { MenuList } from '../../model/menulist';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  menulists: MenuList[] = [];
  constructor(private menulistservice: MenulistService) {
  }
  ngOnInit() {
    this.getmenulist();
  }
  getmenulist(): void {
    this.menulistservice.getMenuList()
      .subscribe(resp => {
        for (const data of resp.body) {
          this.menulists.push(data);
        }
        console.log(this.menulists);
      });

  }
}
