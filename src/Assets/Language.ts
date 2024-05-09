import { World, Player } from "@minecraft/server";

export default function send(object: World | Player, warn: boolean, id: Translate, ...args: string[]) {
    object.sendMessage({
        rawtext: [
            {
                text: warn ? "§bMatrix §7>§c " : "§bMatrix §7>§g ",
            },
            {
                translate: id,
                with: args,
            },
        ],
    });
}

type Translate =
    "help.helpcdlist"
    | "help.help"
    | "help.toggles"
    | "help.toggle"
    | "help.op"
    | "help.deop"
    | "help.passwords"
    | "help.flagmode"
    | "help.rank"
    | "help.rankclear"
    | "help.defaultrank"
    | "help.showallrank"
    | "help.ban"
    | "help.unban"
    | "help.unbanremove"
    | "help.unbanlist"
    | "help.freeze"
    | "help.unfreeze"
    | "help.vanish"
    | "help.unvanish"
    | "help.invcopy"
    | "help.invsee"
    | "help.echestwipe"
    | "help.lockdowncode"
    | "help.lockdown"
    | "help.unlock"
    | "help.adminchat"
    | "help.lang"
    | "help.langlist"
    | "about.line1"
    | "about.version"
    | "about.author"
    | "toggles.toggle"
    | "toggles.module"
    | "toggles.togglelist"
    | "toggles.unknownmodule"
    | "toggles.togglechange"
    | "toggles.unknownaction"
    | "toggles.already"
    | "op.hasbeen"
    | "op.please"
    | "op.now"
    | "op.wrong"
    | "op.wait"
    | "deop.lockdown"
    | "deop.notadmin"
    | "deop.hasbeen"
    | "passwords.oldnew"
    | "passwords.wrong"
    | "passwords.changed"
    | "flagmode.unknown"
    | "flagmode.changed"
    | "rank.unknownaction"
    | "rank.enter"
    | "rank.hasset"
    | "rank.hasadd"
    | "rank.already"
    | "rank.hasremove"
    | "rank.norank"
    | "rank.empty"
    | "rankclear.has"
    | "rankclear.empty"
    | "defaultrank.enter"
    | "defaultrank.has"
    | "showallrank.unknown"
    | "showallrank.has"
    | "ban.self"
    | "ban.admin"
    | "ban.reason"
    | "ban.time"
    | "ban.has"
    | "unban.self"
    | "unban.notban"
    | "unban.add"
    | "unbanremove.not"
    | "unbanremove.yes"
    | "unbanlist.none"
    | "unbanlist.list"
    | "freeze.self"
    | "freeze.admin"
    | "freeze.has"
    | "freeze.already"
    | "unfreeze.self"
    | "unfreeze.not"
    | "unfreeze.has"
    | "unfreeze.admin"
    | "mute.self"
    | "mute.admin"
    | "mute.has"
    | "mute.already"
    | "unmute.self"
    | "unmute.not"
    | "unmute.has"
    | "unmute.admin"
    | "vanish.has"
    | "vanish.out"
    | "invcopy.self"
    | "invcopy.not"
    | "invsee.self"
    | "invsee.of"
    | "echestwipe.self"
    | "echestwipe.admin"
    | "echestwipe.has"
    | "lockdowncode.unknown"
    | "lockdowncode.get"
    | "lockdowncode.enter"
    | "lockdowncode.set"
    | "lockdowncode.number"
    | "lockdowncode.length"
    | "lockdowncode.random"
    | "lockdowncode.unknownaction"
    | "lockdown.enter"
    | "lockdown.wrong"
    | "lockdown.already"
    | "lockdown.has"
    | "unlock.not"
    | "unlock.has"
    | "adminchat.has"
    | "adminchat.out"
    | "lang.enter"
    | "lang.unknown"
    | "lang.has"
    | "langlist.list"
    | "commandsystem.no_permission"
    | "commandsystem.unknown_command"
    | "commandsystem.command_disabled"
    | "commandsystem.command_disabled_reason"
    | "commandsystem.no_permisson"
    | "commandsystem.no_player"
    | "commandsystem.unknown_player"
    | "commandsystem.unknown"
    | "commandsystem.about"
    | "util.kicked"
    | "util.reason"
    | "util.noreason"
    | "util.unknown"
    | "util.has_failed"
    | "util.formkick"
    | "util.formban"
    | "banhandler.banned"
    | "adminchat.adminchat"
    | "chathandler.muted"
    | "dimensionlock.stop"
    | "spam.slowdown"
    | "spam.repeated"
    | "spam.kicked"
    | "spam.filter"
    | "spam.long"
    | "spam.blacklist"
    | "spam.kickedblacklist"
    | "distance"
    | "yreach"
    | "hitlength"
    | "angle"
    | "click per second"
    | "rotspeed"
    | "rotspeedx"
    | "rotspeedy"
    | "typ1"
    | "type"
    | "pos"
    | "posdeff"
    | "attacktime"
    | "usingitem"
    | "moving"
    | "container"
    | "velocityy"
    | "velocityxz"
    | "playerspeed"
    | "mph"
    | "reach"
    | "mode"
    | "break"
    | "place"
    | "gamemode"
    | "illegallength"
    | "illegalregax"
    | "length"
    | "block"
    | "rotationx"
    | "rotationy"
    | "relative"
    | "delay"
    | "typeid"
    | "namelength"
    | "centredis"
    | "itemtype"
    | "itemnamelength"
    | "itemlore"
    | "enchantlevel"
    | "enchantconflict"
    | "itemenchantable"
    | "itemenchantrepeat"
    | "itemamount"
    | "itemtag"
    | "amount"
    | "ratio"
    | "limit"
    | "blockpersecond"
    | "util.unfair"
    | "util.by"
    | "util.operator"
    | "bot.by"
    | "spam.by"
    | "spam.spamming"
    | "spam.blacklisted"
    | "bot.waitui"
    | "bot.expired"
    | "bot.ui"
    | "§gYou need to verify if you're not a bot §7(%s/%s)§g"
    | "You have §e%s§gseconds left"
    | "Enter the code §e§l%s§r§g below"
    | "bot.title"
    | "bot.failed"
    | "bot.ok"
    | "border.reached"
    | "border.outside"
    | "border.interact"
    | "bordersize.enter"
    | "bordersize.notanum"
    | "bordersize.between"
    | "bordersize.ok"
    | "help.bordersize"
    | "ui.exit"
    | "ui.i"
    | "ui.i.a"
    | "ui.i.b";
