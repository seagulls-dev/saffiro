import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-capacita-nueva',
  templateUrl: './capacita-nueva.component.html',
  styleUrls: ['./capacita-nueva.component.scss']
})
export class CapacitaNuevaComponent implements OnInit {

  KTBootstrapSelect : any;
  KTBootstrapDatepicker : any;


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

    this.KTBootstrapDatepicker = function () {

      var arrows;
      if (KTUtil.isRTL()) {
        arrows = {
          leftArrow: '<i class="la la-angle-right"></i>',
          rightArrow: '<i class="la la-angle-left"></i>'
        }
      } else {
        arrows = {
          leftArrow: '<i class="la la-angle-left"></i>',
          rightArrow: '<i class="la la-angle-right"></i>'
        }
      }

      $.fn.datepicker.dates['es-ES'] = {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy",
        clear: "Borrar",
        format: "dd-M-yyyy",
        titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
        weekStart: 1
      };

      var rrhh = function () {
        // input group layout 
        $('#fecha_limite').datepicker({
          rtl: KTUtil.isRTL(),
          todayHighlight: true,
          orientation: "bottom left",
          templates: arrows,
          language: "es-ES"
        });
      }

      return {
        // public functions
        init: function () {
          //demos(); 
          rrhh();
        }
      };
    }();

    this.KTBootstrapDatepicker.init();
  }

}
