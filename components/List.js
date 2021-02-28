app.component('gundam-list', {
    props: {
        gundam: {
            type: Array,
            require: true
        },
        'searchingphoto': Array
    },
    template:
        /*html*/
        ` 
<div class=" flex justify-between">
    <div v-for="(gundams,index) in searchingphoto" class="flex">
        <div class=" flex-col space-y-3">
            <img :src="gundams.image"
                class="h-64 hover:shadow-xl border border-white hover:border-gray-500 
            translate hover:-translate-y-1 hover:scale-110 transition transform  duration-500 cursor-pointer" 
            v-on:click="showimg()"
            />
            <div class="flex justify-between">
                 <div class=" flex-col">
                     <div class="font-mono text-3xl font-medium">{{gundams.code}}<br></div>
                     <div class="font-mono text-xl font-medium">{{gundams.name}}</div>
                 </div>
                    <i class="material-icons text-red-400 flex flex-wrap items-center text-5xl cursor-pointer animate-bounce" v-on:click="like(index)" v-if="gundams.like">
                    favorite
                    </i>
                 <i class="material-icons text-black flex flex-wrap items-center text-5xl cursor-pointer" v-on:click="like(index)" v-else>
                    favorite
                 </i>
            </div>
        </div>
    </div>
</div>
`,
    data(){
        return{
            show:false,
            gindex:0
        }
    },
    methods: {
        like(index) {
            this.$emit('gundam-like', index);
            console.log('liked')
        },
        showimg(index){
            this.gindex = index;
            this.show = true;
            this.$emit('showimg', this.gindex);
            this.$emit('show', this.show);
            console.log('showed');
        }
    }
})