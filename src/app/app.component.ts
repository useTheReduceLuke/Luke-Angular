
import {filter} from 'rxjs/operators';
import { 
	Component, ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter, AfterViewInit, Inject, HostListener, ChangeDetectorRef, ViewEncapsulation, ViewChild
} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { MatDialog, MatIcon, MatSnackBar } from '@angular/material';
import * as $ from "jquery";

import { trigger, state, style, animate, transition, group, query, keyframes } from '@angular/animations';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { fadeAnimation } from './animations';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
	animations: [fadeAnimation]
})

export class AppComponent implements OnInit, OnDestroy {

	@ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

	public isMobile: boolean = false;
	public state = 'hide';
	public toolbar = document.getElementById("toolbar");
	public toolbarbar = document.getElementById("toolbarbar");
	public w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	public h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	start: boolean = false;

	private scrollingDown: boolean = true;
	public barSize: string = "grow";

	private marg: number;
	private high: number;
	public mainPage: boolean = true;
	public url: string;
	public pageList: string[] = ["portfolio", "contact", "resume", "about"];
	public currentPage: string;

	public showNav: boolean = false;
  	public pageView: boolean = false;
  	public lastScroll: number = 0;

	constructor(
		public snackBar: MatSnackBar, 
		public el: ElementRef,
		public router: Router
	){


		// Check if mobile
		let width = $(window).width();
		if (width < 600) {
			this.isMobile = true;
		}
		router.events.pipe(filter(event => event instanceof NavigationStart))
	    	.subscribe((event) => {
	    		this.url = event["url"];
	    		let short = this.url.replace(/\\|\//g,'');
	    		this.currentPage = short;
	    		console.log(short)
	    		let others = this.pageList.filter(e => e !== short);
	    });
	}

	ngOnInit(): void {
		setTimeout(() => this.start = true, 1000)
		this.toolbar = document.getElementById("toolbar");
	}

	ngOnDestroy(): void {

	}	// End-of ngOnDestroy

	openSnackBar(): void {
		this.snackBar.open("This is a work in progress, please come back soon!", "Okay!", {
			duration: 8000,
		});
	}

	close(): void {
		this.sidenav.close();
	}
}
