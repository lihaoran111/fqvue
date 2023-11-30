<template>

    <div class="app-container">
      <el-col :span="8"><div class="grid-content bg-purple"></div>
        <div class="container">
            <div class="form-box">
              <div>
                <p style="margin-left:356%;">番茄待拼接图像</p>

              </div>

              <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

            </div>
            <el-button type="primary" @click="onSubmit" style="text-align: center;">图像拼接</el-button>
            <el-button type="primary" @click="onSubmit" style="text-align: center;">载入新图像</el-button>
        </div>


      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div>
        <div class="container">
          <div>
            <p style="margin-left:40%;">拼接图像</p>

          </div>
        <div>
          <img src="static/img/mock/card/ye1.jpg"  alt="Image" style="height: 600px;width: 100%; margin: auto;"/>

          </div>
          <el-button type="primary" @click="onSubmit" style="text-align: center;">存储</el-button>
          <el-button type="primary" @click="onSubmit" style="text-align: center;">清空</el-button>
        </div>
      </el-col>
    </div>
</template>

<script>
 import axios from 'axios'
  export{

  }

  export default {
    data() {
      return {
        image: 'static/img/mock/card/ye1.jpg',
        ssc:['56227.97770000002','32881.27000000001','40914.0078','60931.616500000004'],
        os:['-274965.54789999995','-148210.10860000004','-291234.1528999999','-130198.14729999998'],
        radio: 3
      }
    },
    created(){
      this.get()
    },
    methods:{
      get(){
        axios.get('http://hsi.v4.idcfengye.com/image')
        .then((data) => {
          console.log(data)
          this.image = data.url
          this.ssc = data.ssc
          this.os =data.os
        })
        .catch((err) => {
          console.log(err)
        })
      },
      onsubmit(){
        console.log("1232132312")
      },
      submit() {
      console.log(this.content)
      this.$message.success('提交成功！')
    }
    }
  }
</script>
