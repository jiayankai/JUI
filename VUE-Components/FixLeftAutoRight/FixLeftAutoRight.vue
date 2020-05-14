<template>
  <div class="fix-left-auto-right-container">
    <div
      ref="left"
      :style="leftStyle"
      class="fix-left scroll"
    >
      <slot name="left" />
    </div>


    <div
      :style="rightStyle"
      class="auto-right scroll"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
  import './style.scss'

  export default {
    name: 'FixLeftAutoRight',
    props: {
      width: {
        type: [Number, String],
        required: true
      }
    },
    data() {
      return {
        leftStyle: {
          width: 0,
          float: 'left'
        },
        rightStyle: {
          'margin-left': 0
        },
        leftHeight: 0
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
          me.rightStyle['margin-left'] = parseInt(me.width, 10) + 'px'
          me.leftStyle.width = parseInt(me.width, 10) + 'px'
        } else {
          me.leftStyle['margin-left'] = me.width
          me.rightStyle.width = me.width
        }
      }
    }
  }
</script>
