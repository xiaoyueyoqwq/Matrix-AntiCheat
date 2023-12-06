export default {
    "-help.helpCDlist": "Help command list:",
    export default {
    "-help.helpCDlist": "قائمة المساعدة:",
    "-help.help": "help - يريك قائمة المساعدة هذه",
    "-help.toggles": "toggles - تريك كل الوحدات",
    "-help.toggle": "toggle <module> <enable/disable> - اطفاء او تشغيل وحدة",
    "-help.op": "op <player> - اعطاء للاعب قدرة الاشراف",
    "-help.deop": "deop <player> - محي من لاعب قدرة الاشراف",
    "-help.passwords": "passwords <oldPassword> <newPassword> - تبديل كلمة سر",
    "-help.flagmode": "flagmode <all/tag/bypass/admin> - تغيير اعدادات الكشف",
    "-help.rank": "rank <set/add/remove> <player> <rank> - تغيير رتبة لاعب",
    "-help.rankclear": "rankclear <player> - محوا كل رتب",
    "-help.defaultrank": "defaultrank <rank> - تبديل الرتب الافتراضية",
    "-help.showallrank": "showallrank <true/false> - تريك كل الرتب في الدردشة",
    "-help.ban": "ban <player> <reason> <timeRegax/forever> - حظر لاعب",
    "-help.unban": "unban <player> - الغاء حظر لاعب",
    "-help.unbanremove": "unbanremove <player> - محوا لاعب من قائمة الغاء الحظر",
    "-help.unbanlist": "unbanlist - يريك كل لاعبين الذي في قائمة الغاء الحظر",
    "-help.freeze": "freeze <player> - تجميد لاعب",
    "-help.unfreeze": "unfreeze <player> - الغاء تجميد لاعب",
    "-help.vanish": "vanish - اخفاء نفسك",
    "-help.unvanish": "unvanish - الغاء اخفاء نفسك",
    "-help.invcopy": "invcopy <player> - نسخ انفنتوري لاعب اخر لانفتوري الخاص بك",
    "-help.invsee": "invsee <player> - يريك الانفنتوري خاص بلاعبين",
    "-help.echestwipe": "echestwipe <player> - محي اندر شست للاعب",
    "-help.lockdowncode": "lockdowncode <get/set/random> <set: code>/[random: length] - لتغيير او انشاء كود جديد لاغلاق سيرفر",
    "-help.lockdown": "lockdown <code> - اغلاق سيرفر للاعضاء مع الكود",
    "-help.unlock": "unlock <code> - الغاء قفل السيرفر",
    "-help.adminchat": "adminchat - تبديل بين قنات الادمن وقنات الاعضاء",
    "-help.lang": "lang <language> - تغير الغة",
    "-help.langlist": "langlist - تريك كل اللغات المتاحة",

    "-about.line1": "@minecraft API هي افضل اداة كفاح للغش بنيت على Matrix",
    "-about.version": "الاصدار",
    "-about.author": "المصنعين",

    "-toggles.toggle": "تبديل",
    "-toggles.module": "الوحدة",
    "-toggles.toggleList": "قائمة تبديل:",
    "-toggles.unknownModule": "%atoggles وحدة غير معروفة.جرب وحاول مرة اخرى",
    "-toggles.toggleChange": "%a الوحدة اصبحت %bd",
    "-toggles.unknownAction": "فقط enable/disable فعل غير معروف.ارجوك استعمل",
    "-toggles.already": "هذه الوحدة %ad بلفعل",

    "-op.hasbeen": "%b لقد اعطى صلاحية الاشراف ل %a",
    "-op.please": "ارجوك ادخل شفرة",
    "-op.now": "انت مشرف الان",
    "-op.wrong": "الشفرة خاطئة",
    "-op.wait": "قبل استعمالها مرة اخرى %a ارجوك انتظر",

    "-deop.lockdown": "السيرفر في حالة الاقفال",
    "-deop.notadmin": "ليس مشرف الان %a",
    "-deop.hasbeen": "%b ازال صلاحية الاشراف من %a",

    "-passwords.oldnew": "ارجوك ادخل شفرة القديمة لادخال الشفرة الجديدة",
    "-passwords.wrong": "شفرة خاطئة",
    "-passwords.changed": "شفرة قد بدلت",

    "-flagmode.unknown": "فقط all/bypass/admin/tag/none فعل غير معروف.ارجوك استعمل",
    "-flagmode.changed": "%a تم تغيير وضع الكشف ل",

    "-rank.unknownAction": "فقط set/add/remove فعل غير معروف.ارجوك استعمل",
    "-rank.enter": "ارجوك ادخل الرتبة",
    "-rank.hasset": "%b الرتبة قد وضعت ل  %a",
    "-rank.hasadd": "%b اضيفت رتبة ل %a",
    "-rank.already": "%b لديه رتبة من قبل  %a §r§crank",
    "-rank.hasremove": "قد محيت %a رتبت",
    "-rank.norank": "%a doesn't have %b §r§c rank",
    "-rank.empty": "%a doesn't have any rank",

    "-rankclear.has": "%a's rank has been cleared",
    "-rankclear.empty": "%a doesn't have any rank",

    "-defaultrank.enter": "Please enter the rank",
    "-defaultrank.has": "Default rank has been set to %a",

    "-showallrank.unknown": "Unknown action, please use true/false only",
    "-showallrank.has": "Show all rank has been set to %a",

    "-ban.self": "You can't ban yourself",
    "-ban.admin": "You can't ban an admin",
    "-ban.reason": "Please enter the reason",
    "-ban.time": "Please enter the time, example: 1d20h30m40s",
    "-ban.has": "%a has been banned by %b",

    "-unban.self": "You can't unban yourself",
    "-unban.notban": "%a is not banned",

    "-unbanremove.not": "%a is not in unban queue",

    "-unbanlist.none": "There is no player in unban queue",
    "-unbanlist.list": "Unban list",

    "-freeze.self": "You can't freeze yourself",
    "-freeze.admin": "You can't freeze an admin",
    "-freeze.has": "%a has been frozen by %b",
    "-freeze.already": "%a is already frozen",

    "-unfreeze.self": "You can't unfreeze yourself",
    "-unfreeze.not": "%a is not frozen",
    "-unfreeze.has": "%a has been unfrozen by %b",
    "-unfreeze.admin": "You can't unfreeze an admin",

    "-mute.self": "You can't mute yourself",
    "-mute.admin": "You can't mute an admin",
    "-mute.has": "%a has been muted by %b",
    "-mute.already": "%a is already muted",

    "-unmute.self": "You can't unmute yourself",
    "-unmute.not": "%a is not muted",
    "-unmute.has": "%a has been unmuted by %b",
    "-unmute.admin": "You can't unmute an admin",

    "-vanish.has": "You are now vanished",  
    "-vanish.out": "You are now no longer vanished",

    "-invcopy.self": "You can't copy your own inventory",
    "-invcopy.not": "Copied inventory from %a",

    "-invsee.self": "You can't view your own inventory",
    "-invsee.of": "Inventory of %a",

    "-echestwipe.self": "You can't wipe your own ender chest",
    "-echestwipe.admin": "You can't wipe an admin's ender chest",
    "-echestwipe.has": "Ender chest of %a has been wiped by %b",

    "-lockdowncode.unknown": "Please enter the action you want",
    "-lockdowncode.get": "Lockdown code: %a",
    "-lockdowncode.enter": "Please enter the code",
    "-lockdowncode.set": "Sucessfully changed lockdown code to %a",
    "-lockdowncode.number": "The code length should be a number",
    "-lockdowncode.length": "Please enter the code length between 1 and 128",
    "-lockdowncode.random": "Sucessfully random a lockdown code - %a",
    "-lockdowncode.unknownAction": "Unknown action, please use get/set/random only",

    "-lockdown.enter": "Please enter the code",
    "-lockdown.wrong": "Wrong code",
    "-lockdown.already": "The server has been turned to lockdown mode by %a",
    "-lockdown.has": "The server is now in lockdown mode",

    "-unlock.not": "Lockdown hasn't enabled yet",
    "-unlock.has": "Lockdown has been disabled by %a",

    "-adminchat.has": "You are now in admin channel",
    "-adminchat.out": "You are now in public channel",

    "-lang.enter": "Please enter the language",
    "-lang.unknown": "Unknown language, try %alanglist",
    "-lang.has": "Language has been changed to %a",

    "-langlist.list": "Language list:",

    ".CommandSystem.no_permission": "You don't have permission to use this command",
    ".CommandSystem.unknown_command": "Unknown command. Type \"help\" for help.",
    ".CommandSystem.command_disabled": "This command is disabled",
    ".CommandSystem.command_disabled_reason": "You are not an admin to use this command",
    ".CommandSystem.no_permisson": "You don't have enough permisson to use this command",
    ".CommandSystem.no_player": "Please specify the player",
    ".CommandSystem.unknown_player": "Unknown player",
    ".CommandSystem.unknown": "Unknown command, try %ahelp",
    ".CommandSystem.about": "Use -about to see more information",

    ".Util.kicked": "You have been kicked",
    ".Util.reason": "Reason",
    ".Util.noreason": "No reason provided",
    ".Util.unknown": "Unknown",
    ".Util.has_failed": "has failed",
    ".Util.formkick": "%a is automatically kicked from the game",
    ".Util.formban": "%a is automatically banned from the game",

    ".banHandler.banned": "You have been banned!",
    ".banHandler.format": "§c§lYour have been banned!\n§r§7Time Left:§c %a\n§7Reason: §c%b§r\n§7By: §c%c",

    ".AdminChat.adminchat": "adminchat",

    ".ChatHandler.muted": "You are muted!",

    ".dimensionLock.stop": "You are not allowed to go to other dimensions!",

    ".Spam.slowdown": "Please send messages slowly",
    ".Spam.repeated": "You cannot send the same message again",
    ".Spam.kicked": "§c%a§g has been kicked for spamming",
    ".Spam.filter": "Your message contains a filtered word",
    ".Spam.long": "Your message is too long",
    ".Spam.blacklist": "Blacklisted message, warning",
    ".Spam.kickedBlacklist": "§c%a§g has been kicked for saying a blacklisted message",

    ">distance": "Distance",
    ">yReach": "yReach",
    ">HitLength": "HitLength",
    ">Angle": "Angle",
    ">Click Per Second": "Click Per Second",
    ">RotSpeed": "RotSpeed",
    ">RotSpeedX": "RotSpeedX",
    ">RotSpeedY": "RotSpeedY",
    ">Type": "Type",
    ">Pos": "Pos",
    ">PosDeff": "PosDeff",
    ">AttackTime": "AttackTime",
    ">UsingItem": "UsingItem",
    ">Moving": "Moving",
    ">Container": "Container",
    ">velocityY": "velocityY",
    ">velocityXZ": "velocityXZ",
    ">playerSpeed": "playerSpeed",
    ">Mph": "Mph",
    ">Reach": "Reach",
    ">Mode": "Mode",
    ">Break": "Break",
    ">Place": "Place",
    ">GameMode": "GameMode",
    ">illegalLength": "illegalLength",
    ">illegalRegax": "illegalRegax",
    ">Length": "Length",
    ">Block": "Block",
    ">RotationX": "RotationX",
    ">RotationY": "RotationY",
    ">relative": "relative",
    ">Delay": "Delay",
    ">typeId": "typeId",
    ">nameLength": "nameLength",
    ">CentreDis": "CentreDis",
    ">ItemType": "ItemType",
    ">ItemNameLength": "ItemNameLength",
    ">ItemLore": "ItemLore",
    ">EnchantLevel": "EnchantLevel",
    ">EnchantConflict": "EnchantConflict",
    ">ItemEnchantAble": "ItemEnchantAble",
    ">ItemEnchantRepeat": "ItemEnchantRepeat",
    ">ItemAmount": "ItemAmount",
    ">ItemTag": "ItemTag",
    ">Amount": "Amount",
    ">Ratio": "Ratio",
    ">Limit": "Limit"
}
