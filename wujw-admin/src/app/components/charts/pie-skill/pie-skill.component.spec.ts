import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieSkillComponent } from './pie-skill.component';

describe('PieSkillComponent', () => {
  let component: PieSkillComponent;
  let fixture: ComponentFixture<PieSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
