import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-training-request',
  templateUrl: './training-request.component.html',
  styleUrls: ['./training-request.component.scss']
})
export class TrainingRequestComponent implements OnInit {

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
    this.service.getTrainRequests().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteCapacitacionesPendientes = function () {
          var el = $('#tabla-capacitaciones-pendientes');
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
                field: 'documento',
                title: 'Documento',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="tran-req">' + row.documento + '</a>';
                },
              }, {
                field: 'secuencia',
                title: 'Secuencia',
              }, {
                field: 'fecha_solicitud',
                title: 'Fecha Solicitud',
              }, {
                field: 'nom_solicit',
                title: 'Nombre Solicitante',
              }, {
                field: 'cargo_solicit',
                title: 'Cargo Solicitante',
              }, {
                field: 'area_solicit',
                title: 'Area Solicitante',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'nom_proveedor',
                title: 'Proveedor',
              }, {
                field: 'nom_curso',
                title: 'Curso',
              }, {
                field: 'duracion_curso',
                title: 'Duración (meses)',
              }, {
                field: 'fecha_inicio',
                title: 'Fecha inicio',
              }, {
                field: 'dias_clases',
                title: 'Dias clases',
              }, {
                field: '',
                title: 'Horario',
                template: function (row) {
                  return row.hora_ini + ' ' + row.hora_fin;
                },
              }, {
                field: 'objetivos_per',
                title: 'Objetivos Personales',
              }, {
                field: 'objetivos_emp',
                title: 'Objetivos Empresariales',
              }, {
                field: 'duracion_impl',
                title: 'Tiempo implementación',
              }, {
                field: '',
                title: 'Costo',
                template: function (row) {
                  return row.moneda + ' ' + row.costo;
                },
              }, {
                field: 'monto_patroc',
                title: 'Monto patrocinado',
              }, {
                field: 'nom_cuenta',
                title: 'Nombre cuenta',
              }, {
                field: 'num_cuenta',
                title: 'Número cuenta',
              }, {
                field: 'num_personas',
                title: 'Número personas',
              }, {
                field: 'comentarios',
                title: 'Comentarios',
              }, {
                field: 'estado',
                title: 'Estado',
                width: 80,
                sortable: false,
                autoHide: false,
                template: function (row) {
                  if (row.estado == 'Aprobada') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Ingresada') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Revisada') {
                    status = 'kt-badge--danger';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }],
          });

        };

        var subRemoteCapacitaciones = function () {
          var el = $('#tabla-capacitaciones');
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
                field: 'documento',
                title: 'Documento',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="tran-req">' + row.documento + '</a>';
                },
              }, {
                field: 'secuencia',
                title: 'Secuencia',
              }, {
                field: 'fecha_solicitud',
                title: 'Fecha Solicitud',
              }, {
                field: 'nom_solicit',
                title: 'Nombre Solicitante',
              }, {
                field: 'cargo_solicit',
                title: 'Cargo Solicitante',
              }, {
                field: 'area_solicit',
                title: 'Area Solicitante',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'nom_proveedor',
                title: 'Proveedor',
              }, {
                field: 'nom_curso',
                title: 'Curso',
              }, {
                field: 'duracion_curso',
                title: 'Duración (meses)',
              }, {
                field: 'fecha_inicio',
                title: 'Fecha inicio',
              }, {
                field: 'dias_clases',
                title: 'Dias clases',
              }, {
                field: '',
                title: 'Horario',
                template: function (row) {
                  return row.hora_ini + ' ' + row.hora_fin;
                },
              }, {
                field: 'objetivos_per',
                title: 'Objetivos Personales',
              }, {
                field: 'objetivos_emp',
                title: 'Objetivos Empresariales',
              }, {
                field: 'duracion_impl',
                title: 'Tiempo implementación',
              }, {
                field: '',
                title: 'Costo',
                template: function (row) {
                  return row.moneda + ' ' + row.costo;
                },
              }, {
                field: 'monto_patroc',
                title: 'Monto patrocinado',
              }, {
                field: 'nom_cuenta',
                title: 'Nombre cuenta',
              }, {
                field: 'num_cuenta',
                title: 'Número cuenta',
              }, {
                field: 'num_personas',
                title: 'Número personas',
              }, {
                field: 'comentarios',
                title: 'Comentarios',
              }, {
                field: 'estado',
                title: 'Estado',
                width: 80,
                sortable: false,
                autoHide: false,
                template: function (row) {
                  if (row.estado == 'Aprobada') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Ingresada') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Revisada') {
                    status = 'kt-badge--danger';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }],
          });

        };


        return {
          // public functions
          init: function () {
            subRemoteCapacitacionesPendientes();
            subRemoteCapacitaciones();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-capacitaciones-pendientes').on('click', 'table tbody a.tran-req', function() {
    g_router.navigate(['/admin/beneficios/capacita-func']);
  });
  $('#tabla-capacitaciones').on('click', 'table tbody a.tran-req', function() {
    g_router.navigate(['/admin/beneficios/capacita-func']);
  });
}