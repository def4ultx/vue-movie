<template>
  <div class="container">
    <h1>Youtube Channel</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." v-model="search">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
          <!-- /input-group -->
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>

    <p>
    <!-- <table class="table table-stripped table-borderes">
      <thead>
        <tr>
          <th class="center">#</th>
          <th class="center">Channel Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in filteredName" v-bind:key="items._id">
          <td class="text-left">
            {{index}}
          </td>
          <td class="text-left">
            {{items.snippet.channeltitle}}
          </td>
        </tr>
      </tbody>
    </table> -->

    <div class="row">
      <div v-for="items in filteredName" v-bind:key="items._id" class="col-xs-6 col-md-6">
        <router-link to="/">
          <a class="thumbnail">
            <img v-bind:src="items.snippet.thumbnails.high.url">
            <div class="caption">
              <h4 align="left">{{items.snippet.channeltitle}}</h4>
              <p align="left">{{items.snippet.channeltitle}}</p>
            </div>
          </a>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  name: 'channel',
  data () {
    return {
      Items: [],
      uid: '',
      search: ''
    }
  },
  methods: {
  },
  computed: {
    filteredName: function () {
      return this.Items.filter((item) => {
        return item.snippet.channeltitle.match(this.search)
      })
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/video')
      .then((response) => {
        // console.log(response.data)
        let items = response.data.items
        this.Items = _.filter(items, function (o) {
          return o.id.channelid != null
        })
        // let channel = _(items).groupBy(function (o) {
        //   return o.snippet.channeltitle
        // }).value()
        // // console.log(channel)
        // let self = this
        // Object.keys(channel).forEach(function (key) {
        //   // console.log(key)
        //   self.channelList.push(key)
        // })
        // console.log(this.channelList)
        // console.log(this.Items)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style>

</style>
