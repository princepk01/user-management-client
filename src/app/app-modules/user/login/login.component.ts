import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  forgot(): void {
    this.router.navigate(['forgot'], { relativeTo: this.route });
  }

  registration(): void {
    this.router.navigate(['registration'], { relativeTo: this.route });
  }
}
