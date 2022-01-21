var input = [
    { souEu: false, responsavel: true, nome: "Gustavo" },
    { souEu: false, responsavel: false, nome: "Gabriel" },
    { souEu: true, responsavel: false, nome: "Bruno" },
    { souEu: false, responsavel: true, nome: "Thomas" },
    { souEu: false, responsavel: false, nome: "Helio" },
];
function customNameSort(array) {
    var sorted = [];
    // find myself in input array
    var me = array.filter(function (_a) {
        var n = _a.souEu;
        return n === true;
    })[0];
    if (me != undefined) {
        // add my name to output array
        sorted.push(me.nome);
        // remove myself from input array
        array.splice(array.indexOf(me), 1);
    }
    // find admins of group in input array
    var admins = array.filter(function (_a) {
        var n = _a.responsavel;
        return n === true;
    });
    if (admins != undefined) {
        // sorting admins by name
        var sortedAdmins = admins.sort();
        // iterating over admins
        for (var a = 0; a < sortedAdmins.length; a++) {
            // add admin to output array
            var admin = sortedAdmins[a];
            sorted.push(admin.nome);
            // remove admin from input array
            array.splice(array.indexOf(admin), 1);
        }
    }
    // find rest of members in input array
    var members = array.filter(function (_a) {
        var n = _a.responsavel;
        return n === false;
    });
    if (members != undefined) {
        // sorting members
        var sortedMembers = members.sort();
        // iterating over members
        for (var m = 0; m < sortedMembers.length; m++) {
            // add member to output array
            var member = sortedMembers[m];
            sorted.push(member.nome);
            // remove member from input array
            array.splice(array.indexOf(member), 1);
        }
    }
    return sorted;
}
console.log(customNameSort(input));
