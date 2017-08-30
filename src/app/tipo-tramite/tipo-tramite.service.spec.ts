import { TestBed, inject } from '@angular/core/testing';

import { TipoTramiteService } from './tipo-tramite.service';

describe('TipoTramiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoTramiteService]
    });
  });

  it('should be created', inject([TipoTramiteService], (service: TipoTramiteService) => {
    expect(service).toBeTruthy();
  }));
});
