import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-working-environment',
  templateUrl: './working-environment.component.html',
  styleUrls: ['./working-environment.component.scss']
})
export class WorkingEnvironmentComponent implements OnInit {

  KTDatatableModal: any;
  KTBootstrapSelect : any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router : Router) {
    g_router = router;
  }

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
    this.initData();
    initEvents();
  }

  initData() {
    this.service.getWorkingEnv().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteClimaLaboralPendientes = function () {
          var el = $('#tabla-clima-laboral-pendientes');
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

                  return '<a class="work-env">' + row.nombre + '</a>';
                },

              }, {
                field: 'area',
                title: 'Area',
                width: 70,
              }, {
                field: 'version',
                title: 'Versión',
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
                field: 'tiempo',
                title: 'Horas',
                width: 70,
              }, {
                field: 'lugar',
                title: 'Lugar',
              }, {
                field: 'responsable',
                title: 'Responsable',
              }, {
                field: 'descripcion',
                title: 'Descripción',
                autoHide: true,
              }, {
                field: 'objetivo',
                title: 'Objetivo',
                autoHide: true,
              }, {
                field: 'interpretacion',
                title: 'Interpretación',
              }, {
                field: 'mejora',
                title: 'Mejora',
              }, {
                field: 'nom_responsable',
                title: 'Responsable Mejora',
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

        var subRemoteClimaLaboral = function () {
          var el = $('#tabla-clima-laboral');
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

                  return '<a class="work-env">' + row.nombre + '</a>';
                },

              }, {
                field: 'area',
                title: 'Area',
                width: 70,
              }, {
                field: 'version',
                title: 'Versión',
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
                field: 'tiempo',
                title: 'Horas',
                width: 70,
              }, {
                field: 'lugar',
                title: 'Lugar',
              }, {
                field: 'responsable',
                title: 'Responsable',
              }, {
                field: 'descripcion',
                title: 'Descripción',
                autoHide: true,
              }, {
                field: 'objetivo',
                title: 'Objetivo',
                autoHide: true,
              }, {
                field: 'interpretacion',
                title: 'Interpretación',
              }, {
                field: 'mejora',
                title: 'Mejora',
              }, {
                field: 'nom_responsable',
                title: 'Responsable Mejora',
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
            subRemoteClimaLaboralPendientes();
            subRemoteClimaLaboral();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-clima-laboral-pendientes').on('click', 'table tbody a.work-env', function() {
    g_router.navigate(['/admin/evaluacion/clima-laboral-eval']);
  });
  $('#tabla-clima-laboral').on('click', 'table tbody a.work-env', function() {
    g_router.navigate(['/admin/evaluacion/clima-laboral-eval']);
  });
}
