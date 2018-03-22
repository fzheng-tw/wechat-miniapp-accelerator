
const baseUrl = 'http://localhost:3000'

const request = function(url, method, header, data ) {

  return new Promise((resolve, reject) => {

    const header = {};

    const fail = (error) => {
      reject();
    };

    const success = (response) => {
      if(response.statusCode < 300) {
        resolve(response);
      } else {
        reject();
      }
    };

    wx.request({
      url: `${baseUrl}/${url}`,
      header,
      method,
      data,
      success,
      fail
    });
  });
};

const getRequestMethod = (method) => {
  return (url, options) => {
    return request(url, method, options.header, options.data);
  }
};

exports.get = getRequestMethod('GET');
exports.post = getRequestMethod('POST');
exports.put = getRequestMethod('PUT');
exports.delete = getRequestMethod('DELETE');
exports.options = getRequestMethod('OPTIONS');
