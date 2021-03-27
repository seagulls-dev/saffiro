import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  KTDatatableModal: any;
  KTBootstrapSelect : any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router : Router) {
    g_router = router;
  }

  ngOnInit() {
    this.initData();
    initEvents();
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

  initData() {
    this.service.getPerformance().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteDesempenoPendientes = function () {
          var el = $('#tabla-desempeno-pendientes');
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

            // column sorting
            sortable: true,

            pagination: true,

            search: {
              input: el.find('#generalSearch'),
            },

            // columns definition
            columns: [
              {
                field: 'nombre',
                title: 'Nombre Evaluación',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {

                  return '<a class="perform">' + row.nombre + '</a>';
                },

              }, {
                field: 'area',
                title: 'Area',
                width: 70,
              }, {
                field: 'fecha_ini',
                title: 'Fecha Inicio',
                template: function (row) {
                  return row.fecha_ini + ' ' + row.hora_ini;
                },
              }, {
                field: 'fecha_fin',
                title: 'Fecha Final',

              }, {
                field: 'participantes',
                title: 'Participantes',
              }, {
                field: 'responsable',
                title: 'Responsable',
              }, {
                field: 'nom_responsable',
                title: 'Responsable Iniciativa',
              }, {
                field: 'cargo_responsable',
                title: 'Cargo Responsable',
              }, {
                field: 'fecha_ini_ejec',
                title: 'Fecha Inicio Ejecución',
              }, {
                field: 'fecha_fin_ejec',
                title: 'Fecha Fin Ejecución',
              }, {
                field: 'interpretacion1',
                title: 'Innovación y creatividad',
                autoHide: true,
              }, {
                field: 'interpretacion2',
                title: 'Flexibilidad cognitiva',
                autoHide: true,
              }, {
                field: 'interpretacion3',
                title: 'Juicio y toma de decisiones',
                autoHide: true,
              }, {
                field: 'interpretacion4',
                title: 'Inteligencia emocional',
                autoHide: true,
              }, {
                field: 'interpretacion5',
                title: 'Gestión y desarrollo de personas',
                autoHide: true,
              }, {
                field: 'interpretacion6',
                title: 'Calidez humana',
                autoHide: true,
              }, {
                field: 'interpretacion7',
                title: 'Capacidad de negociación',
                autoHide: true,
              }, {
                field: 'iniciativa1',
                title: 'Iniciativa Innovación y creatividad',
                autoHide: true,
              }, {
                field: 'iniciativa2',
                title: 'Iniciativa Flexibilidad cognitiva',
                autoHide: true,
              }, {
                field: 'iniciativa3',
                title: 'Iniciativa Juicio y toma de decisiones',
                autoHide: true,
              }, {
                field: 'iniciativa4',
                title: 'Iniciativa Inteligencia emocional',
                autoHide: true,
              }, {
                field: 'iniciativa5',
                title: 'Iniciativa Gestión y desarrollo de personas',
                autoHide: true,
              }, {
                field: 'iniciativa6',
                title: 'Iniciativa Calidez humana',
                autoHide: true,
              }, {
                field: 'iniciativa7',
                title: 'Iniciativa Capacidad de negociación',
                autoHide: true,

              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Retrasada') {
                    status = 'kt-badge--danger';
                  } else if (row.estado == 'Completada') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'En Ejecución') {
                    status = 'kt-badge--warning';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
                },
              }],
          });



        };

        var subRemoteDesempeno = function () {
          var el = $('#tabla-desempeno');
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

            // column sorting
            sortable: true,

            pagination: true,

            search: {
              input: el.find('#generalSearch'),
            },

            // columns definition
            columns: [
              {
                field: 'nombre',
                title: 'Nombre Evaluación',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {

                  return '<a class="perform">' + row.nombre + '</a>';
                },

              }, {
                field: 'area',
                title: 'Area',
                width: 70,
              }, {
                field: 'fecha_ini',
                title: 'Fecha Inicio',
                template: function (row) {
                  return row.fecha_ini + ' ' + row.hora_ini;
                },
              }, {
                field: 'fecha_fin',
                title: 'Fecha Final',

              }, {
                field: 'participantes',
                title: 'Participantes',
              }, {
                field: 'responsable',
                title: 'Responsable',
              }, {
                field: 'nom_responsable',
                title: 'Responsable Iniciativa',
              }, {
                field: 'cargo_responsable',
                title: 'Cargo Responsable',
              }, {
                field: 'fecha_ini_ejec',
                title: 'Fecha Inicio Ejecución',
              }, {
                field: 'fecha_fin_ejec',
                title: 'Fecha Fin Ejecución',
              }, {
                field: 'interpretacion1',
                title: 'Innovación y creatividad',
                autoHide: true,
              }, {
                field: 'interpretacion2',
                title: 'Flexibilidad cognitiva',
                autoHide: true,
              }, {
                field: 'interpretacion3',
                title: 'Juicio y toma de decisiones',
                autoHide: true,
              }, {
                field: 'interpretacion4',
                title: 'Inteligencia emocional',
                autoHide: true,
              }, {
                field: 'interpretacion5',
                title: 'Gestión y desarrollo de personas',
                autoHide: true,
              }, {
                field: 'interpretacion6',
                title: 'Calidez humana',
                autoHide: true,
              }, {
                field: 'interpretacion7',
                title: 'Capacidad de negociación',
                autoHide: true,
              }, {
                field: 'iniciativa1',
                title: 'Iniciativa Innovación y creatividad',
                autoHide: true,
              }, {
                field: 'iniciativa2',
                title: 'Iniciativa Flexibilidad cognitiva',
                autoHide: true,
              }, {
                field: 'iniciativa3',
                title: 'Iniciativa Juicio y toma de decisiones',
                autoHide: true,
              }, {
                field: 'iniciativa4',
                title: 'Iniciativa Inteligencia emocional',
                autoHide: true,
              }, {
                field: 'iniciativa5',
                title: 'Iniciativa Gestión y desarrollo de personas',
                autoHide: true,
              }, {
                field: 'iniciativa6',
                title: 'Iniciativa Calidez humana',
                autoHide: true,
              }, {
                field: 'iniciativa7',
                title: 'Iniciativa Capacidad de negociación',
                autoHide: true,

              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Retrasada') {
                    status = 'kt-badge--danger';
                  } else if (row.estado == 'Completada') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'En Ejecución') {
                    status = 'kt-badge--warning';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
                },
              }],
          });



        };
        
        return {
          // public functions
          init: function () {
            subRemoteDesempenoPendientes();
            subRemoteDesempeno();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-desempeno-pendientes').on('click', 'table tbody a.perform', function() {
    g_router.navigate(['/admin/evaluacion/desem-eval']);
  });
  $('#tabla-desempeno').on('click', 'table tbody a.perform', function() {
    g_router.navigate(['/admin/evaluacion/desem-eval']);
  });
}