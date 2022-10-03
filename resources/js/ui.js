window.onload = function () {
	const resume = document.getElementById('resume');
	const dropdownResume = document.querySelector('.dropdown-resume');
	const titleChange = document.querySelector('.title--change');
	const btnClose = document.querySelector('.btn--close');
	const dropdown = document.querySelector('.home__dropdown');



	resume.addEventListener('click', function () {
		dropdownResume.classList.toggle('show');
		titleChange.classList.toggle('on');
		// if(titleChange.innerText === '+ click +'){
		// 	titleChange.innerText = ' - close - ';
		// }else {
		// 	titleChange.innerText = '- click - ';
		// }
		// if(dropdown.style.display=='none'){
		// 	dropdown.style.display='block';
		// }else {
		// 	dropdown.style.display='none';
		// }
		dropdown.classList.toggle('on');


	})
	btnClose.addEventListener('click', function () {
		dropdownResume.classList.toggle('show');
		titleChange.classList.toggle('on');
		dropdown.classList.toggle('on');

	})

	$(document).ready(function () {
		$('.slider').slick({
			infinite: true,
			slidesToShow: 1.5,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
			
	});


}
