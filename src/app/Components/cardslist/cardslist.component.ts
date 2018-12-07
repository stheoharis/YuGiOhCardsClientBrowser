import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardNamesList } from '../../CardNamesList';
import { Card } from 'src/app/Classes/card';
import { RestService } from 'src/app/Services/restService/rest.service';

@Component({
	selector: 'app-cardslist',
	templateUrl: './cardslist.component.html',
	styleUrls: ['./cardslist.component.css'],
	providers: [RestService]
})
export class CardslistComponent implements OnInit {

	
	cardsList: Array<Card>;

	selectedCard: Card;
	@Output() onSelectedCardChangeChild = new EventEmitter<Card>();

	constructor(private restService: RestService) { }

	ngOnInit() {
		
		this.cardsList = [];

		for (var index in CardNamesList) {
			this.restService.get<Card>("http://52.57.88.137/api", "card_data", CardNamesList[index])
				.subscribe(
					response => {
						this.cardsList.push(response);						
					}
				);
		}

	}

	selectedCardClick(card: Card) {
		console.log(card);
		this.selectedCard = card;
		this.onSelectedCardChangeChild.emit(card);
	}

	getColor(cardType) {
		switch (cardType) {
			case 'monster':
				return 'coral';
			case 'spell':
				return 'dodgerblue	';
			case 'trap':
				return 'silver';
		}
	}

}
