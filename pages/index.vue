<template>
  <div class="">
    <y-header-menu></y-header-menu>
    <div class="flex flex-col">
      <div class="max-w-xs text-sm breadcrumbs ml-48">
        <ul>
          <li>当前位置: 首页</li>
          <li>对公大客户关系维护与深耕</li>
        </ul>
      </div>
      <div class="flex ml-52">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
          <div class="card-body">
            <div class="card-actions justify-between">
              <div class="inline-block">
                <h5 class="text-sm">
                  <svg-icon name="person" class="-mt-1" />
                  {{ courseInfo.studentNumber }}人
                </h5>
              </div>
              <div class="inline-block">
                <h5 class="inline-block text-sm">
                  <svg-icon name="share" class="-mt-1"  />
                  分享
                </h5>
                <h5 class="inline-block text-sm ml-3">
                  <svg-icon name="collect" class="-mt-1" />
                  收藏
                </h5>
              </div>
            </div>
            
          </div>
        </div>
        <div class="flex flex-col ml-12 justify-between">
          <h2 class="text-2xl">
            {{ courseInfo.name }}
          </h2>
          <h4 class="text-base text-gray-500">
            {{ courseInfo.introduce }}
          </h4>
          <div class="flex justify-start">
            <span class="inline-block text-base text-gray-500 mt-3">价格</span>
            <span class="inline-block text-5xl text-accent ml-8 pr-48">¥ {{ courseInfo.price }}</span>
          </div>
          <div class="flex justify-start">
            <span class="inline-block text-base text-gray-500">类型</span>
            <div class="flex flex-col inline-block ml-8 w-32">
              <button class="btn btn-outline btn-primary btn-sm mb-2">基础班</button>
              <button class="btn btn-outline btn-primary btn-sm mb-2">提高班</button>
              <button class="btn btn-outline btn-primary btn-sm mb-2">进阶班</button>
            </div>
          </div>
          <div class="flex justify-end">
            <button class="btn btn-primary btn-sm ml-2 text-white">会员免费</button>
            <button class="btn btn-primary btn-sm ml-2 text-white">立即购买</button>
          </div>
        </div>
      </div>
      <div class="flex mt-8 justify-center">
        <div class="w-5/12">
          <div class="ml-52">
            <div class="tabs">
              <a class="tab" :class="{'tab-active': tab == 'info'}" @click="tab = 'info'">简介</a> 
              <a class="tab" :class="{'tab-active': tab == 'catalog'}" @click="tab = 'catalog'">学习目录</a> 
            </div>
          </div>
          <div v-if="tab === 'info'">
            <p v-html="courseInfo.summary"></p>
          </div>
          <div v-else-if="tab === 'catalog'" class="w-11/12">
            <ul>
              <li v-for="(chapter, chapterIndex) in chapterList" :key="chapterIndex">
                <div class="mb-3">
                  <p class="rounded bg-gray-300 bg-opacity-70 pl-6 py-2">{{ chapter.name }}</p>
                  <ul class="bg-white">
                    <li v-for="(course, courseIndex) in chapter.courseList" :key="courseIndex">
                      <div class="flex justify-between ml-8 mt-3">
                        <div>
                          <div class="inline-block badge-sm mt-1 badge-primary text-white">试看</div>
                          <p class="inline-block ml-3">{{ course.name }}</p>
                        </div>
                        <button class="btn btn-xs border-white mr-4">
                          {{ course.duration }}
                          <svg-icon name="play" class="ml-3" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div v-else>

          </div>
        </div>
        <div class="w-1/4">
          <span>授课老师</span>
          <div class="card card-side rounded-none bg-base-100 mt-3 border-t-2 border-gray-200">
            <div class="avatar mt-3 ml-3">
              <div class="w-24 h-24 rounded-full">
                <img :src="teacherInfo.imageUrl">
              </div>
            </div>  
            <div class="card-body">
              <h2 class="card-title">{{ teacherInfo.name }}</h2>
              <h4 class="text-base text-gray-500">
                {{ teacherInfo.introduce }}
              </h4>
            </div>
          </div>
          <y-recommend/>
        </div>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeaderMenu from '~/components/common/HeaderMenu'
import YRecommend from '~/components/common/Recommend'
export default {
  components: {
    YHeaderMenu,
    YRecommend,
  },
  data () {
    return {
      tab: 'catalog',
      nowPeriodNo: '',  // 当前播放章节
      courseInfo: {
        summary: '<h1>aaaaa</h1>',
        studentNumber: 4399,
        name: '对公大客户关系维护与深耕',
        introduce: '原北京银行主管',
        price: 699.00,
      },
      teacherInfo: {
        imageUrl: 'https://api.lorem.space/image/face?hash=92310',
        name: '吴仪章',
        introduce: '原北京银行主管',
      },
      chapterList: [
        {
          name: '第一章',
          courseList: [
            {
              name: '第一课',
              duration: '06:23',
              videoUrl: 'url',
            },
            {
              name: '第一课',
              duration: '06:23',
              videoUrl: 'url',
            },
            {
              name: '第一课',
              duration: '06:23',
              videoUrl: 'url',
            },
          ],
        },
        {
          name: '第一章',
          courseList: [
            {
              name: '第一课',
              duration: '06:23',
              videoUrl: 'url',
            },
            {
              name: '第一课',
              duration: '06:23',
              videoUrl: 'url',
            },
            {
              name: '第一课',
              duration: '06:23',
              videoUrl: 'url',
            },
          ],
        },
      ],
    }
  },
  head () {
    return {
      title: '课程详情'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
