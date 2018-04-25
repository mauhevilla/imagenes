import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImgesComponent } from './upload-imges.component';

describe('UploadImgesComponent', () => {
  let component: UploadImgesComponent;
  let fixture: ComponentFixture<UploadImgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
