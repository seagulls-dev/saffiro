// Angular
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';

@Component({
  selector: 'kt-custom-subheader',
  templateUrl: './custom-subheader.component.html',
  styleUrls: ['./custom-subheader.component.scss']
})
export class CustomSubheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
