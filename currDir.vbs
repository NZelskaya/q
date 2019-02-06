'zapisanie exec uid do pliku
currentDir = Replace(WScript.ScriptFullName,WScript.ScriptName,"")
WScript.Echo "current PWD -> " & currentDir & WScript.Arguments.item(0)
WScript.Echo "current Results PWD -> " & currentDir & WScript.Arguments.item(0) & "\Test Results\" & WScript.Arguments.item(1) & "\"
