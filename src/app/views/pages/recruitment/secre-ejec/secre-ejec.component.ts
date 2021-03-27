import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-secre-ejec',
  templateUrl: './secre-ejec.component.html',
  styleUrls: ['./secre-ejec.component.scss']
})
export class SecreEjecComponent implements OnInit {
  
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
