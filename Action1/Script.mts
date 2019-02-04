'@MasterSwitch
typOperacji = DataTable.Value("Akcja", "Run")

Select Case typOperacji
	'@TestFactoryMethod("Klikniecie menu Lista Pakietow", "uruchomienie")
	Case "uruchomienie"	
		'@TestFactoryParam([Browser: STRING, URL: STRING, Timeout: INT])
		RunAction "uruchomienie", oneIteration
	'@TestFactoryMethod("Klikniecie przycisku Dodaj", "wyszukanie")
	Case "wyszukanie"
		'@TestFactoryParam([request: STRING, Timeout: INT])
		RunAction "wyszukanie", oneIteration
End Select


