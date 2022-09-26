import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsstatusComponent } from './docsstatus.component';

describe('DocsstatusComponent', () => {
  let component: DocsstatusComponent;
  let fixture: ComponentFixture<DocsstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
