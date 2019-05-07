<template>
  <div class="nav">
    <button>弹出层</button>
    <van-popup v-model="show">
      <!-- <van-dialog
      v-model="show"
      title="hello"
      show-cancel-button
      showConfirmButton
     >
     </van-dialog> -->
    </van-popup>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
