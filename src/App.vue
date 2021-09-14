<template>
  <div id="app">
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
</template>

<script>
export default {
  name: "App",
  methods: {
    btnClick() {
      alert("点击了按钮");
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
