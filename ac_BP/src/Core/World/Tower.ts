import { world, Player, Block, Vector3, PlayerPlaceBlockAfterEvent } from "@minecraft/server";
import { isAdmin } from "../../Assets/Util";
import { MinecraftBlockTypes, MinecraftEffectTypes } from "../../node_modules/@minecraft/vanilla-data/lib/index";
import { configi, registerModule } from "../Modules";
import { DisableTags } from "../../Data/EnumData";
import flag from "../../Assets/flag";
import { Action } from "../../Assets/Action";
interface TowerData {
    towerBlock: Vector3;
    lastBlockPlace: number;
}

const towerData = new Map<string, TowerData>();
const vL = new Map<string, number>();

/**
 * @author jasonlaubb
 * @description A anti tower module that can detect tower-hack with a very low false positive rate
 * It work by patching a very small delay between player towering and with a high velocity
 */

async function AntiTower(player: Player, block: Block, config: configi) {
    const data = towerData.get(player.id);
    //set the value to Map
    towerData.set(player.id, { towerBlock: block.location, lastBlockPlace: Date.now() });

    //skip check for first block place
    if (!data) return;
    const towerBlock = data?.towerBlock;
    const lastTime = data?.lastBlockPlace;
    //prevent false positive and disable check when player has tag
    if (isAdmin(player) || player.hasTag(DisableTags.place) || player.isOnGround || !player.isJumping || player.isFlying || player.isInWater || player.getEffect(MinecraftEffectTypes.JumpBoost)) return;

    const { x, y, z }: Vector3 = block.location;

    //check the block has the same position as the tower block horizontally
    const towerNearBlock: boolean = x === towerBlock.x && z === towerBlock.z;

    //calulate the distance between player and the centre of block
    const playerCentreDis: number = Math.hypot(player.location.x - x + 0.5, player.location.z - z + 0.5);

    //check if player is pushed out when towering
    const playerNearBlock: boolean = playerCentreDis > 0.41 && playerCentreDis < 2.5;

    //calculate the Y pos deff between player and the tower block
    const playerPosDeff: number = player.location.y - y;

    //check if player is towering
    const playerTowering: boolean = playerPosDeff > 0.14 && playerPosDeff < 0.4 && y - towerBlock.y == 1;

    //check if all state is true
    const locationState: boolean = playerTowering && towerNearBlock && playerNearBlock;

    //calculate the delay between last block placed and current block placed
    const delay: number = Date.now() - lastTime;

    const vl = vL.get(player.id) ?? 0;

    //if delay is less than the min delay and all state is true, flag the player
    if (delay < config.antiTower.minDelay && locationState) {
        if (vl > 2) {
            vL.delete(player.id);
            //set the block to the air
            block.setType(MinecraftBlockTypes.Air);
            // timeout
            Action.timeout(player, config.antiTower.timeout);
        } else {
            vL.set(player.id, vl + 1);
        }
        flag(player, config.antiTower.modules, "A");
    } else {
        vL.delete(player.id);
    }
}

registerModule("antiTower", false, [towerData, vL], {
    worldSignal: world.afterEvents.playerPlaceBlock,
    then: async (config, { player, block }: PlayerPlaceBlockAfterEvent) => AntiTower(player, block, config),
});
