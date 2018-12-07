import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserComponent } from './browser.component';
import { CardslistComponent } from '../../Components/cardslist/cardslist.component';
import { CardDetailComponent } from '../../Components/card-detail/card-detail.component';
//import { RestService } from 'src/app/Services/restService/rest.service';
 

describe('BrowserComponent', () => {

	let component: BrowserComponent;
	let fixture: ComponentFixture<BrowserComponent>;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
				BrowserComponent,
				CardslistComponent,
				CardDetailComponent				
			],
			
		}).compileComponents();

	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrowserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
