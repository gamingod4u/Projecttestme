// Place buttons on screeen for ui
function OnGUI(){
	if(GUI.Button(Rect(40,525,150,30), "Main Menu")){
	Application.LoadLevel(0);
	}
	if(GUI.Button(Rect(790,525,150,30), "Credits")){
	Application.LoadLevel(6);
	}
	
}
