const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
class Warrior {
    exp = 100;
    achievement = [];
    level() {
        return Math.floor(this.experience()/100)
    }
    rank(lvl = this.level()){
        return ranks[Math.floor(lvl/10)];
    }
    experience(){
        return this.exp > 10000 ? 10000: this.exp;
    }
    achievements() {
        return this.achievement;
    }
    battle(lvl){
        if (lvl < 1 || lvl > 100) return "Invalid level";
        let diff = lvl-this.level()
        if (!diff) {this.exp+=10; return "A good fight"}
        if (diff===-1) {this.exp+=5; return "A good fight"}
        if (diff>0){
            if (this.rank()!==this.rank(lvl) && diff>=5) return "You've been defeated";
            this.exp+= 20*(diff**2)
            return "An intense fight";
        }
        return "Easy fight";
    }
    training(arr){
        let [achievement, gotExp, minLvl] = arr;
        if (this.level()>=minLvl){
            this.achievement.push(achievement);
            this.exp += gotExp;
            return achievement;
        }
        return "Not strong enough";
    }
}