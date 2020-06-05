class Baby {
    constructor (name, skinColor, lastYearAge) {
        this.name = name;
        this.skinColor = skinColor;
        this.age = lastYearAge + 1;
        this.isOldBaby = this.age >= 18;
    }

    talk(word) {
        return word;
    }
}
// var ebi = new Baby('Ebi', 'Black', 1); // tata
// var mudi = new Baby('Mudi', 'Yellow', 21); // mama


// console.log(mudi.talk('tata')) 
