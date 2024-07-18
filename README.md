# [第一觀測站](http://127.0.0.1:8000)

### 第一觀測站是一個氣象觀測網站，提供各縣市一週的天氣預報和 24 小時的降雨量資訊。

### 目錄

- [網站功能]
- [使用技術/資源]
- [團隊分工]

---

### 網站功能

> - 點擊地圖各縣市，呈現指定區域當日天氣及一週天氣預報
> - hover 一週天氣圖示，可切換成當天夜晚天氣資訊
> - 點擊 24 小時雨量按鈕，呈現指定區域各測站累積雨量
> - 雨量資訊將同步顯示在地圖

<br>

#### 前端開人員：

##### 組長 李映萱

> - 視覺版面規劃設計
> - 本日天氣與一週天氣日夜展示區塊

##### 王思穎

> - 互動式台灣地圖
> - 地圖動態顯示雨量

##### 童俐

> - 全台雨量展示區塊
> - -天氣與雨量頁面轉換

<br>

#### 後端開發人員：

##### 周珮萱

> - 全台每日天氣及一週天氣 API
> - 網站部署上線

##### 陳暐茗

> - 全台每日雨量 API
> - 串接 Discord Webhook

<br>

### 成果展示

第一觀測站
第一觀測站是一個氣象觀測網站，提供各縣市一週的天氣預報和 24 小時的降雨量資訊。我們的團隊由三個前端開發人員和兩個後端開發人員組成，分工如下：

組員分工
前端開發人員
李映萱
整體視覺設計和響應式設計
整合 API 數據到前端頁面（天氣預報）
動態內容呈現

童俐
整合 API 數據到前端頁面（降雨量）
動態內容呈現

王思穎
網站的互動功能( 台灣地圖 )
動態內容呈現

後端開發人員
周姵萱
當日預報和當周預報的 API 設計與實現
處理氣象數據的獲取和格式化
應用程序的佈署、伺服器設置
撰寫本專案的 README 文件

陳暐茗
24 小時降雨量 API 的設計與實現
處理氣象數據的獲取和格式化
研究工具：[PythonAnywhere], [Discord Webhook]

資料來源
我們的氣象資料來源自中央氣象署的開放資料平臺。可以通過以下連結查看詳細的資料擷取 API 說明：

臺灣各鄉鎮市區預報資料 API
自動雨量站資料 API

成果展示
請點擊以下連結查看我們的網站成果展示：第一觀測站

---

如果有任何疑問或建議，歡迎聯繫我們。謝謝！
