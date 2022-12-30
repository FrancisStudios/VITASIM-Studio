class VITASIMLifeForm {
    health = 100;
    hunger = 0;
    lifeTime = 1000;
    age = 0;
    isAlive = true;
    speed = 10;
    direction='up' // 'up', 'down', 'left', 'right'
    position={x: 0, y: 0}

    get tickLifeForm() {
        if (this.age < this.lifeTime && this.isAlive) {
            this.age++;
            this.hunger++;
        }
    }

}

module.exports = VITASIMLifeForm;