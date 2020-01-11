import { Component, ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter,AfterViewInit,Inject, HostListener, ChangeDetectorRef } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material';

// import { PageScrollInstance, PageScrollService, EasingLogic } from 'ngx-page-scroll';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { trigger, state, style, animate, transition, group, query, keyframes } from '@angular/animations';
import * as $ from "jquery";

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {

	public start: boolean = false;
	public isMobile: boolean = false;
	public state = 'hide';
	public fade = 'out';
	public selected: number = 0;

	public menuItems: Array<any> = [
		{text: 'Skills', routerLink: '/portfolio'},
		{text: 'Resume', routerLink: '/resume'},
		{text: 'Contact', routerLink: '/contact'},
		{text: 'About Me', routerLink: '/about'},
	]

	constructor(public el: ElementRef){

		// Check if mobile
		let width = $(window).width();
		if (width < 600) {
			this.isMobile = true;
		}

	}

    ngOnInit() {
 		setTimeout(() => this.start = true, 1000)
    }

	onHover(num: number) {
		console.log(num)
		this.selected = num;
	}
}

