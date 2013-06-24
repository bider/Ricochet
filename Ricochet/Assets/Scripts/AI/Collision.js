var myCollision:Collision;

function OnCollisionEnter(myCollision){
	
	if(myCollision.gameObject.tag == "Wall"){
		Debug.Log("hit the wall");
		Projectile.ricochetCounter++;
		Projectile.multiplier += 0.5;
		
		Projectile.playerScore = Projectile.playerScore + (100 * Projectile.multiplier);
	}
	if(myCollision.gameObject.name == "Multiplier"){
		Debug.Log("hit the Multiplier");
		Projectile.multiplier *= 2;
		
		Projectile.playerScore = Projectile.playerScore + (500 * Projectile.multiplier);
	}
}
