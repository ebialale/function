var person = {
    name: 'Mudi',
    age: 100,
    sex: 'Male',
    status: 'SINGLE',
    isHandsome: true,
    cars: ['Benz', 'Bently', 'RangeRover'],
    wife: {
        name: 'Aisha',
        age: 80,
        sex: 'female'
    },
    children: {
        firstChild: {
            name: 'David',
            sex: 'male',
        },
        thirdChild: {
            name: 'Sarah',
            sex: 'female'
        },
        secondChild: {
            name: 'Paul',
            sex: 'male',
            welcome: function() {
                console.log('Welcome,' + this.name)
                }
        }
    },
    // welcome: function() {
    // console.log('Welcome,' + this.name)
    // }

    // children: [
    //     {
    //         name: 'David',
    //         sex: 'male',
    //     },
    //     {
    //         name: 'Sarah',
    //         sex: 'female'
    //     },
    //     {
    //         name: 'Paul',
    //         sex: 'male'
    //     }
    // ]
}

// console.log(person.children[1].name)


// console.log(person.children.secondChild.name)

// console.log(person['children']['secondChild']['name'])

console.log(person.children.secondChild.welcome())


