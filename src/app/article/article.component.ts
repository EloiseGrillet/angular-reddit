import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
  class: 'row'}
})

export class ArticleComponent implements OnInit {
	/* votes: number;
	 title: string;
	 link: string;*/
	 
	@Input() article: Article;
	 
  constructor() { 
	// article is populated by the Input now,so we don't need anything here
	//this.article=new Article('Angular 2','http://angular.io',10);
	/*this.title= 'Angular 2';
	this.link='http://angular.io';
	this.votes=10;*/
	}

	voteUp(){
	 this.article.voteUp();	
	 return false; //do not refresh page
	}

	voteDown(){
	 this.article.voteDown();	
	 return false;//do not refresh page
	}
	
  ngOnInit() {
  }

}
