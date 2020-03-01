import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreenPointsPage } from './green-points.page';

describe('GreenPointsPage', () => {
  let component: GreenPointsPage;
  let fixture: ComponentFixture<GreenPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenPointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreenPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
