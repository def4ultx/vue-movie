<template>
  <div class="container">
    <h1>Youtube Video</h1>
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
    <div class="row">
      <div v-for="items in filteredName" v-bind:key="items._id" class="col-xs-6 col-md-6">
        <router-link to="/">
          <a class="thumbnail">
            <img v-bind:src="items.snippet.thumbnails.medium.url">
            <div class="caption">
              <h4 align="left">{{items.snippet.title}}</h4>
              <p align="left">{{items.snippet.channeltitle}}</p>
              <p align="left">{{items.snippet.description}}</p>
            </div>
          </a>
        </router-link>
      </div>
    </div>

    <!-- <table class="table table-stripped table-borderes">
      <thead>
        <tr>
          <th class="center">Title</th>
          <th class="center">Description</th>
          <th class="center">Channel Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in filteredName" v-bind:key="items._id">
          <td class="text-left">
            {{items.snippet.title}}
          </td>
          <td class="text-left">
            {{items.snippet.description}}
          </td>
          <td class="text-left">
            {{items.snippet.channeltitle}}
          </td>
        </tr>
      </tbody>
    </table> -->

  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  name: 'videolist',
  data () {
    return {
      Items: [],
      uid: '',
      search: ''
    }
  },
  methods: {
    // delUser (userId) {
    //   var url = 'http://localhost:3000/users/' + userId
    //   axios.delete(url)
    //     .then((response) => {
    //       console.log('Delete UserId: ' + userId)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //   window.location.reload()
    // }
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
        // let self = this
        // Object.keys(items).forEach(function (key) {
        //   // console.log(key)
        //   self.Items.push(key)
        // })
        this.Items = _.filter(items, function (o) {
          return o.id.videoid != null
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style>

</style>
