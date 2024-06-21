// import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Vuex from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'
import store from '../../src/store/index';

Vue.use(Vuetify);
Vue.use(Vuex);

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const vuetify = new Vuetify();
    const propsData = { msg: 'new message' };
    const wrapper = mount(HelloWorld, {
      store,
      vuetify,
      localVue,
      propsData,
    });
    console.log('--wrapper.text()---', wrapper.text());
    // expect(wrapper.text()).to.include(msg)
  })
})
