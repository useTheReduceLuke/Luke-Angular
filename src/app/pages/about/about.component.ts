import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import {trigger, animate, style, group, query, transition, keyframes, state} from '@angular/animations';


@Component({
	selector: '',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit, AfterViewInit {

	config: any;
	fullpage_api: any;

	constructor() {

		// for more details on config options please visit fullPage.js docs
		this.config = {

			// fullpage options
			licenseKey: 'E96AAB72-E06A4F03-A6BFCE8E-275FF0A5',
			anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
			sectionsColor: ['#210315', '#262626', '#210315', '#262626', '#210315'],
			menu: '#menu',
			lockAnchors: true,
			// navigation: true,
			navigationPosition: 'right',
			navigationTooltips: ['firstSlide', 'secondSlide'],

			// fullpage callbacks
			// afterResize: () => {
			// 	console.log("After resize");
			// },
			// afterLoad: (origin, destination, direction) => {
			// 	console.log(origin);
			// }
		};

	}	// End-of constructor

	ngOnInit() {

	}	// End-of OnInit

	ngAfterViewInit() {
	}

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef;
	}
}
