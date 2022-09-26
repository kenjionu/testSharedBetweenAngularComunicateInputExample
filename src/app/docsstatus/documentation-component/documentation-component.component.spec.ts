import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationComponentComponent } from './documentation-component.component';

describe('DocumentationComponentComponent', () => {
  let component: DocumentationComponentComponent;
  let fixture: ComponentFixture<DocumentationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
