import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaComponentComponent } from '../atleta-component/atleta-component.component';

describe('AtletaListComponent', () => {
  let component: AtletaComponentComponent;
  let fixture: ComponentFixture<AtletaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtletaComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});