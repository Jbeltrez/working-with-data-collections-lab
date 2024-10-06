let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

function parseCSVrows(s) {
    // const rows = s.split('\n');
    const headerRow = s.split('\n')[0].split(',');
    const subRows = s.split('\n').splice(1, s.split('\n').length)
    // console.log(headerRow)
    // console.log(subRows)
    let data = []
    for (let i = 0; i < subRows.length; i++) {
        const row = subRows[i].split(',');
        const rowData = {};
        for (let x = 0; x < row.length; x++) {
            rowData[headerRow[x]] = row[x]
            // console.log(rowData
        }
        data.push(rowData);
        // console.log(data)
    }
    return data
    }
let x = parseCSVrows(str); 
// console.log(x);

// Part 4 sorting and manipulating data 
// Remove the last element from the sorted array
// Insert the following object @ index 1:
// {id: '48', name: 'Barry', occupation: 'Runner', age: '25}
// Add the following object to the end of the array:
// {id: '7', name: 'Bilbo', occupation: 'None', age: '111'}

function part4(arr) {
    const newRow1 = {id: '48', name: 'Barry', occupation: 'Runner', age: '25'}
    const newRow2 = {id: '7', name: 'Bilbo', occupation: 'None', age: '111'}
    arr.pop();
    arr.splice(1, 0, newRow1)
    arr.push(newRow2);
    return arr
}
console.log(part4(x))

