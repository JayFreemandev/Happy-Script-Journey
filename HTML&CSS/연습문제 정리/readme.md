### HTML 연습문제 정리

1. detailist 요소와 연결시키기 위해서 input 요소에 list 속성을 사용한다.
2. main 요소는 body에서 한번만 사용할 수 있다.
3. a.mp4를 10~20초만 재생하는 src는 a.mpr#t=10,20
4. source에서 audio의 src 역할을 대신하고 audio와 video의 하위 요소 역할을 한다.
    1. 재생할 미디어 파일의 URL을 지정한다
    2. 여러개가 지정된 경우 순차적 실행된다.
5. audio에서 preload가 지정되도 특정 속성이 변경되면 무시되는데 autoplay이다.
6. 하나 이상의 열들을 모아 한꺼번에 지정하는 colgroup이 있다.
7. rowspan 속성을 사용할 수 있는 속성은 td 이다.
8. img 에서 그림 파일을 지정하기위해 필수적으로 사용되는 속성은 src 이다.
9. 시각적 및 의미적 특정 문구 강조는 highlight가 아닌 mark이다.
10. 단락의 주제를 구분하는 용도는 hr
11. 속성의 요소는 시작태그에만 들어간다.
12. 한 요소에 여러 개의 요소는 공백으로 구분
13. html의 전역 속성은 
    1. style
    2. id
    3. class
    4. **type은 아니다**
14. 요소의 구성 요소가 아닌것은 method 이다.
    1. 태그 tag
    2. 내용 contents
    3. 속성 attribute

### CSS 연습문제 정리

1. 다단 속성중 설정된 다단 무시하고 하나의 단으로 표시하는 column-span
2. 애니메이션 속성 사용시 반드시 지정해야하는 속성은 duration
3. transition이 적용될 속성의 이름을 지정하는 속성은 transition-property
4. transfrom 요소 박스의 변형 기준점을 지정하는 속성은 transform-origin
5. visibility에서 두번째 행을 제거해서 화면에 표시하지 않으려고할때 collapse
6. overflow에서 height 속성이 지정된 블록 요소에서만 사용이 가능하다.
    1. 속성은 visible, hidden, clip, scroll, auto가 있다.
7. 요소와 테두리 사이 여백을 지정하는 CSS는 padding 이다.
8. z-index 속성 값이 클스록 앞쪽에 위치한다.
9. css 테이블 기본값
    1. table-layout → auto
    2. border-collapse → seperate
    3. empty-cells → show
    4. caption-side → top
10. css 리스트 관련 속성
    1. list-style-size
    2. list-style-type
    3. list-style-image
11. text-shadow에서 수평 위치와 수직 위치 값으로 음수 사용이 가능하다.
12. 사용자 정의 글꼴은 @font-face
13. 흰색 rgb는 rgb(100%,100%100%)
14. A 요소의 자손 요소중에서 B 요소는 A B 이다.
15. HTML 문서에서 CSS 적용할때 사용되는 속성은
    1. style 요소, 속성
    2. link 요소 
    3. **link 속성은 아님**

### DOM 연습문제 정리

1. showTime()을 5초 간격으로 호출할려면 setInteval(”showTime()”, 5000)
2. A 호출 3초후 B를 실행할때는 setTimeout이다.
    1. 지정한 시간 후에 특정 코드를 한번 실행시키는것은 setTimeout이다.
3. 자스 객체 계층에서 창에대한 전반적 모든 상황을 제어하는 객체는 window 객체다.
4. 브라우저 객체 모델의 최상위 객체는 window다.
5. DOM 구조에서 기존 요소 삭제시 부모 노드를 찾아 적용하는 메서드를 removeChild()이다.
6. DOM 구조에서  속성이 있는 새로운 요소를 삽입할때는
    1. appendChild
    2. setAttribute
    3. createEelement 까지는 되는데 **insertAttributeNode는 동작하지 않는다.** 
7. 아이디로 따온 요소의 배경색을 빨간색으로 변경할려면 myDiv.style.backgroundColor = “red”이다.
8. HTML 요소와 속성 내용을 모두 가져오는 속성은 innterHTML이다.
9. DOM 트리에서 루트 노드에 해당하면 HTML 문서 자체를 나타내는 객체는 document

### 캔버스 연습문제 정리

1. 캔버스에서 도형 변환을 위해 사용되는 메서드는
    1. translate
    2. scale
    3. rotate
2. 캔버스에서 텍스트를 그릴때 사용되는 속성은
    1. textAlign은 수평 방향의 정렬
    2. textBaseline은 수직 방향의 기준선
    3. **fontSize는 XX** font는 글자 스타일 및 글자체를 지정
3. 캔버스에서 그림자 스타일 지정은 shadowBlur 이다.
4. 캔버스에서 그라데이션 스타일 지정은
    1. addColorStop()
    2. createLinearGradient()
    3. createRadialGradient()
    4. **createPattern은 없다**
5. 캔버스에서 globalAlpha는 사용되는 색상의 투명도를 지정한다.
6. 캔버스에서 점선의 패턴 지정은 setDashedLine이다, DottedLine과 햇갈리지말자.
7. 캔버스의 선 스타일 속성중 bevel, miter, round를 쓰는 속성은 lineJoin이다.
8. 캔버스에서 세 개의 점 이상을 직선으로 다각형을 그리는 메서드는 closePath이다.
9. 부채꼴 메서드 순서는 beginPath → moveTo → arc → closePath 이다.
10. 캔버스에서 테두리만 있는 사각형을 그리는 순서는 beginPath → moveTo → lineTo → closePath → stroke 이다.
11. 컨텍스트 객체를 얻기 위한 컨버스 메서드는 getContext이다
12. 웹 브라우저 캔버스 사용시 필수 속성은 id 이다.

### HTML API 연습문제 정리

1. audio 요소의 필수 속성값은 preload이다.
2. video 요소에서만 사용되는 속성은 poster이다.
3. 비디오 파일 재생중 속도 2배 설정은 playbackRate이다.
4. 파일의 총 재생 시간을 초단위 변환 기능은 duration이다.
5. 재생 위치가 바뀌거나 재생 중 지속적 발생하는 이벤트는 timeupdaste이다.
6. 드래그 앤 드롭 속성은(dataTransfer, dragover, draggable) 이다.
7. dragStart시는 setData
8. dataTransfer시 드래그동안 사용할 수 있는 효과(dragstart) 속성은 dropEffect이다.
9. 웹 스토리지는 키와 값 쌍으로 구성되고 세션은 영구보관 가능하고 용량의 제한이 없다.
    1. 세션 스토리지는 각 ~~윈도우~~마다 독립적으로 데이터를 저장한다 XXX 각 윈도우 X
10. 로컬 스토리지 key = localStorage.key(i), value = localStorage.getItem(_key);
11. 웹 스토리지 데이터 변화가 발생하면 모든 윈도우에 변경을 알릴때는 storage
12. 지오로케이션 API에서 coords.heading은 북쪽 기준으로 현재 진행방향의 시계방향 각도값
13. 지오로케이션 API 위치 정보 관련 메서드는 watchPosition, getCurrentPosition, clearWatch
14. getCurrentPosition에서 세번째 인자는 객체로 받으려고 쓰는데 가능한 선택 사항은
    1. timeout
    2. maximumAge
    3. enableHighAccuracy 등이 있다.
