function I(classname) {
    var limit = course_data[classname].limitCnt;
    var one=0; var two=0;
    for (var i = 0; i < $('table#std td:nth-child(8)').length; i++) {
        var str = $('table#std tr:nth-child('+i+') td:nth-child(8)').text();
        if (str=='1') { one++; }
        if (str=='2') { two++; }
    }
    console.log("志願序1中獎率: "+limit/one);
    console.log("志願序2中獎率: "+limit/two);
    console.log("志願序1: "+ one);
    console.log("志願序2: "+ two);
}
function O(people) {
    var limit = people;
    var one=0; var two=0;
    for (var i = 0; i < $('table#std td:nth-child(8)').length; i++) {
        var str = $('table#std tr:nth-child('+i+') td:nth-child(8)').text();
        if (str=='1') { one++; }
        if (str=='2') { two++; }
    }
    console.log("志願序1中獎率: "+limit/one);
    console.log("志願序2中獎率: "+limit/two);
    console.log("志願序1: "+ one);
    console.log("志願序2: "+ two);
}
