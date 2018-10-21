const app = new Vue({
	el: '#app',
	data: {
			message: 'Hello Vue!'
		}
	})

const app2 = new Vue({
	el:'#app-2',
	data: { 
		message:'You loaded this page on' + new Date().toLocaleString()
	}
})


const app4 = new Vue({
	el: "#app-4",
	data: {
		todos: [
			{text: 'learn JS'},
			{text: 'learn Vew'},
			{text: 'Build samthing awesome'}
			]

	}
})


const app6 = new Vue({
	el:'#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

const quizCategory = [
    {food: [
        {q: '長命草を食べるとどうなるといわれている？', a: ['長生きできる','与那国馬になれる','空を飛べる'], e: '長命草には豊富な栄養素が含まれています。皆さんも摂取して健康長寿！'},
        {q: '唯一与那国島でしか製造されていない泡盛の種類は何でしょう？', a: ['花酒','木酒','土酒'], e: '花酒はアルコール度数が60％以上の泡盛で、日本で製造されているお酒の中では1番アルコール度数が高いお酒です。'},
        {q: '与那国島に伝わる郷土菓子で、古くから祭りや祝い事の際などに作られてきた剥いて食べる食感がモチモチした食べ物は？', a: ['クバ餅','きな粉餅','与那国モチモチ餅'], e: 'クバ餅はクバ（ビロウ）の葉で餅を包み蒸した食べ物です。現在はお土産の定番として知られています。味は「黒糖」、「紅芋」、「しろ」があります。私は紅芋派ですw'},
    ]},
    {creature: [
        {q: '与那国島に生息している世界最大の蛾の名前は？', a: ['ヨナグニサン','サイトウサン','オオシロサン'], e: '与那国島で初めて発見されたことから「ヨナグニサン」という名前になりました。羽を広げると18cm~24cmにもなります。（でか！）ちなみに与那国の方言では「アヤミハビル」と言います。'},
        {q: '与那国馬の大きさは何cmでしょう？', a: ['約110cm~120cm','約180cm~190cm','約30cm~50cm'], e: '与那国馬の大きさは約110cm~120cmです。通常の馬と比べて小型！おとなしく人懐っこい性格からみんなに愛されキャラの人気者。'},
        {q: '毎年7月に開催されるカジキ釣り大会で参加者に無料で振舞われる食べのもは？', a: ['カジキの丸焼き','与那国馬の丸焼き','長命草サラダ'], e: 'カジキ祭りの醍醐味の一つはなんといってもカジキの丸焼き！体長2m超、重さ100kgものカジキマグロを実質食べ放題で召し上がることができます。中までじっくり蒸し焼きにするため6時間以上もかかるんだとか！！（すごい）'},
        {q: '与那国に生息する蛇、ヨナグニシュウダの「シュウダ」の由来は？', a: ['臭いから','集団で行動するから','週に1回脱皮をするから'], e: '「シュウダ」は「臭蛇」と書きます。ヨナグニシュウダは漢字のとおり臭いんです！（笑）ヘビは基本的に体から分泌物を出すがシュウダはヘビ界でもその分泌物がとびきり臭いんです。臭いけどヨナグニシュウダは毒がありません！！ちなみに2017年版環境省レッドリストで絶滅危惧ⅠB類（EN)に指定されています。'},
    ]},
    {history: [
        {q: '与那国島の方言で「ありがとう」はなんという？', a: ['ふがらっさ〜','てんきゅ〜','かむさ〜'], e: '与那国の方言でありがとうは「ふがらっさー」と言います。ネイティブの発音はぜひ現地で聞いてみてね〜♪'},
        {q: '与那国島を方言で言うと？', a: ['どなん','やいま','うちなー'], e: '渡難と書いて「どなん」と呼びます。昔は海風が強く日本の端っこにあるため船で渡るには難しい島（渡難）だったというのが由来です。'},
        {q: '15世紀末に与那国島を統括していた巨体で剛力な女性の名前は何でしょう？', a: ['サンアイイソバ','ジャイアントババ','剛力花子'], e: 'サンアイイソバは15世紀末、女首長として与那国島を統括し島の開拓や他の島との貿易も行っていたそうです。巨体でパワフルな女性だったそうな。（カッコいい）'},
    ]},
    {knowledge: [
        {q: '与那国島から台湾までの距離はどのくらいでしょう？', a: ['111km','222km','333km'], e: '台湾までの距離は111kmです。たまーに西崎灯台から台湾が見えます！ちなみに石垣島との距離は127kmです。台湾の方が近い！！(笑)'},
        {q: '与那国島の山の中には不思議な岩がありますがどんな岩でしょう？', a: ['人面岩','光岩','浮遊岩'], e: '人面岩は島の南側の「新川鼻」という岬の高台にあります。獣道を進んでいくと目の前に人面岩が現れます！ちょっとした冒険みたいで楽しいですよ〜♪'},
        {q: '与那国島は日本のどこにある？', a: ['日本最西端','日本最東端','日本最北端'], e: '与那国島は日本の最西端の島で、沖縄県八重山諸島の一番西の端っこにあります。すぐお隣には台湾があります。（頑張れば泳げると思う。頑張れば。。）'},
        {q: '小学校は何校あるでしょう？', a: ['3校','6校','9校'], e: '小学校は3校です。与那国小学校と久部良小学校と比川小学校があります。'},        
        {q: '与那国島の人口はおおよそ何人？', a: ['1700人','540人','15000人'], e: '2018/07/31現在の人口は1680人です。外出先で知り合いに遭遇する確率100%(笑)'},
    ]}

  ];
Vue.filter('capitalize',function(){
	if(list.a == "111"){
		list.a = "kana"
	}
})

const answer_list = new Vue({
    el: "#answer_option",
    data:{
      lists: [
      	
        // {a: quizCategory[0].food[0].a[0]},
        // {a: quizCategory[0].food[0].a[1]},
        // {a: quizCategory[0].food[0].a[2]},
        {a: "111"},
        {a: "222"},
        {a: "333"}
         
        
      ]
    }
  })