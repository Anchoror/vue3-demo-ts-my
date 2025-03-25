// 微信jssdk

import { getSignature } from '@/api' //签名接口
import jweixin from 'weixin-js-sdk'


// 签名请求的响应
let response
const logoUrl = ref('')
const title = ref('')
const desc = ref('')
export function useWxSdk() {
  //判断是否在微信中
  const isWechat = () => {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/micromessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }
  // 初始化配置
  const wxInit = (config = {}) => {
    if (!isWechat()) {
      console.error('not in wechat')
      return new Promise((resolve, reject) => {
        resolve(false)
      })
    }

    return new Promise(async (resolve, reject) => {
      if (!response) {
        const responseStr = await getSignature(location.href.split('#')[0])

        response = JSON.parse(responseStr)

        let wxconfig = Object.assign(config, {
          debug: response.debug || false, //调试模式
          appId: response.appId, // 必填，公众号的唯一标识
          timestamp: response.timestamp, // 必填，生成签名的时间戳
          nonceStr: response.nonceStr, // 必填，生成签名的随机串,注意这个s是大写
          signature: response.signature, // 必填，签名
          jsApiList: response.jsApiList || [
            'updateAppMessageShareData',
            'updateTimelineShareData',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareQZone',
            'hideMenuItems'
          ] // 必填，需要使用的JS接口列表
        })
        jweixin.config(wxconfig)

        jweixin.error(function (res) {
          reject(res)
        })
        jweixin.ready(function () {
          resolve(jweixin)
        })
      } else {
        resolve(jweixin)
      }
    })
  }

  // 检验Api
  const checkApi = (jsApi) => {
    return new Promise((resolve, reject) => {
      jweixin.checkJsApi({
        jsApiList: [jsApi], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function (res) {
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
          if (res.checkResult[jsApi]) {
            resolve(res.errMsg)
          } else {
            reject(res.errMsg)
          }
        }
      })
    })
  }

  // 配置wx
  const setWxShare = () => {
    wxInit().then((sdk) => {
      let shareUrl = location.href
      checkApi('updateAppMessageShareData')
        .then(() => {
          sdk.updateAppMessageShareData({
            title: title.value, // 分享标题
            desc: desc.value, // 分享描述
            link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: logoUrl.value || '', // 分享图标
            success: function () {
              // 设置成功
              console.log('success set', shareUrl)
            }
          })
        })
        .catch(() => {
          sdk.onMenuShareAppMessage({
            title: title.value, // 分享标题
            desc: desc.value, // 分享描述
            link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: logoUrl.value || '', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
              // 用户点击了分享后执行的回调函数
              console.log('success share', shareUrl)
            }
          })

          sdk.onMenuShareQQ({
            title: title.value, // 分享标题
            desc: desc.value, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: logoUrl.value || '', // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
              console.log('success share', shareUrl)
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
              console.log('取消分享')
            }
          })
        })

      checkApi('updateTimelineShareData')
        .then(() => {
          sdk.updateTimelineShareData({
            title: title.value, // 分享标题
            link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: logoUrl.value || '', // 分享图标
            success: function () {
              // 设置成功
              console.log('success set', shareUrl)
            }
          })
        })
        .catch(() => {
          sdk.onMenuShareTimeline({
            title: title.value, // 分享标题
            link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: logoUrl.value || '', // 分享图标
            success: function () {
              // 用户点击了分享后执行的回调函数
              console.log('success set', shareUrl)
            }
          })

          sdk.onMenuShareQZone({
            title: title.value, // 分享标题
            desc: desc.value, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: logoUrl.value || '', // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
              console.log('success share', shareUrl)
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
              console.log('取消分享')
            }
          })
        })
    })
  }

  return {
    wxInit,
    checkApi,
    setWxShare
  }
}
