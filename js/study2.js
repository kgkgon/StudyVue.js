const APP = new Vue({
	el: '#app',
	data: {
		list: [
			{id: 1, name: '山田さん', hp: 400},
			{id: 2, name: '佐藤さん', hp: 200},
			{id: 3, name: '川田さん', hp: 10}
		]
	}
})

const APP2 = new Vue({
	el: '#app2',
	data: {
		name: 'スズキ',
		list: [
			{id: 1, name: 'ヤマダ', hp: 1000},
			{id: 2, name: 'エマ', hp: 300},
			{id: 3, name: 'ウマ', hp: 200}
		]
	},
	methods: {
		doAdd: function(){
			let max = this.list.reduce(function(a,b){
				return a > b.id ? a : b.id
			})
			this.list.push({
				id: max +1,
				name: this.name,
				hp: 500
			})
			
		},
		doRemove: function(index){
			this.list.splice(index,1)
		},
		doAttack: function(index){
			this.list[index].hp -= 10
		}
	}
})

const APP3 = new Vue({
	el: '#app3',
	data: {
		list: []
	},
	created: function(){
		axios.get('quizdata.json').then(function(response){
			this.list = response.data
		}.bind(this)).catch(function(e){
			console.log(e)
		})
	}
})





