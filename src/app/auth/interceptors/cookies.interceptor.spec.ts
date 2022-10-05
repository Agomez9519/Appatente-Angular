import { TestBed } from '@angular/core/testing';

import { CookiesInterceptor } from './cookies.interceptor';

describe('CookiesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CookiesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CookiesInterceptor = TestBed.inject(CookiesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
