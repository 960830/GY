<template>
  <div class="Course">
    <header>
      <van-nav-bar title="特色课" class="headers">
        <van-icon name="search" slot="right" size="0.4rem" @click="search()" />
      </van-nav-bar>

      <!-- 下拉菜单 -->
      <van-dropdown-menu active-color="#1989fa">
        <!-- 下拉菜单分类区域 -->
        <van-dropdown-item class="downs" title="分类" ref="item" active-color="orangered">
          <p class="ti">年级</p>
          <ul class="nian">
            <li v-for="(item,index) in pinglist.nian" :key="index">
              <p>{{item}}</p>
            </li>
          </ul>
          <p class="ti">学课</p>
          <ul class="xue">
            <li v-for="(ite,ind) in pinglist.xue" :key="ind">
              <p>{{ite}}</p>
            </li>
          </ul>
          <div>
            <van-button color="#7232dd">重置</van-button>
            <van-button color="#7232dd" plain>确定</van-button>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item
          class="downs"
          title="排序"
          v-model="value1"
          :options="option1"
          style="text-align:center"
        />
        <!-- 筛选 -->
        <van-dropdown-item class="downs" title="筛选" ref="item">
          <ul class="xue" style="padding:0.3rem 0">
            <li v-for="(val,ind) in pinglist.ke" :key="ind">
              <p>{{val}}</p>
            </li>
          </ul>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>

    <!-- 讲师信息 -->
    <nav>
      <div class="index">
        <ul>
          <li v-for="(item) in wanglist" :key="item.id" @click="detail(item.id)">
            <img :src="item.cover_img" alt />
            <div class="right">
              <span>{{ item.title }}</span>
              <p>
                {{item.sales_num + "+已报名"}}
                <span>{{ item.price | filterPrice }}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { course } from "@/api/api.js";
export default {
  name: "",
  data() {
    return {
      pinglist: [],
      value1: 0,
      value2: "a",
      value3: "b",
      option1: [
        { text: "综合", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],

      wanglist: [],
    };
  },

  filters: {
    filterPrice(value) {
      if (value == 0) {
        return "免费";
      } else {
        return value;
      }
    },
  },

  async mounted() {
    let obj = {
      page: 1,
      limit: 20,
    };

    let { data: res } = await course(obj);
    console.log(res);
    if (res.code == 200) {
      this.wanglist = res.data.list;
    }
  },

  computed: {},
  methods: {
    //点击名师课堂跳转课堂详情
    detail(id) {
      this.$router.push({
        path:"/gy_indexqing",
        query:{
          id
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header,
div,
p,
hr,
h2,
h3,
h4,
b,
span {
  margin: 0;
  padding: 0;
  list-style: none;
}
.van-nav-bar__title {
  max-width: none;
}
.van-grid-item {
  border: none;
}
body,
html,
.Course {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.downs {
  .ti {
    font-size: 0.24rem;
    color: #646464;
    padding: 0.32rem 0 0.2rem 0.25rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: #f5f5f5 0.01rem solid;
    padding-bottom: 0.2rem;
    li {
      display: block;
      width: 25%;
      color: #646464;
      font-size: 0.24rem;
      margin-bottom: 0.14rem;
      p {
        display: block;
        width: 1.4rem;
        margin: auto;
        padding: 0.1rem;
        text-align: center;
        background: #f5f5f5;
        border-radius: 0.08rem;
      }
      p:hover {
        background: orangered;
        color: white;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    line-height: 0rem;
    .van-button {
      display: block;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      border-radius: 0.1rem;
    }
  }
}

nav {
  flex: 1;
  overflow: scroll;
  background: rgb(243, 240, 240);
  .index {
    width: 100%;
    ul {
      width: 100%;
      list-style: none;
      li {
        width: 95%;
        height: 2rem;
        display: flex;
        margin-left: 0.2rem;
        margin-top: 0.4rem;
        background: #fff;
        border-radius: 0.2rem;
        img {
          width: 2.5rem;
          height: 1.5rem;
          margin-top: 0.25rem;
          margin-left: 0.1rem;
          border-radius: 0.2rem;
        }
        .right {
          width: 100%;
          height: 1.4rem;
          margin-top: 0.3rem;
          span {
            font-size: 0.25rem;
            text-indent: 0.3rem;
            display: block;
          }
          p {
            font-size: 0.25rem;
            text-indent: 0.3rem;
            margin-top: 0.7rem;
            display: flex;
            justify-content: space-between;
            color: rgb(133, 130, 130);
            span {
              margin-right: 0.3rem;
              font-size: 0.3rem;
              font-weight: bold;
              display: block;
              color: green;
            }
          }
        }
      }
    }
  }
}
</style>
