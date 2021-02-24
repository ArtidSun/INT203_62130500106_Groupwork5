    const app = Vue.createApp({
        data() {
            return {
                head: 'Gundam gallery',
                gundam: [{ image: 'images/Strike.jpg', code: 'ZGMF-X20A',name: 'Gundam Strike Freedom' , like: false },
                { image: 'images/Exia.jpg', code: 'GN-001', name: 'Gundam Exia' , like: false },
                { image: 'images/Barbatos.jpg', code: 'ASW-G-08',name: 'Gundam Barbatos Lupus Rex' , like: false }
                ]
            }
        },
        methods:{

        }

    })