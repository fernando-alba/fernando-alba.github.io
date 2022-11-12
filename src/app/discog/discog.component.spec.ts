import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscogComponent } from './discog.component';

describe('DiscogComponent', () => {
  let component: DiscogComponent;
  let fixture: ComponentFixture<DiscogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
