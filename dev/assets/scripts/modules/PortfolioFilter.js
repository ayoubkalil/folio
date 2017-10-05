import $ from "jquery";
class PortfolioFilter{
	constructor(){
		this.btnFilter = $(".btn--filter");
		this.foliotoFilter =  $('.filter');
        this.events();
    }
    events(){
    	this.btnFilter.click((function (_this){
    		return function(){

				var type = $(this).attr('data-filter');
		        if(type == "all")
		        {
		           _this.foliotoFilter.show('1000');
		        }
		        else
		        {
		           _this.foliotoFilter.not('.'+type).hide('3000');
		           _this.foliotoFilter.filter('.'+type).show('3000'); 
		        }
		        return false;

			}
    	})(this));
    }
	
	
}
export default PortfolioFilter;