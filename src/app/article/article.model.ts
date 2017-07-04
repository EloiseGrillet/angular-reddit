export class Article{
	title: string;
	link: string;
	votes: number;
	
	constructor(title:string, link:string, votes?:number){ //? = optional parameter
		this.title=title;
		this.link=link;
		this.votes=votes || 0;
	}
	
	voteUp():void{
		this.votes+=1;		
	}
	
	voteDown():void{
		//if(this.votes>0){
			this.votes-=1;
		//}
				
	}
	
	domain(): string{
		try{
			const domainAndPash: string = this.link.split('//')[1];
			return domainAndPash.split('/')[0];
		}catch(err){
			return null;
		}
	}

}