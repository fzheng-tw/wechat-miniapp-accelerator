const {glossary} = require('../../constants/glossary');

Page({

  data: {
    categorizedItems: [],
    categories: []
  },

  onLoad() {
    console.log(this.getCategorizedItems(glossary));
    this.setData(
      {
        categories: this.getCategoryies(glossary),
        categorizedItems: this.getCategorizedItems(glossary)
      }
    );
  },

  getCategoryies(glossary) {
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
        categoryId: item.categoryEN.replace(' ', '-'),
        categoryName: item.categoryCN,
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
