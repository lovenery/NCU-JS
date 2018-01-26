/*
說明：在 https://cis.ncu.edu.tw/register/student/student_record.php 計算GPA
參考公式：http://pdc.adm.ncu.edu.tw/Form/form/form00-07t.pdf
GPA = (每科學分*每科成績GP)之總和再除以總修習學分
使用方法：可從https://portal.ncu.edu.tw/system/120，點選歷年成績，再將內容貼到developer tools console執行即可
*/

function toGP(numeric_grade) {
    let GP;
    if (numeric_grade >= 80) {
        GP = 4;
    } else if (numeric_grade <= 79 && numeric_grade >= 70) {
        GP = 3;
    } else if (numeric_grade <= 69 && numeric_grade >= 60) {
        GP = 2;
    } else if (numeric_grade <= 59 && numeric_grade >= 1) {
        GP = 1;
    } else {
        GP = 0;
    }
    return GP;
}

var sum = 0
var total_credit = 0

var first_table = document.getElementsByTagName('table')[0]
var all_lists = first_table.getElementsByClassName('list1')
for (let i = 0; i < all_lists.length; i++) {
    let course_name = all_lists[i].childNodes[2].textContent
    let course_credits = all_lists[i].childNodes[3].textContent
    let numeric_grade = all_lists[i].childNodes[4].textContent

    if (course_credits === '') { // 操行學分處空白
        course_credits = '無學分'
    } else if (numeric_grade === '未到' || numeric_grade === '勞動服務通過' || numeric_grade === '停修') {
        // console.log(`${course_name}, ${course_credits}, ${numeric_grade}`)
    } else {
        course_credits = parseInt(course_credits)
        numeric_grade = parseInt(numeric_grade)
        sum += toGP(numeric_grade) * course_credits
        total_credit += course_credits
    }
    console.log(`${course_name}, ${course_credits}, ${numeric_grade}`)
}

var GPA = sum/total_credit
var rounded_up_to_two_decimal_places = Math.round(GPA * 100) / 100
var msg = 
`未四捨五入到小數第二位之GPA：${GPA}
累計總學分：${total_credit}
GPA Overall：${rounded_up_to_two_decimal_places}/4.0`
console.log(msg)
alert(msg)
