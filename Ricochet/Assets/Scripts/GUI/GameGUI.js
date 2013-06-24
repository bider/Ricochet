#pragma strict
var Score:GUIText;
var ricochetCounter:GUIText;
var multiplier:GUIText;

function OnGUI(){
	Score.text = "Score: " + Projectile.playerScore;
	ricochetCounter.text = "Ricochets: " + Projectile.ricochetCounter;
	multiplier.text = "Multiplier: " + Projectile.multiplier;
}