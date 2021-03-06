const app = Vue.createApp({
    data() {
        return {
            head: 'Gundam gallery',
            gundam: [{ image: 'images/Strike.jpg', code: 'ZGMF-X20A', name: 'Gundam Strike Freedom', like: false},
            { image: 'images/Exia.jpg', code: 'GN-001', name: 'Gundam Exia', like: false },
            { image: 'images/Barbatos.jpg', code: 'ASW-G-08', name: 'Gundam Barbatos Lupus Rex', like: false}
            ],
            searchOn: false,
            searching: '',
            gindex:0,
            show: false
        }
    },
    methods: {
        like(index) {
            this.gundam[index].like = !this.gundam[index].like;
        },
        searchEX(search){
            this.searching = search;
            console.log("testter");
        },
        showimg(index){
            this.show = !this.show;
            this.gindex = index;
            console.log(this.gindex);
        },
        closeshow(){
            this.show = !this.show;
            console.log("close-img");
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
                let gundams = this.gundam.filter(n => n.name.toLowerCase().includes(this.searching.toLowerCase()));
                console.log("test02");
                if (gundams == '') {
                    console.log("Not found");
                    return this.gundam;
                }
                return gundams;
            }
        }
    }

})