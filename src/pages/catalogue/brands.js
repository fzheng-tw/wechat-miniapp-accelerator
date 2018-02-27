const {brands} = require('../../constants/brands');

Page({

  data: {
    categoriesNavigation: [],
    categories: []
  },

  onLoad() {
    this.setData(
      {
        categoriesNavigation: generateAlphabet(),
        categories: convertToCategorizedItems(brands)
      }
    );
  }

})

const generateAlphabet = () => {

    let alphabet = [];
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      alphabet.push({id: String.fromCharCode(i), name: String.fromCharCode(i)});
    }

    alphabet.push({id:'special', name: '#'});
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

function generateGroupId(groupName) {
    if (groupName === '#') {
        return 'special'
    }
    return groupName;
}


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
        id: generateGroupId(groupName),
        name: groupName,
        items: groups[groupName]
    }
  });
  return categorizedItems;
};
