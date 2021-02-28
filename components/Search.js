app.component('gundam-search', {
    props: {
        gundam: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            searchOn: false,
            searching: ''
        }

    },
    template:
        /*html*/
        ` 
        <div class="flex space-x-2" v-if="searchOn">
        <input
            class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm border"
            v-model="searching"  @input="search" placeholder="Please enter text for searching photos">
        <button class="bg-red-500 hover:bg-red-700 text-xl cursor-pointer rounded p-2 font-bold" v-on:click="switchsearch()">Cancel</button>
    </div>
    <i class="material-icons text-3xl font-bold cursor-pointer" v-on:click="switchsearch()" v-else>
        search
    </i>
`,
    methods: {
        switchsearch() {
            this.searchOn = !this.searchOn;
            this.searching = '';
            this.$emit('search-gundam', this.searching);
        },
        search() {
            this.$emit('search-gundam', this.searching);
        }

    },
    computed: {

    }
})