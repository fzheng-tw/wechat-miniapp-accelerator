
const baseUrl = 'http://localhost:3000'

const request = function(url, options) {
  return new Promise((resolve, reject) => {

    console.log(`${baseUrl}/${url}`);

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
      ...options,
      success,
      fail
    });
  });
};

const getRequestMethod = (method) => {
  return (url, options) => {
    return request(url, {...options, method});
  }
};

exports.get = getRequestMethod('GET');
exports.post = getRequestMethod('POST');
exports.put = getRequestMethod('PUT');
exports.delete = getRequestMethod('DELETE');
exports.options = getRequestMethod('OPTIONS');
