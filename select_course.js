// 輸入課號
function I(classname) {
    var limit = course_data[classname].limitCnt;
    var one=0; var two=0;
    for (var i = 1; i <= $('table#std td:nth-child(8)').length; i++) {
        var str = $('table#std tr:nth-child('+i+') td:nth-child(8)').text();
        if (str=='1') { one++; }
        if (str=='2') { two++; }
    }
    console.log("志願序1中獎率: "+limit/one);
    console.log("志願序2中獎率: "+limit/two);
    console.log("志願序1: "+ one);
    console.log("志願序2: "+ two);
}
// 輸入上限人數
function O(people) {
    var limit = people;
    var one=0; var two=0;
    for (var i = 1; i <= $('table#std td:nth-child(8)').length; i++) {
        var str = $('table#std tr:nth-child('+i+') td:nth-child(8)').text();
        if (str=='1') { one++; }
        if (str=='2') { two++; }
    }
    console.log("志願序1中獎率: "+limit/one);
    console.log("志願序2中獎率: "+limit/two);
    console.log("志願序1: "+ one);
    console.log("志願序2: "+ two);
}
// 選課男女比
function G() {
    var boy=0; var girl=0;
    for (var j = 1; j <= $('table#std td:nth-child(6)').length; j++) {
        var string = $('table#std tr:nth-child('+j+') td:nth-child(6)').text();
        if (string=='男') { boy++; }
        if (string=='女') { girl++; }
    }
    console.log("男: "+boy+ " , "+"女: "+girl);
    console.log("比: "+boy/girl);
}
