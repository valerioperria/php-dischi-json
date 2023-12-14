const { createApp } = Vue;

createApp({
    data() {
        return {
            diskList: [],
            apiUrl: 'server.php',
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            // console.log(resp);
            this.diskList = resp.data;
        });
    },
    methods: {},
}).mount("#app");