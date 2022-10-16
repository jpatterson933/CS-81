import craftableData from "./Craftable.json" assert {type: "json"};
import billdotcomData from "./Bill_Dot_Com.json" assert {type: "json"};
import nightDayData from "./Night_N_Day.json" assert {type: "json"};




// console.log(typeof nightDayData);
// console.log(nightDayData[0].inv_num);
// console.log(nightDayData.length);

// console.log(typeof billdotcomData);
// console.log(billdotcomData[0].inv_num);
// console.log(billdotcomData.length);

// console.log(typeof craftableData);
// console.log(craftableData[0].inv_num);
// console.log(craftableData.length);



function createArray(object, length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(object[i].inv_num);
    }
    return array;
};

let craftInvArr = createArray(craftableData, craftableData.length)
let billInvArr = createArray(billdotcomData, billdotcomData.length)
let nightInvArr = createArray(nightDayData, nightDayData.length)

function findMatchingInv(array1, array2, object1) {
    const matches = array1.filter(function (obj) {
        return array2.indexOf(obj) !== -1;
    });
    // console.log(matches)

   
    
    
    

    return matches;
};

// larger invoice should be second parameter
findMatchingInv(billInvArr, craftInvArr, billdotcomData);
// findMatchingInv(nightInvArr, craftInvArr);
// findMatchingInv(nightInvArr, billInvArr);

function findMissingInv(array1, array2) {
    const missing = array2.filter(function (obj) {
        return array1.indexOf(obj) === -1;
    });



    // console.log(missing)
    return missing;
};
// dont need to find the missing ones from craftable so it should be first paramter
findMissingInv(craftInvArr, billInvArr);
findMissingInv(craftInvArr, nightInvArr);
// we want to find the missing invoices from each one
findMissingInv(nightInvArr, billInvArr);
findMissingInv(billInvArr, nightInvArr);







