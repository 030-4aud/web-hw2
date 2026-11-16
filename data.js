const titles = [
    "The Passion of the Christ",
    "A.I. (Artificial Intelligence)",
    "Avengers: Infinity War",
    "Cinderella",
    "Titanic",
    "왕과 사는 남자",
    "휴민트",
    "초속 5센티미터",
    "28년 후: 뼈의 사원",
    "신의 악단"
];

const ratings = [
    7.5,
    7.0,
    8.2,
    6.8,
    7.9,
    6.9,
    7.4,
    7.9,
    7.1,
    6.8
];

const years = [
    2004,
    2001,
    2018,
    2015,
    1997,
    2026,
    2026,
    2025,
    2026,
    2025
];

const audiences = [
    0,
    0,
    0,
    0,
    0,
    9407753,
    1874426,
    71293,
    29175,
    1405190
];


// Part B : 영화 객체 10건(Part A와 같은 순서) 

const movies = [
    {
        title: "The Passion of the Christ", year: 2004, date: "2004-02-25",
        rating: 7.5, audiences: 0, poster: "https://image.tmdb.org/t/p/w342/hNnh0cwtv5iQ1ErTSZXMbo1Q2Rl.jpg", type: "mine", rank: null
    },
    {
        title: "왕과 사는 남자", year: 2026, date: "2026-02-04",
        rating: 6.9, audiences: 9407753, poster: "https://image.tmdb.org/t/p/w342/kkJB3SeUJp7Y0IXXLkv5QZHJGkH.jpg", type: "boxoffice", rank: 1
    },
    {
        title: "A.I. (Artificial Intelligence)", year: 2001, date: "2001-06-29",
        rating: 7.0, audiences: 0, poster: "https://image.tmdb.org/t/p/w342/v5URBLEZCtICf0DsnEztdrAs4dD.jpg", type: "mine", rank: null
    },
    {
        title: "휴민트", year: 2026, date: "2026-02-11",
        rating: 7.4, audiences: 1874426, poster: "https://image.tmdb.org/t/p/w342/f7sCSLEPRfV2fWQ0RYOtHhnHXuG.jpg", type: "boxoffice", rank: 2
    },
    {
        title: "Avengers: Infinity War", year: 2018, date: "2018-04-25",
        rating: 8.2, audiences: 0, poster: "https://image.tmdb.org/t/p/w342/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg", type: "mine", rank: null
    },
    {
        title: "초속 5센티미터", year: 2025, date: "2025-10-10",
        rating: 7.9, audiences: 7129, poster: "https://image.tmdb.org/t/p/w342/yuHnj0FAxZGT2gAQDNMI16luf8Q.jpg", type: "boxoffice", rank: 3
    },
    {
        title: "Cinderella", year: 2015, date: "2015-03-06",
        rating: 6.8, audiences: 0, poster: "https://image.tmdb.org/t/p/w342/3yNm2SdzdcXYXv8D7cS9RV5H6DG.jpg", type: "mine", rank: null
    },
    {
        title: "28년 후: 뼈의 사원", year: 2026, date: "2026-01-14",
        rating: 7.1, audiences: 29175, poster: "https://image.tmdb.org/t/p/w342/ubgOSHAEhv1ds8BNHodhCcI13oH.jpg", type: "boxoffice", rank: 4
    },
    {
        title: "Titanic", year: 1997, date: "1997-12-18",
        rating: 7.9, audiences: 0, poster: "https://image.tmdb.org/t/p/w342/132KjhVrWUqKFVfMAKKNkherytA.jpg", type: "mine", rank: null
    },
    {
        title: "신의 악단", year: 2025, date: "2025-12-31",
        rating: 6.8, audiences: 1405190, poster: "https://image.tmdb.org/t/p/w342/oZr1zCBbxMf1Z2XerqOw4oPvvWE.jpg", type: "boxoffice", rank: 5
    }
]; 