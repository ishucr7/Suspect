var g_id=0;
rect = {}
var canvas  = document.createElement('CANVAS');
canvas.id = "canvas";

function get_values() {
    rectangle = {}
    rectangle['x'] = document.getElementById('x').value;
    rectangle['y'] = document.getElementById('y').value;
    rectangle['height'] = document.getElementById('height').value;
    rectangle['width'] = document.getElementById('width').value;
    rectangle['id'] = document.getElementById('r_id').value;
    rectangle['new_height'] = document.getElementById('new_height').value;
    rectangle['new_width'] = document.getElementById('new_width').value;
    return rectangle;
}

function newRectangle() {
    rectangle  = get_values();
    var x = rectangle['x'];
    var y = rectangle['y'];
    var height = rectangle['height'];
    var width = rectangle['width'];
    createRectangle(x,y,width,height);
}

function createRectangle(x,y,width,height) {
    var c = document.getElementById("canvas");
    var can = c.getContext("2d");
    can.strokeRect(x, y, width, height);

    id = g_id;
    g_id = g_id + 1;

    console.log("entered createa");
    console.log("In create Rectangle and new id is "  + id );

    rect[id] = {
        startX: x,
        startY: y,
        width: width,
        height: height        
    }
};

function deleteRectangle() {
    rectangle  = get_values();
    var id = rectangle['id'];
    console.log("Entered DeleteRectangle,  delete rectangle with id " + id);
    x = rect[id].startX;
    y = rect[id].startY;
    width = rect[id].width;
    height = rect[id].height;
    console.log(height +" " +width +" " +x +" " +y);    

    var c = document.getElementById("canvas");
    var can = c.getContext("2d");
    can.clearRect(x, y, width+.0000015, height+.0000015);    
    console.log("delete done");
};

function resizeRectangle() {
    rectangle  = get_values();
    var new_height = rectangle['new_height'];
    var new_width = rectangle['new_width'];
    x = rect[id].startX;
    y = rect[id].startY;
    deleteRectangle();
    createRectangle(x,y,new_width,new_height);
};
