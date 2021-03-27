// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';

@Injectable()
export class MenuAsideService {
	// Public properties
	menuList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	/**
	 * Service constructor
	 *
	 * @param menuConfigService: MenuConfigService
	 */
	constructor(private menuConfigService: MenuConfigService) {
		this.loadMenu();
	}

	/**
	 * Load menu list
	 */
	loadMenu() {
		// get menu list
		let menuItems: any[] = objectPath.get(this.menuConfigService.getMenus(), 'aside.items');
		this.menuList$.next(menuItems);
		this.menuConfigService.onConfigUpdated$.subscribe((config) => {
			menuItems = config['aside']['items']; 
			this.menuList$.next(menuItems);
		})
	}
}
