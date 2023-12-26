export default {
    "-help.helpCDlist": "帮助指令清单：",
    "-help.help": "help - 显示此说明讯息",
    "-help.toggles": "toggles - 显示所有模组的切换",
    "-help.toggle": "toggle <模组> enable/disable - 切换模组",
    "-help.op": "op <玩家> - 授予玩家管理员权限",
    "-help.deop": "deop <玩家> - 删除玩家的管理者权限",
    "-help.passwords": "passwords <oldPassword> <newPassword> - 更改密码",
    "-help.flagmode": "flagmode all/tag/bypass/admin - 更改警示模式",
    "-help.rank": "rank set/add/remove <player> <rank> - 更改玩家的聊天称号",
    "-help.rankclear": "rankclear <玩家> - 清除玩家的所有聊天称号",
    "-help.defaultrank": "defaultrank <rank> - 更改预设聊天称号",
    "-help.showallrank": "showallrank true/false - 在聊天中显示所有聊天称号",
    "-help.ban": "ban <玩家> <原因> <timeRegax/\"forever\"> - 停权玩家",
    "-help.unban": "unban <玩家> - 解除停权玩家",
    "-help.unbanremove": "unbanremove <玩家> - 从解禁伫列中删除玩家",
    "-help.unbanlist": "unbanlist - 显示解禁伫列中的所有玩家",
    "-help.freeze": "freeze <玩家> - 冻结玩家",
    "-help.unfreeze": "unfreeze <玩家> - 解冻玩家",
    "-help.vanish": "vanish - 隐藏自己",
    "-help.unvanish": "unvanish - 解除隐藏状态",
    "-help.invcopy": "invcopy <玩家> - 将玩家背包状态複製到自己的背包",
    "-help.invsee": "invsee <玩家> - 查看玩家的背包内容物",
    "-help.echestwipe": "echestwipe <玩家> - 清除玩家终界箱内全部物品",
    "-help.lockdowncode": "lockdowncode <get/set/random> <set: code>/[random: length] - 对世界锁定码作出行动",
    "-help.lockdown": "lockdown <code> - 使用锁定码锁定伺服器",
    "-help.unlock": "unlock <code> - 解锁伺服器",
    "-help.adminchat": "adminchat - 在管理员频道与公用频道之间切换",
    "-help.lang": "lang <language> - 更改语言",
    "-help.langlist": "langlist - 显示所有语言",

    "-about.line1": "Matrix 是一款基于 @minecraft API 的 Minecraft Bedrock 防外挂",
    "-about.version": "版本",
    "-about.author": "作者",

    "-toggles.toggle": "切换",
    "-toggles.module": "模组",
    "-toggles.toggleList": "切换清单：",
    "-toggles.unknownModule": "未知模组，尝试 %atoggles",
    "-toggles.toggleChange": "%a 模组已 %bd",
    "-toggles.unknownAction": "未知操作，请仅使用 enable/disable",
    "-toggles.already": "这个模组已被 %ad, 无法执行该操作",

    "-op.hasbeen": "%a 已被 %b 给予管理员权限",
    "-op.please": "请输入密码",
    "-op.now": "您现在是管理员",
    "-op.wrong": "密码错误!",
    "-op.wait": "请你在 %a 秒后再次尝试",

    "-deop.lockdown": "伺服器处于锁定模式",
    "-deop.notadmin": "%a 不是管理者",
    "-deop.hasbeen": "%a 已被 %b 解除管理员权限",

    "-passwords.oldnew": "请输入旧密码和新密码",
    "-passwords.wrong": "密码错误",
    "-passwords.changed": "密码已更改",

    "-flagmode.unknown": "未知操作，请仅使用 all/bypass/admin/tag/none",
    "-flagmode.changed": "警示模式已变更为 %a",

    "-rank.unknownAction": "未知操作，请仅使用 set/add/remove",
    "-rank.enter": "请输入聊天称号",
    "-rank.hasset": "%a 的聊天称号已设定为 %b",
    "-rank.hasadd": "%a 的聊天称号已新增 %b",
    "-rank.already": "%a 已经有 %b §r§crank",
    "-rank.hasremove": "%a 的聊天称号已删除",
    "-rank.norank": "%a 没有 %b §r§c 聊天称号",
    "-rank.empty": "%a 没有任何聊天称号",

    "-rankclear.has": "%a的聊天称号已被清除",
    "-rankclear.empty": "%a 没有任何聊天称号",

    "-defaultrank.enter": "请输入聊天称号",
    "-defaultrank.has": "预设聊天称号已设定为 %a",

    "-showallrank.unknown": "未知操作，请只使用 true/false",
    "-showallrank.has": "显示所有聊天称号已设定为 %a",

    "-ban.self": "你不能停权自己",
    "-ban.admin": "你不能停权管理者",
    "-ban.reason": "请输入原因",
    "-ban.time": "请输入时间, 例如: 1d20h30m40s",
    "-ban.has": "%a 已被 %b 停权",

    "-unban.self": "你无法解禁自己",
    "-unban.notban": "%a 未被停权",
    "-unban.add": "%a 已被加入至解禁队列",

    "-unbanremove.not": "%a 不在解禁队列",
    "-unbanremove.yes": "%a 已从解禁队列中删除",


    "-unbanlist.none": "解封队列中没有玩家",
    "-unbanlist.list": "解禁队列",

    "-freeze.self": "你不能冻结自己",
    "-freeze.admin": "你不能冻结管理员",
    "-freeze.has": "%a 已被 %b 冻结",
    "-freeze.already": "%a 已经冻结",

    "-unfreeze.self": "你无法解冻自己",
    "-unfreeze.not": "%a 没有冻结",
    "-unfreeze.has": "%a 已被 %b 解冻",
    "-unfreeze.admin": "您无法解冻管理员",

    "-mute.self": "你不能让自己静音",
    "-mute.admin": "您无法将管理员静音",
    "-mute.has": "%a 已被 %b 静音",
    "-mute.already": "%a 已经静音",

    "-unmute.self": "你无法将自己取消静音",
    "-unmute.not": "%a 未静音",
    "-unmute.has": "%a 已被 %b 取消静音",
    "-unmute.admin": "您无法取消管理员静音",

    "-vanish.has": "你现在消失了",
    "-vanish.out": "你现在不再消失了",

    "-invcopy.self": "你不能複製自己的背包",
    "-invcopy.not": "从 %a 複製背包",

    "-invsee.self": "你无法查看自己的背包",
    "-invsee.of": "%a 的背包",

    "-echestwipe.self": "你无法擦拭自己的终界箱",
    "-echestwipe.admin": "你无法清除管理员的终界箱",
    "-echestwipe.has": "%a 的终界箱已被 %b 擦拭",

    "-lockdowncode.unknown": "请输入您想要的动作",
    "-lockdowncode.get": "锁定锁定码：%a",
    "-lockdowncode.enter": "请输入密码",
    "-lockdowncode.set": "成功将锁定锁定码变更为 %a",
    "-lockdowncode.number": "锁定码长度应该是数字",
    "-lockdowncode.length": "请输入1到128之间的密码长度",
    "-lockdowncode.random": "成功随机锁定锁定码 - %a",
    "-lockdowncode.unknownAction": "未知操作，请只使用 get/set/random",

    "-lockdown.enter": "请输入密码",
    "-lockdown.wrong": "锁定码错误",
    "-lockdown.already": "伺服器已被 %a 转为锁定模式",
    "-lockdown.has": "伺服器现在处于锁定模式",

    "-unlock.not": "锁定尚未启用",
    "-unlock.has": "%a 已停用锁定",

    "-adminchat.has": "您现在处于管理频道",
    "-adminchat.out": "您现在处于公共频道",

    "-lang.enter": "请输入语言",
    "-lang.unknown": "未知语言，尝试 %alanglist",
    "-lang.has": "语言已更改为 %a",

    "-langlist.list": "语言列表：",

    ".CommandSystem.no_permission": "你没有权限使用该指令",
    ".CommandSystem.unknown_command": "未知指令。请输入 \"help\" 取得协助。",
    ".CommandSystem.command_disabled": "该指令已停用",
    ".CommandSystem.command_disabled_reason": "您不是管理员，无法使用此指令",
    ".CommandSystem.no_player": "请指定玩家",
    ".CommandSystem.unknown_player": "未知玩家",
    ".CommandSystem.unknown": "未知指令，请尝试 %ahelp",
    ".CommandSystem.about": "使用 -about 查看更多资讯",

    ".Util.kicked": "你已被踢了",
    ".Util.reason": "原因",
    ".Util.noreason": "未提供原因",
    ".Util.unknown": "未知",
    ".Util.has_failed": "已被拦截",
    ".Util.formkick": "%a 已被自动踢出",
    ".Util.formban": "%a 已被自动封禁",

    ".banHandler.banned": "你已被停权！",
    ".banHandler.format": "§c§l您已被停权! \n§r§7剩馀时间: §c %a\n§7理由: §c%b§r\n§7由: §c %c",

    ".AdminChat.adminchat": "管理聊天",

    ".ChatHandler.muted": "你已静音！",

    ".dimensionLock.stop": "你不可以去其他维度！",

    ".Spam.slowdown": "请慢慢发送讯息",
    ".Spam.repeated": "您不能再发送相同的讯息",
    ".Spam.kicked": "§c%a§g 因发送垃圾邮件而被踢出",
    ".Spam.filter": "您的邮件包含已过滤的单字",
    ".Spam.long": "您的讯息太长",
    ".Spam.blacklist": "列入黑名单的信息，警告",
    ".Spam.kickedBlacklist": "§c%a§g 因说出黑名单讯息而被踢出",

    ">distance": "距离",
    ">yReach": "y轴距离",
    ">HitLength": "攻击长度",
    ">Angle": "角度",
    ">Click Per Second": "每秒点击",
    ">RotSpeed": "旋转速度",
    ">RotSpeedX": "x轴旋转速度",
    ">RotSpeedY": "y轴旋转速度",
    ">Type": "类型",
    ">Pos": "座标",
    ">PosDeff": "座标差",
    ">AttackTime": "攻击时间",
    ">UsingItem": "使用物品",
    ">Moving": "移动",
    ">Container": "使用容器",
    ">velocityY": "y轴速度",
    ">velocityXZ": "xz轴速度",
    ">playerSpeed": "速度",
    ">Mph": "米每小时",
    ">Reach": "距离",
    ">Mode": "模式",
    ">Break": "破坏",
    ">Place": "放置",
    ">GameMode": "游戏模式",
    ">illegalLength": "违规长度",
    ">illegalRegax": "违规字元",
    ">Length": "长度",
    ">Block": "方块",
    ">RotationX": "x轴迴转",
    ">RotationY": "y轴迴转",
    ">relative": "相对值",
    ">Delay": "间隔",
    ">typeId": "类型名称",
    ">nameLength": "名字长度",
    ">CentreDis": "中心距离",
    ">ItemType": "物品类型",
    ">ItemTag": "物品标籤",
    ">ItemNameLength": "物品名称长度",
    ">ItemLore": "物品註释",
    ">EnchantLevel": "附魔等级",
    ">EnchantConflict": "附魔冲突",
    ">ItemEnchantAble": "附魔应用",
    ">ItemEnchantRepeat": "附魔重叠",
    ">ItemAmount": "物品数量",
    ">Amount": "数量",
    ">Ratio": "比率",
    ">Limit": "上限",
    ">BlockPerTick": "每秒移动格数"
}
