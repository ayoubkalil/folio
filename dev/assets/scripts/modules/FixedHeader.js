import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from 'jquery-smooth-scroll';
class FixedHeader{
	constructor(){
		// lazy load fix
		this.lazyImages = $('.lazyload');
		this.refreshWayPoints();
		// header waypoint to make the header Sticky
		this.siteHeader = $(".header");
		this.headerTriggerElement = $(".hero__title");
		this.createHeaderWayPoint();

		//setting the current section to the nav menu
		this.pageSections = $(".section");
		this.headerLinks = $(".scrolling-nav");
		this.createPageSectionWayPoint();

		//enabling smoothScrolling 
		this.addSmoothScrolling();

	}
	refreshWayPoints(){
		this.lazyImages.on('load',function(){
			Waypoint.refreshAll();
		});
	}
	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
	}
	createHeaderWayPoint(){
		var _this = this;
		new Waypoint({
			element : this.headerTriggerElement[0],
			handler:function(direction){
				if(direction == "down"){
				_this.siteHeader.addClass('header--dark');
				}else{
				_this.siteHeader.removeClass('header--dark');
				}
			}
		});
	}

	createPageSectionWayPoint(){
		var _this = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element:currentPageSection,
				handler:function(direction){
					if(direction == "down"){	
						var HeaderLink = currentPageSection.getAttribute('data-menu-link');
						_this.headerLinks.removeClass("is-current-link");
						$(HeaderLink).addClass('is-current-link');
					}
				},
				offset:"18%"
			});

			new Waypoint({
				element:currentPageSection,
				handler:function(direction){
					if(direction == "up"){	
						var HeaderLink = currentPageSection.getAttribute('data-menu-link');
						_this.headerLinks.removeClass("is-current-link");
						$(HeaderLink).addClass('is-current-link');
					}
				},
				offset:"-40%"
			});
		});
	}
}

export default FixedHeader;