import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-registraton',
  templateUrl: './registraton.component.html',
  styleUrls: ['./registraton.component.css']
})
export class RegistratonComponent implements OnInit {

  constructor(private router : Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  }
  login(): void{
  this.router.navigate(['login'],{relativeTo: this.route});
}
}
