// Angular
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';

declare var $: any;
declare var Morris: any;



@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	KTDatatableModal1: any;
	KTDatatableModal2: any;
	KTBootstrapSelect: any;

	@ViewChild('chart1', { static: true }) chart1: ElementRef;
	@ViewChild('chart2', { static: true }) chart2: ElementRef;
	@ViewChild('chart3', { static: true }) chart3: ElementRef;

	constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService) {
	}

	ngOnInit(): void {
		this.initChart1();
		this.initChart2();
		this.initChart3();
		this.initTable1();
		this.initTable2();
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


	initChart1() {
		const chartData = {
			labels: ["Altas", "Bajas", "Bajas cerradas", "Retiro Periodo Prueba", "Sin contrato", "Sin carnet Afiliación", "Con embarazo"],
			datasets: [{
				//label: 'Dataset 1',
				backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
				data: [
					15, 20, 5, 10, 8, 4, 2
				]
			}]
		};
		const chart = new Chart(this.chart1.nativeElement, {
			type: 'bar',
			data: chartData,
			options: {
				title: {
					display: false,
				},
				tooltips: {
					intersect: false,
					mode: 'nearest',
					xPadding: 10,
					yPadding: 10,
					caretPadding: 10
				},
				legend: {
					display: false
				},
				responsive: true,
				maintainAspectRatio: false,
				barRadius: 4,
				scales: {
					xAxes: [{
						display: false,
						gridLines: false,
						stacked: true
					}],
					yAxes: [{
						display: true,
						stacked: false,
						gridLines: true
					}]
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}
				}
			}
		});
	}

	initChart2() {
		const config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						245, 320, 89
					],
					backgroundColor: [
						this.layoutConfigService.getConfig('colors.state.success'),
						this.layoutConfigService.getConfig('colors.state.warning'),
						this.layoutConfigService.getConfig('colors.state.brand'),
					]
				}],
				labels: [
					'Desvinculados',
					'Activos',
					'Retirados'
				]
			},
			options: {
				cutoutPercentage: 75,
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false,
					position: 'top',
				},
				title: {
					display: false,
					text: 'Technology'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				tooltips: {
					enabled: true,
					intersect: false,
					mode: 'nearest',
					bodySpacing: 5,
					yPadding: 10,
					xPadding: 10,
					caretPadding: 0,
					displayColors: false,
					backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					titleFontColor: '#ffffff',
					cornerRadius: 4,
					footerSpacing: 0,
					titleSpacing: 0
				}
			}
		};
		const chart = new Chart(this.chart2.nativeElement, config);
	}

	initChart3() {

		Morris.Donut({
			element: 'kt_chart_revenue_change',
			data: [{
				label: "New York",
				value: 10
			},
			{
				label: "London",
				value: 7
			},
			{
				label: "Paris",
				value: 20
			}
			],
			colors: [
				this.layoutConfigService.getConfig('colors.state.success'),
				this.layoutConfigService.getConfig('colors.state.danger'),
				this.layoutConfigService.getConfig('colors.state.brand')
			],
		});

	}

	initTable1() {
		this.service.getDashboardTableData1().subscribe(res => {
			this.KTDatatableModal1 = function () {

				var subRemoteTareas = function () {
					var el = $('#tabla-dashboard-tareas');
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

						// column sorting
						sortable: true,

						pagination: true,

						search: {
							input: $('#generalSearch')
						},

						// columns definition
						columns: [
							{
								field: '',
								title: 'Origen',
								sortable: false,
								width: 190,
								autoHide: false,
								template: function (row) {
									if (row.tipo == 'Accion') {
										status = 'kt-widget2__item--accion';
									} else if (row.tipo == 'Informativo') {
										status = 'kt-widget2__item--informativo';
									} else {
										return "";
									}
									return `
													<div class="kt-widget2">
															<div class="kt-widget2__item `+ status + ` tareas">
																	<div class="kt-widget2__checkbox">
																			<label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
																					<input type="checkbox">
																					<span></span>
																			</label>
																	</div>
																	<div class="kt-widget2__info">
																			<a class="kt-widget2__title">`
										+ row.nombre +
										`</a>
																			<a class="kt-widget2__username">`
										+ row.origen +
										`</a>
																	</div>
															</div>
													</div>
													`;
								},
							}, {
								field: 'fecha',
								title: 'Fecha',
								width: 80,
								sortable: false,
								autoHide: false,
							}, {
								field: 'tipo',
								title: 'Tipo',
								width: 80,
								sortable: false,
								autoHide: false,
							}, {
								field: 'detalle',
								title: 'Detalle',
								sortable: false,
								autoHide: false,
							}, {
								field: 'funcionario',
								title: 'Funcionario',
								sortable: false,
								autoHide: false,
							}, {
								field: 'vencimiento',
								title: 'Vencimiento',
								sortable: false,
								autoHide: false,
							}, {
								field: 'estado',
								title: 'Estado',
								width: 80,
								sortable: false,
								autoHide: false,
								template: function (row) {
									if (row.estado == 'Realizado') {
										status = 'kt-badge--success';
									} else if (row.estado == 'Vigente') {
										status = 'kt-badge--warning';
									} else if (row.estado == 'Retrasado') {
										status = 'kt-badge--danger';
									} else {
										return ' ';
									}
									return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
								},
							}, {
								field: 'fecha_realizado',
								title: 'Fecha Realizado',
								width: 90,
								sortable: false,
								autoHide: false,
							}],
					});

				};



				return {
					init: function () {
						subRemoteTareas();
					}
				};
			}();
			this.KTDatatableModal1.init();
		});
	}

	initTable2() {

		this.service.getDashboardTableData2().subscribe(res => {
			this.KTDatatableModal2 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-funcionarios');
					var datatable = el.KTDatatable({
						// datasource definition
						data: {
							type: 'local',		//remote if real url is provided
							source: {
								data: res['data']
							},
							pageSize: 10,
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
							input: $('#generalSearch1')
						},

						// columns definition
						columns: [
							{
								field: '',
								title: 'Funcionario',
								template: function (row) {
									var number = row.id_empleado;
									var user_img = number + '.jpg';
									var output;
									if (number < 10015) {
										output = `
											<div class="kt-user-card-v2">
													<div class="kt-user-card-v2__pic">
															<img src="assets/funcionarios/` + user_img + `" class="m-img-rounded kt-marginless" alt="photo">
													</div>
													<div class="kt-user-card-v2__details">
															<a class="kt-user-card-v2__name kt-link">` + row.apellido_paterno + `</a>
															<span class="kt-user-card-v2__email">` + row.first_name + `</span>
													</div>
											</div>`;
									} else {
										var stateNo = KTUtil.getRandomInt(0, 7);
										var states = [
											'success',
											'brand',
											'danger',
											'success',
											'warning',
											'dark',
											'primary',
											'info'];
										var state = states[stateNo];

										output = `
											<div class="kt-user-card-v2">
													<div class="kt-user-card-v2__pic">
															<div class="kt-badge kt-badge--xl kt-badge--` + state + `"><span>` + row.apellido_paterno.substring(0, 1) + `</div>
													</div>
													<div class="kt-user-card-v2__details">
															<a class="kt-user-card-v2__name kt-link">` + row.apellido_paterno + `</a>
															<span class="kt-user-card-v2__email">` + row.first_name + `</span>
													</div>
											</div>`;
									}
									return output;
								},

							}, {
								field: 'id_empleado',
								title: 'ID Empleado',
								width: 90,
								template: function (row) {
									var output;
									output = `
										<a class="kt-link link-num">` + row.id_empleado + `</a>
									`;
									return output;
								},
							}, {
								field: 'cargo',
								title: 'Cargo',
							}, {
								field: 'unidad_negocio',
								title: 'Unidad Negocio',
							}, {
								field: 'empresa',
								title: 'Empresa',
							}, {
								field: 'tipo_empleado',
								title: 'Tipo Empleado',
							}, {
								field: 'tipo_contrato',
								title: 'Tipo Contrato',
								width: 90,
							}, {
								field: 'estado_laboral',
								title: 'Estado Laboral',
								template: function (row) {
									if (row.estado_laboral == 'Activo') {
										status = 'kt-badge--success';
									} else if (row.estado_laboral == 'Desvinculado') {
										status = 'kt-badge--warning';
									} else if (row.estado_laboral == 'Retirado') {
										status = 'kt-badge--danger';
									} else {
										return row.estado_laboral;
									}
									return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado_laboral + '</span>';
								},
							}, {
								field: 'estado_entidad',
								title: 'Estado Entidad',
								template: function (row) {
									if (row.estado_entidad == 'Activo') {
										status = 'success';
									} else if (row.estado_entidad == 'Inactivo') {
										status = 'danger';
									} else {
										return row.estado_entidad;
									}

									return '<span class="kt-badge kt-badge--' + status + ' kt-badge--dot"></span>&nbsp;' +
										'<span class="kt-font-bold kt-font-' + status + '">' + row.estado_entidad + '</span>';
								},
							}],
					});

				};
				return {
					// public functions
					init: function () {

						subRemoteTablaFuncionarios();

					}
				};
			}();
			this.KTDatatableModal2.init();
		});
	}

}