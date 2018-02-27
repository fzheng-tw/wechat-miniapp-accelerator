const {glossary} = require('../../constants/glossary');

Page({

  data: {
    categoriesNavigation: [],
    categories: []
  },

  onLoad() {
    this.setData(
      {
        categoriesNavigation: this.getCategoriesNavigation(glossary),
        categories: this.getCategorizedItems(glossary)
      }
    );
  },

  getCategoriesNavigation(glossary) {
    return glossary.map((item) => {
      return {
        id: item.categoryEN.replace(' ', '-'),
        name: item.categoryCN
      }
    });
  },

  getCategorizedItems(glossary) {
    return glossary.map((item) => {
      return {
        id: item.categoryEN.replace(' ', '-'),
        name: item.categoryCN,
        items: item.words.map((tuple) => {
          return {
            id: tuple[0],
            name: tuple[0] + " " + tuple[1]
          };
        })
      }
    });
  }

})
