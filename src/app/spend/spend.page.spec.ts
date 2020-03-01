import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpendPage } from './spend.page';

describe('SpendPage', () => {
  let component: SpendPage;
  let fixture: ComponentFixture<SpendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
