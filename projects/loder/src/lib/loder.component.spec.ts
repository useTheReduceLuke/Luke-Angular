import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LODerComponent } from './loder.component';

describe('LODerComponent', () => {
	let component: LODerComponent;
	let fixture: ComponentFixture<LODerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LODerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LODerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
