import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictinoryDetailComponent } from './dictinory-detail.component';

describe('DictinoryDetailComponent', () => {
  let component: DictinoryDetailComponent;
  let fixture: ComponentFixture<DictinoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictinoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictinoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
