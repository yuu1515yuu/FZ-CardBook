/* ======================================================
   Google Sheets
====================================================== */

async function loadSheet(gid) {

    const url = `https://docs.google.com/spreadsheets/d/${CONFIG.spreadsheet.id}/export?format=csv&gid=${gid}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`シートの取得に失敗しました (gid=${gid})`);
    }

    const csv = await response.text();

    return csvToJson(csv);
}

function csvToJson(csv) {

    const rows = csv.trim().split("\n");

    if (rows.length === 0) return [];

    const headers = rows[0].split(",");

    return rows.slice(1).map(row => {

        const values = row.split(",");

        let obj = {};

        headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim() ?? "";
        });

        return obj;
    });
}

async function loadDatabase() {

    const [master, collection, series, members] = await Promise.all([
        loadSheet(CONFIG.spreadsheet.sheets.master),
        loadSheet(CONFIG.spreadsheet.sheets.collection),
        loadSheet(CONFIG.spreadsheet.sheets.series),
        loadSheet(CONFIG.spreadsheet.sheets.members)
    ]);

    return {
        master,
        collection,
        series,
        members
    };
}
