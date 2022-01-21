type customArray = {
    souEu: boolean;
    responsavel: boolean;
    nome: string;
};

var input: Array<customArray> = [
    { souEu: false, responsavel: true, nome: "Gustavo" },
    { souEu: false, responsavel: false, nome: "Gabriel" },
    { souEu: true, responsavel: false, nome: "Bruno" },
    { souEu: false, responsavel: true, nome: "Thomas" },
    { souEu: false, responsavel: false, nome: "Helio" },
];

function customNameSort(array: Array<customArray>): Array<string> {
    let sorted = [];

    // find myself in input array
    let me: customArray | undefined = array.filter(({ souEu: n }) => n === true)[0];

    if (me != undefined) {
        // add my name to output array
        sorted.push(me.nome);

        // remove myself from input array
        array.splice(array.indexOf(me), 1);
    }

    // find admins of group in input array
    let admins: Array<customArray> | undefined = array.filter(
        ({ responsavel: n }) => n === true
    );

    if (admins != undefined) {
        // sorting admins by name
        let sortedAdmins = admins.sort();

        // iterating over admins
        for (let a = 0; a < sortedAdmins.length; a++) {
            // add admin to output array
            let admin = sortedAdmins[a];
            sorted.push(admin.nome);

            // remove admin from input array
            array.splice(array.indexOf(admin), 1);
        }
    }

    // find rest of members in input array
    let members: Array<customArray> | undefined = array.filter(
        ({ responsavel: n }) => n === false
    );

    if (members != undefined) {
        // sorting members
        let sortedMembers = members.sort();

        // iterating over members
        for (let m = 0; m < sortedMembers.length; m++) {
            // add member to output array
            let member = sortedMembers[m];
            sorted.push(member.nome);

            // remove member from input array
            array.splice(array.indexOf(member), 1);
        }
    }

    return sorted;
}

console.log(customNameSort(input));
