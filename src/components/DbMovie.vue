<template>
  <div :class="overflowHiddenN">
    <!--<h2>{{$route.params.id}}</h2>-->
    <h2>{{ data.title }}</h2>
    <ul>
      <div v-for="(childItem,childIndex) in items">
        <db-movie-circle :item="childItem" :index="childIndex" :startIndex="data.start"></db-movie-circle>
      </div>
    </ul>
    <db-movie-pagination :dataF="data" :pageSizeF="pageSize"></db-movie-pagination>
  </div>

</template>

<script>
  import DbMovieCircle from './DbMovieCircle'
  import DbMoviePagination from './DbMoviePagination'

  export default {
    name: 'DbMovie',
    components: {
      DbMovieCircle,
      DbMoviePagination,
    },
    data() {
      return {
        listValue: '',
        overflowHiddenN: 'y-overflow-h-n',
        items: [],
        data: '',
        pageSize: 25,
      }
    },
    mounted() {
      this.getList();
    },
    methods: {

      getList: function (val) {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250', {
          params: {
            count: this.pageSize,
            start: (this.$route.params.id-1)* this.pageSize
          }
        }).then(
          function (response) {
            this.data = response.data
            this.items = response.data.subjects
            window.scrollTo(0, 0);
            // console.log(response, response.data.start,this.$route.params.id)
          }, response => {
            alert('error')
          });
        // console.log(this.$route.params.id-1, 'start')
      },
    },
    beforeRouteUpdate(to, from, next) {
      next()
      this.getList()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  .y-overflow-h-n {
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
  }

</style>
