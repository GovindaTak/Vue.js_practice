
const app=Vue.createApp({
    data(){
        return {
            value:'',
        tasks:[],
        listShow : false
    };},
    methods:{

        add(){
            this.tasks.push(this.value);
            this.value='';
        },
        showing(){
            this.listShow=!this.listShow;
        }
    }
});

app.mount('#assignment')