import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Classes/card';

@Component({
	selector: 'app-browser',
	templateUrl: './browser.component.html',
	styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

	selectedCard: Card;	

	constructor() { }

	ngOnInit() {
	}

	changeSelectedCardFromOutput($event) {
		console.log("changeSelectedCardFromOutput");
		this.selectedCard = $event;
	}

}
