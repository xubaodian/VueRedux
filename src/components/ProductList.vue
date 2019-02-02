<template> 
<div class="product-list">
    <ul>
        <li v-for="item in list" :key="item.id">
            <div>{{item.name}}</div>
            <div>
                <span>价格： {{item.price}}</span>
                <button @click="addShop(item)">加入购物车</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import {cart} from '../store';
import {fetchPosts} from '../store/action';

export default {
  name: 'product-list',
  data() {
    return {
      list: [
        {
          id: '1',
          name: '耐克运动鞋',
          price: 1200
        },
         {
          id: '2',
          name: '登山鞋',
          price: 1600
        },
         {
          id: '3',
          name: '跑步鞋',
          price: 900
        },
         {
            id: '4',
            name: '凉鞋',
            price: 500
        },
         {
            id: '5',
          name: '袜子',
          price: 20
        },
         {
            id: '6',
          name: '湖人队 球衣',
          price: 300
        }
      ]
    };
  },
  methods: {
    addShop(item) {
      cart.dispatch(fetchPosts(item));
    }
  }
};
</script>

<style lang="less" scoped>
.product-list{
   height: 100%;
   padding: 2px;
   box-sizing: border-box;
   ul {
       margin: 10px;
       li{
           padding-top: 10px;
           list-style: none;
           border-bottom: 1px solid #d3d3d3;
           div {
               height: 30px;
           }
           button{
               float: right;
               font-size: 1.2rem;
           }
       }
   }
}
</style>
