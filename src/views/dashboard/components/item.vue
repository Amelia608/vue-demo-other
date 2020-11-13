<!-- item -->
<template>
  <li>
        <span @click="toggle">
            {{ model.menuName }}
        </span>
        <ul v-if="isFolder" v-show="open">
            <items v-for="(item, index) in model.childTree" :model="item" :key="index"></items>
        </ul>
    </li>
</template>

<script>
export default {
   // 组件递归必要条件，name属性
    name:'items',
    props: ['model'],
   components: {},
   data() {
     return {
        // 控制子列表的显示隐藏
                open: false
     };
   },
   computed: {
 // 是否还有子列表需要渲染，作为v-if的判断条件
            isFolder() {
                return this.model.childTree && this.model.childTree.length
            }
   },
   watch: {

   },
   created() {

   },
   mounted() {
     
   },
   methods: {
// 切换列表显示隐藏的方法
            toggle() {
                if(this.isFolder) {
                    this.open = !this.open
                }
            },
   },
}
</script>
<style lang='scss' scoped>
 
</style>