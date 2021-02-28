app.component('gundam-view', {
    emits:[
        'closeshow'
    ],
    props: {
        searchingphoto: {
            type: Array,
            require: true
        },
        'gindex': Number,
        show:Boolean
    },
    template:
        /*html*/
        ` 
        <div v-if="show">
        <i class="material-icons fas fa-times text-red text-5xl p-2 cursor-pointer" v-on:click="closeshow()">clear</i>
        <img :src="searchingphoto[gindex].image">
        </div>
        
`,
    methods: {
        closeshow(){
            this.$emit('closeshow', this.show);
        }
    }
})