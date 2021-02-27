const app = Vue.createApp({
    data() {
        return {
            head: 'Gundam gallery',
            gundam: [{ image: 'images/Strike.jpg', code: 'ZGMF-X20A', name: 'Gundam Strike Freedom', like: false },
            { image: 'images/Exia.jpg', code: 'GN-001', name: 'Gundam Exia', like: false },
            { image: 'images/Barbatos.jpg', code: 'ASW-G-08', name: 'Gundam Barbatos Lupus Rex', like: false }
            ],
            searchOn: false,
            searching: ''
        }
    },
    methods: {
        like(index) {
            this.gundam[index].like = !this.gundam[index].like;
        },
        search(searchText){
            this.searching = searchText;
        }
    },
    computed: {
        countlikepic() {
            return this.gundam.filter(t => t.like).length
        },
        searchingphoto() {

            if (this.searching == '') {
                console.log("test01");
                return this.gundam;
            } else {
                let menu = this.gundam.filter(n => n.name.toLowerCase().includes(this.searching.toLowerCase()));
                console.log("test02");
                if (menu == '') {
                    console.log("test03");
                    return this.gundam;
                }
                return menu;
            }

        }
    }

})