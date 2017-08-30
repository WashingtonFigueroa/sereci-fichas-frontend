import { TestBed, inject } from '@angular/core/testing';

import { VentanillaService } from './ventanilla.service';

describe('VentanillaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentanillaService]
    });
  });

  it('should be created', inject([VentanillaService], (service: VentanillaService) => {
    expect(service).toBeTruthy();
  }));
});
