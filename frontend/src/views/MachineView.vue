<template>
  <div class="wrapper">
    <br><br>
    <h2>오늘 수행하고자 하는 운동 루틴은 어느 부위 인가요?</h2>
    <div class="grid">
      <div class="item" id="1" v-on:click.prevent="GetPart($event)">
        <img src="../assets/back.jpeg" alt="back">
        <p>등</p>
      </div>

      <div class="item" id="2" v-on:click.prevent="GetPart($event)">
        <img src="../assets/chest.jpeg" alt="chest">
        <p>가슴</p>
      </div>

      <div class="item" id="3" v-on:click.prevent="GetPart($event)">
        <img src="../assets/shoulder.jpeg" alt="shoulder">
        <p>어깨</p>
      </div>

      <div class="item" id="4" v-on:click.prevent="GetPart($event)">
        <img src="../assets/arm.jpeg" alt="arm">
        <p>팔</p>
      </div>

      <div class="item" id="5" v-on:click.prevent="GetPart($event)">
        <img src="../assets/lowerbody.jpeg" alt="lowerbody">
        <p>하체</p>
      </div>

      <div class="item" id="6" v-on:click.prevent="GetPart($event)">
        <img src="../assets/abdominal.jpeg" alt="abdominal">
        <p>복근</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js"

export default {
  data() {
    return {
      age: 0,
      response: [],
    }
  },
  methods: {
    GetPart(event) {
      console.log(event.currentTarget.id);
      // console.log(++this.age);
      // router.push({path: "/machinepart", query: { id: "Get 확인" }});

      router.push({path: "/machinepart", query: { id: event.currentTarget.id }});

      // axios.get(`http://localhost:8003/machine/${event.currentTarget.id}`)
      //   .then(res => {
      //     this.response = res.data;
      //     console.log(this.response);
      //     // router.push({name: 'MachinePart', params: { result: JSON.stringify(res.data)}});
      //     // router.push({path: '/machinepart', name: 'MachinePart', params: { result: JSON.stringify(res.data)}});
      //     router.push({path: '/machinepart', name: 'MachinePart', params: { result: res.data }});
      //   });
      // console.log(this.response);
      // JSON 형태로 받는 방법, 여기서 response는 get 요청 했을 때 결과로 받은 값을 담은 변수
      // router.push({path: "/machinepart", params: { result: JSON.stringify(response)}});
    },
  },
}
</script>

<style>
.wrapper {
  max-width: 1000px;
  padding: 0 4%;
  margin: 0 auto;
}

.item > img {
  width: 220px;
  height: 180px;
}

.grid {
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 6%;
  margin-bottom: 15px;
}

.item > p {
  font-size: 20px;
}
</style>