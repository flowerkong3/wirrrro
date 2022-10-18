window.onload = function () {

	const btnTop = document.querySelector('.btn--gotoTop');
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav');
	const gnb = document.querySelector('.gnb');
	const sns = document.querySelector('.nav__right');



	// Mobile hamburger
	hamburger.addEventListener('click',function(){
		hamburger.classList.toggle('on');
		nav.classList.toggle('on');
		gnb.classList.toggle('on');
		sns.classList.toggle('on');
	})

			

	// * Scroll | Show Hide | gotoTop 
	$('.btn--gotoTop').hide()
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('.btn--gotoTop').show()
		}else {
			$('.btn--gotoTop').hide();
		}
	})


	// * Scroll | Scroll Top
	btnTop.addEventListener('click',function(){
		event.preventDefault();
		window.scrollTo(0,0);
	})

	window.addEventListener('scroll',function(){
		// keyVisual | Run | header | mainTitle
		if(window.scrollY > 50) {
			header.classList.add('active')
		}else {
			header.classList.remove('active')
		}
	})


}
