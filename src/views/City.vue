<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_val" type="text" placeholder="输入城市名" />
      </div>
      <button @click="$router.push({name: 'address', params: {city: city}})">取消</button>
    </div>
    <div style="height:100%" v-if="searchList.length == 0">
      <div class="location">
        <Location @click="selectCity({name:city})" :address="city" />
      </div>
      <Alphabet @selectCity="selectCity" ref="allcity" :cityInfo="cityInfo" :keys="keys" />
    </div>
    <div class="search_list" v-else>
      <ul>
        <li @click="selectCity(item)" v-for="(item, index) in searchList" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Location from "../components/Location";
import Alphabet from "../components/Alphabet";
export default {
  name: "City",
  data() {
    return {
      city_val: "",
      cityInfo: null,
      keys: [],
      allCities: [],
      searchList: []
    };
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  components: {
    Location,
    Alphabet
  },
  created() {
    this.getCityInfo();
  },
  watch: {
    city_val() {
      // 搜索城市的函数
      this.searchCity();
    }
  },
  methods: {
    getCityInfo() {
      this.$axios("/api/posts/cities")
        .then(res => {
          this.cityInfo = res.data;
          // 获取 key
          this.keys = Object.keys(res.data);
          // 将 hotcities 这个 key 移除掉
          this.keys.pop();
          // keys 排序
          this.keys.sort();
          this.$nextTick(() => {
            this.$refs.allcity.initScroll();
          });

          // 存储所有城市，用来搜索过滤
          // 遍历 keys，即 A~Z
          this.keys.forEach(key => {
            // 遍历 keys 下的所有城市
            this.cityInfo[key].forEach(city => {
              this.allCities.push(city);
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectCity(city) {
      // console.log(city)
      this.$router.push({ name: "address", params: { city: city.name } });
    },
    searchCity() {
      if (!this.city_val) {
        // 如果搜索框为空，数组置空
        this.searchList = [];
      } else {
        // 根据输入框的关键字检索城市，并存入到 searchList 中
        this.searchList = this.allCities.filter(item => {
          return item.name.indexOf(this.city_val) != -1;
        });
      }
    }
  }
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 55px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 55px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
  margin-top: 10px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
  border: none;
  background-color: #fff;
  margin-top: 10px;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>