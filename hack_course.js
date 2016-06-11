//serial = "1035"
jQuery('li[sno=1035]').find('span:first').text();

//parse serial to serialNo = 01035
("a" + (100000 + parseInt(1035, 10))).substring(2);

//回傳個人資料陣列 https://course.ncu.edu.tw/Course/main/support/sheets.xml

//出來課程資料的陣列 https://course.ncu.edu.tw/Course/main/support/course.xml?id=crsoI1035
// course_data[parseInt(1035, 10)];
SelectCourseService.getCourseDataArray(1035,
		function (result) {
				//SetCourseStatus(1035,'ready');
				console.log(result);
		}
);

//一頁版的課程資料 https://course.ncu.edu.tw/Course/main/support/courseDetail.html?crs=1035


/*不知銃三小的
https://course.ncu.edu.tw/Course/dialog/dlgSignOpen.html
			"/dialog/dlgSignOpen.html",
			"/dialog/dlgSignNoObtain.html",
			"/dialog/dlgSignOpenFor.html",
			"/dialog/dlgSignClassName.html",
			"/dialog/dlgSignPassword.html"
*/

// 加解密? 不知幹麻的
EncodeDecodeService.encode('1035',
		function (result) {
				console.log(result); // geydgni
		}
);
EncodeDecodeService.decode('geydgni',
		function (result) {
				console.log(result); // 1035
		}
);

// 只能變成加選 QQ 第二個參數不知填啥
SelectCourseService.addCourseBySerialNo(1035,'ready',
		function (result) {
				//SetCourseStatus(1035,'ready');
				console.log(result);
		}
);
SelectCourseService.addCourseBySignature(1035,'ready',
		function (result) {
				//SetCourseStatus(1035,'ready');
				console.log(result);
		}
);

// 不能用 感覺要加密碼卡
SelectCourseService.addCourseBySignature(1035, '04578RRGMD' ,
		function (result) {
				//SetCourseStatus(1035,'ready');
				console.log(result);
		}
);

// 製作元素 沒屁用中
var table = document.createElement('td');
table.class="rootVoice {menu: 'menuSystem'}";
var t = document.createTextNode("CLICK ME");
table.appendChild(t);
document.getElementsByTagName('body')[0].appendChild(table);
