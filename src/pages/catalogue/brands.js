const {brands} = require('../../constants/brands')

Page({

  data: {
    categorizedItems: [],
    categories: []
  },

  onLoad() {
    this.setData(
      {
        categories: generateAlphabet(),
        categorizedItems: convertToCategorizedItems(brands)
      }
    );
  }

})

const generateAlphabet = () => {

    let alphabet = [];
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      alphabet.push({id: String.fromCharCode(i), name: String.fromCharCode(i)});
    }

    alphabet.push({id:'#', name: '#'});
    return alphabet;
};

const generateGroupName = (firstLetter) => {
    let charCode = firstLetter.charCodeAt(0);
    if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
      return firstLetter;
    } else {
        return '#'
    }
};

const convertToCategorizedItems = (items) => {
  let groups = {};
  items.forEach(function (item){
      let char = item.name.charAt(0).toUpperCase();
      let groupName = generateGroupName(char);
      groups[groupName] = groups[groupName] || [];
      groups[groupName].push(item);
  });

  let groupsNames = Object.keys(groups).sort();
  if (groupsNames[0] === '#') {
      groupsNames.shift();
      groupsNames.push('#');
  }

  const categorizedItems = groupsNames.map((groupName) => {
    return {
        categoryId: groupName,
        categoryName: groupName,
        items: groups[groupName]
    }
  });
  return categorizedItems;
};
