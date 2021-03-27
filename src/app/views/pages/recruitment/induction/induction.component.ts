import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';

declare var $: any;

@Component({
  selector: 'kt-induction',
  templateUrl: './induction.component.html',
  styleUrls: ['./induction.component.scss']
})
export class InductionComponent implements OnInit {

  KTDatatableModal: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService) {
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.service.getInduction().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteInduccion = function () {
          var el = $('#tabla-induccion');
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
                field: 'id',
                title: 'Id',
                width: 50,
                autoHide: false,


              }, {
                field: '',
                title: 'Nombre',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  return row.apellido_paterno + ' ' + row.apellido_materno + ', ' + row.nombres;
                },
              }, {
                field: 'area',
                title: 'Area',
              }, {
                field: 'cargo',
                title: 'Cargo',
              }, {
                field: 'fecha_ingreso',
                title: 'Fecha Ingreso',
              }, {
                field: 'fecha_ini_induccion',
                title: 'Fecha Inicio',
              }, {
                field: 'fecha_fin_induccion',
                title: 'Fecha Fin',
              }, {
                field: 'inmediato_superior',
                title: 'Inmediato Superior',
              }, {
                field: 'dudas',
                title: 'Dudas',
              }, {
                field: 'observaciones',
                title: 'Observaciones',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Ingresado') {
                    status = 'kt-badge--danger';
                  } else if (row.estado == 'Revisado') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Completado') {
                    status = 'kt-badge--warning';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
                },
              }],
          });

          $('#tabla-induccion').on('click', 'tr.kt-datatable__row', function (e) {
            //$('#fecha_ausen').val( datatable.getRecord(this).getColumn('fecha').getValue() );
            var data = $(e.currentTarget).data('obj');
            //console.log(data); // pass it into your inputs
            $('#nombres_induc').val(data.nombres);
            $('#ap_paterno_induc').val(data.apellido_paterno);
            $('#ap_materno_induc').val(data.apellido_materno);
            $('#area_induc').val(data.area);
            $('#cargo_induc').val(data.cargo);
            $('#fecha_ingreso_induc').val(data.fecha_ingreso);
            //$('#induccion').val( data.induccion);
            $('#fecha_ini_induc').val(data.fecha_ini_induccion);
            $('#fecha_fin_induc').val(data.fecha_fin_induccion);
            $('#superior_induc').val(data.inmediato_superior);
            //$('#dudas_induc').val( data.dudas );
            $('#observaciones_induc').val(data.observaciones);

            $('#nombres_induc_rrhh').val(data.nombres);
            $('#ap_paterno_induc_rrhh').val(data.apellido_paterno);
            $('#ap_materno_induc_rrhh').val(data.apellido_materno);
            $('#area_induc_rrhh').val(data.area);
            $('#cargo_induc_rrhh').val(data.cargo);
            $('#fecha_ingreso_induc_rrhh').val(data.fecha_ingreso);
            //$('#induccion').val( data.induccion);
            $('#fecha_ini_induc_rrhh').val(data.fecha_ini_induccion);
            $('#fecha_fin_induc_rrhh').val(data.fecha_fin_induccion);
            $('#superior_induc_rrhh').val(data.inmediato_superior);
            //$('#dudas_induc').val( data.dudas );
            $('#observaciones_induc_rrhh').val(data.observaciones);

            var induc = data.induccion;
            if (induc) {
              $('#induc_si').prop("checked", true);
              $('#induc_si_rrhh').prop("checked", true);
            } else {
              $('#induc_no').prop("checked", true);
              $('#induc_no_rrhh').prop("checked", true);
            }

            var dudas = data.dudas;
            if (dudas) {
              $('#dudas_si').prop("checked", true);
              $('#dudas_si_rrhh').prop("checked", true);
            } else {
              $('#dudas_no').prop("checked", true);
              $('#dudas_no_rrhh').prop("checked", true);
            }

            var estado = data.estado;
            $('#estado_induc').html(estado);
            $('#estado_induc_rrhh').html(estado);
            if (estado == "Ingresado") {
              $("#estado_induc").removeClass("kt-badge--danger");
              $("#estado_induc").removeClass("kt-badge--success");
              $("#estado_induc").removeClass("kt-badge--warning");
              $('#estado_induc').addClass("kt-badge--danger");
              $('#induc_si').prop("disabled", false);
              $('#induc_no').prop("disabled", false);
              $('#fecha_ini_induc').prop("disabled", false);
              $('#fecha_fin_induc').prop("disabled", false);
              $('#superior_induc').prop("disabled", false);
              $('#dudas_si').prop("disabled", false);
              $('#dudas_no').prop("disabled", false);
              $('#observaciones_induc').prop("disabled", false);
              $('#btn-guardar-induccion').prop('disabled', false);
              $('#btn-revisar-induccion').prop('disabled', true);

              $("#estado_induc_rrhh").removeClass("kt-badge--danger");
              $("#estado_induc_rrhh").removeClass("kt-badge--success");
              $("#estado_induc_rrhh").removeClass("kt-badge--warning");
              $('#estado_induc_rrhh').addClass("kt-badge--danger");
              $('#induc_si_rrhh').prop("disabled", false);
              $('#induc_no_rrhh').prop("disabled", false);
              $('#fecha_ini_induc_rrhh').prop("disabled", false);
              $('#fecha_fin_induc_rrhh').prop("disabled", false);
              $('#superior_induc_rrhh').prop("disabled", false);
              $('#dudas_si_rrhh').prop("disabled", false);
              $('#dudas_no_rrhh').prop("disabled", false);
              $('#observaciones_induc_rrhh').prop("disabled", false);
            } else if (estado == "Revisado") {
              $("#estado_induc").removeClass("kt-badge--danger");
              $("#estado_induc").removeClass("kt-badge--success");
              $("#estado_induc").removeClass("kt-badge--warning");
              $('#estado_induc').addClass("kt-badge--success");
              $('#induc_si').prop("disabled", true);
              $('#induc_no').prop("disabled", true);
              $('#fecha_ini_induc').prop("disabled", true);
              $('#fecha_fin_induc').prop("disabled", true);
              $('#superior_induc').prop("disabled", true);
              $('#dudas_si').prop("disabled", true);
              $('#dudas_no').prop("disabled", true);
              $('#observaciones_induc').prop("disabled", true);
              $('#btn-guardar-induccion').prop('disabled', true);
              $('#btn-revisar-induccion').prop('disabled', true);

              $("#estado_induc_rrhh").removeClass("kt-badge--danger");
              $("#estado_induc_rrhh").removeClass("kt-badge--success");
              $("#estado_induc_rrhh").removeClass("kt-badge--warning");
              $('#estado_induc_rrhh').addClass("kt-badge--success");
              $('#induc_si_rrhh').prop("disabled", true);
              $('#induc_no_rrhh').prop("disabled", true);
              $('#fecha_ini_induc_rrhh').prop("disabled", true);
              $('#fecha_fin_induc_rrhh').prop("disabled", true);
              $('#superior_induc_rrhh').prop("disabled", true);
              $('#dudas_si_rrhh').prop("disabled", true);
              $('#dudas_no_rrhh').prop("disabled", true);
              $('#observaciones_induc_rrhh').prop("disabled", true);
            } else if (estado == "Completado") {
              $("#estado_induc").removeClass("kt-badge--danger");
              $("#estado_induc").removeClass("kt-badge--success");
              $("#estado_induc").removeClass("kt-badge--warning");
              $('#estado_induc').addClass("kt-badge--warning");
              $('#induc_si').prop("disabled", true);
              $('#induc_no').prop("disabled", true);
              $('#fecha_ini_induc').prop("disabled", true);
              $('#fecha_fin_induc').prop("disabled", true);
              $('#superior_induc').prop("disabled", true);
              $('#dudas_si').prop("disabled", true);
              $('#dudas_no').prop("disabled", true);
              $('#observaciones_induc').prop("disabled", true);
              $('#btn-guardar-induccion').prop('disabled', true);
              $('#btn-revisar-induccion').prop('disabled', false);

              $("#estado_induc_rrhh").removeClass("kt-badge--danger");
              $("#estado_induc_rrhh").removeClass("kt-badge--success");
              $("#estado_induc_rrhh").removeClass("kt-badge--warning");
              $('#estado_induc_rrhh').addClass("kt-badge--warning");
              $('#induc_si_rrhh').prop("disabled", true);
              $('#induc_no_rrhh').prop("disabled", true);
              $('#fecha_ini_induc_rrhh').prop("disabled", true);
              $('#fecha_fin_induc_rrhh').prop("disabled", true);
              $('#superior_induc_rrhh').prop("disabled", true);
              $('#dudas_si_rrhh').prop("disabled", true);
              $('#dudas_no_rrhh').prop("disabled", true);
              $('#observaciones_induc_rrhh').prop("disabled", true);
            }


          });

        };

        return {
          // public functions
          init: function () {

            subRemoteInduccion();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}
