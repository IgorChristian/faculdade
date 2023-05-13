import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadasReceitaComponent } from './cadas-receita.component';

describe('CadasReceitaComponent', () => {
  let component: CadasReceitaComponent;
  let fixture: ComponentFixture<CadasReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadasReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadasReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
