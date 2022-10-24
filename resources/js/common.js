window.onload = function () {

	const btnTop = document.querySelector('.btn--go-to-top');
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav');
	const gnb = document.querySelector('.gnb');
	const sns = document.querySelector('.nav__sns');



	// Mobile hamburger
	hamburger.addEventListener('click',function(){
		hamburger.classList.toggle('on');
		nav.classList.toggle('on');
		gnb.classList.toggle('on');
		sns.classList.toggle('on');
	})

			

	// * Scroll | Show Hide | gotoTop 
	$('.btn--go-to-top').hide()
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('.btn--go-to-top').show()
		}else {
			$('.btn--go-to-top').hide();
		}
	})


	// * Scroll | Scroll Top
	btnTop.addEventListener('click',function(){
		event.preventDefault();
		window.scrollTo(0,0);
	})

	// *Scroll Down Event | show , hide 
	window.addEventListener('scroll',function(){
		// header 
		if(window.scrollY > 50) {
			header.classList.add('active')
		}else {
			header.classList.remove('active')
		}
	})


}
