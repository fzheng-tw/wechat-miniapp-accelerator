Component({
  properties: {
    title: String,
    infoItems: Array
  },

  data: {
    folded: false
  },

  methods: {
    fold: function(event){
      this.setData({ folded: !this.data.folded});
    },
  }
})
