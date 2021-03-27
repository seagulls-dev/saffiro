import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-contract-service',
  templateUrl: './contract-service.component.html',
  styleUrls: ['./contract-service.component.scss']
})
export class ContractServiceComponent implements OnInit {

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
    this.service.getContractServices().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteContratServiciosPendientes = function () {
          var el = $('#tabla-contrat-servicios-pendientes');
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
              }, {
                field: 'secuencia',
                title: 'Secuencia',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="contrat-service">' + row.secuencia + '</a>';
                },
              }, {
                field: 'nom_solicit',
                title: 'Nombre Solicitante',
              }, {
                field: 'cargo_solicit',
                title: 'Cargo Solicitante',
              }, {
                field: 'tipo_compra',
                title: 'Tipo compra',
              }, {
                field: 'fecha_solicitud',
                title: 'Fecha solicitud',
              }, {
                field: 'desc_compra',
                title: 'Descripción compra',
              }, {
                field: 'items_compra',
                title: 'Items compra',
              }, {
                field: 'cantidad',
                title: 'Cantidad',
              }, {
                field: 'precio',
                title: 'Precio',
              }, {
                field: 'monto_estimado',
                title: 'Monto estimado',
              }, {
                field: 'cuenta_presup',
                title: 'Cuenta presupuesto',
              }, {
                field: 'presup_disp',
                title: 'Presupuesto disponible',
              }, {
                field: 'modif_presup',
                title: 'Modificar presupuesto',
              }, {
                field: 'justificacion',
                title: 'Justificación',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'comentarios',
                title: 'Comentarios',
              }, {
                field: 'nom_proveedor',
                title: 'Nombre proveedor',
              }, {
                field: 'datos_proveedor',
                title: 'Datos proveedor',
              }, {
                field: 'nom_proyecto',
                title: 'Nombre proyecto',
              }, {
                field: 'tipo_proyecto',
                title: 'Tipo proyecto',
              }, {
                field: 'centro_costos',
                title: 'Centro de costos',
              }, {
                field: 'anexos',
                title: 'Anexos',
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
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }],
          });

        };

        var subRemoteContratServicios = function () {
          var el = $('#tabla-contrat-servicios');
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
              }, {
                field: 'secuencia',
                title: 'Secuencia',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return '<a class="contrat-service">' + row.secuencia + '</a>';
                },
              }, {
                field: 'nom_solicit',
                title: 'Nombre Solicitante',
              }, {
                field: 'cargo_solicit',
                title: 'Cargo Solicitante',
              }, {
                field: 'tipo_compra',
                title: 'Tipo compra',
              }, {
                field: 'fecha_solicitud',
                title: 'Fecha solicitud',
              }, {
                field: 'desc_compra',
                title: 'Descripción compra',
              }, {
                field: 'items_compra',
                title: 'Items compra',
              }, {
                field: 'cantidad',
                title: 'Cantidad',
              }, {
                field: 'precio',
                title: 'Precio',
              }, {
                field: 'monto_estimado',
                title: 'Monto estimado',
              }, {
                field: 'cuenta_presup',
                title: 'Cuenta presupuesto',
              }, {
                field: 'presup_disp',
                title: 'Presupuesto disponible',
              }, {
                field: 'modif_presup',
                title: 'Modificar presupuesto',
              }, {
                field: 'justificacion',
                title: 'Justificación',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'comentarios',
                title: 'Comentarios',
              }, {
                field: 'nom_proveedor',
                title: 'Nombre proveedor',
              }, {
                field: 'datos_proveedor',
                title: 'Datos proveedor',
              }, {
                field: 'nom_proyecto',
                title: 'Nombre proyecto',
              }, {
                field: 'tipo_proyecto',
                title: 'Tipo proyecto',
              }, {
                field: 'centro_costos',
                title: 'Centro de costos',
              }, {
                field: 'anexos',
                title: 'Anexos',
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
            subRemoteContratServiciosPendientes();
            subRemoteContratServicios();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-contrat-servicios-pendientes').on('click', 'table tbody a.contrat-service', function() {
    g_router.navigate(['/admin/actividad/contrat-service-func']);
  });
  $('#tabla-contrat-servicios').on('click', 'table tbody a.contrat-service', function() {
    g_router.navigate(['/admin/actividad/contrat-service-func']);
  });
}