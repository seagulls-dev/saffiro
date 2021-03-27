export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					alignment: 'left',
					page: '/admin/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title : 'Desarrollo profesional',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [ 
						{
							title : 'Cambio de cargo',
							bullet : 'dot',
							icon: 'flaticon2-group',
							page : '/admin/desarrollo/modifcargo'
						},
						{
							title : 'Incremento salarial',
							bullet : 'dot',
							icon: 'flaticon2-group',
							page : '/admin/desarrollo/modifsalario'
						}

					]
				},
				{
					title : 'Reclutamiento',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [
						{
							title : 'Nuevo Proceso',
							icon : 'fa fa-user-plus',
							page : '/admin/reclutamiento/proceso-nuevo'
						},
						{
							title : 'Procesos activos',
							icon : 'flaticon2-file-1',
							page : '/admin/reclutamiento/procesos-activos'
						},
						{
							title : 'Procesos cerrados',
							icon : 'flaticon2-file-1',
							page : '/admin/reclutamiento/procesos-cerrados'
						},
						{
							title : 'Inducción',
							icon : 'flaticon2-file-1',
							page : '/admin/reclutamiento/induccion'
						}
					]
				},
				{
					title : 'Evaluaciones',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [
						{
							title : 'Clima laboral',
							icon : 'flaticon2-sheet',
							page : '/admin/evaluacion/clima-laboral'
						},
						{
							title : 'Desempeño',
							icon : 'flaticon2-browser',
							page : '/admin/evaluacion/desempeno'
						}
					]
				},
				{
					title : 'Beneficios',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [ 
						{
							title : 'Solicitudes capacitaciones',
							icon: 'flaticon2-file-1',
							page : '/admin/beneficios/solicit-capacitaciones'
						},
						{
							title : 'Solicitudes campañas',
							icon: 'flaticon2-file-1',
							page : '/admin/beneficios/solicit-campanas'
						},
						{
							title : 'Solicitudes beneficios',
							icon: 'flaticon2-file-1',
							page : '/admin/beneficios/solicit-beneficios'
						},
						{
							title : 'Solicitudes préstamos',
							icon: 'flaticon2-file-1',
							page : '/admin/beneficios/solicit-prestamos'
						}
					]
				},
				{
					title : 'Actividades',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [ 
						{
							title : 'Contratación de servicios',
							icon: 'flaticon2-supermarket',
							page : '/admin/actividad/contrat-servicios'
						},
						{
							title : 'Cumpleañeros',
							icon: 'flaticon2-bell-1',
							page : '/admin/actividad/cumpleaneros'
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-protection',
					page: '/admin/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title : 'Desarrollo profesional',
					root : true,
					alignment : 'left',
					toggle : 'click',
					icon : 'flaticon2-list-3',
					bullet : 'dot',
					submenu : [ 
						{
							title : 'Desarrollo profesional',
							page : '/admin/desarrollo/modifcargo'
						},
						{
							title : 'Incremento salarial',
							page : '/admin/desarrollo/modifsalario'
						}

					]
				},
				{
					title : 'Reclutamiento',
					root : true,
					alignment : 'left',
					toggle : 'click',
					icon : 'flaticon2-group',
					bullet : 'dot',
					submenu : [
						{
							title : 'Nuevo Proceso',
							page : '/admin/reclutamiento/proceso-nuevo'
						},
						{
							title : 'Procesos activos',
							page : '/admin/reclutamiento/procesos-activos'
						},
						{
							title : 'Procesos cerrados',
							page : '/admin/reclutamiento/procesos-cerrados'
						},
						{
							title : 'Inducción',
							page : '/admin/reclutamiento/induccion'
						}
					]
				},
				{
					title : 'Evaluaciones',
					root : true,
					alignment : 'left',
					toggle : 'click',
					bullet : 'dot',
					icon : 'flaticon2-hourglass-1',
					submenu : [
						{
							title : 'Clima laboral',
							page : '/admin/evaluacion/clima-laboral'
						},
						{
							title : 'Desempeño',
							page : '/admin/evaluacion/desempeno'
						}
					]
				},
				{
					title : 'Beneficios',
					root : true,
					alignment : 'left',
					toggle : 'click',
					bullet : 'dot',
					icon : 'flaticon2-analytics-2',
					submenu : [ 
						{
							title : 'Solicitudes capacitaciones',
							page : '/admin/beneficios/solicit-capacitaciones'
						},
						{
							title : 'Solicitudes campañas',
							page : '/admin/beneficios/solicit-campanas'
						},
						{
							title : 'Solicitudes beneficios',
							page : '/admin/beneficios/solicit-beneficios'
						},
						{
							title : 'Solicitudes préstamos',
							page : '/admin/beneficios/solicit-prestamos'
						}
					]
				},
				{
					title : 'Actividades',
					root : true,
					alignment : 'left',
					toggle : 'click',
					bullet : 'dot',
					icon : 'flaticon2-medical-records-1',
					submenu : [ 
						{
							title : 'Contratación de servicios',
							page : '/admin/actividad/contrat-servicios'
						},
						{
							title : 'Cumpleañeros',
							page : '/admin/actividad/cumpleaneros'
						},
					]
				},
				{
					title: 'Module 6',
					root: true,
					icon: 'flaticon2-gear',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 7',
					root: true,
					icon: '',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}

	public user_defaults : any = {
		header : {
			self : {},
			items : [
				{
					title : 'Beneficios',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [ 
						{
							title : 'Solicitudes beneficios',
							bullet : 'dot',
							icon: 'flaticon-business',
							page : '/user/beneficios-usuario'
						},
					]
				},
			]
		},
		aside : {
			self : {},
			items : [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-protection',
					page: '/user/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Personal',
					root: true,
					icon: 'flaticon2-list-3',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'recursos humanos',
					root: true,
					icon: 'flaticon2-group',
					page: '/user/beneficios-usuario',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 3',
					root: true,
					icon: 'flaticon2-hourglass-1',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 4',
					root: true,
					icon: 'flaticon2-analytics-2',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 5',
					root: true,
					icon: 'flaticon2-medical-records-1',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 6',
					root: true,
					icon: 'flaticon2-gear',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 7',
					root: true,
					icon: '',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
			]
		}
	}

	public get user_configs() : any {
		return this.user_defaults;
	}
}
