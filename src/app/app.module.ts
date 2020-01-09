import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from "jquery";
import { TweenMax, TimelineMax } from 'gsap/all';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

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

import * as Skills from './pages/skills';
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
  declarations: [
    AppComponent,
    Skills.SkillsComponent,
    Skills.SkillsDesignComponent,
    Skills.SkillsProgrammingComponent,
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
  ],
  providers: [], //Services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
