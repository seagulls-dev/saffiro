import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-benefit-cita',
  templateUrl: './benefit-cita.component.html',
  styleUrls: ['./benefit-cita.component.scss']
})
export class BenefitCitaComponent implements OnInit {

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
