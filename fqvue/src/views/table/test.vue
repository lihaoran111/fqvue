<template>

  <el-row>
    <el-col :span="12"><div class="grid-content bg-purple"></div>
      <el-card class="box-card0">
        <div>
          <span class="s0">正在运行采集图像 已连续运行31分钟。。</span>
        </div>
      </el-card>
      <el-card class="box-card">
        <div  class="img1">
          <img src ='static/img/mock/card/ye1.jpg' alt="Image" />
        </div>

      </el-card>
      <el-card class="box-card1">
      <div>
        <div  class="img1">
          <span class="s1">操作方式选择：</span>
          <el-form-item label="单选框">

        </el-form-item>
        <el-radio-group v-model="radio">
          <el-radio :label="3">自动模式</el-radio>
          <el-radio :label="6">手动模式</el-radio>
        </el-radio-group>
          <!-- <el-button class="editor-btn1" type="primary" @click="submit">自动模式</el-button> -->

        </div>
      </div>
    </el-card>
    </el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"></div>
      <el-card class="box-card2">
        <div>
          <span class="s1">停车-障碍物距离：0 mm</span>
        </div>
      </el-card>
        <el-card class="box-card2">
          <div  class="">

          </div>
      </el-card>
      <el-card class="box-card03">
        <div>
          <el-button class="btn" type="primary" @click="btn1('01')">机器人启动</el-button>
          <el-button class="btn" type="primary" @click="btn1('02')">机器人停止</el-button>
          <el-button class="btn" type="primary" @click="btn1('08')">升降杠复位</el-button>

        <div>
          <el-button class="btn" type="primary" @click="btn1('05')">升降杠上升</el-button>
          <el-button class="btn" type="primary" @click="btn1('06')">升降杠下降</el-button>
          <el-button class="btn" type="primary" @click="btn1('07')">升降杠停止</el-button>
        </div>
        <div>
          <span class="s2"> </span>
        </div>

        </div>
        <div>
          <!-- <span class="s2"> 1 R = 328 D = 443.87 V = -</span>
          <span class="s3"> 没有路径停车</span> -->
        </div>

      </el-card>
      <el-card class="box-card4">
        <div  class="img1">
          <span class="s11">图像显示选择：</span>
          <el-button class="editor-btn" type="primary" @click="submit">原始图像</el-button>
          <el-button class="editor-btn" type="primary" @click="submit">二值图像</el-button>
          <div>
            <span class="s11">参数设置:</span>
            <el-button class="editor-btn" type="primary" @click="submit">保留目标</el-button>
            <el-button class="editor-btn" type="primary" @click="submit">显示参考线</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>


<script>
  import axios from 'axios'
  import io from "socket.io-client"
  import store from "@/store";
  import VueSocketIO from 'vue-socket.io'
  export default {
    data() {
      return {
        url: "ws://47.98.111.58:8888",
        data:"aa 10 00 0c 83 00 e0 1b b3 30 e6 ",
        socket: null,
      }
    },
    created(){
      this.socket = io(this.url);
    },
    mounted(){
      this.socket.on('connection',data => {
        console.log("连接成功")
      })
      this.socket.on('message', data => {
        if(data === this.data){
          console.log('收到的消息',data)
        }
      });
    },
    methods:{
      btn1(val){
        this.data = this.data + val + " 01 01 01 00 0a"
        this.socket.emit('message', this.data);
        console.log(this.socket)
        this.data = "aa 10 00 0c 83 00 e0 1b b3 30 e6 "
      }
    }
  }
  </script>


<style>
.img1 {

    width: 680px;
    height: 500px;
    margin-bottom:0px;
    margin: -20px;
  }

  .item {
    padding: 18px ;
  }

  .box-card0 {
    width: 680px;
    height: 60px;
  }
  .box-card {
    width: 680px;
    height: 480px;
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
    height: 300px;

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
        background-color: #071ff4;
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

