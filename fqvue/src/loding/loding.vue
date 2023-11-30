<template>
  <divn class="loading">
     <img src="./loding.gif" width="50%" height="50%">
     <p class="title"> </p>
  </div>
</template>


<script>
  export default{
    props:{
      title:{
        type:String,
        default:'正在加载中。。。'
      }
    }

  }
</script>

<style>
.loading{
  width: 100%;
  text-align: center;
}
.loading .title{
  line-height: 20px;
  size: 20px;
}
</style>
