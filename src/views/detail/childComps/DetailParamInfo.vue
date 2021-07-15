<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <div class="info-size">
      <table>
        <!--目前只有一个table 用sizes[0],若有多个用v-for,遇到数组就用v-for -->
        <tr v-for="(tr, indexR) in paramInfo.sizes[0]" :key="indexR">
          <td v-for="(td,indexD) in tr" :key="indexD">{{ td }}</td>
        </tr>
      </table>
    </div>
    <div class="info-param">
      <table>
        <tr v-for="(info, index) in paramInfo.infos" :key="index">
          <td class="info-param-key">{{ info.key }}</td>
          <!--td内容为对象 不用v-for-->
          <td class="param-value">{{ info.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  .info-size,
  .info-param {
    padding: 0 10px;
    table {
      width: 100%;
      /*border-collapse: collapse;*/
      tr {
        height: 42px; /* tr给高度实现margin的效果*/
      }
    }
  }
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  width: 84px;
}
.param-value {
  color: #eb4868;
}
.info-param table tr:last-child td {
  border-bottom: none;
}
</style>
