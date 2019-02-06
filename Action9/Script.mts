Dim timeOut, request, searchValue, url, stringCompare
timeOut = GetTestParameterValue("Timeout")
request = GetTestParameterValue("request")
searchUrl = GetTestParameterValue("expected_search_url")

Set googlePage = Browser("name:=Google").Page("title:=Google")
		Set searchField = googlePage.WebEdit("title:=Szukaj")
		Set searchButton = googlePage.WebButton("xpath:=//FORM[@id='tsf']/DIV[2]/DIV[1]/DIV[3]/CENTER[1]/INPUT[1]")
		
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

searchValue = request & " - Google search"
Set googleSearchPage = Browser("name:=" & searchValue).Page("title:=" & searchValue)
Set b2bLink = googleSearchPage.Link("xpath:=//a[@href='" & searchUrl & "/']")

If b2bLink.Exist(timeOut) Then
	b2bLink.Click
	Reporter.ReportEvent micPass, "Searched link exist on the page", "Searched link exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("PASS", "Searched link exist on the page")
else
	Reporter.ReportEvent micFail, "Searched link does not exist on the page", "Searched link does not exist on the page"
	''Dodanie komunikatu do loga
	Call Log_Result("FAIL", "Searched link does not exist on the page")
	ExitTest
End If

url = Browser("micclass:=Browser").Page("micclass:=Page").GetRoProperty("url")
Print "Opened site : " & url

stringCompare = StrComp(url, searchUrl)

If stringCompare = 0 Then	
	Reporter.ReportEvent micPass, "Searched page opened", "Searched page opened"
	''Dodanie komunikatu do loga
	Call Log_Result("PASS", "Searched page opened")
else
	Reporter.ReportEvent micFail, "Searched page wasn't opened", "Searched page wasn't opened"
	''Dodanie komunikatu do loga
	Call Log_Result("FAIL", "Searched page wasn't opened")
	ExitTest
End If
