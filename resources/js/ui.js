window.onload = function () {
	const resume = document.getElementById('resume');
	const dropdownResume = document.querySelector('.dropdown-resume');
	const titleChange = document.querySelector('.title--change');
	const btnClose = document.querySelector('.btn--close');
	const dropdown = document.querySelector('.home__dropdown');
	const btnTop = document.querySelector('.btn--go-to-top');
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav');
	const gnb = document.querySelector('.gnb');
	const sns = document.querySelector('.nav__sns');
	const likeHeart = document.querySelector('.like i');
	const likeNumber = document.querySelector('.num')
	const clickSection = document.querySelector('.home__click');
	const clickSectionHeight = clickSection.scrollTop; //현재 요소의 높이
	const rollingBar = document.querySelector('.home__bar-text');
	const rollingText = document.querySelectorAll('.home__bar-text li')
	const card = document.querySelectorAll('.card');
	const front = document.querySelector('.front');
	const back = document.querySelector('.back');

	const STANDARD = 2000;

	// 문서의 처음부터 마지막까지의 높이값
	const totalHeight = document.documentElement.scrollHeight;

	//문서의 보이는 부분, 즉 뷰포트 높이 (보더, 마진 빼고 전부다)
	const viewportHeight = document.documentElement.clientHeight;
			// -> 위와 동일함 const viewportHeight = window.innerHeight;

	//문서의 최상단부터 내려온 만큼의 높이
	const scrollHeightFromTop = window.scrollY;


	
	// *Scroll Down Event 
	window.addEventListener('scroll',function(){
		// - Click | Change Color
		// window에 scroll 이벤트를 더한 후, window의 scroll 위치가 DOM의 높이를 넘어설 경우- window.scrollY
		if(window.scrollY > 2400 + STANDARD) { 
			clickSection.classList.add('active'); 
		}else {
			clickSection.classList.remove('active');
		}

		// keyVisual | Card Rotate
		for (i = 0; i < card.length; i++) {
			if (window.scrollY > 20) {
				card[i].classList.add('active')
			} else {
				card[i].classList.remove('active')
			};
		}

		// keyVisual | Run | header | mainTitle
		if(window.scrollY > 50) {
			run.classList.add('active')
			header.classList.add('active')
			mainTitle.classList.add('active')
			
		}else {
			run.classList.remove('active')
			header.classList.remove('active')
			mainTitle.classList.remove('active')
		}

		if(window.scrollY > 2000) {
			keyVisual.classList.add('active')
			main.classList.add('active')
		}else {
			keyVisual.classList.remove('active')
		}


		// - Rollin Bar Text - fill
		if(window.scrollY > 300 + STANDARD) {
			rollingText[0].classList.add('fill')
		}else {
			rollingText[0].classList.remove('fill')
		};
		if(window.scrollY > 400 + STANDARD) {
			rollingText[1].classList.add('fill')
		}else {
			rollingText[1].classList.remove('fill')
		};
		if(window.scrollY > 500 + STANDARD) {
			rollingText[2].classList.add('fill')
		}else {
			rollingText[2].classList.remove('fill')
		};


	})




	// Mobile hamburger
	hamburger.addEventListener('click',function(){
		hamburger.classList.toggle('on');
		nav.classList.toggle('on');
		gnb.classList.toggle('on');
		sns.classList.toggle('on');
	})

	 // Scroll | Scroll Bottom
  // $('.btn--go-to-bot').click(function(e){
  //   $.scrollTo(this.hash || 0, 800);
  //   e.preventDefalut();
  // });

	// * Scroll | gotoTop | Scroll Top
	btnTop.addEventListener('click',function(){
		event.preventDefault();
		window.scrollTo(0,0);
	})

	// * Scroll | gotoTop | show hide
	$('.btn--go-to-top').hide()
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('.btn--go-to-top').show()
		}else {
			$('.btn--go-to-top').hide();
		}
	})


	// * Scroll to location
	//  gotoBottom
	$('.btn--go-to-bot').click(function(){
		event.preventDefault(); //기본 클릭 동작 방지하기
		const mainOffset = $('#slogan').offset() //main의 위치값 변수에 담기
		$('html, body').animate( { scrollTop:mainOffset.top - 80 },50 )
	})
	// portfolio
	$('.portfolio').click(function(){
		event.preventDefault(); 
		const portfolioOffset = $('#portfolio').offset() 
		$('html, body').animate( { scrollTop:portfolioOffset.top - 80 },50 )
	})
	// photo
	$('.photo').click(function(){
		event.preventDefault(); 
		const photoOffset = $('#photo').offset() 
		$('html, body').animate( { scrollTop:photoOffset.top - 80 },50 )
	})
	// review
	$('.review').click(function(){
		event.preventDefault(); 
		const reviewOffset = $('#review').offset() 
		$('html, body').animate( { scrollTop:reviewOffset.top - 80 },50 )
	})

	
	// * Click Event 
	resume.addEventListener('click', function () {
		dropdownResume.classList.toggle('show');
		titleChange.classList.toggle('on');
		dropdown.classList.toggle('on');
	})
	
	btnClose.addEventListener('click', function () {
		dropdownResume.classList.toggle('show');
		titleChange.classList.toggle('on');
		dropdown.classList.toggle('on');

	})


	// * Count Event
	// Photo | Like Heart Plus 
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

			]
		});
			
	});


	// * Tab Event
	// home__review 
	const tabList = document.querySelectorAll('.tab-menu__item');
	const contents = document.querySelectorAll('.tab-content__item');
	let activeCont = ''; //현재 활성화 된 컨텐츠
	const tab01 = document.getElementById('tab--01')
	tab01.style.display='block'

	for(var i=0; i < tabList.length; i++){
		tabList[i].querySelector('.btn').addEventListener('click',function(e){
			e.preventDefault();
			for(var j=0; j<tabList.length; j++){
				//나머지 버튼 클래스 제거
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

	// * 아코디언 메뉴
	// home__goodList 
	var $list = $('.home__goodList .list li')
	var $listBtn = $('.home__goodList .list__btn')
	var $listDesc = $('.home__goodList .list__desc')


	$($listBtn).click(function(){
		$(this).next('.list__desc').stop().slideToggle(300);
		$(this).parent().siblings().children('.list__desc').slideUp(300);
		$(this).toggleClass('on');
		$(this).parent().siblings().children('.list__btn').removeClass('on');

	})









}
