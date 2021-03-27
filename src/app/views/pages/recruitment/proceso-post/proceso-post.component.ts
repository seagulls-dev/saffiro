import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';

declare var $: any;

@Component({
  selector: 'kt-proceso-post',
  templateUrl: './proceso-post.component.html',
  styleUrls: ['./proceso-post.component.scss']
})
export class ProcesoPostComponent implements OnInit {

  KTDatatableModal: any;
  KTBootstrapSelect : any;

  constructor(private service: DataTableService) { }

  ngOnInit() {
    this.initTableData();
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
    this.service.getProcsoPost().subscribe(res => {
      this.KTDatatableModal = function () {

        var subRemoteProcesosPostulantes = function () {
          var el = $('#tabla-procesos-postulantes');
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
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                selector: {
                  class: 'kt-checkbox--solid'
                },
                textAlign: 'center',
              }, {
                field: 'nombres',
                title: 'Nombres',
              }, {
                field: 'apellido_paterno',
                title: 'Apellido Paterno',
              }, {
                field: 'apellido_materno',
                title: 'Apellido Materno',
              }, {
                field: 'carnet',
                title: 'Carnet',
              }, {
                field: 'telefono',
                title: 'Teléfono',
              }, {
                field: 'email',
                title: 'Email',
              }, {
                field: 'foto',
                title: 'Foto',
              }, {
                field: 'ciudad',
                title: 'Ciudad',
              }, {
                field: 'genero',
                title: 'Género',
              }, {
                field: 'estado_civil',
                title: 'Estado Civil',
              }, {
                field: 'fecha_nacimiento',
                title: 'Fecha Nacimiento',
              }, {
                field: 'edad',
                title: 'Edad',
              }, {
                field: 'direccion',
                title: 'Dirección',
              }, {
                field: 'instit_acad',
                title: 'Institución Académica',
              }, {
                field: 'ult_campo_estudio',
                title: 'Ult Campo Estudio',
              }, {
                field: 'max_nivel_acad',
                title: 'Máximo Nivel Académico',
              }, {
                field: 'estado_nivel_acad',
                title: 'Estado Nivel Académico',
              }, {
                field: 'empresa_ult_exp',
                title: 'Empresa Ultima Experiencia',
              }, {
                field: 'cargo_ult_exp',
                title: 'Cargo Ultima Experiencia',
              }, {
                field: 'fecha_ini_cargo',
                title: 'Fecha Inicio Cargo',
              }, {
                field: 'fecha_fin_cargo',
                title: 'Fecha Fin Cargo',
              }, {
                field: 'activ_ult_cargo',
                title: 'Actividad Ult. Cargo',
              }, {
                field: 'habilidades',
                title: 'Habilidades',
              }, {
                field: 'nivel_habilidad',
                title: 'Nivel Habilidad',
              }, {
                field: 'monto_salario',
                title: 'Monto Salario',
              }, {
                field: 'moneda_salario',
                title: 'Moneda Salario',
              }, {
                field: 'idiomas',
                title: 'Idiomas',
              }, {
                field: 'motiv_laborales',
                title: 'Motivaciones Laborales',
              }, {
                field: 'perfil_fb',
                title: 'Facebook',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function (row) {
                  if (row.estado == 'Preselección') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Entrevista') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Evaluación') {
                    status = 'kt-badge--info';
                  } else if (row.estado == 'Contratación') {
                    status = 'kt-badge--brand';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
                },
              }],
          });

          datatable.on(
            'kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated',
            function (e) {
              var checkedNodes = datatable.rows('.kt-datatable__row--active').nodes();
              var count = checkedNodes.length;
              $('#kt_datatable_selected_number').html(count);
              if (count > 0) {
                $('#kt_datatable_group_action_form').collapse('show');
              } else {
                $('#kt_datatable_group_action_form').collapse('hide');
              }
            });

        };



        return {
          // public functions
          init: function () {

            subRemoteProcesosPostulantes();

          }
        };
      }();
      this.KTDatatableModal.init();
    });
  }

}
