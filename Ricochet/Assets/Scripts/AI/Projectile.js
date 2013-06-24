#pragma strict

var cSpeed:float = 5.0;// Projectile Speed
var sFactor:float = 5.0;
var levelToLoad:String;// Level to load
var myCamera : Camera;// Camera in scene
static var mouseX : float;// Mouse coordinates at mouse click
static var mouseY : float;
var startPosX: float;// Projectile starting coordinates
var startPosY: float;
var launchX : float;// Projectile launch coordinates
var launchY : float;
var launched : boolean;

// vars for score/ricochets
static var playerScore = 0;
static var ricochetCounter = 0;
static var multiplier: float = 0.0;

function Start () {
	// Get starting position of projectile
	var startPos : Vector3 = myCamera.main.WorldToScreenPoint(transform.position) ;
	startPosX = startPos.x;
	startPosY = startPos.y;	
	
	// Initial values
	playerScore = 0;
	ricochetCounter = 0;
	multiplier = 1.0;
	rigidbody.AddForce(0,0,0);
	launched = false;
}

function Update () {
	// Get mouse click coordinates
	
	launchX = mouseX - startPosX;
	launchY = mouseY - startPosY;
	
	Debug.Log("launchX= "+launchX);
	Debug.Log("launchY= "+launchY);

	if(Input.GetMouseButtonDown(0) && !launched){
		rigidbody.AddForce(launchX,launchY,0);
		launched = true;
	
	}

	var cVel = rigidbody.velocity;
	var tVel = cVel.normalized * cSpeed;
	rigidbody.velocity = Vector3.Lerp(cVel, tVel, Time.deltaTime * sFactor);
	
	
	

}
