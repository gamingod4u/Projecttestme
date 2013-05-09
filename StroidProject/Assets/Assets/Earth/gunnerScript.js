public var bullet:Transform;
public var projectileSpeed:float = 10;
public var delay:float = 0.0;
public var weaponSpeed:float = 0.0;
private var bulletCount:int = 0;
 
// Current player variable
var player:GameObject;
 
function Update(){
if (delay < 200){
delay++;
}

if (delay >= 200){
delay = 0;
Shoot();
}


}
 
function Shoot()
{
    var shoot = Instantiate(bullet, transform.position, bullet.rotation);
    // Set projectile velocity
    shoot.rigidbody.velocity = (player.transform.position - transform.position).normalized * projectileSpeed;
}