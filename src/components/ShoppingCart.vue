<template> 
<div class="shopping-cart">
    <ul>
        <li v-for="item in list" :key="item.id">
            <div>{{item.name}}</div>
            <div>
                <span>数量： {{item.count}}</span>
                <button @click="addShop(item)">删除</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import {cart} from '../store';

export default {
  name: 'shopping-cart',
  data() {
    return {
      list: [],
      unsubscribe: null
    };
  },
  created() {
    this.unsubscribe = cart.subscribe(() => {
        let data = cart.getState();
        this.list = data.items;
    });
    let data = cart.getState();
    this.list = data.items;
  },
  destroyed() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.shopping-cart{
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
