import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagesDetailComponent } from './upload-images-detail.component';

describe('UploadImagesDetailComponent', () => {
  let component: UploadImagesDetailComponent;
  let fixture: ComponentFixture<UploadImagesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImagesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
