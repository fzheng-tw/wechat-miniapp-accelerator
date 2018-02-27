const brands = [
  {
    "id":14,
    "name":"Alpha-H",
    "link":"/pages/index/index"
  },
  {
    "id":28,
    "name":"Aquila",
    "link":"/pages/index/index"
  },
  {
    "id":15,
    "name":"Asilio",
    "link":"/pages/index/index"
  },
  {
    "id":7,
    "name":"Basque",
    "link":"/pages/index/index"
  },
  {
    "id":30,
    "name":"Ben Sherman",
    "link":"/pages/index/index"
  },
  {
    "id":3,
    "name":"BENEFIT",
    "link":"/pages/index/index"
  },
  {
    "id":41,
    "name":"Bonds",
    "link":"/pages/index/index"
  },
  {
    "id":44,
    "name":"Bose",
    "link":"/pages/index/index"
  },
  {
    "id":32,
    "name":"Brooksfield",
    "link":"/pages/index/index"
  },
  {
    "id":34,
    "name":"Bubba blue",
    "link":"/pages/index/index"
  },
  {
    "id":12,
    "name":"Calvin Klein",
    "link":"/pages/index/index"
  },
  {
    "id":9,
    "name":"Chanel",
    "link":"/pages/index/index"
  },
  {
    "id":8,
    "name":"Christian Paul",
    "link":"/pages/index/index"
  },
  {
    "id":16,
    "name":"Cue",
    "link":"/pages/index/index"
  },
  {
    "id":6,
    "name":"Daniel Wellington",
    "link":"/pages/index/index"
  },
  {
    "id":42,
    "name":"Guess",
    "link":"/pages/index/index"
  },
  {
    "id":5,
    "name":"Industrie",
    "link":"/pages/index/index"
  },
  {
    "id":23,
    "name":"Jag",
    "link":"/pages/index/index"
  },
  {
    "id":45,
    "name":"Jamie Oliver Tefal",
    "link":"/pages/index/index"
  },
  {
    "id":4,
    "name":"John Lewis",
    "link":"/pages/index/index"
  },
  {
    "id":40,
    "name":"Kenzo",
    "link":"/pages/index/index"
  },
  {
    "id":35,
    "name":"Kitchen Aid",
    "link":"/pages/index/index"
  },
  {
    "id":22,
    "name":"Lacoste",
    "link":"/pages/index/index"
  },
  {
    "id":24,
    "name":"Lego",
    "link":"/pages/index/index"
  },
  {
    "id":37,
    "name":"Linen house",
    "link":"/pages/index/index"
  },
  {
    "id":46,
    "name":"Milk and Honey",
    "link":"/pages/index/index"
  },
  {
    "id":36,
    "name":"Mini Jumbuck",
    "link":"/pages/index/index"
  },
  {
    "id":11,
    "name":"Mulberry",
    "link":"/pages/index/index"
  },
  {
    "id":19,
    "name":"Nana Judy",
    "link":"/pages/index/index"
  },
  {
    "id":43,
    "name":"Only",
    "link":"/pages/index/index"
  },
  {
    "id":13,
    "name":"Oroton",
    "link":"/pages/index/index"
  },
  {
    "id":27,
    "name":"Politix",
    "link":"/pages/index/index"
  },
  {
    "id":29,
    "name":"Ralph Lauren",
    "link":"/pages/index/index"
  },
  {
    "id":1,
    "name":"Review",
    "link":"/pages/index/index"
  },
  {
    "id":31,
    "name":"Rodd \u0026 Gunn",
    "link":"/pages/index/index"
  },
  {
    "id":26,
    "name":"Royal Dolton",
    "link":"/pages/index/index"
  },
  {
    "id":25,
    "name":"Seafolly",
    "link":"/pages/index/index"
  },
  {
    "id":17,
    "name":"Seed",
    "link":"/pages/index/index"
  },
  {
    "id":2,
    "name":"Sheridan",
    "link":"/pages/index/index"
  },
  {
    "id":20,
    "name":"Stella McCartney",
    "link":"/pages/index/index"
  },
  {
    "id":39,
    "name":"Ted baker",
    "link":"/pages/index/index"
  },
  {
    "id":21,
    "name":"Tommy Hilfiger",
    "link":"/pages/index/index"
  },
  {
    "id":18,
    "name":"Tony Bianco",
    "link":"/pages/index/index"
  },
  {
    "id":33,
    "name":"Wolf kanat",
    "link":"/pages/index/index"
  },
  {
    "id":34,
    "name":"7even",
    "link":"/pages/index/index"
  }
]



Page({

  data: {
    items: brands,
    categories: []
  },

  onLoad() {
    this._generateAlphabet();
  },

  _generateAlphabet: function () {

      let alphabet = [];
      for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
          alphabet.push({name: String.fromCharCode(i), text: String.fromCharCode(i)});
      }

      alphabet.push({name:'#', text: '#'});

      this.setData({
        categories: alphabet
      });
  }

})
