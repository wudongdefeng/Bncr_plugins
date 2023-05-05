let RspyList = {
    /* 监控信息配置 */
    SpyList: [
        {
            Name: 'M收藏有礼',
            Script:'m_jd_fav_shop_gift.js',
            ListenEnv:['M_FAV_SHOP_ARGV'],
            SetEnv: {
                M_FAV_SHOP_ARGV: 'M_FAV_SHOP_ARGV',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M关注有礼',
            Script:'m_jd_follow_shop.js',
            ListenEnv:['M_FOLLOW_SHOP_ARGV'],
            SetEnv: {
                M_FOLLOW_SHOP_ARGV: 'M_FOLLOW_SHOP_ARGV',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M加购',
            Script:'m_jd_wx_addCart.js',
            ListenEnv:['M_WX_ADD_CART_URL'],
            SetEnv: {
                M_WX_ADD_CART_URL: 'M_WX_ADD_CART_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M盖楼领奖',
            Script:'m_jd_wx_buildDraw.js',
            ListenEnv:['M_WX_BUILD_DRAW_URL'],
            SetEnv: {
                M_WX_BUILD_DRAW_URL: 'M_WX_BUILD_DRAW_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M知识超人',
            Script:'m_jd_wx_knowledge.js',
            ListenEnv:['M_WX_KNOWLEDGE_URL'],
            SetEnv: {
                M_WX_KNOWLEDGE_URL: 'M_WX_KNOWLEDGE_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M分享有礼',
            Script:'m_jd_wx_share.js',
            ListenEnv:['M_WX_SHARE_URL'],
            SetEnv: {
                M_WX_SHARE_URL: 'M_WX_SHARE_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M关注有礼抽奖',
            Script:'m_jd_wx_followDraw.js',
            ListenEnv:['M_WX_FOLLOW_DRAW_URL'],
            SetEnv: {
                M_WX_FOLLOW_DRAW_URL: 'M_WX_FOLLOW_DRAW_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M等级/生日礼包',
            Script:'m_jd_wx_levelBirth.js',
            ListenEnv:['M_WX_LEVEL_BIRTH_URL'],
            SetEnv: {
                M_WX_LEVEL_BIRTH_URL: 'M_WX_LEVEL_BIRTH_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M无线店铺抽奖',
            Script:'m_jd_wx_luckDraw.js',
            ListenEnv:['M_WX_LUCK_DRAW_URL'],
            SetEnv: {
                M_WX_LUCK_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M无线游戏',
            Script:'m_jd_wx_game.js',
            ListenEnv:['M_WX_GAME_URL'],
            SetEnv: {
                M_WX_GAME_URL: 'M_WX_GAME_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M关注有礼无线',
            Script:'m_jd_wx_shopGift.js',
            ListenEnv:['M_WX_SHOP_GIFT_URL'],
            SetEnv: {
                M_WX_SHOP_GIFT_URL: 'M_WX_SHOP_GIFT_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'HarbourJ加购',
            Script:'jd_wxCollectionActivity.py',
            ListenEnv:['jd_wxCollectionActivityUrl'],
            SetEnv: {
                jd_wxCollectionActivity_activityUrl: 'jd_wxCollectionActivityUrl',
				M_WX_ADD_CART_URL: 'jd_wxCollectionActivityUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '电脑配件',
            Script:'jd_faker_wind_computer.js',
            ListenEnv:['computer_activityIdList'],
            SetEnv: {
                computer_activityIdList: 'computer_activityIdList',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran_lzkj_loreal抽奖',
            Script:'jd_lzkj_loreal_draw.js',
            ListenEnv:['jd_lzkj_loreal_draw_url'],
            SetEnv: {
                jd_lzkj_loreal_draw_url: 'jd_lzkj_loreal_draw_url',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '店铺抽奖通用活动',
            Script:'jd_luck_draw.js',
            ListenEnv:['LUCK_DRAW_URL'],
            SetEnv: {
                M_WX_LUCK_DRAW_URL: 'LUCK_DRAW_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '购物车锦鲤',
            Script:'jd_wxCartKoi.js',
            ListenEnv:['jd_wxCartKoi_activityId'],
            SetEnv: {
                jd_wxCartKoi_activityId: 'jd_wxCartKoi_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'harbor-inter邀请有礼',
            Script:'jd_lzkjInteract.py',
            ListenEnv:['jd_lzkjInteractUrl'],
            SetEnv: {
                jd_lzkj_loreal_invite_url: 'jd_lzkjInteractUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-cj生日',
            Script:'jd_wxMcLevelAndBirthGifts.js',
            ListenEnv:['jd_wxMcLevelAndBirthGifts_activityId'],
            SetEnv: {
                jd_cjhy_wxMcLevelAndBirthGifts_ids: 'jd_wxMcLevelAndBirthGifts_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'HarbourJ-关注店铺有礼',
            Script:'jd_wxShopFollow.py',
            ListenEnv:['jd_wxShopFollowId'],
            SetEnv: {
                jd_lzkj_wxShopFollowActivity_activityId: 'jd_wxShopFollowId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'HarbourJ-关注有礼无线',
            Script:'jd_wxShopGift.py',
            ListenEnv:['jd_wxShopGiftId'],
            SetEnv: {
                jd_wxShopGiftId: 'jd_wxShopGiftId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'HarbourJ-微定制',
            Script:'jd_wdz.py',
            ListenEnv:['jd_wdz_activityId'],
            SetEnv: {
                jd_cjhydz_microDz_Id: 'jd_wdz_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'M组队瓜分',
            Script:'m_jd_wx_team.js',
            ListenEnv:['M_WX_TEAM_URL'],
            SetEnv: {
                M_WX_TEAM_URL: 'M_WX_TEAM_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran店铺刮奖',
            Script:'jd_drawCenter.js',
            ListenEnv:['jd_drawCenter_activityId'],
            SetEnv: {
                jd_drawCenter_activityId: 'jd_drawCenter_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-lzkj_loreal邀请好友',
            Script:'jd_lzkj_loreal_invite.js',
            ListenEnv:['jd_lzkj_loreal_invite_url'],
            SetEnv: {
                jd_lzkj_loreal_invite_url: 'jd_lzkj_loreal_invite_url',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-抽奖机',
            Script:'jd_lottery.js',
            ListenEnv:['JD_Lottery'],
            SetEnv: {
                JD_Lottery: 'JD_Lottery',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-店铺抽奖（超级无线欧莱雅）',
            Script:'jd_lzkj_loreal_draw.js',
            ListenEnv:['jd_lzkj_loreal_draw.js'],
            SetEnv: {
                jd_lzkj_loreal_draw.js: 'jd_lzkj_loreal_draw.js',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-加购有礼（超级无线欧莱雅）',
            Script:'jd_lzkj_loreal_cart.js',
            ListenEnv:['jd_lzkj_loreal_cart_url'],
            SetEnv: {
                jd_lzkj_loreal_cart_url: 'jd_lzkj_loreal_cart_url',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-关注店铺有礼（超级无线欧莱雅）',
            Script:'jd_lzkj_loreal_followShop.js',
            ListenEnv:['jd_lzkj_loreal_followShop_url '],
            SetEnv: {
                jd_lzkj_loreal_followShop_url : 'jd_lzkj_loreal_followShop_url ',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '七日签到url',
            Script:'jd_sevenday_url.js',
            ListenEnv:['jd_sevenDay_activityUrl'],
            SetEnv: {
                jd_sevenDay_activityUrl: 'jd_sevenDay_activityUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'HarbourJ-建楼有礼',
            Script:'jd_wxBulidActivity.py',
            ListenEnv:['jd_wxBulidActivityId'],
            SetEnv: {
                jd_lzkj_wxBuildActivity_activityId: 'jd_wxBulidActivityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-lzkj打豆豆',
            Script:'jd_wxgame.js',
            ListenEnv:['jd_wxgame_activityId'],
            SetEnv: {
                jd_wxgame_activityId: 'jd_wxgame_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran知识达人',
            Script:'jd_wxKnowledgeActivity.js',
            ListenEnv:['jd_wxKnowledgeActivity_activityUrl '],
            SetEnv: {
                jd_wxKnowledgeActivity_activityUrl : 'jd_wxKnowledgeActivity_activityUrl ',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-幸运福袋',
            Script:'jd_wxUnPackingActivity.js',
            ListenEnv:['jd_wxUnPackingActivity_activityId'],
            SetEnv: {
                jd_wxUnPackingActivity_activityId: 'jd_wxUnPackingActivity_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'HarbourJ-店铺礼包',
            Script:'jd_shopFollowGift.py',
            ListenEnv:['jd_shopFollowGiftId'],
            SetEnv: {
                jd_shopFollowGiftId: 'jd_shopFollowGiftId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-txzj加购有礼',
            Script:'jd_txzj_cart_item.js',
            ListenEnv:['jd_cart_item_activityUrl'],
            SetEnv: {
                jd_cart_item_activityUrl: 'jd_cart_item_activityUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-txzj关注抽奖',
            Script:'jd_txzj_lottery.js',
            ListenEnv:['jd_lottery_activityUrl'],
            SetEnv: {
                jd_lottery_activityUrl: 'jd_lottery_activityUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-txzj关注商品',
            Script:'jd_txzj_collect_shop.js',
            ListenEnv:['jd_collect_shop_activityUrl'],
            SetEnv: {
                jd_collect_shop_activityUrl: 'jd_collect_shop_activityUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-txzj关注有礼',
            Script:'jd_txzj_collect_item.js',
            ListenEnv:['jd_collect_item_activityUrl'],
            SetEnv: {
                jd_collect_item_activityUrl: 'jd_collect_item_activityUrl',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'feverun-txzj签到',
            Script:'jd_txzj_sign_in.js',
            ListenEnv:['jd_txzj_sign_in_id'],
            SetEnv: {
                jd_txzj_sign_in_id: 'jd_txzj_sign_in_id',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-集卡有礼',
            Script:'jd_wxCollectCard.js',
            ListenEnv:['jd_wxCollectCard_activityId'],
            SetEnv: {
                jd_wxCollectCard_activityId: 'jd_wxCollectCard_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-粉丝互动',
            Script:'jd_wxFansInterActionActivity.js',
            ListenEnv:['jd_wxFansInterActionActivity_activityId'],
            SetEnv: {
                jd_wxFansInterActionActivity_activityId: 'jd_wxFansInterActionActivity_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-读秒',
            Script:'jd_wxSecond.js',
            ListenEnv:['jd_wxSecond_activityId'],
            SetEnv: {
                jd_wxSecond_activityId: 'jd_wxSecond_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-分享有礼',
            Script:'jd_wxShareActivity.js',
            ListenEnv:['jd_wxShareActivity_activityId'],
            SetEnv: {
                jd_fxyl_activityId: 'jd_wxShareActivity_activityId',
				SHARE_ACTIVITY_ID: 'jd_wxShareActivity_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '邀请赢大礼',
            Script:'jd_inviteFriendsGift.py',
            ListenEnv:['jd_inv_authorCode'],
            SetEnv: {
                yhyauthorCode: 'jd_inv_authorCode',
				prodevactCode: 'jd_inv_authorCode',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'jinggeng邀请入会有礼',
            Script:'jd_jinggengInvite.py',
            ListenEnv:['jinggengInviteJoin'],
            SetEnv: {
                jinggengInviteJoin: 'jinggengInviteJoin',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '通用开卡-joinCommon系列',
            Script:'jd_joinCommon_opencard.py',
            ListenEnv:['jd_joinCommonId'],
            SetEnv: {
                jd_joinCommonId: 'jd_joinCommonId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '通用开卡-shopLeague系列',
            Script:'jd_shopLeague_opencard.py',
            ListenEnv:['jd_shopLeagueId'],
            SetEnv: {
                jd_shopLeagueId: 'jd_shopLeagueId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'harbour-店铺抽奖',
            Script:'jd_dpcj.py',
            ListenEnv:['DPCJID'],
            SetEnv: {
                DPCJID: 'DPCJID',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'feverun-强制入会',
            Script:'jd_card_force.js',
            ListenEnv:['VENDER_ID'],
            SetEnv: {
                OPEN_CARD_SHOP_ID: 'VENDER_ID',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-完善信息有礼',
            Script:'jd_completeInfoActivity.js',
            ListenEnv:['jd_completeInfoActivity_activityId'],
            SetEnv: {
                jd_cjhy_completeInfoActivity_Ids: 'jd_completeInfoActivity_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran-CJ每日抢',
            Script:'jd_daily.js',
            ListenEnv:['jd_cjdaily_activityId'],
            SetEnv: {
                jd_cjhy_daily_ids: 'jd_cjdaily_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: '积分兑换',
            Script:'point_exchange.js',
            ListenEnv:['POINT_EXCHANGE_URL'],
            SetEnv: {
                POINT_EXCHANGE_URL: 'POINT_EXCHANGE_URL',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        },
        {
            Name: 'kingran品类联合',
            Script:'jd_categoryUnion.js',
            ListenEnv:['jd_categoryUnion_activityId'],
            SetEnv: {
                jd_categoryUnion_activityId: 'jd_categoryUnion_activityId',
            },
            TimeOut: 3600,
            Interval: 1800,
            RunPanel: [0],
            Disable: true,
        }
],
    /* 监控列表 */
    ListenList: [
        {
            Name: '备注1',
            Id: '-1001744932665',
        },
        {
            Name: '备注2',
            Id: '-1001776658413',
        }
    ],

    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 10,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: false /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'tgBot', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-1001744932665', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
        // 	{
        // 	platform: "HumanTG",
        // 	toGroupOrUser: "groupId",   //通知类型,个人userId //群groupId
        // 	Id: "-1001744932665"
        // },
         {
             platform: 'tgBot', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '-1001704263871', //个人id 或群id
         },
    ],
};


module.exports = {
    RspyList,
};
