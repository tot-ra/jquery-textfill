(function($) {
	/**
	* Resizes an inner element's font so that the inner element completely fills the outer element.
	* @author Russ Painter WebDesign@GeekyMonkey.com, Artjom Kurapov artkurapov@gmail.com
	*
	* @version 0.1
	* @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
	* @return All outer elements processed
	* @example <div class='mybigdiv filltext'><span>My Text To Resize</span></div>
	*/
	$.fn.textfill = function(options) {
		var defaults = {
			maxFontPixels: 40,
			minFontPixels: 3,
			innerTag: 'span'
		};
		var Opts = jQuery.extend(defaults, options);
		return this.each(function() {
			var fontSize = Opts.maxFontPixels;
			var ourText = $(Opts.innerTag + ':visible:first', this);
			var maxHeight = $(this).height();

			if(maxHeight> 1 * $(ourText).css('max-height').replace('px','')){
				maxHeight = 1 * $(ourText).css('max-height').replace('px','');
			}

			var maxWidth = $(this).width();
			var textHeight;
			var textWidth;
			do {

				ourText.css('font-size', fontSize);
				textHeight = ourText.outerHeight();
				textWidth = ourText.outerWidth();

				fontSize--;

			} while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > Opts.minFontPixels);
		});
	};
})(jQuery);