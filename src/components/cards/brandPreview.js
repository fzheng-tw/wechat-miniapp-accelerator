Component({
  properties: {
    brand: Object
  },

  data: {
  },

  methods: {
    toDetail: function(){
      if(this.properties.brand.detailLink) {
        wx.navigateTo({
          url: this.properties.brand.detailLink
        });
      }
    },
  }
})
