function OnGUI(){

	if(GUI.Button(Rect(430,220,150,30), "Start Game")){
	Application.LoadLevel(3);
	}
	if(GUI.Button(Rect(430,300,150,30), "Player Guide")){
	Application.LoadLevel(1);
	}
	if(GUI.Button(Rect(430,380,150,30), "Exit")){
	Application.Quit();
}
}