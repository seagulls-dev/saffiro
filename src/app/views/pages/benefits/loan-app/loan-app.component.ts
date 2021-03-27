import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-loan-app',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.scss']
})
export class LoanAppComponent implements OnInit {

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
    this.service.getLoanApps().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteBeneficiosPendientes = function () {
          var el = $('#tabla-prestamos-pendientes');
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
                field: 'fecha',
                title: 'Fecha',
              }, {
                field: 'cod_empleado',
                title: 'Cod. empleado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="loan-app">' + row.cod_empleado + '</a>';
                },
              }, {
                field: 'nom_empleado',
                title: 'Nombre empleado',
              }, {
                field: 'ci_empleado',
                title: 'CI empleado',
              }, {
                field: 'estado_empleado',
                title: 'Estado empleado',
                width: 50,
              }, {
                field: 'fecha_ingreso',
                title: 'Fecha ingreso',
              }, {
                field: 'tiempo_servicio',
                title: 'Tiempo servicio',
              }, {
                field: 'salario_ap_mes',
                title: 'Salario -2',
              }, {
                field: 'salario_p_mes',
                title: 'Salario -1',
              }, {
                field: 'salario_u_mes',
                title: 'Salario Ult',
              }, {
                field: 'salario_prom_3',
                title: 'Salari Prom.',
              }, {
                field: 'monto_indem',
                title: 'Monto indemnización',
              }, {
                field: 'centro_costo',
                title: 'Centro Costo',
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              }, {
                field: 'tipo_prestamo',
                title: 'Tipo préstamo',
              }, {
                field: 'motivo',
                title: 'Motivo',
              }, {
                field: 'monto_solicitado',
                title: 'Monto solicitado',
              }, {
                field: 'moneda',
                title: 'Moneda',
              }, {
                field: 'interes',
                title: 'Interés',
              }, {
                field: 'plazo_meses',
                title: 'Plazo (meses)',
              }, {
                field: 'reprograma',
                title: 'Reprograma',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'empresa_financia',
                title: 'Empresa financia',
              }, {
                field: 'nom_garante',
                title: 'Nombre garante',
              }, {
                field: 'ci_garante',
                title: 'CI garante',
              }, {
                field: 'fecha_resolucion',
                title: 'Fecha resolución',
              }, {
                field: 'fecha_inicio',
                title: 'Fecha inicio',
              }, {
                field: 'monto_autoriz',
                title: 'Monto autorizado',
              }, {
                field: 'meses_autoriz',
                title: 'Meses autorizados',
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
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }],
          });

        };

        var subRemoteBeneficios = function () {
          var el = $('#tabla-prestamos');
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
                field: 'fecha',
                title: 'Fecha',
              }, {
                field: 'cod_empleado',
                title: 'Cod. empleado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="loan-app">' + row.cod_empleado + '</a>';
                },
              }, {
                field: 'nom_empleado',
                title: 'Nombre empleado',
              }, {
                field: 'ci_empleado',
                title: 'CI empleado',
              }, {
                field: 'estado_empleado',
                title: 'Estado empleado',
                width: 50,
              }, {
                field: 'fecha_ingreso',
                title: 'Fecha ingreso',
              }, {
                field: 'tiempo_servicio',
                title: 'Tiempo servicio',
              }, {
                field: 'salario_ap_mes',
                title: 'Salario -2',
              }, {
                field: 'salario_p_mes',
                title: 'Salario -1',
              }, {
                field: 'salario_u_mes',
                title: 'Salario Ult',
              }, {
                field: 'salario_prom_3',
                title: 'Salari Prom.',
              }, {
                field: 'monto_indem',
                title: 'Monto indemnización',
              }, {
                field: 'centro_costo',
                title: 'Centro Costo',
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              }, {
                field: 'tipo_prestamo',
                title: 'Tipo préstamo',
              }, {
                field: 'motivo',
                title: 'Motivo',
              }, {
                field: 'monto_solicitado',
                title: 'Monto solicitado',
              }, {
                field: 'moneda',
                title: 'Moneda',
              }, {
                field: 'interes',
                title: 'Interés',
              }, {
                field: 'plazo_meses',
                title: 'Plazo (meses)',
              }, {
                field: 'reprograma',
                title: 'Reprograma',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'empresa_financia',
                title: 'Empresa financia',
              }, {
                field: 'nom_garante',
                title: 'Nombre garante',
              }, {
                field: 'ci_garante',
                title: 'CI garante',
              }, {
                field: 'fecha_resolucion',
                title: 'Fecha resolución',
              }, {
                field: 'fecha_inicio',
                title: 'Fecha inicio',
              }, {
                field: 'monto_autoriz',
                title: 'Monto autorizado',
              }, {
                field: 'meses_autoriz',
                title: 'Meses autorizados',
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
            subRemoteBeneficiosPendientes();
            subRemoteBeneficios();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-prestamos-pendientes').on('click', 'table tbody a.loan-app', function() {
    g_router.navigate(['/admin/beneficios/prestamo-func']);
  });
  $('#tabla-prestamos').on('click', 'table tbody a.loan-app', function() {
    g_router.navigate(['/admin/beneficios/prestamo-func']);
  });
}