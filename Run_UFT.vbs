'### RUN UFT
' cscript.exe Run_UFT.vbs nazwa_testu uid
' uid - jest unikalnym katalogiem do ktorego zapisany jest raport

Dim qtApp
Dim qtTest
Dim currentDir

'zapisanie exec uid do pliku
currentDir = Replace(WScript.ScriptFullName,WScript.ScriptName,"")
execFilePath = currentDir & WScript.Arguments.item(0) & "\execution.txt" '<- arg 0 to nazwa testu... chyba...
Call CreateFile(execFilePath)
Set MyFSO = CreateObject("Scripting.FileSystemObject")
Set WriteStuff = MyFSO.OpenTextFile(execFilePath , 8, True)
WriteStuff.Write WScript.Arguments.item(1) ' <- tu argument z wartoscia uid
WriteStuff.Close


Set qtApp = CreateObject("QuickTest.Application")
If  qtApp.launched <> True then
    qtApp.Launch
    qtApp.Visible = False
End If

IF qtApp.Test.IsRunning = TRUE Then
	qtApp.Test.Stop
END IF


qtApp.Open currentDir & WScript.Arguments.item(0), True ' Open the test in read-only mode

Set qtTest = qtApp.Test

Set qtpResultsLocation = CreateObject("QuickTest.RunResultsOptions")
qtpResultsLocation.ResultsLocation = currentDir & WScript.Arguments.item(0) & "\Test Results\" & WScript.Arguments.item(1) & "\"
qtTest.Run qtpResultsLocation 'Run the test
qtTest.Close 'Close the test


Set qtResultsOpt = Nothing ' Release the Run Results Options object
Set qtTest = Nothing ' Release the Test object
Set qtApp = Nothing ' Release the Application object

'@Desription Tworzy plik - fileName - pelna sciezka z nazwa pliku
Private Function CreateFile(ByVal fileName)
	DeleteFile(fileName)
	Set obj = Createobject("Scripting.FileSystemObject")
	If obj.FileExists(fileName)  = false Then
 		obj.CreateTextFile fileName,true
	End If
	Set obj = nothing
End Function

'@Description usuwanie pliku - w parametrze file path do pliku
Private Function DeleteFile(ByVal filePathName)
	Set filesys = CreateObject("Scripting.FileSystemObject")
	If filesys.FileExists(filePathName) Then 
	filesys.DeleteFile filePathName
	End if
End Function
'###END RUN UFT

