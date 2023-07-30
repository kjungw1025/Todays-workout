<template>
  <div class="wrapper">
    <br><br>
    <h2>헬스장에서 이렇게 생긴 머신을 보신적 있으신가요?</h2>
    <h4>보신적 있다면 클릭해주세요!</h4>
    
    <div class="grid">
      <div class="item" v-bind:class="{inset: machineIdx[i]}" v-for="(res, i) in response" :key="res.name" @:click="clickImage(res.name, i)">
        <img :src="res.img" :alt="res.name">
        <p>{{ res.name }}</p>
      </div>
    </div>

    <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
    <label class="btn btn-primary" for="btn-check" style="width: 150px; height: 50px; font-size: 25px;" @:click="clickButton">확인</label>
    <br><br><br>
  </div>
</template>

<script>
import axios from 'axios';
import router from "../router/index.js";
import dotenv from 'dotenv';
dotenv.config();

export default {
    data() {
        return {
            partId: 0,
            response: [],
            machine: [],
            machineIdx: [],
            serve: process.env.VUE_APP_COMMUNITY,
        }
    },
    created() {
        axios.get(`${this.serve}machine/${this.$route.query.id}`)
          .then(res => {
            this.partId = this.$route.query.id;
            this.response = res.data;

            for (let i = 0; i < this.response.length; i++)
              this.machineIdx.push(false);
          });
    },
    methods: {
      clickImage(name, idx) {
        if (!this.machineIdx[idx]) { // 사용자가 머신이 존재 한다고 선택하는 경우 (기존에 선택 x)
          this.machine.push(name);
          this.machineIdx[idx] = true;
        }
        else // 사용자가 머신이 존재 한다고 선택했던 경우에서 -> 이미지 선택 해제한 경우
        {
          this.machine = this.machine.filter((element) => element !== name); // 사용자가 선택한 머신 목록에서 이미지 선택 해제한 머신만 삭제
          this.machineIdx[idx] = false;
        }
        console.log(this.machine);
      },
      clickButton() {
        if (this.machine.length == 0)
        {
          alert('하나 이상을 선택해주세요.');
        }
        else
        {
          this.$store.commit("SET_SELECTEDMACHINE", this.machine);

          router.push({path: "/workoutway", query: { id: this.partId }});
        }
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
  margin-top: 2%;
  margin-bottom: 15px;
}

.item > p {
  font-size: 20px;
}

.inset {
  border: 5px inset;
}
</style>