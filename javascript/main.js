(function($) {


	function Slider(nav_zone, content_zone) {
		this.nav = nav_zone;
		this.content = content_zone;
		this.idSelectedSlide = 0;
	}

	Slider.prototype.changeSlide = function(index) {
		this.idSelectedSlide = index;
	}

	Slider.prototype.bindEvents = function() {
		var self = this;
		// On parcourt les différents li de la zone de nav
		// on pose un listener click dessus
		//
		this.nav.each( function(index) {
			$(this).on( 'click', function(e) {
				e.preventDefault();
				self.changeSlide(index); 	// on change ce qu'il faut -- ici on a besoin de self = l'objet Slider appelant 
													// car this référence dans cette boucle un élément li
				self.view();					// on lance l'affichage
			});
		})
	}

	Slider.prototype.view = function() {
		this.nav.removeClass('selected');
		var newSelectedSelector = ':eq(' + this.idSelectedSlide  + ')';
		this.nav.filter(newSelectedSelector).addClass('selected');
		this.content.removeClass().addClass('slide-content class-' + this.idSelectedSlide);
	}

	

	// Programme principal 
	// on va bouclr sur les div censées être des sliders ie
	// les div estampillées .slide-container
	//
	$('.slide-container').each( function() {
		
		// la zone de navigation est l'ensemble des li dans la .slide-nav
		// de la div courante this
		//
		var $nav_zone = $(this).find('.slide-nav li');
		
		// la zone de contenu est la div .slide-content
		//	toujours de la div courante 
		//
		var $content_zone = $(this).find('.slide-content');

		// On crée un nouvel objet Slider
		//
		var aSlider = new Slider($nav_zone, $content_zone);

		// Puis on lance le contrôleur de ce slider 
		//
		aSlider.bindEvents();
	});



})(jQuery);