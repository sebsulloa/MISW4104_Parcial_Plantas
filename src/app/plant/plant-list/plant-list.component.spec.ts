/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let index = 0; index < 3; index++) {
      component.plants.push(new Plant(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.fullName(),
        faker.helpers.arrayElement(['interior', 'exterior']),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
        ));
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create plants list', () =>{
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });
});
