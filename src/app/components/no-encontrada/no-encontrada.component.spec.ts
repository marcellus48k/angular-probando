/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoEncontradaComponent } from './no-encontrada.component';

describe('NoEncontradaComponent', () => {
  let component: NoEncontradaComponent;
  let fixture: ComponentFixture<NoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
