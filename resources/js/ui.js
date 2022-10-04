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

	//Slick Slider
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
