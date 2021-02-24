app.component('Gundam-List', {
    props: {
        gundam: {
            type: Array,
            require: true
        }
    },
    template:
        /*html*/
        ` <div class=" flex justify-between">
    <div v-for="(gundam,index) in tasks" class="flex">
        <div class=" flex-col space-y-3">
            <img :src="task.image" v-on:click="toggleDone(index)"
                class="h-64 hover:shadow-xl border border-white hover:border-gray-500 
            translate hover:-translate-y-1 hover:scale-110 transition transform  duration-500 cursor-pointer" />
            <div class="flex justify-between">
                <div class=" flex-col">
                    <div class="font-mono text-3xl font-medium">{{gundam.code}}<br></div>
                    <div class="font-mono text-xl font-medium">{{gundam.name}}</div>
                </div>
                <i class="material-icons text-red-400 flex flex-wrap items-center text-5xl animate-bounce"
                    v-show="task.done">
                    favorite
                </i>
            </div>
        </div>
    </div>
</div>`,
    methods: {

    }
})