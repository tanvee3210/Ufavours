import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimevalidationPage } from './timevalidation.page';

describe('TimevalidationPage', () => {
  let component: TimevalidationPage;
  let fixture: ComponentFixture<TimevalidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimevalidationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimevalidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
