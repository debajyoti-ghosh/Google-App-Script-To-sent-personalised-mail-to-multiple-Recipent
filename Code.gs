function testintimation() {
  
  var name = 1;    //numer of column, starting from 0
  var roll = 1;
  var department = 2;
  var emailid = 4;
  var college=5;
  
  var emailTemp = HtmlService.createTemplateFromFile("Online JAVA Test intimation");
  
  var ws = SpreadsheetApp.openById("15dCbYsZ5verpBa7f_PlFMPzN3TLwRwyoo3hBtDcmCMY").getSheetByName("Final Shortlisting");
  
  var data = ws.getRange("A2:F112").getValues();
   var mailnum=2;
  data.forEach(function(row){
    
    emailTemp.nam= row[name];
    emailTemp.clg= row[college];
    emailTemp.emai= row[emailid];
    //emailTemp.dept= row[department];
  
    var htmlMessage= emailTemp.evaluate().getContent();
    
    GmailApp.sendEmail(
      row[emailid],
      "Shortlisted for Inceptial Online Java Test on 19/05/2021",
      "",
      {name: "Talent Acquisition Inceptial India", htmlBody: htmlMessage}
    );
    ws.getRange(mailnum,8).setValue("Email Sent");
    mailnum=mailnum+1;
  });
  
}
