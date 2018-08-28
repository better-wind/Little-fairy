var components = [
	{
    "position_show_method": "1",
    "type": "search",
    "id": "1a"
  },
  {
  	"position_show_method": "1",
    "type": "search",
    "id": "2b"
  },
  {
  	"position_show_method": "1",
    "type": "searchA",
    "id": "3c"
  },
  {
  	"position_show_method": "1",
    "type": "searchA",
    "id": "4d"
  }
]

function search() {
	var _com = components.reduce((acc,cv) => {
		acc[cv.id] = cv
		return acc;
	},{})
	console.log(_com);
}
search(); 



