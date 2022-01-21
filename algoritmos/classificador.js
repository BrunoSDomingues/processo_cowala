var input = [
    [false, true, "Gustavo"],
    [false, false, "Gabriel"],
    [true, false, "Bruno"],
    [false, true, "Thomas"],
    [false, false, "Helio"]
]

function customNameSort(array) {
    let sorted = [];

    // find myself in input array
    let me = array.find(({
        0: n
    }) => n === true);

    // add my name to output array
    sorted.push(me.at(-1));

    // remove myself from input array
    array.splice(array.indexOf(me), 1);

    // find admins of group in input array
    let admins = array.filter(({
        1: n
    }) => n === true);

    // sorting admins by name
    sortedAdmins = admins.sort();

    // iterating over admins
    for (let a = 0; a < sortedAdmins.length; a++) {
        // add admin to output array
        let admin = sortedAdmins[a];
        sorted.push(admin.at(-1));

        // remove admin from input array
        array.splice(array.indexOf(admin), 1);
    }

    // find rest of members in input array
    let members = array.filter(({
        1: n
    }) => n === false);

    // sorting members
    sortedMembers = members.sort();

    // iterating over members
    for (let m = 0; m < sortedMembers.length; m++) {
        // add member to output array
        let member = sortedMembers[m];
        sorted.push(member.at(-1));

        // remove member from input array
        array.splice(array.indexOf(member), 1);
    }

    return sorted;
}

console.log(customNameSort(input));