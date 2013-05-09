static var i: int;

var distcheck: int;
var prefab: Transform;

var plaeyr: Rigidbody;




function GetRanX(){
return Random.Range(-16,16);
}

function GetRanY(){
return Random.Range(-10,10);
}


function Update () {

distcheck = transform.position.z - plaeyr.position.z;





    for (var x: int = 0 ;i < 30; i++) {
    
        Instantiate (prefab, Vector3(GetRanX(), GetRanY(), i *4), Quaternion.identity);
    }
    
   

}

