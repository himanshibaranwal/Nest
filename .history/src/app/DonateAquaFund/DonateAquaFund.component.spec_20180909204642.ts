import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DonateAquaFundComponent } from './DonateAquaFund.component';
describe('DonateAquaFundComponent', () => {
  let component: DonateAquaFundComponent;
  let fixture: ComponentFixture<DonateAquaFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateAquaFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateAquaFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
