import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import newgoods from '@/views/newgoods'
import submit from '@/views/submit'
import xq from '@/views/xq'
import girlclose from '@/views/girlclose'
import myCart from '@/views/myCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
		  path: '/newgoods',
		  name: 'newgoods',
		  component: newgoods
		},
		{
		  path: '/submit',
		  name: 'submit',
		  component: submit
		},
		{
		  path: '/xq',
		  name: 'xq',
		  component: xq
		},
		{
		  path: '/girlclose',
		  name: 'girlclose',
		  component: girlclose
		},
		{
		  path: '/myCart',
		  name: 'mycart',
		  component: myCart
		}
  ]
})
