document.getElementById('menu').onclick = () => menu.classList.remove('show')

// Carousel Porfolio

window.addEventListener('load', function () {
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente',
		},
		responsive: [
			{
				
				breakpoint: 600,
				settings: {
					
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
		],
	})
})

// Carousel Clientes


window.addEventListener('load', function () {
	new Glider(document.querySelector('.carousel__lista__cliente'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores__cliente',
        duration: 0.5,
		arrows: {
			prev: '.carousel__anterior__cliente',
			next: '.carousel__siguiente__cliente',
		},
		responsive: [
			{
				
				breakpoint: 600,
				settings: {
					
				},
			},
			{
				
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
                   
				},
			},
		],
	})
})