Dim currentBrowser
currentBrowser = GetTestParameterValue("Browser") 

'Zamykanie okienka browsera
SystemUtil.CloseProcessByName(currentBrowser)

Call EndLog
Call ExitTest
