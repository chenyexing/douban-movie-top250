<template>
  <div>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSizeF"
      layout="prev, pager, next,total"
      :total="dataF.total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: "db-movie-pagination",
    data() {
      return ({
        nums: [],
        currentPage:parseInt(this.$route.params.id),
      })
    },
    props: ['dataF', 'pageSizeF'],
    methods: {
      handleCurrentChange(val) {
        this.$router.replace({path: '/page/'+val})
      },


    },
  }
</script>

<style scoped>
  .y-pagination li {
    display: inline;
    padding: 0 4px;
    background-color: #00a65f;
  }
</style>
