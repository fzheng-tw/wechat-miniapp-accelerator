const voucher = {
  voucher_value: 5,
  current_balance: 4.5,
  expiry_date: '2018-12-28',
  pin: 4238,
  barcode: 'https://i.imgur.com/vodjR3W.jpg',
  card_number: 6009671200218,
  specification: '请在代金券有效期内使用. 单笔消费满$80方可使用此代金券, 每次结账限用一张.'
}

Page({

  data: {
    voucher: voucher
  }

})
