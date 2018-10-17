import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
//import {MenuItem} from 'primeng/primeng'; 
import { PanelMenu } from 'primeng/panelmenu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    @Output() loadContent: EventEmitter<any> = new EventEmitter();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {

    }
    items: MenuItem[];
    ngOnInit() {
        this.items = [
            {
                label: 'User',
                icon: 'pi pi-pw pi-user',
                items: [
                    { label: 'Add User',
                    command: (event: Event) => { this.menu('addUser')} },
                    { separator: true }, 
                    { label: 'User List' ,
                    command: (event: Event) => { this.menu('userList')} },
                ]
            },
            {
                label: 'Examination Fee',
                //   icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Month Fee' ,
                    command: (event: Event) => { this.menu('menu3')} },
                    { label: 'Exam Fee' ,
                    command: (event: Event) => { this.menu('menu4')} },
                ]
            },
            {
                label: 'Examination',

            },

        ];

    }

    // public isCollapsed = true;
    // public isCollapsed1 = true;

    menu(menuName: string) {
      // alert(menuName);
      this.loadContent.emit(menuName);
      //alert(menuName);
    }
}
