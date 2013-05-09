var loadingText = " ";
public var guiskin:GUISkin;

function OnGUI(){

//variables 
GUI.skin = guiskin;
var tempScore = PlayerPrefs.GetInt("High Score");
var highScore = tempScore;
var totalScore = PlayerScript.playerScore + PlayerScript.collisiondata* PlayerScript.collisionCount;

// prebuilt text for gui
	titleText = "GameOver! You win!";
	refText = "Thanks for playing!";
	highscoreText = " Previous Kill Count: " + tempScore;
	scoreText = "Collision Score: " + PlayerScript.playerScore;
	distText = "Total Distance: " + PlayerScript.dist;
	collText = "Total Collisions: " + PlayerScript.collisionCount;
	totalText= "Total Humans Destroyed: " + scoreText + " + " + distText + " * " + collText + " = " + totalScore;
	
	// where to render the gui on screen
	GUI.Label(Rect(380,75,800,300), titleText);
	GUI.Label(Rect(380,175,800,300), scoreText);
	GUI.Label(Rect(380,225,800,300), distText);
	GUI.Label(Rect(380,275,800,300), collText);
	GUI.Label(Rect(100,325,800,500), totalText);
	GUI.Label(Rect(380,375,800,300), highscoreText);
	GUI.Label(Rect(380,425,800,300), refText);
	GUI.Label(Rect(380,715,800,300), loadingText);

	// if statement handles the high score 
	if ( totalScore >= highScore) // if total score is greater than previous high declare new high
	{
	highScore = totalScore;
	PlayerPrefs.SetInt("High Score", highScore); // this saves the highscore so that it is always in the game.
	newscoreText = "You have a new Kill Count!!";
	GUI.Label(Rect(370,125,800,400), newscoreText);
	}
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