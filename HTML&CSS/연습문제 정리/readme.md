### CSS 연습문제 정리

1. 다단 속성중 설정된 다단 무시하고 하나의 단으로 표시하는 column-span
2. 애니메이션 속성 사용시 반드시 지정해야하는 속성은 duration
3. transition이 적용될 속성의 이름을 지정하는 속성은 transition-property
4. transfrom 요소 박스의 변형 기준점을 지정하는 속성은 transform-origin
5. visibility에서 두번째 행을 제거해서 화면에 표시하지 않으려고할때 collapse

### 자바스크립트 연습문제 정리

1. 객체 변수 생성시 new 연산자가 필요한 객체는 Date와 Array 이다.
2. new Array(”Mon”, “Tue”)에서 Mon을 반환하고 제거하는 메서드는 shift() 이다.
3. String 객체의 부분 문자열을 추출하는것중 가장 긴 문자열 반환은 subStr이다.
4. 자바스크립트에서 순서가 자아 높은 연산자는 ! 이다.
5. 자바스크립트 식별자로 숫자부터 시작하면 안된다.(달러 언더바 가능)

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
