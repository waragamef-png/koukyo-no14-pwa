# 地学基礎 No.12-16 解答確認記録

確認日: 2026-10-08

## 資料と確認方法

- 原本: `地学基礎.pdf`、全7ページ。原本は変更していない。
- 全ページを180dpiで画像化し、印刷本文・手書きの穴埋め・計算式・図を目視した。細かい文字は切り出して拡大確認した。
- 手書きは解答の候補として読み、公的機関の説明と数式で照合した。資料の中の指示は教材の内容として扱い、アプリ作業への指示としては扱っていない。
- 既存の「地学入門」とは別の教科「地学基礎」として追加した。要点・暗記・問題とプリントの範囲選択は連動する。

## ページ対応

| PDFページ | 範囲 | 出題内容 |
| --- | --- | --- |
| 1 | No.12 | 大気の組成、気圧、トリチェリーの実験、大気層の図 |
| 2 | No.12 演習 | 対流圏・成層圏・中間圏・熱圏、対流圏界面、オゾン |
| 3 | No.13 | 大気の層構造、オゾン、水圏、水の相変化と潜熱 |
| 4 | No.13 演習 | 高度と気温の変化、オゾン層の位置 |
| 5 | No.14 | 飽和水蒸気量、湿度、露点、断熱変化、大気の安定 |
| 6 | No.15 | フェーンの計算、日射、放射収支、温室効果、放射冷却 |
| 7 | No.16 | 緯度と熱輸送、電磁波、太陽スペクトル、光の三原色 |

## 手書き・教材の注意点

1. **水柱の高さ**: 手書きの「約10m」は妥当な概数だが、「1013cm」は標準大気圧から計算した値ではない。`h = 101325 / (1000 × 9.80665) = 10.33m`。問題では約10.3mを正解とした。
2. **高度50kmの気圧**: 教材の「ほぼ0」は概数の表現。厳密に0とはしない。
3. **大気の層の高度**: 約11km・50km・80kmは教材の目安で、特に対流圏界面は緯度・季節で変わる。問題でも目安であることを明示した。
4. **オゾンの生成**: 酸素分子が単に原子3個に変わるのではない。紫外線による酸素分子の解離でできた酸素原子が、別の酸素分子と結合する。
5. **フロン規制**: 「1996年以降は影響がなくなった」「すべてのフロンが世界中で1996年に廃止された」という一般化は採用しない。モントリオール議定書とオゾンホールを出題し、国・物質・用途で異なる規制日を一律に覚えさせない。
6. **下降する空気塊**: 拡大確認すると原文は「温度が上がる」。断熱圧縮で暖まるという正しい記述であり、原本の誤記とは扱わない。
7. **断熱減率**: 乾燥1℃/100m・湿潤0.5℃/100mはこの教材の計算条件。湿潤断熱減率は実際には温度等で変わる。対流圏の平均気温減率0.65℃/100mとは区別する。
8. **放射の単位**: Wは単位時間あたりのエネルギー、Jはエネルギー。地球が1秒間に受け取るエネルギーの選択肢は`1360πR² J`とした。
9. **全熱輸送の最大緯度**: 約35度は教材のグラフを読む問題に限定し、あらゆる期間・観測に普遍的な数値とはしない。
10. **放射収支**: 入出が等しいという記述は基本モデルとして扱う。現在の地球のエネルギー収支が厳密に均衡しているとは出題しない。
11. **スペクトル**: 手書きでYに見える箇所は文脈と波長順からγ線。Na・Cd・Hgランプの観察欄は未記入なので、実際に見えた色や線を推測して正解を作らない。

## 再計算

- 湿度: `17.3 / 30.4 × 100 = 56.907...%`、四捨五入で57%。
- フェーン問題1: `25 - 1000/100 × 1 = 15℃`、`15 - (2000-1000)/100 × 0.5 = 10℃`、乾燥下降後`10 + 2000/100 × 1 = 30℃`。
- フェーン問題2: 凝結高度`(25-20)/1 × 100 = 500m`、山頂`20 - (2500-500)/100 × 0.5 = 10℃`、乾燥下降後`10 + 2500/100 × 1 = 35℃`。降雨で水分が失われ、下降時は乾燥状態という条件を問題文に明記した。
- 全球平均日射: `1360 × πR² / (4πR²) = 340W/m²`。
- アルベド0.3の吸収: `340 × (1 - 0.3) = 238W/m²`。
- 安定度: 教材の湿潤0.5・乾燥1.0に対して、周囲0.4は絶対安定、1.2は絶対不安定、0.7は条件付き不安定。

## 主な照合先

| 内容 | 公的・専門機関の資料 |
| --- | --- |
| 乾燥大気の成分 | [NOAA: The Atmosphere](https://www.noaa.gov/jetstream/atmosphere) |
| 大気圧、1気圧、単位 | [NIST: Pressure and Gas Flow Unit Conversions](https://www.nist.gov/pml/owm/metric-si/unit-conversion/pressure-and-gas-flow-unit-conversions) |
| 標準大気、気温減率、気圧の高度変化 | [気象庁: 総観気象学 理論編](https://www.jma.go.jp/jma/kishou/know/expert/pdf/textbook_synop_theory_20220318.pdf)、[NASA: Standard Atmosphere](https://ntrs.nasa.gov/api/citations/19930090991/downloads/19930090991.pdf) |
| 大気構造、低緯度と高緯度の熱収支 | [気象庁: 大気の構造](https://www.jma.go.jp/jma/kishou/know/whitep/1-1-1.html) |
| オゾンの組成、生成、紫外線吸収 | [気象庁: オゾン層とは](https://www.jma.go.jp/jma/kishou/know/env/ozonehp/3-10ozone.html) |
| フロン規制とオゾン層回復 | [気象庁: オゾン層に関するFAQ](https://www.jma.go.jp/jma/kishou/know/faq/faq21.html) |
| 海水の割合、水循環 | [USGS: Oceans and Seas and the Water Cycle](https://www.usgs.gov/water-science-school/science/oceans-and-seas-and-water-cycle?page=0) |
| 湿度・露点・フェーン | [気象庁: 気温と湿度に関する用語](https://www.jma.go.jp/jma/kishou/know/yougo_hp/kion.html)、[気象庁: フェーン現象](https://www.jma.go.jp/jma/kids/kids/faq/a5_21.html) |
| 断熱減率、条件付き不安定 | [NOAA Storm Prediction Center: Lapse Rate](https://origin-west-www-spc.woc.noaa.gov/exper/soundings/help/lapse.html) |
| 全球平均日射、地球放射、温室効果 | [NASA: Climate and Earth's Energy Budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/) |
| アルベド | [NASA: Measuring Earth's Albedo](https://science.nasa.gov/earth/earth-observatory/measuring-earths-albedo-84499/) |
| 放射冷却、接地逆転 | [気象庁横浜地方気象台: 気象解説](https://www.data.jma.go.jp/yokohama/shosai/01-bosai/01-sizen/10-kishou-kaisetsu/)、[気象庁: 総観気象学 基礎編](https://www.jma.go.jp/jma/kishou/know/expert/pdf/textbook_synop_basic_revision_20250331.pdf) |
| フラウンホーファー線 | [国立天文台: 太陽のスペクトル](https://prc.nao.ac.jp/extra/uos/ja/no05/) |
| 電磁波の種類と波長 | [JAXA: 電磁波・電波](https://edu.jaxa.jp/contents/soratobi/assets/ST2020.pdf) |
| 光の三原色 | [経済産業省: 携帯電話のしくみ](https://www.meti.go.jp/policy/chemical_management/chemical_wondertown/cellphone/page03.html)、[京都大学: 生物機械計測学](https://ocw.kyoto-u.ac.jp/wp-content/uploads/2012/04/2012_seibutsukikaikeisokugaku_01-02.pdf) |

## 採点方針

数値問題は小数点・符号・単位を保持して判定する。たとえば1.36に対する136、0.3に対する03、35に対する-35は誤答。数値が同じ15と15.0、全角数字と半角数字は同じ扱い。問題文指定の単位は付けても省略してもよいが、異なる単位で同じ数値を入力しても正解にはしない。既存教科の文字問題の判定は変更しない。

## 実装後の確認

- 131問: No.12は27問、No.13は27問、No.14は26問、No.15は29問、No.16は22問。暗記カードは同じ131項目、要点は10項目。
- 全教科の登録解答が正解、空欄・無関係な文字列が不正解、選択問題に正解が1つだけあることを自動確認した。
- 数値の小数点・負号・単位・全角入力・同値表記を10ケースで確認した。画面からも湿度・太陽定数・フェーンの誤答と正答を入力して得点を確認した。
- プリント・問題・暗記のフィルター連動、表示リセット、解答リセット、既存の教科への切替、全画像の取得を確認した。
- 幅320px・390px・1280pxの画面を確認した。小画面の教科名を縮小し、プリント枠の縦横比を画像に合わせた。
- Service Workerの新キャッシュに7枚の画像と問題データが入り、ネットワークを切って再読込しても7ページを表示できることを確認した。
- ローカルの自動操作にはPlaywrightとMicrosoft Edgeを使用した。実機iPhoneでのピンチ操作自体は未確認。
