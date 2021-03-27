import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-clima-labo-eval',
  templateUrl: './clima-labo-eval.component.html',
  styleUrls: ['./clima-labo-eval.component.scss']
})
export class ClimaLaboEvalComponent implements OnInit {

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
