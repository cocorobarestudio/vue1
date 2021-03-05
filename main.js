Vue.component("my-hello", {
  props: ["yourName"],
  template: `<div>こんにちは、{{ yourName }}さん</div>`,
});

Vue.component("my-counter", {
  props: ["initi"],
  template: `<div>現在値は{{ current }}です！
  <input type="button" v-on:click="onclick" value="増やす"　/></div>`,
  data: function () {
    return { current: this.initi };
  },
  methods: {
    onclick: function () {
      this.current++;
    },
  },
});

let app = new Vue({
  el: "#app",
});
