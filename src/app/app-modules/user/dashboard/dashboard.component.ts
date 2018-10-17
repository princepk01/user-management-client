import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //showList: boolean = true;

  menuNameContent: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
  }
  login(): void {
    this.router.navigate(['login'], { relativeTo: this.route });
  }

  loadList(event: any) {
    this.menuNameContent = event;    
  }
}
