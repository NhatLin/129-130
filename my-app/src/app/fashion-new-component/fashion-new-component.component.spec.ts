import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionNewComponent } from './fashion-new-component.component';

describe('FashionNewComponent', () => {
  let component: FashionNewComponent;
  let fixture: ComponentFixture<FashionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
