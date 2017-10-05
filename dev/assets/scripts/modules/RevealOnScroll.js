import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll{
	constructor(selector , offset , isSkill){
		this.offsetPresentage = offset;
		this.itemsToReveal = $(selector);
		this.isSkill = isSkill || false;
		this.hideInitially();
		this.createWaypoints();
	}
	hideInitially(){
		if(!this.isSkill){
			this.itemsToReveal.addClass("reveal-item");
		}else{

			this.itemsToReveal.addClass("reveal-item--is-skill");
		}
	}
	createWaypoints(){
		var _this = this;
		this.itemsToReveal.each(function(){
			var _self = this;
			new Waypoint({
				element : _self,
				handler: function(){
					if(!_this.isSkill){
						$(_self).addClass('reveal-item--is-visible');
					}else{
						

						if(!$(_self).hasClass('revealed')){
						var percentage = $(_self).data("percentage");
						var percentageDiv = "<div class='skills__percentage'>"+percentage+"</div>";
						$(percentageDiv).insertAfter(_self);
						$(_self).css({'width':percentage});
						
						$(_self).addClass('revealed');
						}

					}
				},
				offset: _this.offsetPresentage
				});
		});
	}

}

export default RevealOnScroll;