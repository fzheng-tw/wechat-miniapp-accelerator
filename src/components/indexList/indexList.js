Component({
  properties: {
    items: Array
  },

  attached: function(){
    this._generateAlphabet();
    this._setGroupedItems();
  },

  methods: {
    _generateAlphabet: function () {
        let alphabet = [];
        for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
            alphabet.push(String.fromCharCode(i));
        }

        alphabet.push('#');

        this.setData({
            alphabet: alphabet
        });
    },

    _setGroupedItems: function () {
      this.setData({
          groupedItems: convertToGroupedItems(this.properties.items)
      });
    },

    navToGroup: function (event) {
      const char = event.target.dataset.char.toLowerCase();
      const groupName = generateGroupName(char);
      let id = generateGroupId(groupName);
      this.setData({
          toViewId: id
      })
    }
  },

  data: {
      groupedItems: [],
      alphabet: [],
      toViewId: 'a'
  }

})

function convertToGroupedItems (items) {
    let grouped = {};

    items.forEach(function (item){
        let char = item.name.charAt(0).toLowerCase();
        let groupName = generateGroupName(char);
        grouped[groupName] = grouped[groupName] || [];
        grouped[groupName].push(item);
    });

    let groups = Object.keys(grouped).sort();
    if (groups[0] === '#') {
        groups.shift();
        groups.push('#');
    }

    const groupedItems = groups.map((groupName) => {
      return {
          groupId: generateGroupId(groupName),
          groupName: groupName,
          items: grouped[groupName]
      }
    });

    return groupedItems;
}

function generateGroupName(firstLetter) {
    let charCode = firstLetter.charCodeAt(0);
    if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
      return firstLetter;
    } else {
        return '#'
    }
}

function generateGroupId(groupName) {
    if (groupName === '#') {
        return 'special_group'
    }
    return groupName;
}
