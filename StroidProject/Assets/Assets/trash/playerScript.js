// global variables.
static var playerSpeed = 3;
static var playerHealth = 100;
static var playerScore:int;
static var distCount:int;
static var collisionCount:int;
var choice: int;
var jumpCount: int;
var jump = false;
function Update(){
	
	// controls the horizontal 
	var x = Input.GetAxis("Horizontal") * Time.deltaTime * playerSpeed;
	transform.Translate(Vector3.right * x);
	
	// handles the superjump
	if (Input.GetKeyUp(KeyCode.Space)){
	jump = true;
	jumpCount = 0;
	}
	
	if (jumpCount < 10){
	  	jumpCount++;
	  }
	else{
		jump = false;
	}
	 
	// turns on gravity
	if (transform.position.y > 0.2){
	rigidbody.useGravity = true;
	}
	else if (transform.position.y < 0){
	rigidbody.useGravity = false;
	transform.position.y = 0;
	}
	//handles the death of the player
	if (playerHealth <= 0){
	Application.LoadLevel(5);
	}
	//handles if the player wants a menu
	if (Input.GetKeyDown(KeyCode.Escape)){
	Application.LoadLevel(4);
	}
}
function OnGUI(){
	GUI.Label(Rect(10,10,200,50),"Score: " + playerScore );
	GUI.Label(Rect(10,30,200,50),"Health: " + playerHealth);
	GUI.Label(Rect(225,10,200,50),"Distance: " + distCount);
	GUI.Label(Rect(225,30,200,50),"Buff collisionCount: " + collisionCount);

}



function OnTriggerEnter(otherObject: Collider){

	if (otherObject.gameObject.tag == "wallL"){		
		rigidbody.AddForce(Vector3.right * 15, ForceMode.VelocityChange);
		collisionCount++;
		playerHealth -=5;
		choice = 1;
	}

	else if (otherObject.gameObject.tag == "wallR"){
		rigidbody.AddForce(Vector3.left * 15, ForceMode.VelocityChange);	
		collisionCount++;
		playerHealth -=5;
	}

	else if (otherObject.gameObject.tag == "platform" && jump == true){	
		rigidbody.AddForce(Vector3.up * 25, ForceMode.VelocityChange);
		otherObject.transform.position.y = 6.5;
		collisionCount++;
		playerHealth -=20;
		}
		
	else if (otherObject.gameObject.tag == "platform" ){	
		rigidbody.AddForce(Vector3.up * 15, ForceMode.VelocityChange);
		collisionCount++;
		playerHealth -=5;
		
	}
	

	else if (otherObject.gameObject.tag == "jewel1"){
		playerScore += 100;
		otherObject.transform.position.y = 6.5;
		collisionCount++;
		
	}
	
	else if (otherObject.gameObject.tag == "health"){
		otherObject.transform.position.y = 6.5;
		collisionCount++;
		GetHealth();
	}	
}
// handles the max of player health
function GetHealth(){

	if (playerHealth <= 90){
		playerHealth +=10;
	}
	
	else if (playerHealth > 90  && playerHealth < 100){
		var tempHealth = 100 - playerHealth;
		playerHealth += tempHealth;
		}
}
