// [문제1] - 1
// (1) 영화의 제목과 평점을 배열로 선언
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRating = [8, 4, 7, 6];

// (2) HTML 에 출력할 메세지 구성하기
let outHTML = `<table>`;

for(let index = 0; index <= movieNames.length-1; index++) {
    let names = movieNames[index];      // index 번째의 영화 제목을 반환

    outHTML += `<tr> <td> ${names} </td>`

    // (4) 영화평점 만큼 별 출력하기, 남은 별은 빈별
    let starHTML = '';
    for(let star = 1; star <= 10; star++) {
        // 만약에 평점이 star 보다 이상이면 검은별
        if(movieRating[index] >= star) {
            // 현재 star보다 평점이 더 크면
            starHTML += `★`
        } 
        // 만약에 평점이 star 보다 작으면 흰별 추가
        else {
            starHTML += `☆`
        }
    }
    outHTML += `<td> ${starHTML} </td> </tr>`
}

outHTML += `</table>`

// (3) DOM 객체를 이용한 html 에 변수값 출력하기
let exampleDIV1객체 = document.querySelector('#exampleDIV1');
exampleDIV1객체.innerHTML = outHTML;    



// [문제2] - 2
// (1) 좌석 상태를 저장하고 있는 배열 선언
let 좌석정보 = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];

// (2) HTML 에서 출력할 HTML 문자열 구성하기
let seatHtml = '';
for(let index = 0; index <= 좌석정보.length-1; index++) {
    // <div>에 index번째 값을 <span>로 구성 / 만약에 좌석정보가 빈좌석이면 blue, 예약석이면 red
    seatHtml += `<span style = "color : ${좌석정보[index] == '빈좌석' ? 'blue' : 'red'}"> ${좌석정보[index]} </span>`

    // + 2배수 마다 줄바꿈 처리
    if((index + 1) % 2 == 0) {
        seatHtml += `<br />`
    }
}

// (3) 특정 html 선택자로부터 마크업 객체를 가져와서 html 대입
let exampleDIV2객체 = document.querySelector('#exampleDIV2')
exampleDIV2객체.innerHTML = seatHtml;



// [문제3] - 1
// (1) 학생이름목록과 학생점수목록을 배열 선언
let nameArray = [ '유재석' , '강호동' , '신동엽' ]
let scores = [ 92 , 86 , 72 ]

// (2) HTML 에 출력할 html 문자열 구성, HTML 에서 작성할 html 코드를 JS 에서 문자열로 작성중
let studentHTML = `<table> <tr> <th> 이름 </th> <th> 점수 시각화 </th> <tr>`

for(let index = 0; index <= nameArray.length-1; index++) {

    studentHTML += `<tr> <td> ${nameArray[index]} </td>`

    // (4) 점수 출력
    let scoreHTML = ``;

    for(let score = 1; score <= 100; score++) {
        if(scores[index] >=  score) {
            // 만약에 index 번째 점수가 현재 score 보다 크면
            scoreHTML += `●`
        } 
        else {
            scoreHTML += `○`
        }
    }
    studentHTML += `<td> ${scoreHTML} </td> </tr>`
}
studentHTML += `</table>`

// (3) 특정한 선택자의 마크업을 JS 객체로 가져오기
let exampleDIV3객체 = document.querySelector('#exampleDIV3')
exampleDIV3객체.innerHTML = studentHTML;