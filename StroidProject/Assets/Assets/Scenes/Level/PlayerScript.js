#pragma strict
var amttomove: Vector3;

var maxplayerspeed = 3.0f;
var playerSpeed:float = 1;
var playerzminSpeed:float = 1;
static var dist : float;
var hittimer = 100;
var collisionsnd:AudioClip;
var earthsound:AudioClip;

static var distCount:Vector3;
static var collisiondata: int;
static var playerScore:int;
static var collisionCount:int;
var start: Transform;
var hitcount: int;

public var guiskin:GUISkin;
function Update () {

if (hitcount == 2){
Application.LoadLevel(5);
}
// handles constant movement in z
transform.Translate(0,0,playerzminSpeed*Time.deltaTime);

	if (hittimer <= 100){
		hittimer++;
	}
	if (hittimer >= 100 && playerzminSpeed != 1)  {
		playerzminSpeed -= .2;
		playerSpeed -= .2;
		hittimer= 0;
	}
	if (playerSpeed < 1)
	{
		playerSpeed = 1;
		playerzminSpeed = 1;
	}
// works the distance modify for the game.
distCount.z = transform.position.z - start.position.z;
dist = Mathf.RoundToInt(Mathf.Abs(distCount.z * 10)/10);

// handles the horizontal movement of the player and bounds the screen
	if(transform.position.x <= 19 && transform.position.x > -19){
		var x = Input.GetAxis("Horizontal") * Time.deltaTime * playerSpeed;
		transform.Translate(Vector3.right * x);
	}
	if(transform.position.x > 19){
		transform.position.x = 18.9999;
	}
	else if (transform.position.x < -19){
		transform.position.x = -18.9999;
	}

// handles the vertical movement of the player and bounds the screen
	if(transform.position.y < 14 && transform.position.y > -14)
	{
		var y = Input.GetAxis("Vertical") * Time.deltaTime * playerSpeed;
		transform.Translate(Vector3.up * y);
	}
	if (transform.position.y > 13){
		transform.position.y = 12.9999;
	}
	else if(transform.position.y < -13)
	{
		transform.position.y = -12.9999;
	}

// handles if the player missed the earth completly.
	if(transform.position.z > 160){
		Application.LoadLevel(5);
	}

}

function OnGUI(){
	GUI.skin = guiskin;
	GUI.Label(Rect(750,10,200,50),"Distance: " + dist);
	GUI.Label(Rect(10,10,200,50),"Score: " + playerScore );
	}
function OnTriggerEnter(otherObject: Collider){

	if (otherObject.gameObject.tag == "Lasteriod"){		
		Destroy(otherObject.gameObject);
		audio.PlayOneShot(collisionsnd,.1);
		transform.localScale += Vector3(.1,.1,.1);
		LrgAsteriodScript.i -= 1;
		
		if (playerSpeed < maxplayerspeed){
		playerSpeed+=1;
		playerzminSpeed +=1;
		}
		playerScore += 50;
		collisionCount++;
		hittimer = 0;
	}
	
	if (otherObject.gameObject.tag == "Sasteriod"){		
		Destroy(otherObject.gameObject);
		audio.PlayOneShot(collisionsnd,.1);
		transform.localScale += Vector3(.05,.05,.05);
		smlAsteriodScript.i -= 1;
		
		if (playerSpeed < maxplayerspeed){
		playerzminSpeed +=1 ;
		playerSpeed+=1;
		
		}
		playerScore += 100;
		collisionCount++;
		hittimer = 0;
	}
	if (otherObject.gameObject.tag == "earth"){
	audio.PlayOneShot(earthsound,.1);
	collisiondata = 1000000;
	Application.LoadLevel(4);
	
	}
	if (otherObject.gameObject.tag == "landfall"){
	collisiondata = 10000000;
	audio.PlayOneShot(earthsound,.1);
	Application.LoadLevel(4);
	}
	if (otherObject.gameObject.tag == "bullet"){
	Destroy(otherObject.gameObject);
	audio.PlayOneShot(collisionsnd,.1);
	transform.localScale -= Vector3(.2,.2,.2);
	
	hitcount++;
	}
}

