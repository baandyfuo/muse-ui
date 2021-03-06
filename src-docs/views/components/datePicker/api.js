export default {
  props: [{
    name: 'dateTimeFormat',
    type: 'Object',
    default: '内置 dateTimeFormat',
    desc: '时间格式化对像，需要有以下属性:\r\n1. **formatDisplay** 用于格式化日期选择框头部显示;\r\n2. **formatMonth** 用于格式化日期选择框月份显示。'
  }, {
    name: 'autoOk',
    type: 'Boolean',
    default: 'false',
    desc: '是否在选择日期后自动确定, 设为true则不显示确定按钮'
  }, {
    name: 'okLabel',
    type: 'String',
    default: '确定',
    desc: '确定按钮的文字'
  }, {
    name: 'cancelLabel',
    type: 'String',
    default: '确定',
    desc: '取消按钮的文字'
  }, {
    name: 'container',
    type: 'String',
    default: 'dialog',
    desc: 'dialog/inline, 弹出日期的方式， dialog 弹出框， inline 内联弹出显示'
  }, {
    name: 'disableYearSelection',
    type: 'Boolean',
    default: 'false',
    desc: '设置为 `ture`, 则不可选择年份'
  }, {
    name: 'firstDayOfWeek',
    type: 'Number',
    default: '1',
    desc: '那一天作为一个星期的开始， 默认星期一， 有些情况可能会设置成星期日(0)'
  }, {
    name: 'mode',
    type: 'String',
    default: 'portrait',
    desc: '`portrait` 竖屏显示， `landscape` 横屏显示'
  }, {
    name: 'shouldDisableDate',
    type: 'Function',
    default: '',
    desc: '判断日期是否不可用的函数'
  }, {
    name: 'format',
    type: 'String',
    default: 'YYYY-MM-DD',
    desc: '时间格式化方式'
  }, {
    name: 'maxDate',
    type: 'String',
    default: '',
    desc: '可选择的最大日期, 需要符合 `format` 参数的格式'
  }, {
    name: 'minDate',
    type: 'String',
    default: '',
    desc: '可选择的最小日期, 需要符合 `format` 参数的格式'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: '日期选择框的标签'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: '标签是否浮动'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: '标签的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'labelFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: '输入框获取焦点时标签的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '日期选择框是否不可用'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: '提示文字'
  }, {
    name: 'hintTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: '提示文字样式, 同 `class` 绑定方式一致'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: '帮助文字'
  }, {
    name: 'helpTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: '帮助文字样式, 同 `class` 绑定方式一致'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: '错误提醒文字，如果此参数有值，那么日期选择框会转为错误的状态, 显示效果将会更改'
  }, {
    name: 'errorColor',
    type: 'String',
    default: '',
    desc: '错误状态的时的颜色，默认为红色'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: '显示图标'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: '图标的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'fullWidth',
    type: 'Boolean',
    default: 'false',
    desc: '是否将宽度设置为 100%, 默认 256px'
  }, {
    name: 'underlineShow',
    type: 'Boolean',
    default: 'true',
    desc: '是否显示底部的横线'
  }, {
    name: 'underlineClass',
    type: 'String,Object,Array',
    default: '',
    desc: '底部横线样式, 同 `class` 绑定方式一致'
  }, {
    name: 'underlineFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: '输入框获取焦点时底部横线样式, 同 `class` 绑定方式一致'
  }, {
    name: 'inputClass',
    type: 'String,Object,Array',
    default: '',
    desc: '输入框样式, 同 `class` 绑定方式一致'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: '日期选择框的值，可不设置此参数，使用 v-model 指令代替'
  }],
  events: [{
    name: 'input',
    desc: 'value 发生改变触发的事件，传入新的value, (value)'
  }, {
    name: 'change',
    desc: '由于用户行为(点击确定按钮)导致 value 值改变时触发事件, 传入 value 属性值'
  }]
}
