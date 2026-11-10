// ===== Part A =====

//영화 배열 ⇒ 평균 평점(숫자)
const average = (list) => {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("A1 평균 평점:", average(movies));

//영화 배열 ⇒ 평점이 가장 높은 영화 객체
const best = (list) => {
    let maxA = 0;

    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > list[maxA].rating) {
            maxA = i;
        }
    }
    return list[maxA];
};
console.log("A2 최고 평점:", best(movies).title, best(movies).rating);

//영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}
console.log("A3 8점 이상:", filterByRating(movies, 8).length + "편");

//영화 배열 => 연도대별 영화 수
let count2020 = 0;
let count2010 = 0;
let count2000 = 0;
let countBefore = 0;

for (let i = 0; i < movies.length; i++) {
   const decade = movies[i].year - (movies[i].year % 10);

    switch (decade) {
        case 2020:
            count2020++;
            break;

        case 2010:
            count2010++;
            break;

        case 2000:
            count2000++;
            break;

        default:
            countBefore++;
    }
}
console.log(
    "A4 2020년대 " + count2020 + "편, " +
    "2010년대 " + count2010 + "편, " +
    "2000년대 " + count2000 + "편, " +
    "그 이전 " + countBefore + "편"
);

//영화 배열 => 누적 관객 100만 이상인 영화 제목
let bigA = "";

for (let i = 0; i < movies.length; i++) {
    if (movies[i].audience >= 1000000) {
        if (bigA !== "") {
            bigA += " ";
        }
        bigA += movies[i].title;
    }
}
if (bigA === "") {
    bigA = "없음";
}
console.log("A5 관객 100만 이상: " + bigA);