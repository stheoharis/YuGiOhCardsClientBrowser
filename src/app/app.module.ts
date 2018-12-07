import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//NGX-BOOTSTRAP STUFF
import {
	ButtonsModule,
	CarouselModule,
	ProgressbarModule 
} from 'ngx-bootstrap';


import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CardslistComponent } from './Components/cardslist/cardslist.component';
import { SearchComponent } from './Components/search/search.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserComponent } from './Components/browser/browser.component';
import { CardDetailComponent } from './Components/card-detail/card-detail.component';
import { MenuComponent } from './Components/menu/menu.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		CardslistComponent,
		SearchComponent,
		HeaderComponent,
		BrowserComponent,
		CardDetailComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		ButtonsModule.forRoot(),
		CarouselModule.forRoot(),
		ProgressbarModule.forRoot()
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
