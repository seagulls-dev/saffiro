// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// Models
import { DataTableItemModel } from '../models/datatable-item.model';

const API_DATATABLE_URL = 'api/cars';

const JSON_URL = 'assets/data/';

@Injectable()
export class DataTableService {
	/**
	 * Service Constructor
	 *
	 * @param http: HttpClient
	 */
	constructor(private http: HttpClient) { }

	/**
	 * Returns data from fake server
	 */
	getAllItems(): Observable<DataTableItemModel[]> {
		return this.http.get<DataTableItemModel[]>(API_DATATABLE_URL);
	}

	//dashboard page
	getDashboardTableData1() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'workflow.json');
	}

	getDashboardTableData2() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'personal.json');
	}

	//develoment -> change position page
	getAwaitingRequests() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'cargos.json');
	}

	getAllRequests() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'cargos.json');
	}

	//development -> salary page
	getAwaitingSalary() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'salarios.json');
	}

	getAllSalary() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'salarios.json');
	}

	//active process page
	getActiveProcess() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'procesos-activos.json');
	}

	//closed process page
	getClosedProcess() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'procesos-cerrados.json');
	}

	//induction page
	getInduction() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'induccion.json');
	}

	//working environment page
	getWorkingEnv() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'clima-laboral.json');
	}

	//performance page
	getPerformance() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'desempeno.json');
	}

	//training requests
	getTrainRequests() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'capacitaciones.json');
	}

	//campaign requests page
	getCampaignRequests() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'campanas.json');
	}

	//benefits requests page
	getBenefitRequests() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'beneficios.json');
	}

	//loan app page
	getLoanApps() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'prestamos.json');
	}

	//contract service page
	getContractServices() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'contrat-servicios.json');
	}

	//birthday page for today
	getTodayBirthdays() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'cumpleaneros-hoy.json');
	}

	getBirthdays() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'cumpleaneros.json');
	}

	//proceso post page table
	getProcsoPost() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'procesos-postulantes.json');
	}

	//proceso cont page table
	getProcesoCont() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'procesos-contratados.json');
	}

	//proceso post cerrados page
	getProcesoPostCerrados() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'procesos-postulantes-cerrados.json');
	}

	//proceso cont cerrados page
	getProcesoContCerrados() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'procesos-contratados.json');
	}

	//desemo integra page
	getDesemoIntegra() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'desempeno-integrantes.json');
	}

	//benefit capacita integra
	getCapacitaIntegra() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'capacitaciones-integrantes.json');
	}
}
