var Smlprefab: Transform;
static var i : int;

function GetRanX(){
return Random.Range(-16,16);
}

function GetRanY(){
return Random.Range(-10,10);
}


function Update () {


    for (var x: int = 0 ;i < 30; i++) {
    
        Instantiate (Smlprefab, Vector3(GetRanX(), GetRanY(), i *5), Quaternion.identity);
    }

}