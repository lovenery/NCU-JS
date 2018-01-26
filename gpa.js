/*
參考公式：http://pdc.adm.ncu.edu.tw/Form/form/form00-07t.pdf
GPA = (每科學分*每科成績GP)之總和再除以總修習學分

使用方法：可從
https://portal.ncu.edu.tw/system/120
點選歷年成績再將內容貼到developer tools console執行即可

一行版本：
function toGP(t){let l;return l=t>=80?4:t<=79&&t>=70?3:t<=69&&t>=60?2:t<=59&&t>=1?1:0}var sum=0,total_credit=0,first_table=document.getElementsByTagName("table")[0],all_lists=first_table.getElementsByClassName("list1");for(let t=0;t<all_lists.length;t++){let l=all_lists[t].childNodes[2].textContent,e=all_lists[t].childNodes[3].textContent,s=all_lists[t].childNodes[4].textContent;""===e?e="無學分":"未到"===s||"勞動服務通過"===s||"停修"===s||(e=parseInt(e),sum+=toGP(s=parseInt(s))*e,total_credit+=e),console.log(`${l}, ${e}, ${s}`)}var GPA=sum/total_credit,rounded_up_to_two_decimal_places=Math.round(100*GPA)/100,msg=`未四捨五入到小數第二位之GPA：${GPA}\n累計總學分：${total_credit}(含被當學分)\nGPA Overall：${rounded_up_to_two_decimal_places}/4.0`;console.log(msg),alert(msg);
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
累計總學分：${total_credit}(含被當學分)
GPA Overall：${rounded_up_to_two_decimal_places}/4.0`
console.log(msg)
alert(msg)
