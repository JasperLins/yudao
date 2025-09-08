import request from '@/sheep/request';

const BrokerageApi = {
  // 绑定分销用户
  bindBrokerageUser: (data) => {
    return request({
      url: '/trade/brokerage-user/bind',
      method: 'PUT',
      data,
    });
  },

};

export default BrokerageApi;
