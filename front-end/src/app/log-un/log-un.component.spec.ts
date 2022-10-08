import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUnComponent } from './log-un.component';

describe('LogUnComponent', () => {
  let component: LogUnComponent;
  let fixture: ComponentFixture<LogUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
