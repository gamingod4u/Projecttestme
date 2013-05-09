function OnGUI(){

if(GUI.Button(Rect(40,525,150,30), "Restart")){
	PlayerScript.playerScore = 0;
	PlayerScript.collisionCount= 0;
	PlayerScript.collisiondata= 0;
	LrgAsteriodScript.i = 0;
	smlAsteriodScript.i = 0;
		loadingText = "Loading!!!"; 
		Application.LoadLevel(3);
	}
	// if player presses quit then exit the application.
	if(GUI.Button(Rect(750,525,150,30), "Exit")){
		Application.Quit();
	}
}