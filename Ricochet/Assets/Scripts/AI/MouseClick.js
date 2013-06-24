#pragma strict

// Get mouse coordinates
function Update(){
	if(Input.GetMouseButtonDown(0)){
		Projectile.mouseX = Input.mousePosition.x;
		Projectile.mouseY = Input.mousePosition.y;
	}
		
}