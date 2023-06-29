import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInfoComponent } from './resume-info.component';

describe('ResumeInfoComponent', () => {
  let component: ResumeInfoComponent;
  let fixture: ComponentFixture<ResumeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeInfoComponent]
    });
    fixture = TestBed.createComponent(ResumeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
