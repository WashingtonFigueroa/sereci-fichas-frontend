import { TestBed, inject } from '@angular/core/testing';

import { CategoriaTramiteService } from './categoria-tramite.service';

describe('CategoriaTramiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaTramiteService]
    });
  });

  it('should be created', inject([CategoriaTramiteService], (service: CategoriaTramiteService) => {
    expect(service).toBeTruthy();
  }));
});
