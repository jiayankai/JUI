<template>
  <div class="fix-right-auto-left-container">
    <div
      :style="rightStyle"
      class="fix-right"
    >
      <slot name="right" />
    </div>
    <div
      :style="leftStyle"
      class="auto-left"
    >
      <slot name="left" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FixRightAutoLeft',
    props: {
      width: {
        type: [Number, String],
        required: true
      },
      hasData: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        leftStyle: {
          'margin-right': 0
        },
        rightStyle: {
          width: 0,
          float: 'right'
        }
      }
    },
    watch: {
      width() {
        const me = this

        me.initLayout()
      }
    },
    mounted() {
      const me = this

      me.initLayout()
    },
    methods: {
      initLayout() {
        const me = this

        if (typeof (me.width) === 'number') {
          me.leftStyle['margin-right'] = parseInt(me.width, 10) + 'px'
          me.rightStyle.width = parseInt(me.width, 10) + 'px'
        } else {
          me.leftStyle['margin-right'] = me.width
          me.rightStyle.width = me.width
        }
      }
    }
  }
</script>
