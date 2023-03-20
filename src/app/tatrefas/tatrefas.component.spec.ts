import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatrefasComponent } from './tatrefas.component';

describe('TatrefasComponent', () => {
  let component: TatrefasComponent;
  let fixture: ComponentFixture<TatrefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatrefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatrefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
