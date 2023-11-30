<template>

  <el-row :gutter="0">
    <el-col :span="12"  class="no-margin" ><div class="grid-content bg-purple">
      <el-card class="box-card0" style="width: 100%">
        <div>
          <span class="s0">巡检机器人正在运行。。。</span>
        </div>
      </el-card>
      <el-card class="box-card" style="width: 100%">

        <div class="img11" >
        <img src="static/img/mock/card/ye1.jpg" style="width: 100%"/>
        </div>
      </el-card>
    </div>
    </el-col>

    <el-col :span="12"><div class="grid-content bg-purple-light"  >
      <el-card class="box-card2" style="width: 100%">
        <el-row :gutter="5">
          <el-col :span="12"><div class="grid-content bg-purple">
            <div>

              <h2>巡检机器人开发单位：</h2>
           </div>
          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">
            <div class="img011">
              <img src ='static/bjnl.jpg' alt="Image1" class="img011"/>
           </div>
          </div></el-col>
        </el-row>

      </el-card>
        <el-card class="box-card2" style="width: 100%">
          <span class="s1">操作方式选择：</span>
          <el-form-item label="单选框">

        </el-form-item>
        <el-radio-group v-model="radio">
          <el-radio :label="3">自动模式</el-radio>
          <el-radio :label="6">手动模式</el-radio>
        </el-radio-group>
      </el-card>
      <el-card class="box-card03" style="width: 100%">
        <div>
          <el-button class="btn" type="primary"  style="margin-top: 30px" @click="btn1">机器人启动</el-button>
          <el-button class="btn" type="primary" @click="btn2">机器人停止</el-button>
          <el-button class="btn" type="primary" @click="btn8">升降杠复位</el-button>

        <div>
          <el-button class="btn" type="primary" style="margin-top: 60px" @click="btn5">升降杠上升</el-button>
          <el-button class="btn" type="primary" @click="btn6">升降杠下降</el-button>
          <el-button class="btn" type="primary" @click="btn7">升降杠停止</el-button>
        </div>
        <div>
          <span class="s2"> </span>
        </div>
        </div>


      </el-card>
      <el-card class="box-card4" style="width: 100%">
        <div  class="img1">
          <!-- <span class="s11">图像显示选择：</span>
          <el-button class="editor-btn" type="primary"  style="margin: 10px " @click="submit">原始图像</el-button>
          <el-button class="editor-btn" type="primary" @click="submit">二值图像</el-button> -->
          <div>
            <span class="s11">控制摄像头拍照:</span>
            <el-button class="editor-btn" type="primary" style="margin-left: 50px" @click="submit">获取图像</el-button>
            <!-- <el-button class="editor-btn" type="primary" @click="submit">显示参考线</el-button> -->
            <a href="http://localhost:1234/examples/viewer.html" target="_blank">
            <el-button class="editor-btn" type="primary" style="margin-left: 50px" @click="submit">查看点云数据</el-button>
          </a>
          </div>

        </div>
      </el-card>

    </div>

    </el-col>
  </el-row>
</template>


<script>
  import axios from 'axios'
  import store from "@/store";
  import io from 'socket.io-client';
  import Vue from 'vue'

  export default {
    data() {
      return {
        data1:"aa 10 00 0c 83 00 e0 1b b3 30 e6 01 01 01 01 00 0a",
        data2:"aa 10 00 0c 83 00 e0 1b b3 30 e6 02 01 01 01 00 0a",
        data5:"aa 10 00 0c 83 00 e0 1b b3 30 e6 05 01 01 01 00 0a",
        data6:"aa 10 00 0c 83 00 e0 1b b3 30 e6 06 01 01 01 00 0a",
        data7:"aa 10 00 0c 83 00 e0 1b b3 30 e6 07 01 01 01 00 0a",
        data8:"aa 10 00 0c 83 00 e0 1b b3 30 e6 08 01 01 01 00 0a",
      }
    },
    methods:{
      btn1(val){
        axios.get('/api2').then(
                        // 成功回调
                        success=>{
                            console.log('启动成功！')
                            // 请求成功后的数据
                            console.log(success.data)
                        },
                        // 失败回调
                        error=>{
                            console.log('启动失败！')
                            // 请求失败原因
                            console.log(error.message)
                        }
                    )
      },
      btn2(val){
        axios.get('/api3').then(
                        // 成功回调
                        success=>{
                            console.log('停止成功！')
                            // 请求成功后的数据
                            console.log(success.data)
                        },
                        // 失败回调
                        error=>{
                            console.log('停止失败！')
                            // 请求失败原因
                            console.log(error.message)
                        }
                    )
      },
        btn5(val){
        axios.get('/api5').then(
                        // 成功回调
                        success=>{
                            console.log('上升请求成功！')
                            // 请求成功后的数据
                            console.log(success.data)
                        },
                        // 失败回调
                        error=>{
                            console.log('请求失败！')
                            // 请求失败原因
                            console.log(error.message)
                        }
                    )
            },
          btn6(val){
        axios.get('/api6').then(
                        // 成功回调
                        success=>{
                            console.log('下降请求成功！')
                            // 请求成功后的数据
                            console.log(success.data)
                        },
                        // 失败回调
                        error=>{
                            console.log('请求失败！')
                            // 请求失败原因
                            console.log(error.message)
                        }
                    )
            },
            btn7(val){
        axios.get('/api7').then(
                        // 成功回调
                        success=>{
                            console.log('停止请求成功！')
                            // 请求成功后的数据
                            console.log(success.data)
                        },
                        // 失败回调
                        error=>{
                            console.log('请求失败！')
                            // 请求失败原因
                            console.log(error.message)
                        }
                    )
            },
            btn8(val){
        axios.get('/api4').then(
                        // 成功回调
                        success=>{
                            console.log('复位请求成功！')
                            // 请求成功后的数据
                            console.log(success.data)
                        },
                        // 失败回调
                        error=>{
                            console.log('请求失败！')
                            // 请求失败原因
                            console.log(error.message)
                        }
                    )
            },

    }
  }
  </script>


<style>
  .no-margin {
  margin: 0;
}
.img011 {
      width: 100px;
      height: 100px;
      margin-left:-30px;
      margin-top:-10px;
      /* margin: -10px; */
    }
.img11 {

    width: 100%;
    height: 100%;

    /* margin-bottom:0px;
    margin: -20px; */
  }

  .item {
    padding: 18px ;
  }

  .box-card0 {
    width:90%;
    /* width: 680px; */
    height: 60px;
  }
  .box-card {
    width: 90%;
    height: 680px;
  }
  .box-card1 {
    width: 680px;
    height: 100px;
  }
  .box-card2 {
    margin-left: 0px;
    width: 680px;
    height: 100px;

  }
  .box-card03 {
    margin-left: 0px;
    width: 680px;
    height: 400px;

  }
  .box-card4 {
    margin-left: 0px;
    width: 680px;
    height: 140px;

  }
  .s0 {
    margin-left: 100px;
    font-size: 25px;
  }
  .s1 {
    line-height: 100px;
    margin-left: 100px;
    font-size: 25px;
  }
  .s11 {
    margin-left: 100px;
    font-size: 22px;
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
  .editor-btn1{

        margin-top: 15px;
        background-color: #ffffff;
        border-color: rgb(252, 251, 251);

    }
  .editor-btn{
        margin-left: 30px;
        margin-top: 10px;
        background-color: #4992f3;
        border-style: solid;
        border-color: rgb(252, 251, 251);
        margin-top: 13px;
        line-height: 12px;


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
</style>

