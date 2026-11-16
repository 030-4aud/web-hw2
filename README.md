# web-hw2

# 실습과제 #2 : 영화 데이터를 자바스크립트로 - 허은서 / 26 : - 사이트 주소 : https://030-4aud.github.io/web-hw2/ - 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2016-03-03) 

## 구현 항목 체크 - [ ] (요구사항 1~6의 번호와 제목을 그대로 옮겨 적고 체크, 보너스는 이름과 캡처 파일명) 
[O] 1. Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로 계산한 A1~A5 다섯 줄이 콘솔에 찍힘. 
[O] 2. Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search, formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과. 
[O] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 C1, C2, 상위 5편 표, C4가 콘솔에 찍힘. 
[O] 4. 출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 <pre id="out">에 Part B 요약 3줄(textContent 한 번). 
[O] 5. 코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름. 
[O] 6. 제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI 기록, 어느 파일에도 API 키 없음.

## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기) 
| 번호 | 호출 | 기대 결과 | 실제 결과 | 
|---|---|---|---| 
| 1 | formatNumber("1234567") | '1,234,567' | | 
| 2 | average(movies).toFixed(1) | '7.3' | '7.3' | 
| 3 | best(movies).title  | 'Avengers: Infinity War' | 'Avengers: Infinity War' | 
| 4 | sortBy(movies, "rating", true)[0].title  | 'Avengers: Infinity War' | 'Avengers: Infinity War' | 
| 5 | filterByRating(movies, 8).length | '1' | '1' | 
| 6 | search(movies, " the ").length  | '7' | '7' | 
| 7 | yearsSince("2016-03-03") | '10' | '10' | 
| 8 | 4번 실행 뒤 movies[0].title  | 'The Passion of the Christ' | 'The Passion of the Christ' | 

## 어려웠던 점 3가지와 해결 

## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어) 

## 생성형 AI 사용 내역 (없으면 "없음") - 질문 요지 : - 답변 요약 : - 채택 여부 : 