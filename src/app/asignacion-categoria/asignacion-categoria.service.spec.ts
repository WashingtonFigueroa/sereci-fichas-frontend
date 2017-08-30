import { TestBed, inject } from '@angular/core/testing';

import { AsignacionCategoriaService } from './asignacion-categoria.service';

describe('AsignacionCategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignacionCategoriaService]
    });
  });

  it('should be created', inject([AsignacionCategoriaService], (service: AsignacionCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
