import Vue from 'vue';
import Vuetify from 'vuetify';

import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

// Vuetify 升级 2X 版本这样写
export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: '#3F51B5'
            },
        },
    },
});
