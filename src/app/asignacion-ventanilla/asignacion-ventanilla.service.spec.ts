import { TestBed, inject } from '@angular/core/testing';

import { AsignacionVentanillaService } from './asignacion-ventanilla.service';

describe('AsignacionVentanillaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignacionVentanillaService]
    });
  });

  it('should be created', inject([AsignacionVentanillaService], (service: AsignacionVentanillaService) => {
    expect(service).toBeTruthy();
  }));
});
