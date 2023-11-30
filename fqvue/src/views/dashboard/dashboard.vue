<template>
  <div class="app-container">
   <!-- <nx-github-corner></nx-github-corner> -->
     <!-- <a target="_blank" href="https://github.com/mgbq/vue-permission"><img
        style="position: absolute; top: 48px; right: 0; border: 0;"
        src="../../../static/img/report/forkme.png"
        alt="Fork me on GitHub"></a> -->
    <div class="item">
      <h4>数据展示</h4>
      <nx-data-display :option="option"></nx-data-display>
    </div>
    <div class="item">
      <h4>机器人运行</h4>
      <nx-data-tabs :option="easyDataOption"></nx-data-tabs>
    </div>
    <div class="item">
      <h4>番茄采集图像展示</h4>
      <nx-data-card :option="easyDataOption0"></nx-data-card>
    </div>
    <div class="item">
      <h4>采集数据信息</h4>
      <!-- <nx-data-icons :option="easyDataOption1"></nx-data-icons> -->


      <el-row :gutter="5">
        <el-col :span="6"><div class="grid-content bg-purple">
          <el-col :span="2">
          </el-col>
          <el-col :span="12">
            <img src="static/img/shouye/time.png" style="margin-right: 20px; height: 100px; width: 100px;" />
          </el-col>
          <el-col :span="12">
            <h2>采集时间</h2>
          </el-col>
            <h4>2023年11月13日</h4>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">
          <el-col :span="12">
            <img src="static/img/shouye/icon-fq.png" style="height: 100px; width: 100px;" />
          </el-col>
          <el-col :span="12">
            <h2>番茄数据</h2>
          </el-col>

            <h4>共识别375个</h4>

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">

          <el-col :span="12">
            <img src="static/img/shouye/data.png" style="height: 100px; width: 100px;" />
          </el-col>
          <el-col :span="12">
            <h2>图像数据</h2>
          </el-col>
            <h4>563张</h4>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">

          <el-col :span="12">
            <img src="static/img/shouye/robot.png" style="height: 100px; width: 100px;" />
          </el-col>
          <el-col :span="12">
            <h2>巡检次数</h2>
          </el-col>
            <h4>当日5次</h4>
        </div></el-col>
      </el-row>
    </div>
  </div>


</template>

<script>

import nxDataDisplay from '@/components/nx-data-display/nx-data-display'
import nxDataCard from '@/components/nx-data-card/nx-data-card'
import nxDataTabs from '@/components/nx-data-tabs/nx-data-tabs'
import nxDataIcons from '@/components/nx-data-icons/nx-data-icons'
import nxGithubCorner from '@/components/nx-github-corner'
export default {
  name: 'report',
  components: {
    nxDataDisplay,
    nxDataCard,
    nxDataTabs,
    nxDataIcons,
    nxGithubCorner

  },
  data() {
    return {
      option: {
        span: 7,
        color: '#15A0FF',
        data: [
          {
            count: 13,
            title: '自动巡逻次数'
          },
          {
            count: 500,
            title: '番茄图像库数量'
          },
          {
            count: 300,
            title: '光谱库数量'
          }
        ]
      },
      easyDataOption: {
        span: 7,
        data: [
          {
            title: '采集图像数量',
            subtitle: '实时',
            count: 7993,
            // allcount: 10222,
            text: '日期2023.8.11',
            color: 'rgb(49, 180, 141)'
            // key: '类'
          },
          {
            title: '果实识别数量',
            subtitle: '实时',
            count: 3112,
            // allcount: 10222,
            text: '日期2023.7.11',
            color: 'rgb(255,0,0)'
            // key: '附'
          },
          {
            title: '机器人巡检次数',
            subtitle: '实时',
            count: 908,
            // allcount: 10222,
            text: '日期2023.6.11',
            color: 'rgb(255,99,71)',
            key: '评'
          },
          // {
          //   title: '果实精确数量',
          //   subtitle: '实时',
          //   count: 908,
          //   // allcount: 10222,
          //   text: '日期2023.5.11',
          //   color: 'rgb(220,20,60)'
          //   // key: '新'
          // }
        ]
      },
      easyDataOption0: {
        span: 5,
        borderColor: '#fff',
        data: [
          {
            name: '番茄图像',
            src: 'static/img/mock/card/ye1.jpg',
            text: '日期2023.5.11 ',

          },

          {
            name: '番茄图像',
            src: 'static/img/mock/card/ye2.jpg',
            text: '日期2023.5.11'
          },
          {
            name: '番茄识别图像',
            src: 'static/img/mock/card/ye3.jpg',
            text: '日期2023.5.11'
          },
          {
            name: '番茄识别图像',
            src: 'static/img/mock/card/ye4.jpg',
            text: '日期2023.5.11'
          }
        ]
      },
      easyDataOption1: {
        color: 'rgb(63, 161, 255)',
        span: 5,
        data: [
          {
            title: '上次巡检时间',
            count: 16826,
            icon: 'icon-caidanguanli',
            text: '日期2023.5.11'
          },
          {
            title: '到达检查点时间',
            count: 22139,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '采集图像数量',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日监测番茄数量',
            count: 16826,
            icon: 'iconfont-fq'
          }
        ]
      },
      easyDataOption2: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        discount: true,
        data: [
          {
            title: '错误日志',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '数据展示',
            count: 12678,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '权限管理',
            count: 12678,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '菜单管理',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '权限测试',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '错误页面',
            count: 12678,
            icon: 'icon-caidanguanli',
            src: 'static/img/mock/card/ye3.jpg',
          }
        ]
      }
    }
  },
  created() {},
  watch: {},
  mounted() {},
  computed: {}
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
<style lang ="scss">
    @import '../../styles/data-card.scss';
    @import '../../styles/data-display.scss';
    @import '../../styles/data-icons.scss';
    @import '../../styles/data-tabs.scss';
</style>
