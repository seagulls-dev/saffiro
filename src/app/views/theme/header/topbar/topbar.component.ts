// Angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'kt-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

	visitor : string;

	constructor(private currentRoute : ActivatedRoute) {

	}

	ngOnInit() {
		this.visitor = this.currentRoute.snapshot.url[0].path;
	}
 }
