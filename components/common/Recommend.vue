<template>
  <div>
    <span>猜你想学</span>
    <ul>
      <li v-for="(item, index) in recommendList" :key="index">
        <div class="card card-side rounded-none bg-base-100 mt-3 -mb-6 border-t-2 border-gray-200">
          <div class="avatar mt3 mt-2">
            <div class="w-36 h-24 rounded">
              <img :src="item.imageUrl">
            </div>
          </div>
          <div class="card-body">
            <h4 class="text-base">
              {{ item.title }}
            </h4>
            <h5 class="text-sm text-accent">
              ¥ {{ item.price }}
            </h5>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  data () {
    return {
      recommendList: [
        {
          title: '退休客户经营方法与产品落地策略',
          price: 644.00,
          imageUrl: 'https://api.lorem.space/image/album?hash=92310',
        },
      ],
    }
  },
  mounted () {
    for (let index = 0; index < 5; index++) {
      this.recommendList.push(this.recommendList[0])
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
</style>
