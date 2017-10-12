/*
Google Apps Script code that highlights the row with the event info on the day of the event
 */

    function colorEntireRowGreenWhenDateOfEventMatchesCurrentDate() {

        var data = SpreadsheetApp.getActiveSheet();
        var range = data.getRange("C2:C15"); //Have to pick this up automatically
        var values = range.getValues();
        var today = new Date();
        var todaysDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        Logger.log(data);
        range.setBackground(null);

        for (var i in values) {
            var d = values[i][0];
            Logger.log(typeof d)
            if (d.getTime() === todaysDate.getTime()) {
                var row = parseInt(i) + 1;
                data.getRange(range.getCell(row, 1).getRow(), 1, 1, data.getMaxColumns()).setBackground('#c1f0c1');
            }
        }
    }