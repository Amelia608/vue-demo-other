
<template>
  <div>
    <countTo class="countto" :startVal='startVal' :endVal='endVal' :duration='3000'/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      startVal:0,
      endVal:1000
    }
  }
}
</script>
<style lang="scss" scoped>
  .countto{
    font-size: 20px;
    color:$--color-primary;
  }
</style>