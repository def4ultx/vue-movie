import Vue from 'vue'
import Router from 'vue-router'
import VideoList from '@/components/VideoList'
import ChannelList from '@/components/ChannelList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/video',
      name: 'VideoList',
      component: VideoList
    },
    {
      path: '/',
      name: 'ChannelList',
      component: ChannelList
    }
  ]
})
