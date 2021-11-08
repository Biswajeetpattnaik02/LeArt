import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintVideoComponent } from './paint-video.component';

describe('PaintVideoComponent', () => {
  let component: PaintVideoComponent;
  let fixture: ComponentFixture<PaintVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
