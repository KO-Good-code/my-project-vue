<template>
    <div>
        <div v-bind:class="{'a':flag}">
          {{msg}}
        </div>
      <div @click="ss()">666</div>
    </div>
</template>

<script>
export default {
  name: 'one',
  data () {
    return {
      msg: '模板',
      flag: false
    }
  },
  methods: {
    ss () {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
  .a{
    background: red;
  }
</style>
