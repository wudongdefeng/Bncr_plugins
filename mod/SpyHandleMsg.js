/**
 * @name SpyHandleMsg
 * @version v1.0.0
 * @author Aming
 * @origin 红灯区
 * @create_at 2033-10-27 11:12:09
 * @description 当触发的消息中没有 export线报时,触发的消息会经过此模块解析
 * @module true
 * @public false
 */


const request = require('util').promisify(require('request'));

module.exports = async msg => {
    /*
     当触发的消息中没有 export格式变量时,触发的消息会经过此模块解析
     因此,你可以在此模块中添加你对export以外的消息进行解析,返回一个export线报
    */
    const urlReg = /https:\/\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\*\+,%;\=]*/g;
    const codeReg = /[(|)|#|@|$|%|¥|￥|!|！][0-9a-zA-Z]{10,14}[(|)|#|@|$|%|¥|￥|!|！]/g;
    const urlArr = msg.match(urlReg)?.map(url => decodeURIComponent(url)) ?? [];
    const codeArr = msg.match(codeReg) ?? [];
    for (const [i, code] of codeArr.entries()) {
        const res = await nolanDecode(code);
        res ? (codeArr[i] = res) : codeArr.slice(i, 1);
    }
    let result = '';
    for (const link of [...urlArr, ...codeArr])
        urlToExport(link)?.forEach(e => (result += `export ${e.name}="${e.value}"\n`));
    /*
    如果该导出的函数返回值不是一个string或不是一个 export格式的线报时,该msg会被放弃 
    如果该模块中的代码报错 将强制返回空字符串
    */
    return result ? `外部模块解析结果:\n${result}` : '';
};

/* 解析列表 取于白眼*/
function ListS() {
    return [
        /******************KR库********************** */
        {
            keyword: /cjhy(dz)?-isv\.isvjcloud\.com\/wxTeam\/activity/,
            name: "CJ组队瓜分",
            trans: [{
                ori: "activityId",
                redi: "jd_cjhy_activityId"
            }]
        },
        {
            keyword: /lzkj(dz)?-isv\.isvj(clou)?d.com\/wxTeam\/activity/,
            name: "LZ组队瓜分",
            trans: [{
                ori: "activityId",
                redi: "jd_zdjr_activityId"
            }]
        },
        {
            keyword: /cjhy(dz)?-isv\.isvjcloud\.com\/microDz\/invite\/openLuckBag/,
            name: "CJ微定制福袋",
            trans: [{
                ori: "activityId",
                redi: "jd_wdzfd_activityId"
            }]
        },
        {
            keyword: /lzkj(dz)?-isv\.isvj(clou)?d.com\/wxgame/,
            name: "LZ店铺游戏",
            trans: [{
                ori: "activityId",
                redi: "jd_wxgame_activityId"//kr
            }]
        },
        {
            keyword: 'wxCartKoi/cartkoi',
            name: "LZ购物车锦鲤",
            trans: [{
                ori: "activityId",
                redi: "jd_wxCartKoi_activityId"
            }]
        },
/*        {
            keyword: "wxShopFollowActivity",
            name: "店铺关注有礼",
            trans: [{
                ori: "-1",
                redi: "jd_wxShopFollowActivity_activityUrl"
            }]
        },   */   
        {
            keyword: /https:\/\/lzkj-isv.isvj(clou)?d.com\/drawCenter/,
            name: "LZ刮刮乐",
            trans: [{
                ori: "activityId",
                redi: "jd_drawCenter_activityId"
            }]
        },
        {
            keyword: /lzkjdz-isv.isvj(clou)?d.com\/wxFansInterActionActivity/,
            name: "LZ粉丝互动",
            trans: [{
                ori: "activityId",
                redi: "jd_wxFansInterActionActivity_activityId"
            }]
        },
        {
            keyword: "https://cjhy-isv.isvjcloud.com/sign/signActivity",
            name: "CJ超级店铺无线签到",
            trans: [{
                ori: "activityId",
                redi: "CJHY_SIGN"
            }]
        },
        {
            keyword: /cjhy-isv.isvj(clou)?d.com\/sign\/sevenDay\/signActivity/,
            name: "CJ超级店铺无线签到",
            trans: [{
                ori: "activityId",
                redi: "CJHY_SEVENDAY"
            }]
        },
        {
            keyword: /lzkj-isv.isvj(clou)?d.com\/sign\/signActivity/,
            name: "LZ超级店铺无线签到",
            trans: [{
                ori: "activityId",
                redi: "LZKJ_SIGN"
            }]
        },
        {
            keyword: /(cjhy|lzkj)-isv\.isvj(clou)?d\.com\/sign/,
            name: "超级无线店铺签到-监控版",
            trans: [{
                ori: "-1",
                redi: "jd_sevenDay_activityUrl"
            }]
        },
        {
            keyword: /lzkj-isv.isvj(clou)?d.com\/sign\/sevenDay/,
            name: "LZ超级店铺无线签到",
            trans: [{
                ori: "activityId",
                redi: "LZKJ_SEVENDAY"
            }]
        },
        {
            keyword: /lzkjdz-isv.isvj(clou)?d.com\/wxUnPackingActivity/,
            name: "LZ让福袋飞",
            trans: [{
                ori: "activityId",
                redi: "jd_wxUnPackingActivity_activityId"
            }]
        },
        {
            keyword: "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity",
            name: "CJ生日礼包和会员等级礼包",
            trans: [{
                ori: "activityId",
                redi: "jd_wxMcLevelAndBirthGifts_activityId"
            }]
        },
        {
            keyword: /wxKnowledgeActivity/,
            name: "知识超人",
            trans: [{
                ori: "-1",
                redi: "jd_wxKnowledgeActivity_activityUrl"//KR
            }]
        },
        {
            keyword: "https://cjhy-isv.isvjcloud.com/activity/daily/",
            name: "cjhy每日抢",
            trans: [{
                ori: "activityId",
                redi: "jd_cjdaily_activityId"
            }]
        },
        {
            keyword: "https://lzkj-isv.isvjd.com/activity/daily/",
            name: "lzkj每日抢",
            trans: [{
                ori: "activityId",
                redi: "jd_daily_activityId"
            }]
        },
        {
            keyword: "https://txzj-isv.isvjcloud.com/cart_item",
            name: "收藏大师-加购有礼",
            trans: [{
                ori: "-1",
                redi: "jd_cart_item_activityUrl"//kr
            }]
        },
        {
            keyword: "https://txzj-isv.isvjcloud.com/collect_item",
            name: "收藏大师-关注有礼",
            trans: [{
                ori: "-1",
                redi: "jd_collect_item_activityUrl"//kr
            }]
        },
        {
            keyword: "https://txzj-isv.isvjcloud.com/collect_shop",
            name: "收藏大师-关注商品",
            trans: [{
                ori: "-1",
                redi: "jd_collect_shop_activityUrl"//kr
            }]
        },
        {
            keyword: "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10054/",
            name: "上上签抽奖interactsaas-KR",
            trans: [{
                ori: "-1",
                redi: "jd_lzkj_loreal_upperSign_url"//kr
            }]
        },
        {
            keyword: "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=(10023|10040)/",
            name: "签到有礼LOREAL-KR",
            trans: [{
                ori: "-1",
                redi: "jd_lzkj_loreal_daySign_url"//kr
            }]
        },
        {
            keyword: "https://txzj-isv.isvjcloud.com/lottery",
            name: "收藏大师-幸运抽奖",
            trans: [{
                ori: "-1",
                redi: "jd_lottery_activityUrl"//kr
            }]
        },

        /*******************J********************** */  
        {
            keyword: /(interactsaas|interact)\/(index)?\?activityType=10023/,
            name: "interactsaas日历签到",
            trans: [{
                ori: "-1",
                redi: "INTERACT_SIGN_IDS"
            }]
        },
        //{
//            keyword: /(interactsaas|interact)\/(index)?\?activityType=10033/,
//            name: "interactsaas组队",
//            trans: [{
//                ori: "-1",
//                redi: "M_WX_TEAM_URL"
//            }]
//        },
//        {
//            keyword: /(interactsaas|interact)\/(index)?\?activityType=10039/,
//            name: "interactsaas知识",
//            trans: [{
//                ori: "-1",
//                redi: "M_WX_KNOWLEDGE_URL"
//            }]
//        },
//        {
//            keyword: /(interactsaas|interact)\/(index)?\?activityType=10043/,
//            name: "interactsaas分享",
//            trans: [{
//                ori: "-1",
//                redi: "M_WX_SHARE_URL"
//            }]
//        },
//        {
//            keyword: /(interactsaas|interact)\/(index)?\?activityType=10068/,
//            name: "interactsaas邀关",
//            trans: [{
//                ori: "-1",
//                redi: "INVITE_FOLLOW_SHOP_URL"
//            }]
//        },
//        {
//            keyword: /(interactsaas|interact)\/(index)?\?activityType=10069/,
//            name: "interactsaas关注",
//            trans: [{
//                ori: "-1",
//                redi: "M_WX_FOLLOW_DRAW_URL"
//            }]
//        },
//        {
//            keyword: /(interactsaas|interact)\/(index)?\?activityType=(10082|10084|10089|10091|10095)/,
//            name: "interactsaas游戏",
//            trans: [{
//                ori: "-1",
//                redi: "GAME_LUCK_DRAW_URL"
//            }]
//        },
//        {
//            keyword: /wxInviteActivity\/openCard/,
//            name: "WX邀请入会",
//            trans: [{
//                ori: "-1",
//                redi: "WX_INVITE_OPENCARD_URL"
//            }]
//        },
//
        /*******************walle库********************* */
        {
            keyword:  /(interactsaas|interact)\/(index)?\?activityType=(10006|10070)/,
            name: "M邀请有礼INTERACT",
            trans: [{
                ori: "-1",
                redi: "M_INTERACT_INVITE_URL"//wall
            }]
        },
        {
            keyword: /jinggeng-isv\.isvj(clou)?d\.com\/ql\/front\/showInviteJoin/,
            name: "M邀请有礼",
            trans: [{
                ori: "-1",
                redi: "M_JINGGENG_INVITE_URL",
            }]
        }, 
        {
            keyword:  /(interactsaas|interact)\/(index)?\?activityType=10036/,
            name: "M购物车锦鲤",
            trans: [{
                ori: "-1",
                redi: "M_WX_CARTKOI_URL"//wall
            }]
        },
        {
            keyword:  /wxgame\/activity/,
            name: "M打豆豆",
            trans: [{
                ori: "-1",
                redi: "M_WX_DADOUDOU_URL"//wall
            }]
        },
        {
            keyword:  /wxGameActivity/,
            name: "M无线游戏",
            trans: [{
                ori: "-1",
                redi: "M_WX_GAME_URL"//wall
            }]
        },
        {
            keyword: /wxSecond/,
            name: "M读秒手速",
            trans: [{
                ori: "-1",
                redi: "M_WX_SECOND_DRAW_URL"
            }]
        },
        {
            keyword: /wxShareActivity/,
            name: "M分享有礼",
            trans: [{
                ori: "-1",
                redi: "M_WX_SHARE_URL"//wall
            }]
        },
        {
            keyword: /wxBuildActivity/,
            name: "M盖楼领奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_BUILD_DRAW_URL"
            }]
        },
        {
            keyword: /(interactsaas|interact)\/(index)?\?activityType=(10053|10069)/,
            name: "M关注抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_FOLLOW_DRAW_URL"
            }]
        },
        {
            keyword: "wxShopFollowActivity/activity",
            name: "M关注抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_FOLLOW_DRAW_URL"
            }]
        },
        {
            keyword: /wxCollectCard/,
            name: "M集卡抽奖",
            trans: [{
                ori: -1,
                redi: "M_WX_COLLECT_CARD_URL"//wall
            }]
        },
        {
            keyword: /wxCollectionActivity/,
            name: "M加购有礼",
            trans: [{
                ori: "-1",
                redi: "M_WX_ADD_CART_URL"//wall
            }]
        },
        {
            keyword: /(interactsaas|interact)\/(index)?\?activityType=10024/,
            name: "M加购有礼",
            trans: [{
                ori: "-1",
                redi: "M_WX_ADD_CART_URL"//wall
            }]
        },
        {
            keyword: /cjhy-isv\.isvjcloud\.com\/wx\/completeInfoActivity/,
            name: "M完善有礼",
            trans: [{
                ori: "-1",
                redi: "M_WX_COMPLETE_DRAW_URL"
            }]
        },
        {
            keyword: /(interactsaas|interact)\/(index)?\?activityType=10049/,
            name: "M完善有礼",
            trans: [{
                ori: "-1",
                redi: "M_WX_COMPLETE_DRAW_URL"
            }]
        },
        {
            keyword: "wxDrawActivity/activity",
            name: "M幸运抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_LUCK_DRAW_URL"//wall
            }]
        },
        {
            keyword: "lzkj-isv.isvjcloud.com/lzclient",
            name: "M幸运抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_LUCK_DRAW_URL"//wall
            }]
        },
        {
            keyword: /(interactsaas|interact)\/(index)?\?activityType=(10020|10021|10026|10031|10046|10063|10073|10080)/,
            name: "M幸运抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_LUCK_DRAW_URL"//wall
            }]
        },
                {
            keyword: "https://gzsl-isv.isvjcloud.com/wuxian/mobileForApp/dist2/views/pages",
            name: "M幸运抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_LUCK_DRAW_URL"//wall
            }]
        },
        {
            keyword: /cjhy(dz)?-isv\.isvj(clou)?d\.com\/wxTeam\/activity/,
            name: "M组队瓜分",
            trans: [{
                ori: "-1",
                redi: "M_WX_TEAM_URL"//wall
            }]
        },
        {
            keyword: /lzkj(dz)?-isv\.isvj(clou)?d\.com\/wxTeam\/activity/,
            name: "M组队瓜分",
            trans: [{
                ori: "-1",
                redi: "M_WX_TEAM_URL"//wall
            }]
        },

        {
            keyword: /drawCenter/,
            name: "M老虎机抽奖",
            trans: [{
                ori: "-1",
                redi: "M_WX_CENTER_DRAW_URL"
            }]
        },
        {
            keyword: /wxMcLevelAndBirthGifts/,
            name: "M等级/生日礼包",
            trans: [{
                ori: "-1",
                redi: "M_WX_LEVEL_BIRTH_URL"
            }]
        },
        {
            keyword: /wxPointShopView/,
            name: "积分兑换",
            trans: [{
                ori: "-1",
                redi: "POINT_EXCHANGE_URL"
            }]
        },        
        {
            keyword: /wxShopGift/,
            name: "M关注有礼无线",
            trans: [{
                ori: "-1",
                redi: "M_WX_SHOP_GIFT_URL"
            }]
        },

        
        {
            keyword: /jinggeng-isv\.isvj(clou)?d\.com\/ql\/front\/showInviteJoin/,
            name: "（船长）邀请入会赢好礼·京耕",
            trans: [{
                ori: "id user_id",
                redi: "jinggengInviteJoin",
                sep: "&"//船长
            }]
        }, 
        {
            keyword: /cjhy(dz)?-isv\.isvjcloud\.com\/microDz\/invite\/activity/,
            name: "（船长）微定制组队瓜分",
            trans: [{
                ori: "activityId",
                redi: "jd_wdz_activityId"//船长
            }]
        },
        {
            keyword: /pro(dev)?\.m\.jd\.com\/mall\/active\/dVF7gQUVKyUcuSsVhuya5d2XD4F/,
            name: "（船长）邀好友赢大礼",
            trans: [{
                ori: "code",
                redi: "jd_inv_authorCode"//船长
            }]
        },  
        {
            keyword: /shop\.m\.jd\.com\/shop\/home/,
            name: "（船长）店铺会员礼包-JK",
            trans: [{
                ori: "shopId",
                redi: "jd_shopCollectGiftId"//船长
            }]
        },  
        {
            keyword: /shop.m.jd.com\/\?/,
            name: "关注有礼-JK",
            trans: [{
                ori: "shopId",
                redi: "jd_shopFollowGiftId"//船长
            }]
        },
        {
            keyword: /lzdz1-isv\.isvjd\.com\/dingzhi\/shop\/league\/activity/,
            name: "（船长）通用开卡-shopLeague系列",
            trans: [{
                ori: "activityId",
                redi: "jd_shopLeagueId"//船长
            }]
        },
        {
            keyword: /lzdz1-isv\.isvjcloud\.com\/dingzhi\/joinCommon\/activity/,
            name: "（船长）通用开卡-joinCommon系列",
            trans: [{
                ori: "activityId",
                redi: "jd_joinCommonId"//船长
            }]
        },
        {
            keyword: /(lzkj-isv.isvj(clou)?d.com\/wxShopGift)|(cjhy-isv\.isvjcloud\.com\/wxShopGift)/,
            name: "（船长）店铺特效关注有礼-JK",
            trans: [{
                ori: "activityId",
                redi: "jd_wxShopGiftId"//船长
            }]
        },
        {
            keyword: /pro(dev)?\.m\.jd\.com\/mall\/active\/dVF7gQUVKyUcuSsVhuya5d2XD4F/,
            name: "【YYDS】火箭邀请",
            trans: [{
                ori: "code",
                redi: "prodevactCode"
            }]
        },
       
    ];
}

/* 诺兰口令解析接口 */
async function nolanDecode(code) {
    try {
        return (
            await request({
                url: `https://api.nolanstore.top/JComExchange`,
                method: 'post',
                body: {
                    code,
                },
                json: true,
            })
        )?.body?.data?.jumpUrl;
    } catch (e) {
        console.log('nolanDecode ' + e);
        return void 0;
    }
}
/* 解析函数 ,改于白眼 */
function urlToExport(url) {
    // console.log('urlToExport', url);
    let ResArr = [];
    const listS = ListS();
    for (const oneList of listS) {
        if (!url.match(oneList.keyword)) continue;
        for (const r of oneList.trans) {
            let temp = {
                act: oneList.name,
                name: r.redi,
            };
            if (+r.ori === -1) {
                temp['value'] = encodeURI(url);
            } else if (r.ori.indexOf(' ') !== -1) {
                //提取多参数作为变量值
                let pn = r.ori.split(' ');
                let pv = [];
                pn.forEach(ele => {
                    console.log(ele);
                    if (!ele) return;
                    let reg = new RegExp('(?<=' + ele + '(=|%3D))[^&%]+'),
                        actid = url.match(reg);
                    if (actid) pv.push(actid[0]);
                    else console.log(url + '\n中未找到活动参数:' + ele);
                });
                if (!pv.length) break;
                if (r.sep) temp['value'] = pv.join(r.sep);
                else console.log('内置解析规则' + JSON.stringify(oneList) + '缺少分割符');
            } else {
                // 提取参数作为变量
                let reg = new RegExp(`(?<=${r.ori}(=|%3D))[^&%]+`),
                    actid = url.match(reg);
                if (!actid) break;
                temp['value'] = actid[0];
            }
            temp['value'] && ResArr.push(temp);
        }
    }
    return ResArr;
}
