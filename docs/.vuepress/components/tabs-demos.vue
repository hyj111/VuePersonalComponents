<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
        <g-tabs-item name="3" disabled>3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
        <g-tabs-pane name="3">content 3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabsHead'
import TabsBody from '../../../src/tabsBody'
import TabsItem from '../../../src/tabsItem'
import TabsPane from '../../../src/tabsPane'

export default {
  data() {
    return {
      selected: '1',
    }
  },
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-body': TabsBody,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
  }
}
</script>