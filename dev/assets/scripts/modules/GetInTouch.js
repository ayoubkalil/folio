import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class getInTouch{
	constructor(){
		this.getInTouchButton = $('.btn--getInTouch');
		this.getInTouchContainer = $('.get-in-touch');
		this.mainContent = $('.container');
		this.hideButton = $('#hideMe');
		this.triggerHide = $('.hero');
		this.events();
		this.createWayPoint();
	}
	events(){
		this.getInTouchButton.click(this.Show.bind(this));
		this.hideButton.click(this.Hide.bind(this));
	}
	createWayPoint(){
		var _this = this;
		new Waypoint({
			element : _this.getInTouchContainer[0],
			handler:function(direction){
				if(direction == 'down'){
					_this.Hide();
				}
			},
			offset:'-'+ this.getInTouchContainer.outerHeight()
			});
	}
	Show(){
		var h = this.getInTouchContainer.outerHeight();
		this.getInTouchContainer.addClass('get-in-touch--is-visible');
		this.mainContent.css({'margin-top':h});
		setTimeout(function() {
		 Waypoint.refreshAll(); 
		
		}, 500);

	}
	Hide(){
		this.getInTouchContainer.removeClass('get-in-touch--is-visible');
		this.mainContent.css({'margin-top':0});
		setTimeout(function() {
		 Waypoint.refreshAll(); 
		
		}, 500);
	}

}

export default getInTouch;