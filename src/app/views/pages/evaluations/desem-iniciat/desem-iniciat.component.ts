import { Component, OnInit } from '@angular/core';


declare var $: any;
declare var swal: any;

@Component({
  selector: 'kt-desem-iniciat',
  templateUrl: './desem-iniciat.component.html',
  styleUrls: ['./desem-iniciat.component.scss']
})
export class DesemIniciatComponent implements OnInit {

  KTBootstrapDatepicker : any;
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
        $('#fecha_inicio_iniciat').datepicker({
          rtl: KTUtil.isRTL(),
          todayHighlight: true,
          orientation: "bottom left",
          templates: arrows,
          language: "es-ES"
        });
        $('#fecha_fin_iniciat').datepicker({
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
    var KTSweetAlert2Demo = function () {

      var initSaffiroReclutamiento = function () {

        $('#btn-guardar-proceso').click(function (e) {
          swal.fire({
            title: 'Está seguro?',
            text: "No podrá deshacer esta acción!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, guardar!'
          }).then(function (result) {
            if (result.value) {
              swal.fire(
                'Guardado!',
                'Los datos fueron guardados con éxito.',
                'success'
              )
            }
          });
        });
      };

      return {
        // Init
        init: function () {
          initSaffiroReclutamiento();
        },
      };
    }();

    KTSweetAlert2Demo.init();
  }

}
