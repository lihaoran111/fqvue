<template>
  <el-row>
  <el-col :span="12"><div class="grid-content bg-purple "></div>
    <el-card class="box-cardg1" style="width: 100% ;">
      <div >
        <span class="s01"> 光谱仪流程开发合作单位：</span>
      </div>

      <div class="img01">
         <img src ='static/bjnl.jpg' alt="Image1" class="img01"/>
      </div>
      <img src ='static/nxclg.jpg' alt="Image2" class="img02"/>

    </el-card >
    <el-card class="box-cardg" style="width: 100%;background-color: rgb(223, 235, 243); ">
      <div class="img1" v-loading="loading" >
        <img v-show="image !=''" :src="image" alt="Image" style="width: 100%;height:100%;"/>
      </div>
    </el-card>
  </el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div>
    <!-- <el-card class="box-cardg0" style="width: 100% ;height: 170px;background-color:rgb(223, 235, 243); ">
    </el-card > -->
      <el-container class="content-container" style="height: 170px;">

        <el-aside  style="background-color: #badff4; color: #000000;text-align: center;">
          <div style="display: flex; justify-content: center; align-items: center; height: 100%;font-size: 25px; font-weight: bold;">
            光谱仪操作:
          </div>
        </el-aside>
        <el-main style="background-color: #a4c6e2; color: #000000;text-align: center;text-align: center; display: flex; justify-content: center; align-items: center;">
          <div >
            <button class="btngp" type="primary" @click="btn"> 运行光谱仪 </button>
            <button class="btngp" type="primary" @click="btn1"> 记录数据 </button>
          </div>
        </el-main>
      </el-container>





      <!-- <div >
        <span class="s01" style="font-size: 20px; font-weight: bold;" > 光谱仪操作：</span>
      </div>
      <button class="btngp" type="primary" @click="btn"> 运行光谱仪 </button>
      <button class="btngp" type="primary" @click="btn1"> 记录数据 </button>
      -->




    <el-card class="box-cardg" style="width: 100%;background-color: rgb(223, 235, 243)">
      <el-container  style="margin-top: 60px;">
        <el-header style="background-color: rgb(180, 215, 239); color: #000000; text-align: center;height: 150px;"  >
          <div style=" display: flex; justify-content: center; align-items: center; height: 100%;font-size: 20px; font-weight: bold;">
            光谱仪获取番茄数据：
          </div>
        </el-header>
        <el-container class="content-container" >
          <el-aside  style="background-color: #badff4; color: #000000;text-align: center;" width="200px">
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
              番茄可溶性固体物ssc:
            </div>
          </el-aside>
          <el-main style="background-color: #a4c6e2; color: #000000;text-align: center;">
            <span v-for="(value, index) in ssc" :key="index">
              ssc{{ index + 1 }}: {{ value }}<br />
            </span>
          </el-main>
        </el-container>

        <el-container class="content-container" >
          <el-aside  style="background-color: #badff4; color: #000000;text-align: center;" width="200px">
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;" >
              番茄有机酸oa:
            </div>
          </el-aside>
          <el-main style="background-color: #a4c6e2; color: #000000;text-align: center;">
            <span v-for="(value, index) in oa" :key="index">
              oa{{ index + 1 }}: {{ value }}<br />
            </span>
          </el-main>
        </el-container>

        <!-- <el-container class="content-container" >
          <el-aside  style="background-color: #badff4; color: #000000;text-align: center;" width="200px">
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;" >
              维生素vc:
            </div>
          </el-aside>
          <el-main style="background-color: #a4c6e2; color: #000000;text-align: center;">
            <span v-for="(value, index) in vc" :key="index">
              vc{{ index + 1 }}: {{ value }}<br />
            </span>
          </el-main>
        </el-container> -->

        <!-- <el-container class="content-container" >
          <el-aside  style="background-color: #badff4; color: #000000;text-align: center;" width="200px">
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;" >
              可溶性糖ss:
            </div>
          </el-aside>
          <el-main style="background-color: #a4c6e2; color: #000000;text-align: center;">
            <span v-for="(value, index) in ss" :key="index">
              ss{{ index + 1 }}: {{ value }}<br />
            </span>
          </el-main>
        </el-container> -->
      </el-container>

      </el-container>


  </el-card>
      <!-- ssc可溶性固体物 oa:有机酸 vc:维生素C ss:可溶性糖 -->

      <!-- <div style="margin-top:15px;">

        番茄可溶性固体物ssc:
        <span v-for="i in ssc">{{ i }}<br /></span>

        番茄可溶性固体物ssc:
        <span v-for="(value, index) in ssc" :key="index">
          ssc{{ index + 1 }}: {{ value }}<br />
        </span>

        番茄有机酸oa:
        <span v-for="i in oa">{{ i }}<br /></span>

        番茄有机酸oa:
        <span v-for="(value, index) in oa" :key="index">
          oa{{ index + 1 }}: {{ value }}<br />
        </span>

         番茄维生素c:
        <span v-for="i in vc">{{ i }}<br /></span>

        番茄可溶性糖ss:
        <span v-for="i in ss">{{ i }}<br /></span>
      </div> -->


  </el-col>

</el-row>
</template>


<script>
import axios from 'axios'
import  Loading  from 'element-ui'
export default {
  data() {
    return {
      loading:false,
      image: '',
      ssc:[],
      oa:[],
      vc:[],
      ss:[]
    }
    },
  created(){
  },
  methods:{
    btn(){
      this.loading = true
      this.$message({
            message: '光谱仪正在运行，请等待结果',
            type: 'info',
            duration: 2000
      })
      axios.get('/api1')
      .then((data) => {
        let url = data.data.url
        let newFilePath = url.substring(1);
        this.image = "http://hsi.v5.idcfengye.com" + newFilePath
        this.ssc = data.data.res.ssc
        this.oa = data.data.res.oa
        this.vc = data.data.res.vc
        this.ss = data.data.res.ss
        this.loading = false
        this.$message({
            message: '复制成功',
            type: 'info',
            duration: 10000
         })
      })
      .catch((err) => {
        setTimeout(() => {
          this.loading = false
          this.$message({
            message: '光谱仪运行错误，请联络管理员',
            type: 'error',
            duration: 2000
        })
        }, 2000);
      })
    },
    btn1(){
      this.$message({
            message: '记录成功',
            type: 'success',
            duration: 1000
    })
    },
  }
}
</script>

<style>

  .img01 {
      width: 100px;
      height: 100px;
      margin-left:10px;
      margin-top:4px;
      /* margin: -10px; */
    }
    .img02 {
      width: 300px;
      height: 120px;
      margin-left:150px;
      margin-top:-120px;
      /* margin: -10px; */
    }

  .img1 {
      width: 100%;
      height: 700px;
      margin-bottom:0px;
      margin: -20px;
    }

    .item {
      padding: 18px ;
    }

    .box-cardg0 {
      width: 100%;
      height: 170px;
    }
    .box-cardg {
      width: 100%;
      height: 680px;
    }
    .box-cardg1 {
      width: 90%;
      height: 170px;
    }
    .box-cardg01 {
      width: 350px;
      height: 680px;
    }
    .box-card2 {
      margin-left: 0px;
      width: 680px;
      height: 100px;

    }
    .box-card3 {
      margin-left: 0px;
      width: 680px;
      height: 200px;

    }
    .box-card4 {
      margin-left: 0px;
      width: 680px;
      height: 140px;

    }
    .s01 {
      margin-top: 10px;
      margin-left: 20px;
      font-size: 25px;
       font-weight: bold;
    }
    .g01 {
      margin-top: 10px;
      margin: 5px;
      margin-left: 20px;
      font-size: 25px;
    }
    .s2 {
      margin-top: 100px;
      margin-left: 35px;
      font-size: 22px;
    }
    .s3 {
      margin-top: 60px;
      margin-left: 150px;
      font-size: 12px;
    }
    /* .editor-btn1{
          margin-top: 15px;
          background-color: #ffffff;
          border-color: rgb(252, 251, 251);
      } */
    .btngp{
          width:150px;
          height: 60px;
          margin-left: 22px;
          margin-top: 10px;
          background-color: #0781fa;
          border-color: rgb(252, 251, 251);

          color: aliceblue;

      }
      .btn{
          width:150px;
          height: 80px;
          margin-left: 30px;
          margin-right: 30px;
          margin-top: 1px;
          background-color: #0c7f06;
          border-style: solid;
          border-color: rgb(252, 251, 251);
          margin-top: 5px;
          line-height: 12px;
          font-size: 20px
      }
      .loading-w{
        width: 100%;
        position: absolute;
      }
  </style>


