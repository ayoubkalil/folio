import $ from "jquery";
class MenuOnMobileView{
	constructor(){
		this.header = $('.header');
		this.menuIcon = $('.header__sandwich-icon');
		this.nav = $('.nav');
		this.events();
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	toggleTheMenu(){
		
		this.nav.toggleClass('nav--is-visible');
		this.header.toggleClass('header--is-expanded');
		this.menuIcon.toggleClass('header__sandwich-icon--close-x');
	}
}

export default MenuOnMobileView;