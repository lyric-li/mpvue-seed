<template>
  <div class="example">
    <div class="avatar">
      <i-avatar src="/static/lyric.jpg"
        i-class="i-avatar-custom">
      </i-avatar>
      <div class="nickname">lyric</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example'
}
</script>

<style lang="scss" scoped>
.example {
  padding: 8px;
  .avatar {
    margin-top: 75px;
    text-align: center;
    .nickname {
      margin-top: 8px;
    }
  }
}
</style>
