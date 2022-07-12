import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {trigger, animate, style, group, query, transition, keyframes, state} from '@angular/animations';

import * as $ from "jquery";


@Component({
	selector: 'app-portfolio-programming',
	templateUrl: './portfolio-programming.component.html',
	styleUrls: ['./portfolio-programming.component.scss'],
	animations: [
	trigger('scrollAnimation', [
		transition(':enter',  group([
			style({ opacity: 0, transform: 'translateX(-60px)' }),
			animate('1s ease-in-out', keyframes([
				style({opacity: 0, transform: 'translateX(-60px)', offset: 0}),
				style({opacity: 1, transform: 'translateX(0px)', offset: 1.0})
			]))
		]))
	]), 
	trigger('fadeAnimation', [
		transition('* => in',  group([
			style({ opacity: 0, }),
			animate('4s ease-in-out', keyframes([
				style({opacity: 0, offset: 0.8}),
				style({opacity: 1, offset: 1.0})
			]))
		])),
		transition('in => *',  group([
			style({ opacity: 1, }),
			animate('1s ease-in-out', keyframes([
				style({opacity: 1, offset: 0}),
				style({opacity: 0, offset: 1.0})
			]))
		])),
	])
	]
})


export class PortfolioProgrammingComponent implements OnInit, OnDestroy {
	

	public skillList = [
		{
			id: "angular", 
			src: '/assets/images/Software/angular_logo.png', 
			text: {
				title: "Angular", 
				primary: 'Two years of experience working with the company Aerial Applications.', 
				secondary: [
					'Frontend development of the Aerial Applications core app with a focus on debugging and a full redesign of the frontend components.',
					'Component creation from scratch for a custom build for current and future products.',
					'Experience with product design and project management and team management.'], 
			},
			sectionColor: 'rgb(23, 0, 5)',
		},
		{
			id:"css", 
			src:'./../../../assets/images/Software/css_logo.png', 
			text: {
				title: "SCSS and SASS", 
				primary: 'Experience with design both inside and outside of Aerial Applications.', 
				secondary: [
					'Core app implemented the Angular Material SCSS design, and was refactored to use custom SCSS and SASS to fit a proprietary design.',
					'New app involved the creation of custom components using completely custom SCSS and SASS code to build.',
					'Experiments with a personal website built entirely from custom components.'
				],
			}, 
			sectionColor: 'rgb(7, 13, 36)'
		},
		{
			id:"python", 
			src:'./../../../assets/images/Software/python_logo.png', 
			text: {
				title: "Python", 
				primary: 'One and a half years of experience programming for machine learning and computer vision.', 
				secondary: [
					'Created face-swapping software using the deep learning package TensorFlow.',
					'Facial mapping and warping software development.',
					'Engineering software creation.',
				], 
			},
			sectionColor: 'rgb(9, 18, 30)'
		},
		{
			id:"solidworks", 
			src:'./../../../assets/images/Software/solidworks_logo.png', 
			text: {
				title: "Solidworks", 
				primary: 'Four plus years of experience working as a student.', 
				secondary: [
					'Design work for a robotic arm in a Biomedical Engineering class.',
					'Product design experience creating a functional and reusable cable clip.',
				], 
			},
			sectionColor: 'rgb(28, 0, 2)'
		},
		{
			id:"matlab", 
			src:'./../../../assets/images/Software/matlab_logo.png', 
			text: {
					title: "Matlab", 
					primary: 'Four plus years of experience, working as a student, teacher\'s assistant, programmer for Sandia National Laboratories, and as a graduate student.', 
					secondary: [
					'Quadrotor programming experience, with stabilized flight control.',
					'MATLAB GUIDE GUI experience creating an interface for an advanced multi-spectral imaging microscope.',
				], 
			},
			sectionColor: 'rgb(0, 17, 30)'
		},
		{
			id:"unity", 
			src:'./../../../assets/images/Software/unity_logo.png', 
			text: {
				title: "Unity Game Engine", 
				primary: 'Six months of development experience on various projects.', 
				secondary: [
					'2D RPG game development with a focus on intelligent enemy AI and text flow.',
					'3D VR game initialization, with work in progress.',
				], 
			},
			sectionColor: 'rgb(2, 17, 23)'
		},
	];

	public skillList2 = [
		{id: "drone", src: '/assets/images/Portfolio/Drone.png'},
		{id:"franken", src:'./../../../assets/images/Portfolio/Frankenfingers.png'},
		{id:"kiosk", src:'./../../../assets/images/Portfolio/Kiosk1.png'},
		{id:"mug", src:'./../../../assets/images/Portfolio/Mug.png'},
	];

	public isMobile: boolean = false;
	public textListInd = ["Robotics Engineer", "Software Developer", "Full-Time Geek"];
	public displayText;
	public selected = -1;

	public currentIndex: number = 0;

	config: any;
	fullpage_api: any;

	constructor(private _cdr: ChangeDetectorRef) {

		this.config = {

			// fullpage options
			licenseKey: 'E96AAB72-E06A4F03-A6BFCE8E-275FF0A5',
			anchors: ['page_0', 'page_1', 'page_2', 'page_3', 'page_4'],
			sectionsColor: ['transparent'],
			menu: '#menu',
			lockAnchors: true,
			navigation: true,
			navigationPosition: 'right',

			// fullpage callbacks
			onLeave: (origin, destination, direction) => {
				this.currentIndex = destination.index;
				this._cdr.detectChanges();
			},
		};

	}	// End-of constructor

	ngOnInit() {

		// Check if mobile
		let width = $(window).width();
		if (width < 600) {
			this.isMobile = true;
		}

	}	// End-of OnInit

	ngOnDestroy() {

	}	// End-of ngOnDestroy

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef;
	}
	

	onScroll(event: Event, time: boolean) {
		let scroll = $('#page-container').scrollTop();
		console.log(scroll);
	}

	onLogoClick(i){
		this.selected = i;
		if (i >= 0) {
			this.displayText = this.skillList[i].text;
		}
	}

	setSectionColor(): any {
		let outVal = null;
		outVal = {'background-color': this.skillList[0].sectionColor};
		return outVal;
	}
}
