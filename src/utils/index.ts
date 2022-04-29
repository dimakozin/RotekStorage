export default {
    convertToExcel(XLSX:any, tableData: Array<any>) {
        // XLSX imported from .min.js in index.html
        // Too lazy to do it normally
        const table = [
            ["Наименование", "Секция", "Ячейка", "Количество", "Комментарий"],
            ...tableData.map(subj => {
                return [subj.title, subj.section, subj.boxId, subj.amount, subj.comment]
            })
        ] as Array<Array<string>>;

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        
        const fileName = `База ${dd + '.' + mm + '.' + yyyy}.xlsx`

        const data = XLSX.utils.json_to_sheet(table, {skipHeader: true});
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, data, "Склад")
        XLSX.writeFile(wb, fileName)
    }
};