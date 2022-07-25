var members=["William Afton (Father)", "Clara Afton (Mother)", "Michael Afton (Older Brother)", "Elizabeth Afton (Middle Sister)", "Evan Afton (Younger Brother)"];
var images=["https://img.wattpad.com/cover/303869007-256-k354457.jpg",
"http://pm1.narvii.com/8051/b1ceef95ce0d015dc97a65a3f613305c09299158r1-1007-1954v2_00.jpg",
"https://botmake.io/storage/c09606687a8b7a264948ae5c75181fcf/users/91840328f233a852bc2f38c537e586c0.jpg?v=1646959611",
"http://pm1.narvii.com/7879/d13c0a0f5ae9a1975f734aa5f33281e15c0fa482r1-716-1116v2_uhq.jpg",
"https://img.wattpad.com/cover/305470884-256-k459039.jpg"];
var i = 0;
function update() {  
	document.getElementById("familymembers").innerHTML = members[i];
    document.getElementById("family").src = images[i];
    i++;
}