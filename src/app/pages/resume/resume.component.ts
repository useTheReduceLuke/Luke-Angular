import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {trigger, animate, style, group, query, transition, keyframes, state} from '@angular/animations';


@Component({
	selector: '',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})


export class ResumeComponent implements OnInit, OnDestroy {

	pdfSrc: string = "./../../../assets/LukeJungmannResume.pdf#toolbar=0&navpanes=0&scrollbar=0";

	config: any;
	fullpage_api: any;
	
	constructor() {


		this.config = {

			// fullpage options
			licenseKey: 'E96AAB72-E06A4F03-A6BFCE8E-275FF0A5',
			anchors: ['page_0', 'page_1'],
			sectionsColor: ['#111111', '#111111'],
			menu: '#menu',
			lockAnchors: true,
			navigation: true,
			navigationPosition: 'right',
		};

	}	// End-of constructor

	ngOnInit() {

	}	// End-of OnInit

	ngOnDestroy() {

	}	// End-of ngOnDestroy

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef;
	}
}
