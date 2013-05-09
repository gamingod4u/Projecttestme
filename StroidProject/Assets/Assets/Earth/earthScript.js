private var earth: Transform;
var rotSpeed = .0001/6;

function Start () {
earth = this.transform;
}

function Update () {


earth.Rotate(0, rotSpeed, 0, Space.World);




}