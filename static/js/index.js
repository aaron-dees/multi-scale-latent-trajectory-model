window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

		var lightbox = document.getElementById('image-lightbox');
		var lightboxImage = document.getElementById('image-lightbox-content');
		var lightboxClose = document.getElementById('image-lightbox-close');

		if (lightbox && lightboxImage && lightboxClose) {
			var allImages = document.querySelectorAll('img');

			allImages.forEach(function(image) {
				if (image.id === 'image-lightbox-content') {
					return;
				}

				image.classList.add('image-clickable');
				image.addEventListener('click', function() {
					lightboxImage.src = image.src;
					lightboxImage.alt = image.alt || 'Expanded image preview';
					lightbox.classList.add('is-active');
					lightbox.setAttribute('aria-hidden', 'false');
				});
			});

			function closeLightbox() {
				lightbox.classList.remove('is-active');
				lightbox.setAttribute('aria-hidden', 'true');
				lightboxImage.src = '';
			}

			lightboxClose.addEventListener('click', closeLightbox);

			lightbox.addEventListener('click', function(event) {
				if (event.target === lightbox) {
					closeLightbox();
				}
			});

			document.addEventListener('keydown', function(event) {
				if (event.key === 'Escape' && lightbox.classList.contains('is-active')) {
					closeLightbox();
				}
			});
		}

})
