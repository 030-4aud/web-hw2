# web-hw2

# 실습과제 #2 : 영화 데이터를 자바스크립트로 - 허은서 / 26 : - 사이트 주소 : https://030-4aud.github.io/web-hw2/ - 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2016-03-03) 

## 구현 항목 체크 - [ ] (요구사항 1~6의 번호와 제목을 그대로 옮겨 적고 체크, 보너스는 이름과 캡처 파일명) 
[O] 1. Part A : data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로 계산한 A1~A5 다섯 줄이 콘솔에 찍힘.

[O] 2. Part B 함수 7개 : movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search, formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과.

[O] 3. Part C 응답 구조 : tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.

[O] 4. 출력 : console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 <pre id="out">에 Part B 요약 3줄(textContent 한 번).

[O] 5. 코드 품질 : 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름.

[O] 6. 제출 형식 : 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI 기록, 어느 파일에도 API 키 없음.

-----------

## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기) 
| 번호 | 호출 | 기대 결과 | 실제 결과 | 
|---|---|---|---| 
| 1 | formatNumber("9407753") | '9,4ㄴ07,753' | '9,407,753' | 
| 2 | average(movies).toFixed(1) | '7.3' | '7.3' | 
| 3 | best(movies).title  | 'Avengers: Infinity War' | 'Avengers: Infinity War' | 
| 4 | sortBy(movies, "rating", true)[0].title  | 'Avengers: Infinity War' | 'Avengers: Infinity War' | 
| 5 | filterByRating(movies, 8).length | '1' | '1' | 
| 6 | search(movies, " the ").length  | '7' | '7' | 
| 7 | yearsSince("2018-04-25") | '8' | '8' | 
| 8 | 4번 실행 뒤 movies[0].title  | 'The Passion of the Christ' | 'The Passion of the Christ' | 

-----------

## 어려웠던 점 3가지와 해결 
1 . averageBy(list, key) 함수를 구현하는 과정에서 제공된 설명을 이해하는 것. 특히 기존 average 함수의 몸통을 return averageBy(list, "rating"); 한 줄로 변경하라는 부분에서 두 함수가 어떻게 연결되는지, 기존 코드를 왜 한 줄로 바꿀 수 있는지 이해하기 어려웠음.
→ 해결방법 : 기존 average 함수와 새로 작성한 averageBy 함수의 역할을 비교하면서 코드를 한 줄씩 살펴봄. 또한 averageBy(list, "rating")처럼 키 이름을 전달하면 해당 속성의 평균을 계산할 수 있다는 것을 확인함. 이를 통해 하나의 함수를 여러 상황에서 재사용할 수 있고, 중복되는 코드를 줄일 수 있었음.

2. 설명을 따라 코드를 작성하다 보면 앞뒤 내용이 자연스럽게 연결되지 않아 이해하기 어려웠음.
→ 해결방법 : 수정이 필요한 부분을 뒤에서 다시 고침.

3. 코드에 문법적 오류나 잘못된 부분이 없는 것 같은데도 계속 오류가 발생함. 
→ 해결방법 : 기존 창을 새로고침하는 대신 아예 새로운 창을 엶. (라이브 서버)

-----------

## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어) 
교수님께서 제공하신 PDF 파일

-----------

## 생성형 AI 사용 내역 (없으면 "없음") - 질문 요지 : - 답변 요약 : - 채택 여부 : 
질문 요지 : 최다 누적 관객 수의 영화를 출력해야 하는데, 3순위가 출력되는 오류가 났어.
답변 요약 : 1. 관객 수를 비교할 때 > 대신 <를 사용하지 않았는지 2. 최댓값을 저장하는 변수에 관객 수가 제대로 들어가는지 3. 최댓값을 가진 영화의 객체가 아니라 정렬된 배열의 잘못된 인덱스를 출력하고 있지 않은지 4. 관객 수 데이터가 숫자가 아닌 문자열로 저장되어 있지 않은지
채택 여부 : 채택함. (3번)
