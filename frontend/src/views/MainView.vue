<template>
	<div>
		<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false"> <!--data-bs-pause="true": 마우스를 카루셀 화면에 들어오면, 다음으로 안넘어가고 같은 화면 반복 -->
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="main-top-promotion">
						<video class="main-top-promotion-video d-block w-100" autoplay="autoplay" loop="loop" muted="muted">
							<source src="../assets/mainbackground.mp4" type="video/mp4">
						</video>
						<div class="container">
							<div class="row align-items-center">
								<div class="col-sm-12 col-md-6 text-md-start">
									<div class="py-3 py-md-5">
										<br><br>
										<h1 class="text-white fw-bold">
											What are you <br>working out <br>today?
										</h1>
										<p class="text-white mb-4 fs-5">
											반복되는 일상에 새로운 운동 루틴을 더해보세요.
										</p>
										<!-- <router-link :to="{name:'BoardWrite'}" class="btn btn-success">나의 이야기 쓰기</router-link> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="main-top-promotion">
						<video class="main-top-promotion-video d-block w-100" autoplay="autoplay" loop="loop" muted="muted">
							<source src="../assets/mainbackground2.mp4" type="video/mp4">
						</video>
						<div class="container">
							<div class="row align-items-center">
								<div class="col-sm-12 col-md-6 text-md-start">
									<div class="py-3 py-md-5">
										<br><br>
										<h1 class="text-black fw-bold">
											What are you <br>working out <br>today?
										</h1>
										<p class="text-black mb-4 fs-5">
											반복되는 일상에 새로운 운동 루틴을 더해보세요.
										</p>
										<!-- <router-link :to="{name:'BoardWrite'}" class="btn btn-success">나의 이야기 쓰기</router-link> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		

		<!-- 영상 하나만 할 때-->
		<!-- <div class="main-top-promotion">
			<video class="main-top-promotion-video" autoplay="autoplay" loop="loop" muted="muted">
				<source src="../assets/mainbackground.mp4" type="video/mp4">
			</video>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-sm-12 col-md-6 text-md-start">
						<div class="py-3 py-md-5">
							<br><br>
							<h1 class="text-white fw-bold">
								What are you <br>working out <br>today?
							</h1>
							<p class="text-white mb-4 fs-5">
								반복되는 일상에 새로운 운동 루틴을 더해보세요.
							</p>
							<router-link :to="{name:'BoardWrite'}" class="btn btn-success">나의 이야기 쓰기</router-link>
						</div>
					</div>
				</div>
			</div>
		</div> -->

		<!-- <div class="home">
			<img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/>
		</div> -->
	</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'MainView',
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
/* 캐러셀(이미지슬라이드) 이미지 크기변경 */
.carousel-inner{
	width: 100%;
	height: 92vh; /* 이미지 높이 변경 */
}
.carousel-item{
	width: 100%;
	height:100%;
}
.d-block {
	display:block;
	width: auto;
	height: 100%;
}
.main-top-promotion {
	width: 100%;
}

.main-top-promotion-video {
	height: 100%;
  	width: 100%;
  	margin: 0px;
  	padding: 0px;
  	position: absolute;
  	left: 0;
  	top: 0;
  	object-fit: cover;
	z-index: -1;
}
.main-top-promotion > .container {
  	position: relative;
}
</style>
