import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
let g_router;

@Component({
  selector: 'kt-closed-process',
  templateUrl: './closed-process.component.html',
  styleUrls: ['./closed-process.component.scss']
})
export class ClosedProcessComponent implements OnInit {

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
    this.service.getClosedProcess().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteProcesosCerrados = function () {
          var el = $('#tabla-procesos-cerrados');
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
                field: 'nombre_cargo',
                title: 'Cargo',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {

                  return '<a class="secre">' + row.nombre_cargo + '</a>';
                },

              }, {
                field: 'nuevo_cargo',
                title: 'Nuevo',
                width: 70,
                template: function (row) {
                  var mensaje = '';
                  if (row.nuevo_cargo == true) {
                    status = 'kt-badge--success';
                    mensaje = 'SI';
                  } else if (row.nuevo_cargo == false) {
                    status = 'kt-badge--danger';
                    mensaje = 'NO';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + mensaje + '</span>';
                },
              }, {
                field: 'nombre_nuevo_cargo',
                title: 'Nom Nuevo Cargo',
              }, {
                field: 'tipo_postulante',
                title: 'Tipo',
              }, {
                field: 'objetivo_cargo',
                title: 'Objetivo',
              }, {
                field: 'salario_mensual',
                title: 'Salario',
                width: 70,
              }, {
                field: 'num_cuenta_gasto',
                title: 'Nro.Cuenta Gasto',
              }, {
                field: 'nom_cuenta_gasto',
                title: 'Cuenta Gasto',
              }, {
                field: 'presupuesto',
                title: 'Presupuesto',
              }, {
                field: 'justificacion',
                title: 'Justificación',
              }, {
                field: 'tipo_busqueda',
                title: 'Tipo Búsqueda',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Completado') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Desierto') {
                    status = 'kt-badge--danger';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
                },
              }],
          });

          $('#tabla-procesos-activos').on('click', 'tr.kt-datatable__row', function (e) {
            //$('#fecha_ausen').val( datatable.getRecord(this).getColumn('fecha').getValue() );
            var data = $(e.currentTarget).data('obj');
            //console.log(data); // pass it into your inputs
            $('#fecha_ingreso').val(data.fecha_ingreso);
            $('#nombre_cargo').val(data.nombre_cargo);
            $('#nuevo_cargo').val(data.nuevo_cargo);
            $('#nombre_nuevo_cargo').val(data.nombre_nuevo_cargo);
            $('#tipo_postulante').val(data.tipo_postulante);
            $('#objetivo_cargo').val(data.objetivo_cargo);
            $('#salario_mensual').val(data.salario_mensual);
            $('#num_cuenta_gasto').val(data.num_cuenta_gasto);
            $('#nom_cuenta_gasto').val(data.nom_cuenta_gasto);
            $('#presupuesto').val(data.presupuesto);
            $('#justificacion').val(data.justificacion);
            $('#tipo_busqueda').val(data.tipo_busqueda);
            $('#responsable').val(data.responsable);
            $('#fecha_limite').val(data.fecha_limite);
            var estado = data.estado;
            $('#estado').html(estado);
            if (estado == "Completado") {
              $("#estado").removeClass("kt-badge--danger");
              $("#estado").removeClass("kt-badge--success");
              $("#estado").removeClass("kt-badge--warning");
              $('#estado').addClass("kt-badge--danger");
              $('#btn-aprobar-proceso').prop('disabled', true);
              $('#btn-rechazar-proceso').prop('disabled', true);
            } else if (estado == "Aprobado") {
              $("#estado").removeClass("kt-badge--danger");
              $("#estado").removeClass("kt-badge--success");
              $("#estado").removeClass("kt-badge--warning");
              $('#estado').addClass("kt-badge--success");
              $('#btn-aprobar-proceso').prop('disabled', true);
              $('#btn-rechazar-proceso').prop('disabled', true);
            } else if (estado == "Generado") {
              $("#estado").removeClass("kt-badge--danger");
              $("#estado").removeClass("kt-badge--success");
              $("#estado").removeClass("kt-badge--warning");
              $('#estado').addClass("kt-badge--warning");
              $('#btn-aprobar-proceso').prop('disabled', false);
              $('#btn-rechazar-proceso').prop('disabled', false);
            }


          });

        };

        return {
          // public functions
          init: function () {

            subRemoteProcesosCerrados();
          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}

function initEvents() {
  $('#tabla-procesos-cerrados').on('click', 'table tbody a.secre', function() {
    g_router.navigate(['/admin/reclutamiento/secre-ejec']);
  });
}
