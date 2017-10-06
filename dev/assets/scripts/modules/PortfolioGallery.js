import $ from "jquery";
class PortfolioGallery{
	constructor(data , holder , categoryHolder){
		this.projects = data;
		this.holderDiv = $(holder);
		this.categoryDiv = $(categoryHolder);
		this.modalClose = $('.modal__close');
		this.modal = $('.modal');
		this.render();
		this.showInfo = $('.show-info');
		this.events();
	}
	render(){
		for(var i=0 ; i < this.projects.length ; i++){
		var project = this.projects[i];
		var projectDiv = `<div id='${i}' class='grid__large-4 grid__small-6 filter ${project.category}'>
					        <div class='browser'>
					          <div class='browser__top-bar'>
					              <div class='dots'></div>
					          </div>
					          <div class='browser__info'>
					              <h4>${project.name}</h4>
					              <a class="show-info" href='#'>Read More <span class='browser__info__icon icon icon--more'></span></a>
					          </div>
					          <img class='browser__display lazyload' alt='project name' data-src='${project.thumbnail}'>
					        </div>
					     </div>`;
		this.holderDiv.append(projectDiv);
		}
	}
	events(){
		var _this = this;
		this.showInfo.click(function(){
			_this.renderModal($(this).parents('div.filter').attr('id'));
			_this.modal.addClass('modal--is-visible');
			return false;
		});

		this.modalClose.click(function(){
			_this.modal.removeClass('modal--is-visible');
		});
	}
	renderModal(projectId){
		
	}
}

export default PortfolioGallery;