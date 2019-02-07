Dim timeOut, request, searchValue, showedQuery, stringCompare
timeOut = GetTestParameterValue("Timeout")
request = GetTestParameterValue("request")
searchUrl = GetTestParameterValue("expected_search_url")

Set googlePage = Browser("name:=Google").Page("title:=Google")
		Set searchField = googlePage.WebEdit("name:=q")
		Set searchButton = googlePage.WebButton("xpath:=//input[@value='Szukaj w Google']")
		
If searchField.Exist(timeOut) Then
	searchField.Click
	searchField.Set request
	Reporter.ReportEvent micPass, "Search Field exists on the page", "Search Field exisst on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("PASS", "Search Field exists on the page")
else
	Reporter.ReportEvent micFail, "Search Field not exists on the page", "Search Field doesn not exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("FAIL", "Search Field does not exist on the page")
	ExitTest
End If

If searchButton.Exist(timeOut) Then
	searchButton.Click
	Reporter.ReportEvent micPass, "Search Button exists on the page", "Search Button exists on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("PASS", "Search Button exists on the page")
else
	Reporter.ReportEvent micFail, "Search Button does not exist on the page", "Search Button does not exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("FAIL", "Search Button does not exist on the page")
	ExitTest
End If

Set query = Browser("micclass:=Browser").Page("micclass:=Page").WebEdit("name:=q")

showedQuery = query.GetRoProperty("value")
stringCompare = StrComp(showedQuery, request)

Print "Showed request: " & showedQuery

	If stringCompare = 0 Then	
	 	Reporter.ReportEvent micPass, "Searched query is correct", "Searched query is correct"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "Searched query is correct")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "Searched query is wrong: " & showedQuery, "Searched query is wrong: " & showedQuery
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "Searched query is wrong: " & showedQuery)
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
	End if
