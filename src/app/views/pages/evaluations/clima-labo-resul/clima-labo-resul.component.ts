import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare var $: any;
declare var swal: any;

@Component({
  selector: 'kt-clima-labo-resul',
  templateUrl: './clima-labo-resul.component.html',
  styleUrls: ['./clima-labo-resul.component.scss']
})
export class ClimaLaboResulComponent implements OnInit {

  @ViewChild('chart1', { static: true }) chart1: ElementRef;
  @ViewChild('chart2', { static: true }) chart2: ElementRef;

  KTBootstrapSelect : any;

  constructor() { }

  ngOnInit() {
    this.initChart1();
    this.initChart2();
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

  initChart1() {
    var chartData = {
      labels: ["Clima", "Etica", "Motivación", "Organizacional", "Satisfacción"],
      datasets: [{
        //label: 'Dataset 1',
        "backgroundColor": [
          "rgb(70,205,98)", "rgb(70,205,98)", "rgb(54,134,251)", "rgb(70,205,98)", "rgb(54,134,251)"
        ],
        data: [
          2.95, 3.32, 3.74, 3.02, 3.63
        ]
      }]
    };

    new Chart(this.chart1.nativeElement, {
      type: 'horizontalBar',
      data: chartData,
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: true,
            stacked: true
          }]
        }
      }
    });
  }

  initChart2() {
    var chartData = {
      labels: ["Mantener", "Reforzar", "Revisar", "Corregir"],
      datasets: [{
        //label: 'Dataset 1',
        "backgroundColor": [
          "rgb(54,134,251)", "rgb(70,205,98)", "rgb(251,205,86)", "rgb(251,99,132)"
        ],
        data: [
          41.98, 37.23, 15.73, 5.07
        ]
      }]
    };
    new Chart(this.chart2.nativeElement, {
      type: 'doughnut',
      data: chartData,
      options: {
        legend: {
          display: true,
          position: 'left',
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        }
      }
    });
  }

}
