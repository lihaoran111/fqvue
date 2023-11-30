<template>

    <div class="app-container">
      <el-col :span="12"><div class="grid-content bg-purple"></div>
        <div class="container">
          <!-- <div class="plugins-tips">
              <img src="static/img/mock/card/shibie2.jpg" alt="Image 2" style="width: 100%; max-width: 400px;">
           -->

          <div class="image-container">
            <div class="image-frame" onclick="recognizeImage('path_to_image1.jpg')">
               <img src="static/img/mock/card/shibie2.jpg" alt=""> <br>
                <p>待监测图像</p >
            </div>
            <!-- <el-button class="sb-btn1" type="primary" @click="submit">载入拍摄图像</el-button>
            <el-button class="sb-btn1" type="primary" @click="submit">载入库图像</el-button> -->
              <!-- <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor> -->

              <div  style="width: 50%;">
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
              </div>


        </div>
      </div>
      </el-col>

      <el-col :span="12"><div class="grid-content bg-purple"></div>
        <div class="container" style="width: 100%;">
          <!-- <div class="plugins-tips">
              <img src="static/img/mock/card/shibie2.jpg" alt="Image 2" style="width: 100%; max-width: 400px;">
           -->
          <div class="image-container" style="width: 100%;">
            <div class="image-frame" onclick="recognizeImage('path_to_image1.jpg')">
               <img src="static/img/mock/card/fqjjj.jpg" alt=""> <br>
                <p>识别结果</p >
            </div>
            <el-button class="editor-btn" type="primary" @click="submit">计算识别结果</el-button>
        </div>
      </div>

      </el-col>
      <div>




      <table class="result-table" style="width: 100%;">
        <tr>
            <th>指标 </th>
            <th>数据</th>
        </tr>
        <tr>
            <td>识别番茄数量/个</td>
            <td>10</td> <!-- 替换为实际的番茄数量数据 -->
        </tr>
        <tr>
            <td>花朵数量/个</td>
            <td>5</td> <!-- 替换为实际的花朵数量数据 -->
        </tr>
        <tr>
            <td>茎叶粗细/mm</td>
            <td>3mm</td> <!-- 替换为实际的茎叶粗细数据 -->
        </tr>
        <tr>
          <td>叶片物温度/℃</td>
          <td>13.8</td> <!-- 替换为实际的茎叶粗细数据 -->
      </tr>
      <tr>
        <td>水分信息</td>
        <td>64%</td> <!-- 替换为实际的茎叶粗细数据 -->
    </tr>
    </table>

          </div>
        </div>
        </div>

</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'editor',
  data: function() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/'}],
      content: '',
      editorOption: {
        placeholder: 'Hello World'

      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html
    },
    submit() {
      console.log(this.content)
      this.$message.success('提交成功！')
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
  }
}
</script>
<style scoped>
    .editor-btn{
        margin-top: 13px;
        margin-left :35%;
        background-color: #50c4e7;
        border-style: solid;
        border-color: rgb(252, 251, 251);
    }
    .sb-btn1{

      margin-left: 90px;
        margin-top: 10px;
        background-color: #83cbfa;
        border-style: solid;
        border-color: rgb(252, 251, 251);
        margin-top: 13px;
        line-height: 12px;



    }
    .image-frame {
      /* margin-left : 170px; */
      margin-top: 50px;
      border: 3px solid #333;
      border-radius: 0px;
      height: 80%;
      margin: 0px;
      width: 100%;
      background-color: #e9e9e9;
      cursor: pointer;
      transition: transform 0.3s ease;
  }
  div img{
    border-style: solid;
    border-width: 3px;
    width: 100%;
    border-color: rgb(8, 8, 8);
  }
  .result-table {
    margin-top: 20px;
    width: 83.2%;
    border-collapse: collapse;
}
.result-table th,
.result-table td {
    border: 2px solid #ccc;
    padding: 20px;
    text-align: center;
    color: #000; /* 修改字体颜色为黑色 */
}
</style>
