import request from './request';

const KEY = '_session_token_';

export const storeToken = (token) => {
  wx.setStorage({
      key: KEY,
      data: token
  });
};

export const getStoredToken = () => {
  try {
    return wx.getStorageSync(KEY);
  } catch (err){
    console.error(err);
    return null;
  }
};

export const getNewToken = (code) => {
  return request.post(
    'wechat-mini-app/get-session', {data: {code: code}}
  );
};

export const verifyToken = (token) => {
  return request.post(
    'wechat-mini-app/verify-session', {data: {token: token}}
  );
};
