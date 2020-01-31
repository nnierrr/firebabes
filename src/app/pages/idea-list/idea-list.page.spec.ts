import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdeaListPage } from './idea-list.page';

describe('IdeaListPage', () => {
  let component: IdeaListPage;
  let fixture: ComponentFixture<IdeaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdeaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
