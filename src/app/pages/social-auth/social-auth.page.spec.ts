import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialAuthPage } from './social-auth.page';

describe('SocialAuthPage', () => {
  let component: SocialAuthPage;
  let fixture: ComponentFixture<SocialAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
