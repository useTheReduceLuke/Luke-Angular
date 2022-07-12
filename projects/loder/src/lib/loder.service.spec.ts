import { TestBed } from '@angular/core/testing';

import { LODerService } from './loder.service';

describe('LODerService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: LODerService = TestBed.get(LODerService);
		expect(service).toBeTruthy();
	});
});
