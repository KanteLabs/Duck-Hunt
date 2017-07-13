function Bird (){

}
Bird.prototype.create = function(){
    // return this.whatever
}

function BonusBird (){
    Bird.call(this);
}

inheritPrototype(Bonus, Bird);

BonusBird.prototype.size = function () {
    // create this.size
}