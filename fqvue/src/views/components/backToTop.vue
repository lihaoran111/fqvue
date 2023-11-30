<template>
<div>
  <!-- <el-row >
    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row> -->
  <el-row :gutter="5">
    <el-col :span="12"><div class="grid-content bg-purple">
         <div>
        <span class="s0">巡检机器人正在运行。。。</span>
        </div>

    </div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :span="12"><div class="grid-content bg-purple">
      <!-- <el-card class="box-card" style="width: 100%">


        <div class="img11" >
        <img src="static/img/mock/card/ye1.jpg" />
        </div>
      </el-card> -->
      <!-- <el-card class="box-card1" style="width: 100%;height: 70px;">
      <div>
        <el-button class="editor-btn" type="primary" style="margin-top: 0px;margin-left: 45%;" @click="btn5">获取图像</el-button>
      </div>
    </el-card> -->
    </div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  <!-- <el-row :gutter="5">
    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row> -->
  <!-- <el-row :gutter="5">
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  </el-row> -->
  <el-row :gutter="5">
    <el-col :span="6"><div class="grid-content bg-purple">
      <el-col :span="2">
      </el-col>
      <el-col :span="12">
        <img src="static/img/shouye/time.png" style="margin-right: 20px; height: 100px; width: 100px;" />
      </el-col>
      <el-col :span="12">
        <h2>采集数据信息</h2>
      </el-col>
        <h4>采集数据信息</h4>
    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light">
      <el-col :span="12">
        <img src="static/img/shouye/icon-fq.png" style="height: 100px; width: 100px;" />
      </el-col>
      <el-col :span="12">
        <h2>采集数据信息</h2>
      </el-col>

        <h4>采集数据信息</h4>

    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">

      <el-col :span="12">
        <img src="static/img/shouye/data.png" style="height: 100px; width: 100px;" />
      </el-col>
      <el-col :span="12">
        <h2>采集数据信息</h2>
      </el-col>
        <h4>采集数据信息</h4>
    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light">

      <el-col :span="12">
        <img src="static/img/shouye/robot.png" style="height: 100px; width: 100px;" />
      </el-col>
      <el-col :span="12">
        <h2>采集数据信息</h2>
      </el-col>
        <h4>采集数据信息</h4>
    </div></el-col>
  </el-row>
  <div ref="potreeContainer"></div>
  <!-- <div>
    <div ref="potreeContainer"></div>
  </div> -->
</div>


</template>

<script>


export default {
  mounted() {

  },
  methods: {

    }
};

</script>

<style>
    .el-row {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
  }
  .bg-purple {
    background: rgb(255, 255, 255);
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #ffffff;
  }
  .img11 {

width: 300%;
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
width: 100%;
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
