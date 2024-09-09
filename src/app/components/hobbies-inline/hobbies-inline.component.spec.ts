import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesInlineComponent } from './hobbies-inline.component';

describe('HobbiesInlineComponent', () => {
  let component: HobbiesInlineComponent;
  let fixture: ComponentFixture<HobbiesInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
