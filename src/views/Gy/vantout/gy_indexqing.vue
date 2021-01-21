<template>
  <div class="tou">
    <!-- 头部区域 -->
    <div class="header">
      <van-icon name="arrow-left" size="0.4rem" @click="returns" />
      <b>课程详细</b>
      <van-icon name="cluster-o" @click="addList" />
      <van-overlay :show="show" >
        <div class="wrapper" @click="show = false">
          <div class="block">
            <qriously :value="initQCode" :size="120" />
          </div>
        </div>
      </van-overlay>
    </div>

    <div class="nav">
      <ul>
        <li>
          <img :src="info.cover_img" alt />
        </li>
      </ul>
    </div>
    <div class="nav1">
      <img src="@/assets/img/back-info.jpg" alt />
      <div class="nav2">
        <p class="top">{{ info.title }}</p>
        <p class="info">
          <span>共{{info.is_free}}课时</span>
          <span>{{info.sales_num}}人已报名</span>
        </p>
      </div>
      <div class="nav3">
        <ul>
          <li class="tops">
            <p>讲师</p>
          </li>
          <li>
            <img
              src="http://120.53.31.103:84/uploads/image/2021-01-18/dkMacjNYzvWjulum2dRn08t9jWaTe1zFFpLDXALK.gif"
              alt
            />
          </li>
          <li class="buttom">
            <span>小张</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="xuanxiang">
      <van-tabs v-model="active">
        <van-tab title="课程介绍">
          <span>
            《初中化学》内容简介：我国的课程与教学工作者认识到并明确阐释一个基本理念：
            道德教育并不是或主要不是关于道德知识的教育，除了各种专门化的德育活动之外，
            它更多地需要依靠各门学科依托其知识和方法而形成的道德价值观影响。
            纵观国外道德教育的发展历程和趋势，这一理念已经成为世界各国教育理论和实践的共识。
          </span>
        </van-tab>
        <van-tab title="课程大纲"></van-tab>
        <van-tab title="课程评价()"></van-tab>
      </van-tabs>
    </div>

    <footer>
      <button>立即报名</button>
    </footer>
  </div>
</template>

<script>
import { courselist } from "@/api/api.js";
export default {
  name: "",
  data() {
    return {
      info: {}, //课程详情信息
      active: 0,
      initQCode: "http://120.53.31.103:85/course/193",
      show: false,
    };
  },
  mounted() {
    courselist(this.$route.query.id).then((res) => {
      console.log(res);
      this.info = res.data.data.info;
    });
  },
  created() {
    // console.log(this.$route.params)
  },
  computed: {},
  methods: {
    //返回课程页面
    returns() {
      window.sessionStorage.clear();

      this.$router.push("/gy_index");
    },

    addList() {
      this.show = true;
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

.tou {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  justify-content: space-between;
  .van-icon {
    line-height: 0.8rem;
    margin-right: 0.3rem;
  }
}

.nav {
  width: 100%;
  flex: 1;
  overflow: scroll;

  ul {
    width: 100%;
    height: 4rem;
    li {
      width: 100%;
      height: 4rem;
      img {
        width: 100%;
        height: 4rem;
      }
    }
  }
}

footer {
  width: 100%;
  height: 1rem;
  position: fixed; //将button按钮固定在页面底部，注意，：和；是英文的哦，一定不要写成中文哦。
  bottom: 0rem;
  button {
    margin-top: 0.3rem;
    background: red;
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    font-weight: bold;
    width: 7rem;
    height: 0.6rem;
    margin-left: 0.2rem;
  }
}

.nav1 {
  width: 100%;
  height: 4rem;
  display: flex;
  position: relative;
  img {
    width: 100%;
    height: 4rem;
  }
  .nav2 {
    position: absolute;
    top: 0.5rem;
    left: 0.3rem;
    width: 5rem;
    height: 3rem;
    background: hsla(0, 0%, 100%, 0.1977);
    border-radius: 0.3rem;
    .top {
      margin-top: 0.9rem;
      text-indent: 0.3rem;
      color: #fff;
      font-weight: bold;
      font-size: 0.3rem;
    }
    .info {
      margin-top: 0.3rem;
      text-indent: 0.3rem;
      display: flex;
      span {
        display: block;
        color: #fff;
        font-size: 0.1rem;
      }
    }
  }
}

.xuanxiang {
  width: 95%;
  margin-left: 0.2rem;
  span {
    display: block;
    font-size: 0.25rem;
    margin-top: 0.2rem;
  }
}

.nav3 {
  left: 5.5rem;
  width: 2rem;
  height: 4rem;
  text-align: center;
  position: absolute;
  img {
    width: 1rem;
    height: 1rem;
    top: 0.5rem;
    margin-left: 0.9rem;
    position: relative;
    right: 0.5rem;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  .tops {
    color: #fff;
    margin-right: 0.3rem;
    margin-top: 0.5rem;
    p {
      font-size: 0.25rem;
    }
  }
  .buttom {
    color: #fff;
    display: block;
    margin-right: 0.3rem;
    margin-top: 0.5rem;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
