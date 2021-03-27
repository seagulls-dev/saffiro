import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'kt-capacita-integra',
  templateUrl: './capacita-integra.component.html',
  styleUrls: ['./capacita-integra.component.scss']
})
export class CapacitaIntegraComponent implements OnInit {

  KTDatatableModal: any;
  KTBootstrapSelect : any;

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

    this.initTableData();
  }

  initTableData() {
    this.service.getCapacitaIntegra().subscribe(res => {
      this.KTDatatableModal = function () {



        var subRemoteCapacitacionesIntegrantes = function () {
          var el = $('#tabla-capacitaciones-integrantes');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',
              source: {
                data: res['data']
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
                title: 'Código funcionario',
                autoHide: false,
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
                field: 'monto_descuento',
                title: 'Monto Descuento',
              }, {
                field: 'plazo',
                title: 'Plazo (meses)',
              }, {
                field: 'cuota_mensual',
                title: 'Cuota Mensual',
              }, {
                field: 'fecha_contable',
                title: 'Fecha Contable',
              }, {
                field: 'novedad',
                title: 'Novedad',
              }, {
                field: 'tipo_prestamo',
                title: 'Tipo préstamo',
              }, {
                field: 'periodo_desde',
                title: 'Período desde',
              }],
          });

        };

        $('#tabla-capacitaciones-integrantes').on('click', 'tr.kt-datatable__row', function (e) {
          //$('#fecha_ausen').val( datatable.getRecord(this).getColumn('fecha').getValue() );
          var data = $(e.currentTarget).data('obj');
          //console.log(data); // pass it into your inputs
          $('#codigo_emp').val(data.cod_funcionario);
          $('#nombres_emp').val(data.nom_funcionario);
          $('#apellidos_emp').val(data.ape_funcionario);
          $('#cargo_emp').val(data.cargo_funcionario);
          $('#monto_desc').val(data.monto_descuento);
          $('#plazo_desc').val(data.plazo);
          //$('#induccion').val( data.induccion);
          $('#cuota_mensual').val(data.cuota_mensual);
          $('#fecha_contable').val(data.fecha_contable);
          $('#novedad').val(data.novedad);
          //$('#dudas_induc').val( data.dudas );
          $('#tipo_prestamo').val(data.tipo_prestamo);
          $('#periodo_desde').val(data.periodo_desde);

          var estado = data.estado;
          $('#estado_induc').html(estado);
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
          }


        });


        return {
          // public functions
          init: function () {
            subRemoteCapacitacionesIntegrantes();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}
