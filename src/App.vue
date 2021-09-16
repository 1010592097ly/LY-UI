<template>
  <div id="app">
    <!-- 按钮组件start -->
    <div>
      <div class="row">
        <h3>按钮样式 【type】属性控制</h3>
        <ly-button>按钮</ly-button>
        <ly-button type="primary">按钮</ly-button>
        <ly-button type="success">按钮</ly-button>
        <ly-button type="info">按钮</ly-button>
        <ly-button type="warning">按钮</ly-button>
        <ly-button type="danger">按钮</ly-button>
      </div>
      <div class="row">
        <h3>朴素按钮 【plain】属性控制</h3>
        <ly-button plain>按钮</ly-button>
        <ly-button type="primary" plain>按钮</ly-button>
        <ly-button type="success" plain>按钮</ly-button>
        <ly-button type="info" plain>按钮</ly-button>
        <ly-button type="warning" plain>按钮</ly-button>
        <ly-button type="danger" plain>按钮</ly-button>
      </div>
      <div class="row">
        <h3>圆角按钮 【round】属性控制</h3>
        <ly-button round>按钮</ly-button>
        <ly-button type="primary" round>按钮</ly-button>
        <ly-button type="success" round>按钮</ly-button>
        <ly-button type="info" round>按钮</ly-button>
        <ly-button type="warning" round>按钮</ly-button>
        <ly-button type="danger" round>按钮</ly-button>
      </div>
      <div class="row">
        <h3>圆形按钮 【circle】属性控制</h3>
        <ly-button circle>按</ly-button>
        <ly-button type="primary" circle>按</ly-button>
        <ly-button type="success" circle>按</ly-button>
        <ly-button type="info" circle>按</ly-button>
        <ly-button type="warning" circle>按</ly-button>
        <ly-button type="danger" circle>按</ly-button>
      </div>
      <div class="row">
        <h3>icon按钮 【icon】属性控制</h3>
        <ly-button type="primary" circle icon="delete"></ly-button>
        <ly-button type="success" circle icon="audio"></ly-button>
        <ly-button type="info" circle icon="camera"></ly-button>
        <ly-button type="warning" circle icon="loop"></ly-button>
        <ly-button type="danger" circle icon="bottom"></ly-button>
      </div>
      <div class="row">
        <h3>触发点击按钮</h3>
        <ly-button @click="btnClick">点击按钮</ly-button>
        <ly-button @click="btnClick" type="primary">点击按钮</ly-button>
        <ly-button @click="btnClick" type="success">点击按钮</ly-button>
        <ly-button @click="btnClick" type="info">点击按钮</ly-button>
        <ly-button @click="btnClick" type="warning">点击按钮</ly-button>
        <ly-button @click="btnClick" type="danger">点击按钮</ly-button>
      </div>
      <div class="row">
        <h3>不可点击按钮【disabled】属性控制</h3>
        <ly-button disabled>不可点击按钮</ly-button>
        <ly-button disabled type="primary">不可点击按钮</ly-button>
        <ly-button disabled type="success">不可点击按钮</ly-button>
        <ly-button disabled type="info">不可点击按钮</ly-button>
        <ly-button disabled type="warning">不可点击按钮</ly-button>
        <ly-button disabled type="danger">不可点击按钮</ly-button>
      </div>
    </div>
    <!--按钮组件 end  -->
    <!-- 弹窗组件start -->
    <div>
      <h3>弹窗组件</h3>
      <ly-button type="primary" @click="visible = true">启动弹窗</ly-button>
      <ly-dialog
        title="温馨提示"
        width="40%"
        top="100px"
        :visible.sync="visible"
      >
        <template v-slot:title>
          <h4>我是标题</h4>
        </template>
        <div>随便写点东西就行</div>
        <template v-slot:footer>
          <ly-button>取消</ly-button>
          <ly-button type="primary">确定</ly-button>
        </template>
      </ly-dialog>
    </div>
    <!-- 弹窗组件 end -->

    <!-- input组件 start -->
    <div>
      <h3>input组件</h3>
      <ly-input name="input" placeholder="请输入" type="text"></ly-input>
      <h4>禁用</h4>
      <ly-input
        name="input"
        placeholder="请输入"
        type="text"
        disabled
      ></ly-input>
      <h4>支持【v-model】：{{ username }}</h4>
      <ly-input
        name="input"
        placeholder="请输入"
        type="text"
        v-model="username"
      ></ly-input>
      <h4>可一键清空</h4>
      <ly-input
        name="input"
        placeholder="请输入"
        type="text"
        v-model="username"
        clearable
      ></ly-input>
      <h4>密码显示隐藏</h4>
      <ly-input
        name="input"
        placeholder="请输入"
        type="password"
        v-model="username"
        showPassword
      ></ly-input>
    </div>
    <!-- input组件 end -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      username: "帅小伙",
    };
  },
  methods: {
    btnClick() {
      alert("点了按钮");
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .ly-button {
    margin-right: 20px;
  }
}
</style>
