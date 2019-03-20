import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarVoteComponent } from './star-vote.component';

describe('StarVoteComponent', () => {
  let component: StarVoteComponent;
  let fixture: ComponentFixture<StarVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
