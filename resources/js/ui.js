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
	const likeHeart = document.querySelector('.like i');
	const likeNumber = document.querySelector('.num')
	const clickSection = document.querySelector('.home__click');
	const clickSectionHeight = clickSection.scrollHeight; //현재 요소의 높이

	// Scroll | Change Click Color
	window.addEventListener('scroll',function(){
		if(window.scrollY > 1700) { //window에 scroll 이벤트를 더한 후, window의 scroll 위치가 DOM의 높이를 넘어설 경우- window.scrollY
			clickSection.style.backgroundColor = '#111'; //해당 요소의 스타일 속성을 변경시킨다. 
		}else {
			clickSection.style.backgroundColor = 'var(--color-main)';
		}
	})

	


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

	// * Scroll | Show Hide | gotoTop 
	$('.btn--gotoTop').hide()
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('.btn--gotoTop').show()
		}else {
			$('.btn--gotoTop').hide();
		}
	})


	// * Scroll | Scroll Bottom
	$('.btn--gotoBot').click(function(){
		event.preventDefault(); //기본 클릭 동작 방지하기
		const mainOffset = $('#slogan').offset() //main의 위치값 변수에 담기
		$('html, body').animate( { scrollTop:mainOffset.top - 80 },50 )
	})
	// * Scroll | Scroll to location
	$('.portfolio').click(function(){
		event.preventDefault(); //기본 클릭 동작 방지하기
		const portfolioOffset = $('#portfolio').offset() //main의 위치값 변수에 담기
		$('html, body').animate( { scrollTop:portfolioOffset.top - 80 },50 )
	})
	$('.photo').click(function(){
		event.preventDefault(); //기본 클릭 동작 방지하기
		const photoOffset = $('#photo').offset() //main의 위치값 변수에 담기
		$('html, body').animate( { scrollTop:photoOffset.top - 80 },50 )
	})
	$('.review').click(function(){
		event.preventDefault(); //기본 클릭 동작 방지하기
		const reviewOffset = $('#review').offset() //main의 위치값 변수에 담기
		$('html, body').animate( { scrollTop:reviewOffset.top - 80 },50 )
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

	// * Photo | Like Heart Plus
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	$('#countBtn1').click(function(){
		count1 = count1 + 1;
		document.querySelector("#num1").innerText = count1;
	})
	$('#countBtn2').click(function(){
		count2 = count2 + 1;
		document.querySelector("#num2").innerText = count2;
	})
	$('#countBtn3').click(function(){
		count3 = count3 + 1;
		document.querySelector("#num3").innerText = count3;
	})
	$('#countBtn4').click(function(){
		count4 = count4 + 1;
		document.querySelector("#num4").innerText = count4;
	})
	// * Photo | 좋아요 누르면 하트 컬러 변경
	$('.like button').click(function(){
		var $this = $('.heart');
		// $('.heart').removeClass('on');
		$($this).addClass('on');
	})

	// * Photo | Like Heart Event
	$('.like i').click(function(){
		$(this).toggleClass('on');
	})

	// * Slick Slider
	$(document).ready(function () {
		$('.slider').slick({
			infinite: true,
			slidesToShow: 1.5,
			slidesToScroll: 1,
			// autoplay: true,
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


	// * Tab | home__review | 출처:https://abcdqbbq.tistory.com/88
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
