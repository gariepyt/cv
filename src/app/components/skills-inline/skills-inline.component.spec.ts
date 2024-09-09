import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInlineComponent } from './skills-inline.component';

describe('SkillsInlineComponent', () => {
  let component: SkillsInlineComponent;
  let fixture: ComponentFixture<SkillsInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
