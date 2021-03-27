import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;


@Component({
  selector: 'kt-campaign-request',
  templateUrl: './campaign-request.component.html',
  styleUrls: ['./campaign-request.component.scss']
})
export class CampaignRequestComponent implements OnInit {

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
    this.service.getCampaignRequests().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteCampanasPendientes = function () {
          var el = $('#tabla-campanas-pendientes');
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
                field: 'nom_centro',
                title: 'Centro costo',
              }, {
                field: 'nom_funcionario',
                title: 'Nombres',
              }, {
                field: 'ape_funcionario',
                title: 'Apellidos',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="campanas">' + row.ape_funcionario + '</a>';
                },
              }, {
                field: 'num_centro',
                title: 'Número centro',
              }, {
                field: 'fecha_contable',
                title: 'Fecha Contable',
              }, {
                field: 'cod_funcionario',
                title: 'Código funcionario',

              }, {
                field: 'cargo_funcionario',
                title: 'Cargo',
              }, {
                field: 'monto_descuento',
                title: 'Monto descuento',
              }, {
                field: 'moneda_descuento',
                title: 'Moneda',
              }, {
                field: 'plazo',
                title: 'Plazo (meses)',
              }, {
                field: 'cuota_mensual',
                title: 'Cuota mensual',
              }, {
                field: 'novedad',
                title: 'Novedad',
              }, {
                field: 'tipo_prestamo',
                title: 'Tipo préstamo',
              }, {
                field: 'motivo',
                title: 'Motivo',
              }, {
                field: 'periodo_desde',
                title: 'Período desde',
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
                  } else if (row.estado == 'Generada') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Corregida') {
                    status = 'kt-badge--danger';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }],
          });

        };

        var subRemoteCampanas = function () {
          var el = $('#tabla-campanas');
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
                field: 'nom_centro',
                title: 'Centro costo',
              }, {
                field: 'nom_funcionario',
                title: 'Nombres',
              }, {
                field: 'ape_funcionario',
                title: 'Apellidos',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="campanas">' + row.ape_funcionario + '</a>';
                },
              }, {
                field: 'num_centro',
                title: 'Número centro',
              }, {
                field: 'fecha_contable',
                title: 'Fecha Contable',
              }, {
                field: 'cod_funcionario',
                title: 'Código funcionario',

              }, {
                field: 'cargo_funcionario',
                title: 'Cargo',
              }, {
                field: 'monto_descuento',
                title: 'Monto descuento',
              }, {
                field: 'moneda_descuento',
                title: 'Moneda',
              }, {
                field: 'plazo',
                title: 'Plazo (meses)',
              }, {
                field: 'cuota_mensual',
                title: 'Cuota mensual',
              }, {
                field: 'novedad',
                title: 'Novedad',
              }, {
                field: 'tipo_prestamo',
                title: 'Tipo préstamo',
              }, {
                field: 'motivo',
                title: 'Motivo',
              }, {
                field: 'periodo_desde',
                title: 'Período desde',
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
                  } else if (row.estado == 'Generada') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Corregida') {
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
            subRemoteCampanasPendientes();
            subRemoteCampanas();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-campanas-pendientes').on('click', 'table tbody a.campanas', function() {
    g_router.navigate(['/admin/beneficios/campanas-func']);
  });
  $('#tabla-campanas').on('click', 'table tbody a.campanas', function() {
    g_router.navigate(['/admin/beneficios/campanas-func']);
  });
}
