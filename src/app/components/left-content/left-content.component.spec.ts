import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeftContentComponent } from './left-content.component';

describe('LeftContentComponent', () => {
  let component: LeftContentComponent;
  let fixture: ComponentFixture<LeftContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [LeftContentComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
