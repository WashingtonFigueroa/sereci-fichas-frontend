import { TestBed, inject } from '@angular/core/testing';

import { SolicitudAutorizacionService } from './solicitud-autorizacion.service';

describe('SolicitudAutorizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudAutorizacionService]
    });
  });

  it('should be created', inject([SolicitudAutorizacionService], (service: SolicitudAutorizacionService) => {
    expect(service).toBeTruthy();
  }));
});
