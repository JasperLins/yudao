<!-- 首页，支持店铺装修 -->
<template>
  <view >
    <s-layout
      title="首页"
      navbar="normal"

      onShareAppMessage
    >
<!--      <s-block-->
<!--        v-for="(item, index) in template.components"-->
<!--        :key="index"-->
<!--        :styles="item.property.style"-->
<!--      >-->
<!--        <s-block-item :type="item.id" :data="item.property" :styles="item.property.style" />-->
<!--      </s-block>-->
      首页
    </s-layout>
  </view>
</template>

<script setup>
  import { computed } from 'vue';
  import { onLoad, onPageScroll, onPullDownRefresh } from '@dcloudio/uni-app';
  import sheep from '@/sheep';
  import $share from '@/sheep/platform/share';

  onLoad((options) => {
    // #ifdef MP
    // 小程序识别二维码
    if (options.scene) {
      const sceneParams = decodeURIComponent(options.scene).split('=');
      console.log('sceneParams=>', sceneParams);
      options[sceneParams[0]] = sceneParams[1];
    }
    // #endif

    // 解析分享信息
    if (options.spm) {
      $share.decryptSpm(options.spm);
    }

    // 进入指定页面(完整页面路径)
    if (options.page) {
      sheep.$router.go(decodeURIComponent(options.page));
    }
  });

  // 下拉刷新
  onPullDownRefresh(() => {
    sheep.$store('app').init();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 800);
  });

  onPageScroll(() => {});
</script>

<style></style>
