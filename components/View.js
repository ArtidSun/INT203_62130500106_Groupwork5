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
        <img :src="searchingphoto[gindex].image">
        </div>
        <i class="fas fa-times text-white text-3xl p-2 cursor-pointer" v-on:click="closeshow()"></i>
        
`,
    methods: {
        closeshow(){
            this.$emit('closeshow', this.show);
        }
    }
})