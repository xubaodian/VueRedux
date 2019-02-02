<template> 
<div class="market">
    <div class="main">
        <product-list v-if="showType === 'goods'"></product-list>
        <shopping-cart v-if="showType === 'cart'"></shopping-cart>
    </div>
    <div class="foot">
        <button @click="showType = 'goods'">商品</button>
        <button @click="showType = 'cart'">购物车<span class="count">{{count || ''}}</span></button>
    </div>
</div>
</template>

<script>
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';
import {cart} from '../store';

export default {
  name: 'market',
  components: {
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      showType: 'goods',
      count: 0,
      unsubscribe: null,
      loading: false
    };
  },
  created() {
    this.unsubscribe = cart.subscribe(() => {
        let data = cart.getState();
        data.items && (this.count = data.items.length);
        this.loading = data.isFetching;
    });
  },
  destroyed() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
};
</script>

<style lang="less" scoped>
.market{
    height: 100%;
    .main{
        height: calc(~'100% - 32px');
    }
    .foot{
        height: 30px;
        display: flex;
        button{
            flex: 1;
            font-size: 1.4rem;
        }
        .count{
          position: relative;
          top: -5px;
          margin-left: 5px; 
          color: red;
          font-size: 1.2rem;
        }
    }
}
</style>