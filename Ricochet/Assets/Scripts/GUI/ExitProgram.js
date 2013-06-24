#pragma strict
var textField : TextMesh;

function Start(){
	renderer.material.color = Color.white;
}

function OnMouseEnter(){
	renderer.material.color = Color.green;

}
function OnMouseExit(){
	renderer.material.color = Color.white;

}

function OnMouseUp(){
	Application.Quit();
}