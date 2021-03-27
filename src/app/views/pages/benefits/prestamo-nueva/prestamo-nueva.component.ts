import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-prestamo-nueva',
  templateUrl: './prestamo-nueva.component.html',
  styleUrls: ['./prestamo-nueva.component.scss']
})
export class PrestamoNuevaComponent implements OnInit {

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
