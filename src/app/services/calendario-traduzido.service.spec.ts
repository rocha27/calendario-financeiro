import { TestBed } from '@angular/core/testing';

import { CalendarioTraduzidoService } from './calendario-traduzido.service';

describe('CalendarioTraduzidoService', () => {
  let service: CalendarioTraduzidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarioTraduzidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
