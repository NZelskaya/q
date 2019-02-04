Dim timeOut, request
timeOut = GetTestParameterValue("Timeout")
request = GetTestParameterValue("request")

Set googlePage = Browser("name:=Google").Page("title:=Google")
		Set searchField = googlePage.WebEdit("title:=szukaj")
		Set searchButton = googlePage.WebButton("xpath:=//FORM[@id='tsf']/DIV[2]/DIV[1]/DIV[3]/CENTER[1]/INPUT[1]")
		
If searchField.Exist(timeOut) Then
	searchField.Click
	searchField.Set request
	Reporter.ReportEvent micPass, "search Field exist on the page", "search Field exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("PASS", "search Field exist on the page")
else
	Reporter.ReportEvent micFail, "search Field not exist on the page", "search Field not exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("FAIL", "search Field not exist on the page")
	ExitTest
End If

If searchButton.Exist(timeOut) Then
	searchButton.Click
	Reporter.ReportEvent micPass, "Button exist on the page", "Button exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("PASS", "Button exist on the page")
else
	Reporter.ReportEvent micFail, "Button not exist on the page", "Button not exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("FAIL", "Button not exist on the page")
	ExitTest
End If
	

