Component({
  properties: {
    product: Object
  },

  data: {
  },

  methods: {
    toDetail: function(){
      if(this.properties.product.detailLink) {
        wx.navigateTo({
          url: this.properties.product.detailLink
        });
      }
    },
  }
})
