Component({
  properties: {
    categories: Array,
    categorizedItems: Array
  },

  data: {
    toViewId: ''
  },

  methods: {

    navToGroup: function (event) {
      const id = event.target.dataset.categoryid;
      this.setData({
          toViewId: id
      })
    }
  }

})
