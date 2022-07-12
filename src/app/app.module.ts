import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from "jquery";
import { TweenMax, TimelineMax } from 'gsap/all';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

export class MyHammerConfig extends HammerGestureConfig {
	overrides = <any> {
		swipe: { direction: Hammer.DIRECTION_ALL },
	};
}

// import 'animation.gsap';
// import 'debug.addIndicators';
// import {TweenLite} from 'gsap/TweenLite';
// import {ScrollToPlugin} from "gsap/ScrollToPlugin";

import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
} from '@angular/material';

import * as Portfolio from './pages/portfolio';
import * as Resume from './pages/resume';
import * as About from './pages/about';
import * as Contact from './pages/contact';
import * as Home from './pages/home';
import * as Components from './components/'
import * as Blank from './pages/blank';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
// import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
	exports: [
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
	]
})
export class MaterialModule { }

@NgModule({
	entryComponents: [],
	declarations: [
		AppComponent,
		Portfolio.PortfolioComponent,
		Portfolio.PortfolioDesignComponent,
		Portfolio.PortfolioProgrammingComponent,
		Portfolio.PortfolioVoiceComponent,
		Resume.ResumeComponent,
		About.AboutComponent,
		Contact.ContactComponent,
		Home.HomeComponent,
		Components.UnderConstructionComponent,
		Blank.BlankComponent,

	],
	imports: [
		AppRouting,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		ParallaxModule,
		AngularFullpageModule,
		LazyLoadImagesModule,
	],
	providers: [
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: MyHammerConfig,
		},
    ], //Services go here
	bootstrap: [AppComponent]
})
export class AppModule { }
