import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-benefit-request',
  templateUrl: './benefit-request.component.html',
  styleUrls: ['./benefit-request.component.scss']
})
export class BenefitRequestComponent implements OnInit {

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
    this.service.getBenefitRequests().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteBeneficiosPendientes = function () {
          var el = $('#tabla-beneficios-pendientes');
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
                  return '<a class="benefit">' + row.cod_empleado + '</a>';
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
                field: 'beneficio',
                title: 'Beneficio',
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
          var el = $('#tabla-beneficios');
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
                  return '<a class="benefit">' + row.cod_empleado + '</a>';
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
                field: 'beneficio',
                title: 'Beneficio',
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
  $('#tabla-beneficios-pendientes').on('click', 'table tbody a.benefit', function() {
    g_router.navigate(['/admin/beneficios/beneficio-func']);
  });
  $('#tabla-beneficios').on('click', 'table tbody a.benefit', function() {
    g_router.navigate(['/admin/beneficios/beneficio-func']);
  });
}