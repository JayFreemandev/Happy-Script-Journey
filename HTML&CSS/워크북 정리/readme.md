## 웹 프로그래밍 개요

HTML은 91년도 팀 버너스리가 인터넷상의 정보를 표현하는 언어로 개발
2014년 W3C에서 HTML5를 표준으로 채택 
2019년 HTML5의 표준 WHATWG의 HTML Living Standard로 단일화

**HTML5의 특징**

- 기존 HTML, 이전 브라우저 호환성 유지
- 실질적인 개발 과정 단순화
- 의미있는 HTML 문서 작성
- 보편적인 접근성 제공

다양한 시멘틱 요소, 웹 폼 기능, 멀티미디어 구현 기능 추가

CSS1,2 → CSS3으로 업그레이드(상세한 속성,다단,변형,변환,애니메이션 추가)

자스 API 지원 : 캔버스, 오디오,비디오, 드래그 앤 드랍, 웹 소켓, 웹 스토리지 etc

**HTML 문서 작성시 주의사항**

- 요소명은 대소문자 구분 안함
- 엔터, 스페이스바, 탭은 의도대로 적용되지않고 연속된 공백은 하나의 공백
- 하나의 요소는 다른 요소를 포함할 수 있음

**리스트 표현**

<li> 

- 들여쓰기, 줄바꿈 수행, 종료태그 없이 사용 가능

**이미지 표현**

<img>

- 종료태그 없이 사용가능한 인라인 요소
- src, width, height, alt, usemap 속성 사용 가능
- width와 heigh 중 하나만 크기가 지정되면 나머지는 원본 크기 비례 자동 결정

**이미지맵**

- img(usemap 속성), map, area 속성

**iframe**

- name, src, srcdoc, width, height
- srcdoc 속성 지정되면 src 속성은 무시됨

**하이퍼링크 표현**

<a>

- href, target, downalod 속성 사용 가능
- target 속성값의 종류
    - _blank(새창)
    - _*self(현재창*)

**테이블 표현**

- table, tr, td(th), caption
- tr : 하나의 줄에 해당하는 행
- td : 데이터가 표시되는 표준 셀을 정의
- th : 행 또는 열의 제목을 표시하는 헤더 셀
- caption : 테이블 전체에 해당하는 제목을 표시
- rowspan : 세로 방향 셀들 합치기
- colsapan : 가로 방향 셀들 합치기
- colgroup : 열 단위(col) 전체 스타일 지정

### 연습 문제

1. 종료태그 없이 시작태그만으로 사용 할 수 없는것은 Script 이다.
2. title 요소의 내용은 윈도우 탭 제목으로 쓰이는데 이 외 다른 용도는 즐겨찾기 제목이다.
3. < *a charset=”UTF-9”/> 에서 a는 meta다 encoding(x)*
4. <head> 요소 안에는 a 요소 사용 불가능
5. 자동 줄바꿈이 안되는 태그틑 <b> 태그다. <address>는 줄바꿈 O
6. i 요소와 같은 출력모양(var,em,address) 아닌 태그 q(큰따옴표)
7. 순서 있는 리스트에서 항복의 번호를 중간에 변경할때는 <li value>
8. 하이퍼링크 클릭으로 지정된 이메일 전송 <a href=”mailto:admin@text>전송</a>
9. 테이블의 caption은 table 시작 태그와 첫번째 tr 사이에 위치해야한다.
10. 테이블의 td 요소(데이터의 표준셀)는 데이터를 왼쪽 정렬한다.
11. 테이블의 th 요소는 진하게 가운데 정렬한다.
12. 테이블의 테두리는 border=”1” 또는 table border를 사용한다.
13. input 요소에서는 pattern 태그 사용이 가능하다.
14. input type=”range” 를 사용하면 슬라이드 바로 특정 범위의 숫자 입력이 가능하다.
15. html 문서 구조화중 aside는 콘텐츠 이외 참고용으로 사용된다.
16. html 문서 구조화중 article은 독립적 분배 재사용 가능한 개별 콘텐츠용이다. 하나의 주제로 구성된 문서의 내용 영역은 section 요소 설명이다.
17. section요소는 오직 하나의 헤딩(h1~h6만 사용이 가능하다.

## CSS

**글꼴**

font-family : 폰트(글자체) 지정 

- sans-serif, serif, fantasy, 일반 폰트명
- 하나 이상의 폰트 지정은 콤바로 구분, 순서대로 적용
- 폰트명 사이 공백은 반드시 “” 따옴표 묶어서 사용

font-size : 속성을 지정하지 않으면 16px(1em) 사용

font-style : 글자의 스타일 지정

- italic, normal

font-weight : 글자의 굵기 지정

@font-face : 사용자 정의 글꼴정의

- ex) @font-face { font-family : 맑은고딕; src: url(맑은 고딕); }
- 등록후 font family 사용자정의글꼴 지정 필요

**텍스트**

letter or word - spacing : 문자, 단어 사이의 간격 지정

- normal, 길이(음수는 서로 겹치게)

line-height : 문자의 줄 간격 지정

- normal, 숫자, 길이, %

text-transform : 대문자를 소문자로 변환

- none, capitalize, uppercase, lowercase

text-decoration : 텍스트 장식 관련 속성

text-shadow : 하나의 텍스트에서 여러 그림자는 콤마로 구분

**박스 모델**

visibility : 요소 박스의 화면 표시 여부 

- hidden(미표시 하지만 공간은 유지)

display :요소의 표현 방식

- none, inline, block etc
- inline으로 표시하면 height width는 무시됨

**배경**

background-attachment : 콘텐츠 영역과 함께 스크롤 여부 

- scroll, fixed

background-origin : 배경 기준 위치

- padding-box, border-box, content-box
- attachment 속성이 fixeㅇ면 동작 안함

background-clip : 배경 색상이나 이미지 적용 영역 지정

- padding-box, border-box, content-box

### 연습문제

1. a title 속성의 값으로 co 부분 문자열 포함한 모든 a 요소는 title*=”co”
    1. 단어 co를 포함하는 모든 요소 ~=”co”
    2. 값이 co로 시작하는 모든 요소 ^=”co”
    3. 값이 co로 끝나는 모든 요소 $=”co”
2. p 요소 텍스트를 작은 크기의 대문자로 변환할때는 font-variant, smallcaps이다.
3. 텍스트 마지막 줄 정렬시 text-align-last 속성은 justify에서만 동작한다.
4. top,bottom 속성 무시한채 요소 위치 결정할때 position 속성은 static이다.
5. 패딩과 테두리를 포함시켜 폭과 높이를 지정하는 속성은 box-sizing이다.
6. border속성시 반드시 사용해야하는 속성값은 solid이다.
7. background size는 auto, 높이, % 등만 가능
    1. background image는 none url만 가능
    2. background origin은 padding, content, border box만 가능
8. 선형 그라데이션중 수평 방향 변화는 gradient(90deg, red, yellow) 이다.
9. ease-in, ease-out 등의 속성을 사용하는 css는 translation-timing-function 이다.
10. 애니메이션 관련 속성 문제중 기본값
    1. animation-play-state : 진행 또는 일시정지(running, paused)
    2. animation-fill-mode : 실행 이전, 이후 스타일 유지 여부(none, forward etc)
    3. animation-iteration-count : 반복 횟수(1 기본값), infinite
    4. animation-direction : normal(기본값), reverse, alternate

## 자바스크립트 연습문제

1. 변수를 명시적 선언 없이 사용하면 자동으로 생성된다.
2. 자스에서 정수형 변수는 int a가 아니라 var a
3. let n = parseInt(________(”하이”, “”) ); 빈칸은 prompt다 (”설명”, 기본값)
4. “Java Programming” 부분문자열 Java출력은 subStr이다.
5. 자바스크립트 배열은 동일한 자료형말고도 혼합 저장이 가능하다.
    1. concat 함수는 두 개의 배열을 하나로 합친다.
    2. arr = new Array();같이 배열 길이 지정없이 선언 가능하다.
    3. Array 객체 사용없이 let arr = [10,20] 생성이 가능하다.
6. 마우스 커버서시 이미지 변경할때 src로 사용하기도 한다.

## 캔버스 연습문제

1. canvas 요소의 속성은 id, width, height 이다.
2. cavas그릴때 id따고 getContext(”2d”)
3. 테두리만 있는 사각형은 strokeRect, 색이 채워진 사각형은 fillRect
4. 도형이 겹쳐지는 부분에 대한 처리는 globalCompositeOperation
5. 텍스트의 수직 방향의 기준선은 textBaseline
6. 캔버스 이미지 삽ㄷ입시는 drawImage 함수 사용

## HTML API 연습문제

1. 현재 재생 위치가 바꼈을때는 TIMEUPDATE 이벤트가 발생
2. 드래그 앤 드롭시 drag start에서는 set → drag drop 에서 get
3. 드래그 드랍 dataTransfer시 effect와 allowed 속성을 copy, move로 지정하면 드롭을 할 수 없다.
    1. allowed 속성은 dragstart 에서 사용
    2. allowed는 드래그 동안 사용가능한 효과를 지정
    3. dropEffect는 드래그 끝날때 효과 지정
4. 로컬 스토리지 데이터 저장시
    1. localStorage[”HTML5”] = “2” // 배열 저장 가능
    2. localStroage.HTML5 = “2’ 
    3. localStorage.setItem(”HTML5”, “2’) 가능
    4. .store 기능은 없음
