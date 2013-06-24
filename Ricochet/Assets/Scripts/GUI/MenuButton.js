#pragma strict
var levelToLoad: String;

function OnMouseEnter(){
	renderer.material.color = Color.green;
}

function OnMouseExit(){
	renderer.material.color = Color.white;
}

function OnMouseUp(){
	yield new WaitForSeconds(0.2);
	Application.LoadLevel(levelToLoad);
}