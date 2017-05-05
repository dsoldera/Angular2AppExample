import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';

describe('aboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
     TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // beforeAll(() => {});
  // afterEach(() => {});
  // afterAll(() => {});

  it('should have as title \'About Component\'', () => {
    expect(component.title).toEqual('About Component');
  });

  it('should increment totalVotes when upvoted', () => {
    let component = new AboutComponent();
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    let component = new AboutComponent();
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
