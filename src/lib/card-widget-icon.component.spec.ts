import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWidgetIconComponent } from './card-widget-icon.component';

describe('CardWidgetIconComponent', () => {
  let component: CardWidgetIconComponent;
  let fixture: ComponentFixture<CardWidgetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWidgetIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWidgetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
