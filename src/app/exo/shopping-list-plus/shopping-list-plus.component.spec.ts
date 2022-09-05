import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListPlusComponent } from './shopping-list-plus.component';

describe('ShoppingListPlusComponent', () => {
  let component: ShoppingListPlusComponent;
  let fixture: ComponentFixture<ShoppingListPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
