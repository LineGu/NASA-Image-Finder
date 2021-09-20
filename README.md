# Nasa Image Finder

## 실행 방법

### 프론트 라이브 서버 실행

3. cd client
4. npm run start


### 서버 실행

5. cd server
6. npm run start:dev


### 예외 사항

* Server Port 8080이 이미 실행중인 경우

1. netstat -lntp
2. 8080 Port를 사용하고 있는 PID 확인
3. kill -9 {PID}


### Pritter 

1. npm run format


## 서비스 소개

### 기본 이미지 
기본적으로 Seoul을 검색했을 경우를 메인 페이지에서 제공합니다.
![](https://i.imgur.com/2Y4FwRc.jpg)

### 키워드 검색
특정 키워들 검색하면 해당 키워드와 관련된 이미지를 불러옵니다.
![](https://i.imgur.com/eX3A0Qk.jpg)

### 번역
Papago API로 `번역`을 제공합니다. 한글로 키워드로 입력하여도 검색이 가능합니다.
![](https://i.imgur.com/DfFAro8.jpg)

### 무한 스크롤
Infinite Scroll을 이용하여 추가 데이터를 받아옵니다.

Trigger DOM 아이디어를 이용한 무한 스크롤입니다. Custom Hook으로 만들었습니다.

### Caching 
이미 검색한 키워드는 Caching되어, 추후에 다시 검색 시 빠르게 렌더할 수 있습니다.


### 키워드 분리, URL 분리, 날짜 분리
![](https://i.imgur.com/TCZeZPH.png)


### Column 정렬 UI
카드를 펼치면 해당 Column이 따라서 늘어납니다. Column 정렬이지만 자체적으로 순서를 고정하여 데이터를 더 받아오더라도, 카드들의 순서가 바뀌지 않습니다.
![](https://i.imgur.com/dedSRvO.jpg)


### Top 버튼
Top 버튼으로 상단으로 한번에 이동할 수 있습니다.




## 기술적 특징
* 좋은 UX를 위해 lazy를 이용한 Code Splitting 경험
* 성능 최적화를 위해 Image Lazy Loading 사용
* 무한 스크롤 Custom Hook 화
* Axios를 이용한 Caching 경험


## 사용한 기술
* React
* Bootstrap
* Express js
