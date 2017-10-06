import $ from "jquery";
class PortfolioGallery{
	constructor(data , holder , categoryHolder){
		this.projects = data;
		this.holderDiv = $(holder);
		this.categoryDiv = $(categoryHolder);
		this.modalClose = $('.modal__close');
		this.modal = $('.modal');

		this.projectTitle = $('.project__title');
		this.projectDescription = $('.project__description');
		this.projectCategory = $('.project__category');
		this.projectDemo = $('.project__demo');
		this.projectScreenshot = $('.project__screenshot');
		this.prev = $('.project__prev');
		this.next = $('.project__next');
		this.currentProject = 0;
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
			$('body').addClass('no-overflow');
			_this.currentProject = parseInt($(this).parents('div.filter').attr('id'));
			_this.renderModal();
			_this.modal.addClass('modal--is-visible');
			return false;
		});

		this.modalClose.click(function(){
			$('body').removeClass('no-overflow');
			_this.modal.removeClass('modal--is-visible');
		});
		this.prev.click(function(){
			if(_this.currentProject > 0){
			_this.currentProject -= 1;
			_this.renderModal();
			}
			return false;
		});
		this.next.click(function(){
			if(_this.currentProject < _this.projects.length-1){
			_this.currentProject += 1;
			_this.renderModal();
			}
			return false;
		});
	}
	renderModal(){
		this.projectTitle.html('');
		this.projectDescription.html('');
		this.projectCategory.html('');
		this.projectDemo.html('');
		this.projectScreenshot.html('');
		let demo = this.projects[this.currentProject].liveLink || 'Unavailable';
		if(demo !== 'Unavailable'){
			demo = "<a href='" + demo + "'>Here<a/>";
		}
		this.projectTitle.append(this.projects[this.currentProject].name);
		this.projectDescription.append("<strong>Description : </strong> " +this.projects[this.currentProject].description);
		this.projectCategory.append("<strong>category : </strong>#" + this.projects[this.currentProject].category);
		this.projectDemo.append("<strong>Live Demo : </strong> " + demo);
		this.projectScreenshot.append("<img src='"+ this.projects[this.currentProject].image + "' alt='"+ this.projects[this.currentProject].name +"'>");
	}
}

export default PortfolioGallery;