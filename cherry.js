function spawnRCherry(){
    if (frameCount % 100 === 0) {
        rCherry = createSprite(random(10, 1356), random(0, 625));
        rCherry.scale = 0.08;
        rCherry.lifetime = 200;
        rCherry.addImage(rCherryImg);
        rCherryGroup.add(rCherry);
    }
}

function spawnPCherry(){
    if (frameCount % 250 === 0) {
        pCherry = createSprite(random(10, 1356), random(0, 625));
        pCherry.scale = 0.09;
        pCherry.lifetime = 200;
        pCherry.addImage(pCherryImg);
        pCherryGroup.add(pCherry);
    }
}

function spawnBCherry(){
    if (frameCount % 300 === 0) {
        bCherry = createSprite(random(10, 1356), random(0, 625));
        bCherry.scale = 0.3;
        bCherry.lifetime = 200;
        bCherry.addImage(bCherryImg);
        bCherryGroup.add(bCherry);
    }
}

