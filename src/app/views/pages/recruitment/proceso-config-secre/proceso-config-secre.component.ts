import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-proceso-config-secre',
  templateUrl: './proceso-config-secre.component.html',
  styleUrls: ['./proceso-config-secre.component.scss']
})
export class ProcesoConfigSecreComponent implements OnInit {

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
