<!-- 个人中心：支持装修 -->
<template>
  <s-layout
    title="我的"
    navbar="normal"
    onShareAppMessage
  >
<!--    <s-block-->
<!--      v-for="(item, index) in template.components"-->
<!--      :key="index"-->
<!--      :styles="item.property.style"-->
<!--    >-->
<!--      <s-block-item :type="item.id" :data="item.property" :styles="item.property.style" />-->
<!--    </s-block>-->
    我的
  </s-layout>
</template>

<script setup>
  import { computed } from 'vue';
  import { onShow, onPageScroll, onPullDownRefresh } from '@dcloudio/uni-app';
  import sheep from '@/sheep';


  onShow(() => {
    sheep.$store('user').updateUserData();
  });

  onPullDownRefresh(() => {
    sheep.$store('user').updateUserData();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 800);
  });

  onPageScroll(() => {});
</script>

<style></style>
