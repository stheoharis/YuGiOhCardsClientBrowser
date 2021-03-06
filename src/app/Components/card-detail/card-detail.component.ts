import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/Classes/card';

@Component({
	selector: 'app-card-detail',
	templateUrl: './card-detail.component.html',
	styleUrls: ['./card-detail.component.css'],	
})
export class CardDetailComponent implements OnInit {

	@Input() selectedCardDetail: Card;
	
	constructor() { }

	ngOnInit() {
		
	}

}
