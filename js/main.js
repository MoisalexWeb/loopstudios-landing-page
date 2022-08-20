// RESPONSIVE MENU
(function () {
	const buttonHamburger = document.querySelector('.hamburger');
	const menu = document.getElementById('menu');
	const buttonHamburgerURL = buttonHamburger.getAttribute('src');
	const linksMenu = [...document.querySelectorAll('.link')];
	const nav = document.getElementById('nav')

	let mainLocation = window.pageYOffset; // For hide menu

	window.addEventListener('scroll',()=> {
		let currentOffset = window.pageYOffset;

		if(menu.classList.contains('show-menu') || mainLocation >= currentOffset) nav.style.top = "0";
		
		else nav.style.top = "-102%";
		
		mainLocation = currentOffset;
		// Reiniciando el valor de la ubicacion principal
	});


	// Mobile menú
	buttonHamburger.addEventListener('click', (e)=> {
		menu.style.transition = "transform 0.6s ease-in-out";
		if(!menu.classList.contains('show-menu')){
			menu.classList.add('show-menu');
			buttonHamburger.setAttribute("src","images/icon-close.svg")
			buttonHamburger.style.height = "30px";

			linksMenu.forEach(link=> {
				link.addEventListener('click', ()=> {
					menu.classList.remove('show-menu');
					buttonHamburger.setAttribute("src",buttonHamburgerURL);
					buttonHamburger.removeAttribute('style');
				});
			});
		}
		else {
			menu.classList.remove('show-menu');
			buttonHamburger.setAttribute("src",buttonHamburgerURL)
			buttonHamburger.removeAttribute('style');
		}
	});

	// IF MENU IS SEEN, REMOVING IT
	window.addEventListener('resize', ()=> {
		if(window.screen.width > 800) {
			menu.removeAttribute("style")
			menu.classList.remove('show-menu');
			buttonHamburger.setAttribute('src', buttonHamburgerURL);
			buttonHamburger.removeAttribute('style');
			nav.removeAttribute("style")
		}
	});

})();

// LIGHTBOX
(function () {
	// Image's url and alt attribute
	const imagesURL = [
	{
		url: "./images/desktop/image-deep-earth.jpg",
		alt: "Earth Planet"
	},
	{
		url: "./images/desktop/image-night-arcade.jpg",
		alt: "Arcade"
	},
	{
		url: "./images/desktop/image-soccer-team.jpg",
		alt: "Soccer"
	},
	{
		url: "./images/desktop/image-grid.jpg",
		alt: "Racing car"
	},
	{
		url: "./images/desktop/image-from-above.jpg",
		alt: "Road from above"
	},
	{
		url: "./images/desktop/image-pocket-borealis.jpg",
		alt: "Pocket Borealis"
	},
	{
		url: "./images/desktop/image-curiosity.jpg",
		alt: "Curiosity"
	},
	{
		url: "./images/desktop/image-fisheye.jpg",
		alt: "Fisheye"
	}];

	const backgroundImage = [...document.querySelectorAll('.image__content')];
	const lightbox = document.querySelector('.lightbox');
	const lightboxContainer = document.querySelector('.container--light');
	const lightboxImage = document.querySelector('.lightbox-img');
	const close = document.querySelector('.close-lightbox');
	const leftArrow = document.querySelector('.arrow--left');
	const rightArrow = document.querySelector('.arrow--right');

	// SOHWING LIGHTBOX
	backgroundImage.forEach((img,index)=>{
		img.addEventListener('click', ()=> {
			lightbox.classList.add('show-lightbox');
			lightboxContainer.classList.add('show-image');

			lightboxImage.setAttribute("src",imagesURL[index].url);
			lightboxImage.setAttribute("alt",imagesURL[index].alt);
		});
	})

	// NEXT IMAGE IN LIGHTBOX
	rightArrow.addEventListener('click', ()=> {
		const currentImage = lightboxImage.getAttribute('src');
		let nextImage;
		if(imagesURL[imagesURL.length-1].url === currentImage) {
			lightboxImage.setAttribute("src",imagesURL[0].url)
			lightboxImage.setAttribute("alt",imagesURL[0].alt)
		}
		else {
			imagesURL.forEach((element,index)=>{
				if(element.url === currentImage) {
					nextImage = ++index;
				}
			})

			lightboxImage.setAttribute("src",imagesURL[nextImage].url)
			lightboxImage.setAttribute("alt",imagesURL[nextImage].alt)
		}
	});

	// PREVIOUS IMAGE IN LIGHTBOX
	leftArrow.addEventListener('click', ()=> {
		const currentImage = lightboxImage.getAttribute('src');
		let prevImage;

		if(imagesURL[0].url === currentImage) {
			lightboxImage.setAttribute('src', imagesURL[imagesURL.length-1].url);
			lightboxImage.setAttribute('alt', imagesURL[imagesURL.length-1].alt);
		}
		else {
			imagesURL.forEach((element,index)=>{
				if(element.url === currentImage) {
					prevImage = --index;
				}
			})

			lightboxImage.setAttribute("src",imagesURL[prevImage].url)
			lightboxImage.setAttribute("alt",imagesURL[prevImage].alt)
		}
	});

	// CLOSING LIGHTBOX
	close.addEventListener('click', ()=> {
		lightbox.classList.remove('show-lightbox');
		lightboxContainer.classList.remove('show-image');
	});
})(); 