import * as PIXI from "pixi.js";
import { spriteRes, dsSpriteRes, dsSpriteRes2 } from "../utils/constants";
import { applyGlowFliter } from "../utils/effect";

const res = [spriteRes, dsSpriteRes, dsSpriteRes2];

export function switchPanel(gameboard) {
  const panel = new PIXI.Container();
  const hint = new PIXI.Text({
    text: "👇点击切换资源包/难度",
    style: {
      fontSize: 24,
      fill: 0xffffff,
    },
  });

  panel.addChild(hint);

  res.forEach((item, index) => {
    const text = item.name;
    const textSprite = new PIXI.Text({
      text: text,
      style: {
        fontSize: 24,
        fill: 0xc3e8be,
      },
    });
    panel.addChild(textSprite);
    textSprite.y = (index + 1) * 40;
    textSprite.isSelected = false;
    textSprite.eventMode = "static";
    textSprite.on("select", () => {
      textSprite.isSelected = true;
    });

    textSprite.onmouseover = () => {
      applyGlowFliter(textSprite, {
        outerStrength: 3,
        color: 0x741258,
        distance: 10,
      });
    };

    textSprite.onmouseleave = () => {
      textSprite.filters = [];
    };

    textSprite.onclick = () => {
      gameboard.setContentAndReloadBoard(item);
    };
  });

  return panel;
}

function switchSpriteTile(i) {
  if (i === 0) {
    return dsSpriteRes;
  } else {
    return spriteRes;
  }
}
