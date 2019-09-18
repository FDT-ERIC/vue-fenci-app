<template>
  <div class="home">
    <div class="header">
      <div class="address_map" @click="$router.push({name: 'address', params: {city: city}})">
        <i class="fa fa-map-marker"></i>
        <span>{{address}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <div class="search_wrap" :class="{'fixedview':showFilter}">
      <div class="shop_search">
        <i class="fa fa-search"></i>
        创新工场大湾区AI研究院
      </div>
    </div>
    <div id="container">
      <!-- 轮播 -->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(img, index) in swipeImgs" :key="index">
          <img :src="img" alt />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 分类 -->
      <mt-swipe :auto="0" class="entries">
        <mt-swipe-item v-for="(entry, i) in entries" :key="i" class="entry_wrap">
          <div
            @click="selectSubItem(item)"
            class="foodentry"
            v-for="(item, index) in entry"
            :key="index"
          >
            <div class="img_wrap">
              <img :src="item.image" alt />
            </div>
            <span>{{item.name}}</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="shoplist-title">详细说明</div>
    <!-- 推荐商家 -->
    <!-- <div class="shoplist-title">推荐商家</div> -->
    <!-- 导航 -->
    <!-- <FilterView :filterData="filterData" @searchFixed="showFilterView" @update="update"/> -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import FilterView from "../components/FilterView";
export default {
  name: "home",
  data() {
    return {
      swipeImgs: [],
      entries: [],
      filterData: null,
      showFilter: false
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.swipeImgs = [
        "https://fuss10.elemecdn.com/4/48/37fce9a4ffbec79293357f68ecfcbjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/9c/d8da44b63fa1208476992df88edc9jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg"
      ];
      this.entries = [
        [
          { name: "分词", image: require("../assets/nlp_fenci.png") },
          { name: "词性", image: require("../assets/nlp_fenci.png") }
        ],
        [
          { name: "分词", image: require("../assets/nlp_fenci.png") },
          { name: "词性", image: require("../assets/nlp_fenci.png") }
        ]
      ];

      // 获取分类
      // this.$axios("/api/profile/shopping").then(res => {
      //   // console.log(res.data);
      //   this.swipeImgs = res.data.swipeImgs;
      //   this.entries = res.data.entries;
      // });

      // 获取功能说明下的内容
      this.$axios("/api/profile/filter").then(res => {
        // console.log(res.data);
        this.filterData = res.data;
      });
    },
    showFilterView(isShow) {
      this.showFilter = isShow;
    },
    update(condition) {
      console.log(condition)
    },
    selectSubItem(item) {
      // console.log(item.name)
      if (item.name == "分词") {
        this.$router.push("/fenci");
      }
    }
  },
  components: {
    FilterView
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}

.entries {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
/* 推荐商家 */
.shoplist-title {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}

.fixedview {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
}

.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
</style>