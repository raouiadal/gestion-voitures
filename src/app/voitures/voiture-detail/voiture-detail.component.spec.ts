import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDetailComponent } from './voiture-detail.component';

describe('VoitureDetailComponent', () => {
  let component: VoitureDetailComponent;
  let fixture: ComponentFixture<VoitureDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureDetailComponent]
    });
    fixture = TestBed.createComponent(VoitureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
