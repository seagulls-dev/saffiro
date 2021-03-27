import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-change-position',
  templateUrl: './change-position.component.html',
  styleUrls: ['./change-position.component.scss']
})
export class ChangePositionComponent implements OnInit {

  KTDatatableModal1: any;
  KTDatatableModal2: any;
  KTBootstrapSelect : any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router : Router) {
    g_router = router;
   }

  ngOnInit() {
    this.initTableData();
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

  initTableData() {
    this.service.getAwaitingRequests().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteCargos = function () {
          var el = $('#tabla-cargos');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',    //remote if real url is provided
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
                field: 'nom_solicit',
                title: 'Nombre Solicitante',
              }, {
                field: 'cargo_solicit',
                title: 'Cargo Solicitante',
              }, {
                field: 'nom_func',
                title: 'Nombre funcionario',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="cargo-func">' + row.nom_func + '</a>';
                },
              }, {
                field: 'cargo_func',
                title: 'Cargo funcionario',
              }, {
                field: 'salario',
                title: 'Salario',
              }, {
                field: 'salario_prop',
                title: 'Fecha Fin',
                width: 130,
                autoHide: false,
              }, {
                field: 'prorateo',
                title: 'Prorateo',
                width: 80,
              }, {
                field: 'fecha_ini',
                title: 'Fecha Inicio',
                width: 130,
                autoHide: false,
              }, {
                field: 'observaciones',
                title: 'Observaciones',
                width: 130,
              }, {
                field: 'cargo_prop',
                title: 'Cargo Propuesto',
                sortable: false,
                autoHide: false,
              }, {
                field: 'nuevo_cargo',
                title: 'Nuevo cargo',
                width: 80,
                autoHide: false,
              }, {
                field: 'nivel_salarial',
                title: 'Nivel Salarial',
                sortable: false,
                autoHide: false,
              }, {
                field: 'tipo_func',
                title: 'Tipo funcionario',
              }, {
                field: 'tipo_planilla',
                title: 'Tipo planilla',
              }, {
                field: 'centro_costo',
                title: 'Centro costo',
              }, {
                field: 'empresa',
                title: 'Empresa',
              }, {
                field: 'centro_costo_sup',
                title: 'Centro costo superior',
              }, {
                field: 'inmed_superior',
                title: 'Inmediato superior',
              }, {
                field: 'cargo_dep',
                title: 'Cargo dependiente',

              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else if (row.estado == 'Aprobado') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Ingresado') {
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

            subRemoteCargos();
          }
        };
      }();
      this.KTDatatableModal1.init();
    });
    this.service.getAwaitingRequests().subscribe(res => {
      this.KTDatatableModal2 = function () {

        var subRemoteCargosPendientes = function () {
          var el = $('#tabla-cargos-pendientes');
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
                field: 'nom_solicit',
                title: 'Nombre Solicitante',
              }, {
                field: 'cargo_solicit',
                title: 'Cargo Solicitante',
              }, {
                field: 'nom_func',
                title: 'Nombre funcionario',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="cargo-func">' + row.nom_func + '</a>';
                },
              }, {
                field: 'cargo_func',
                title: 'Cargo funcionario',
              }, {
                field: 'salario',
                title: 'Salario',
              }, {
                field: 'salario_prop',
                title: 'Fecha Fin',
                width: 130,
                autoHide: false,
              }, {
                field: 'prorateo',
                title: 'Prorateo',
                width: 80,
              }, {
                field: 'fecha_ini',
                title: 'Fecha Inicio',
                width: 130,
                autoHide: false,
              }, {
                field: 'observaciones',
                title: 'Observaciones',
                width: 130,
              }, {
                field: 'cargo_prop',
                title: 'Cargo Propuesto',
                sortable: false,
                autoHide: false,
              }, {
                field: 'nuevo_cargo',
                title: 'Nuevo cargo',
                width: 80,
                autoHide: false,
              }, {
                field: 'nivel_salarial',
                title: 'Nivel Salarial',
                sortable: false,
                autoHide: false,
              }, {
                field: 'tipo_func',
                title: 'Tipo funcionario',
              }, {
                field: 'tipo_planilla',
                title: 'Tipo planilla',
              }, {
                field: 'centro_costo',
                title: 'Centro costo',
              }, {
                field: 'empresa',
                title: 'Empresa',
              }, {
                field: 'centro_costo_sup',
                title: 'Centro costo superior',
              }, {
                field: 'inmed_superior',
                title: 'Inmediato superior',
              }, {
                field: 'cargo_dep',
                title: 'Cargo dependiente',

              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else if (row.estado == 'Aprobado') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Ingresado') {
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
            subRemoteCargosPendientes();
          }
        };
      }();
      this.KTDatatableModal2.init();
    });
  }
  
}

function initEvents() {
  $('#tabla-cargos').on('click', 'table tbody a.cargo-func', function() {
    g_router.navigate(['/admin/desarrollo/cargo-func']);
  });
  $('#tabla-cargos-pendientes').on('click', 'table tbody a.cargo-func', function() {
    g_router.navigate(['/admin/desarrollo/cargo-func']);
  });
}