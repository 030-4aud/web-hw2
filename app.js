// ===== Part A =====

//영화 배열 ⇒ 평균 평점(숫자)
const averageA = (list) => {
    let sumA = 0;
    for (const m of list) {
        sumA += m;
    }
    return sumA / list.length;
}
console.log("A1 평균 평점:", averageA(ratings));

//영화 배열 ⇒ 평점이 가장 높은 영화 객체
const bestA = (list) => {
    let maxA = 0;

    for (let i = 1; i < list.length; i++) {
        if (ratings[i] > ratings[maxA]) {
            maxA = i;
        }
    }
    return list[maxA];
};
console.log("A2 최고 평점:", bestA(titles), bestA(ratings));

//영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
const filterByRatingA = (list, min) => {
    return list.filter(m => m >= min);
}
console.log("A3 8점 이상:", filterByRatingA(ratings, 8).length + "편");

//영화 배열 => 연도대별 영화 수
let count2020 = 0;
let count2010 = 0;
let count2000 = 0;
let countBefore = 0;

for (let i = 0; i < years.length; i++) {
    const decade = years[i] - (years[i] % 10);

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

for (let i = 0; i < audiences.length; i++) {
    if (audiences[i] >= 1000000) {
        bigA += titles[i] + " | ";
    }
}
if (bigA === "") {
    bigA = "없음";
}
console.log("A5 관객 100만 이상: " + bigA);


// ===== Part B =====

//영화 배열 ⇒ 평균 평점(숫자)
const averageB = (list) => {
    let sumB = 0;
    for (const m of list) {
        sumB += m.rating;
    }
    return sumB / list.length;
}

//영화 배열 ⇒ 평점이 가장 높은 영화 객체
const bestB = (list) => {
    const maxB = Math.max(...list.map(m => m.rating));
    return list.find(m => m.rating === maxB);
}

//영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
const filterByRatingB = (list, min) => {
    return list.filter(m => m.rating >= min);
}

//영화 배열 ⇒ 배열, 키 이름, 참이면 내림차순을 담은 새 배열 
function sortByB(list, key, desc) {
    const copyB = [...list];
    copyB.sort((a, b) => {
        if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
        return a[key] - b[key];
    });
    if (desc) copyB.reverse();
    return copyB;
}

//영화 배열 ⇒ 배열, 문자열을 담은 새 배열
const searchB = (list, keyword) => {
    const wordB = keyword.trim().toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(wordB));
}

//영화 배열 ⇒ 숫자나 숫자 문자열
const formatNumberB = (n) => {
    return Number(n).toLocaleString("ko-KR");
}

//날짜 문자열 ⇒ 올해까지 몇 년(숫자)
const yearsSinceB = (dateStr) => {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

document.getElementById("out").textContent = `전체 10편, 평균 평점 ${averageB(movies).toFixed(1)}점\n최고 평점 ${bestB(movies).title} (${bestB(movies).rating}점, 개봉한 지 ${yearsSinceB(bestB(movies).date)}년)\n관객 1위 ${sortByB(movies, "audiences", true)[0].title} (누적 ${formatNumberB(sortByB(movies, "audiences", true)[0].audiences)} 명)`;

// ===== Part C =====

const getListC = (data) => {
    return data.results;
}

const averageByC = (list, key) => {
    let sumC = 0;

    for (let i = 0; i < list.length; i++) {
        sumC += list[i][key];
    }

    return sumC / list.length;
}

console.log(
    "C1 page:", TMDB.page + ", ",
    "total_page:", TMDB.total_pages + ", ",
    "total_results:", TMDB.total_results + ", ",
    "이번 응답 :", getListC(TMDB).length + "편"
);

console.log(
    "C2 상영작 평균 평점:",
    averageByC(getListC(TMDB), "vote_average").toFixed(1)
);

console.log(
    "C4 ' the ' 검색 :",
    searchB(getListC(TMDB), " the ").length + "편"
);

console.table(sortByB(getListC(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);