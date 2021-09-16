<template>
  <div class="ly-input" :class="{ 'ly-input_suffix': showSuffix }">
    <input
      class="ly-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="ly-input_suffix" v-if="showSuffix">
      <i
        class="ly-input_icon one-icon-cancel"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="ly-input_icon one-icon-visible"
        :class="{ 'one-icon-active': passwordVisiable }"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "LyInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "input",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      passwordVisiable: false,
    };
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      //清空内容
      this.$emit("input", "");
    },
    handlePassword() {
      //密码显示隐藏
      this.passwordVisiable = !this.passwordVisiable;
    },
  },
};
</script>

<style lang="scss" scoped>
.ly-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ly-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.ly-input_suffix {
  .ly-input_inner {
    padding-right: 30px;
  }
  .ly-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
  .one-icon-active {
    color: #409eff !important;
  }
}
</style>
