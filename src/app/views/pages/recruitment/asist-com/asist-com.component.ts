import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-asist-com',
  templateUrl: './asist-com.component.html',
  styleUrls: ['./asist-com.component.scss']
})
export class AsistComComponent implements OnInit {

  KTBootstrapSelect : any;

  constructor() { }

  ngOnInit() {
    this.KTBootstrapSelect = function () {

			// Private functions
			var demos = function () {
				// minimum setup
				$('.kt-selectpicker').selectpicker();
			}

			return {
				// public functions
				init: function () {
					demos();
				}
			};
		}();
		this.KTBootstrapSelect.init();
  }

}
