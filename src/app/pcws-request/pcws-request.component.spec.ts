import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcwsRequestComponent } from './pcws-request.component';

describe('PcwsRequestComponent', () => {
  let component: PcwsRequestComponent;
  let fixture: ComponentFixture<PcwsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcwsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcwsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
