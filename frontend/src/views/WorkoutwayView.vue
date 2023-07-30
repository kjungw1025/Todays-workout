<template>
  <div class="wrapper">
    <br><br>
    <h2>선택한 머신의 운동 방법을 영상을 통해 참고해보세요!</h2>
    <br><br>

    <div>
      <div v-for="(res, idx) in urlList" :key="res.id">

        <div class="resultItem" v-if="idx % 2 === 0">
          <h5>{{ res.machinename }}</h5>
          <img :src="res.Machine.img" :alt="res.machinename">
        </div>

        <div>
          <iframe
          width="400" 
          height="200" 
          :src="`https://www.youtube.com/embed/${res.url}`" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
        </div>
        
        <div v-if="idx % 2 === 1">
          <hr><br>
        </div>
      </div>
    </div>
    <br><br><br>
  </div> 
</template>

<script>
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default {
    data() {
        return {
          urlList: [],
          serve: process.env.VUE_APP_COMMUNITY,
        }
    },
    created() {
        console.log('store 정상 작동 확인', this.$store.state.selectedMachine);
        axios({
          method: 'post',
          url: `${this.serve}machine/${this.$route.query.id}`,
          data: {
            machineList: this.$store.state.selectedMachine,
          },
        }).then(res => {
          console.log("성공");
          console.log(res.data);
          this.urlList = res.data;

          this.$store.commit("SET_SELECTEDMACHINE", []);
        }).catch(error => {
          console.error(error);

          this.$store.commit("SET_SELECTEDMACHINE", []);
        });
    },
}
</script>

<style>
.wrapper {
  max-width: 1000px;
  padding: 0 4%;
  margin: 0 auto;
}

.resultItem > img {
  width: 220px;
  height: 180px;
}

.grid {
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 2%;
  margin-bottom: 15px;
}

.item > p {
  font-size: 20px;
}

</style>