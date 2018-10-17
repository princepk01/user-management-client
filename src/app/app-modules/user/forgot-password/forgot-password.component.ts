import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Input() name;
  closeResult: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
  }
  login(content) {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
  
  resetPasswordModel(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
