<template>
  <div class="relative w-full mt-3 bg-primary">
    <ul class="relative left-48 menu menu-horizontal bg-primary text-white z-50">
      <li v-for="(item, index) in menuList" :key="index">
        <a v-if="!item.children">{{ item.menuTitle }}</a>
        <span v-if="item.children">
          {{ item.menuTitle }}
          <svg-icon name="arrow-down" class="-ml-1" />
        </span>
        <ul v-if="item.children" class="">
          <li v-for="(childItem, childIndex) in item.children" :key="childIndex" >
            <a class="active text-white">{{ childItem.menuTitle }}</a>
          </li>
        </ul>
        
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  data () {
    return {
      
      menuList: [
        {
          menuTitle: '课程导航',
          menuUrl: '1',
          children: [
            {
              menuTitle: '课程导航',
              menuUrl: '1',
            }
          ]
        },
        {
          menuTitle: '最新上线',
          menuUrl: '1',
        },
        {
          menuTitle: '系列课',
          menuUrl: '1',
        },
      ],
      isNow: ''
    }
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.active {

}
</style>
