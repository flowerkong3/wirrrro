window.onload = function () {
	const resume = document.getElementById('resume');
	const dropdownResume = document.querySelector('.dropdown-resume');
	const titleChange = document.querySelector('.title--change');
	const btnClose = document.querySelector('.btn--close');
	const dropdown = document.querySelector('.home__dropdown');
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

	 // Scroll | Scroll Bottom
  // $('.btn--gotoBot').click(function(e){
  //   $.scrollTo(this.hash || 0, 800);
  //   e.preventDefalut();
  // });

	// * scroll | button | bottom
	$('.btn--gotoBot').click(function(){
		event.preventDefault(); //기본 클릭 동작 방지하기
		const mainOffset = $('#slogan').offset() //main의 위치값 변수에 담기
		$('html, body').animate( { scrollTop:mainOffset.top - 80 },50 )
	})

	
	// * Resume
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

	// * Scroll | Scroll Top
	btnTop.addEventListener('click',function(){
		event.preventDefault();
		window.scrollTo(0,0);
	})

	// * Slick Slider
	$(document).ready(function () {
		$('.slider').slick({
			infinite: true,
			slidesToShow: 1.5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1040,
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
						slidesToScroll: 1,
						dots: true
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
			
	});


	//home__review | Tab | 출처:https://abcdqbbq.tistory.com/88
	const tabList = document.querySelectorAll('.tab__menu--item');
	const contents = document.querySelectorAll('.tab__content--item');
	let activeCont = ''; //현재 활성화 된 컨텐츠
	const tab01 = document.getElementById('tab--01')
	tab01.style.display='block'

	for(var i=0; i < tabList.length; i++){
		tabList[i].querySelector('.btn').addEventListener('click',function(e){
			e.preventDefault();
			for(var j=0; j<tabList.length; j++){
				//나머지 버튼 클래서 제거
				tabList[j].classList.remove('on');
				//나머지 컨텐츠 display:none 처리
				contents[j].style.display = 'none';
			}
			//버튼 관련 이벤트
			this.parentNode.classList.add('on');
			//버튼 클릭시 컨텐츠 전환
			activeCont = this.getAttribute('href');
			document.querySelector(activeCont).style.display='block';
		});
	}


}
