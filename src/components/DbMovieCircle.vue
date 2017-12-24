<template>
  <li :class="[borderBDashed,py12x0,pL25,fS13]">
    <div :class="[floatLeat,pR25]">
      <span :class="[floatLeat,pX10,colbbb]">{{index+startIndex+1}}</span>
      <a :href="item.alt">
        <img :src="item.images.medium" alt="" height="148" width="100">
      </a>
    </div>
    <div :class="[mL10,ht21]">
      <a :class="aItem" :href="item.alt">
        <span>{{item.title}}</span>
        <span>/&nbsp;{{item.original_title}}</span>
        <!--<span>/&nbsp;月黑高飞(港)/刺激1995(台)</span>-->
      </a>
      <span :class="[pL3,col0a65f]">[可播放]</span>
    </div>
    <div :class="ht42Lht21">
      <p :class="[col666,mY10,overflowEllipsisNowrap]">
        导演:
        <span v-for="(director,index) in item.directors">
            <a :href="director.alt">{{director.name}}</a>
            <span v-if="item.directors.length-1==index">&nbsp;</span>
            <span v-else>/&nbsp;</span>
          </span>
        &nbsp;
        主演:
        <span v-for="(cast,index) in item.casts">
            <a :href="cast.alt">{{cast.name}}</a>
            <span v-if="item.casts.length-1==index">&nbsp;</span>
            <span v-else>/&nbsp;</span>
          </span>
        <br>
        {{item.year}}&nbsp;/&nbsp;
        <span v-for="genre in item.genres">{{genre}}&nbsp;</span>
      </p>
    </div>
    <div :class="[col666,ht21,mt12]">
      <!--<img src="../img/ic_rating_s.png" alt="">-->
      <span :class="[start,start0]" v-if="item.rating.average>=9.5"></span>
      <span :class="[start,start9]" v-else-if="item.rating.average>=8.5&&item.rating.average<9.5"></span>
      <span :class="[start,start8]" v-else-if="item.rating.average>=7.5&&item.rating.average<8.5"></span>
      <span :class="[start,start7]" v-else-if="item.rating.average>=6.5&&item.rating.average<7.5"></span>
      <span :class="[start,start6]" v-else-if="item.rating.average>=5.5&&item.rating.average<6.5"></span>
      <span :class="[start,start5]" v-else-if="item.rating.average>=4.5&&item.rating.average<5.5"></span>
      <span :class="[start,start4]" v-else-if="item.rating.average>=3.5&&item.rating.average<4.5"></span>
      <span :class="[start,start3]" v-else-if="item.rating.average>=2.5&&item.rating.average<3.5"></span>
      <span :class="[start,start2]" v-else-if="item.rating.average>=1.5&&item.rating.average<2.5"></span>
      <span :class="[start,start1]" v-else-if="item.rating.average<1.5"></span>
      <span :class="[cole09015,mLn30,fS12,pR5]">{{item.rating.average.toFixed(1)}}</span>
      <span>{{item.collect_count}}人收藏</span>
    </div>
    <p :class="col666">
      <span>更多好片，请登录豆瓣欣赏</span>
    </p>
  </li>
</template>

<script>
  export default {
    name: "db-movie-circle",
    data() {
      return {
        pig: 'viewphoto.jpg',
        floatLeat: 'y-float-left',
        mL10: 'y-m-l-10',
        pL25: 'y-p-l-25',
        colbbb: 'y-cl-bbb',
        pX10: 'y-p-x-10',
        fS12: 'y-fs-12',
        fS13: 'y-fs-13',
        pR25: 'y-p-r-25',
        pL3: 'y-p-l-3',
        col0a65f: 'y-cl-00a65f',
        col666: 'y-cl-666',
        mY10: 'y-m-y-10',
        cole09015: 'y-cl-e09015',
        pL5: 'y-p-l-5',
        pR5: 'y-p-r-5',
        borderBDashed: 'y-borderB-dashed-1',
        py12x0: 'y-py-12-px-0',
        ht21: 'y-ht-21',
        ht42Lht21: 'y-ht-42-lht-21',
        mt12: 'y-m-t-12',
        mLn30: 'y-m-l-n-30',
        overflowEllipsisNowrap: 'y-text-overflow-e-n',
        overflowHiddenN: 'y-overflow-h-n',
        aItem: 'y-aItem',
        start: 'y-start',
        start1: 'y-start1',
        start2: 'y-start2',
        start3: 'y-start3',
        start4: 'y-start4',
        start5: 'y-start5',
        start6: 'y-start6',
        start7: 'y-start7',
        start8: 'y-start8',
        start9: 'y-start9',
        start0: 'y-start0',
      }
    },
    props: ['item','index','startIndex'],
  }
</script>

<style scoped>
  @import "../css/DbMovie.css";
</style>
