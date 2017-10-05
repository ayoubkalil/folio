import $ from "jquery";
class PortfolioGallery{
	constructor(data){
		this.projects = data;
		this.render();
	}
	render(){
		for(var i=0 ; i < this.projects.length ; i++){
		var project = this.projects[i];
		console.log(project.name);
		}
	}
	events(){

	}
}

export default PortfolioGallery;