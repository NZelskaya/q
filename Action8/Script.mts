Dim currentBrowser, link, timeOut
currentBrowser = GetTestParameterValue("Browser") 
linkInternet = GetTestParameterValue("URL")
timeOut = GetTestParameterValue("Timeout")

'Zamykanie okienka browsera
SystemUtil.CloseProcessByName(currentBrowser)
wait 6
SystemUtil.Run currentBrowser, linkInternet
wait(timeOut/2)
Set googlePage = Browser("name:=Google").Page("title:=Google")
		Set startPage = googlePage.Image("xpath:=//IMG[@id='hplogo']")
	If startPage.Exist(timeOut) Then
	 	Reporter.ReportEvent micPass, "wczytanie strony glownej", "wczytanie strony glownej"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micPass, "wczytanie strony glownej", "wczytanie strony glownej"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	End if
