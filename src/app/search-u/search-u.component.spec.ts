import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUComponent } from './search-u.component';

describe('SearchUComponent', () => {
  let component: SearchUComponent;
  let fixture: ComponentFixture<SearchUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
