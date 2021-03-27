import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var swal: any;

@Component({
  selector: 'kt-desem-resul',
  templateUrl: './desem-resul.component.html',
  styleUrls: ['./desem-resul.component.scss']
})
export class DesemResulComponent implements OnInit {

  KTDatatableModal: any;
  KTBootstrapSelect : any;
  @ViewChild('chart', { static: true }) chart: ElementRef;

  constructor(private service: DataTableService) { }

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
    this.initTableData();
    this.initChart();
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

  initChart() {
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

    new Chart(this.chart.nativeElement, {
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

  initTableData() {
    this.service.getDesemoIntegra().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteDesempenoIntegrantes = function () {
          var el = $('#tabla-desempeno-integrantes');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',
              source: {
                data : res['data']
              },
              pageSize: 10, // display 20 records per page
              //serverPaging: true,
              //serverFiltering: false,
              //serverSorting: true,
            },

            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
            },


            pagination: true,

            search: {
              input: el.find('#generalSearch'),
            },

            // columns definition
            columns: [
              {
                field: 'cod_funcionario',
                title: 'Código',
                autoHide: false,
                width: 90,
                // callback function support for column rendering

              }, {
                field: 'nom_funcionario',
                title: 'Nombres',
              }, {
                field: 'ape_funcionario',
                title: 'Apellidos',
              }, {
                field: 'cargo_funcionario',
                title: 'Cargo',
              }, {
                field: 'promedio_eval',
                title: 'Promecio Eval',
              }],
          });

        };

        $('#tabla-desempeno-integrantes').on('click', 'tr.kt-datatable__row', function (e) {
          //$('#fecha_ausen').val( datatable.getRecord(this).getColumn('fecha').getValue() );
          var data = $(e.currentTarget).data('obj');
          //console.log(data); // pass it into your inputs
          $('#interpretacion_resul_1').val(data.interp_innovacion);
          $('#interpretacion_resul_2').val(data.interp_flexibilidad);
          $('#interpretacion_resul_3').val(data.interp_juicio);
          $('#interpretacion_resul_4').val(data.interp_inteligencia);
          $('#interpretacion_resul_5').val(data.interp_gestion);
          $('#interpretacion_resul_6').val(data.interp_calidez);
          $('#interpretacion_resul_7').val(data.interp_negociacion);
        });


        return {
          // public functions
          init: function () {

            subRemoteDesempenoIntegrantes();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }
}
