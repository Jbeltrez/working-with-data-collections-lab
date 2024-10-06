let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

function parseCSVrows(s) {
    // const rows = s.split('\n');
    const headerRow = s.split('\n')[0].split(',');
    const subRows = s.split('\n').splice(1, s.split('\n').length)
    // console.log(headerRow)
    // console.log(subRows)
    const data = []
    for (let i = 0; i < subRows.length; i++) {
        const row = subRows[i].split(',');
        const rowData = {};
        for (let x = 0; x < row.length; x++) {
            rowData[headerRow[x]] = row[x]
            // console.log(rowData)
        }
        data.push(rowData);
        // console.log(data)
    }
    console.log(data)
    }
parseCSVrows(str)