'@MasterSwitch
typOperacji = DataTable.Value("Akcja", "Run")

Select Case typOperacji
	'@TestFactoryMethod("Open browser and navigate to URL", "uruchomienie")
	Case "uruchomienie"	
		'@TestFactoryParam([Browser: STRING, URL: STRING, Timeout: INT])
		RunAction "uruchomienie", oneIteration
	'@TestFactoryMethod("Make search", "wyszukanie")
	Case "wyszukanie"
		'@TestFactoryParam([request: STRING, Timeout: INT)
		RunAction "wyszukanie", oneIteration
End Select


