import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencessectionComponent } from './referencessection.component';

describe('ReferencessectionComponent', () => {
  let component: ReferencessectionComponent;
  let fixture: ComponentFixture<ReferencessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencessectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferencessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
