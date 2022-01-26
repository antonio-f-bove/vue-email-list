new Vue ({
  el: '#app',
  data: {
    addresses: [],
  },
  methods: {
    getAddress: function () {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((result) => {
        this.addresses.push(result.data.response);
      })
    }
  },
  mounted() {
    for(let i = 0; i < 10; i++) {
      this.getAddress();
    }
  }
})