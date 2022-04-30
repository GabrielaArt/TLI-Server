import { createApp } from 'vue';

/* [ Directories (Vista / Rutas) ] */
import App from './views/layouts/Home.vue'; //Vista principal
// import authRoute from './routes/authentication.route.js' 
// import userRoute from './routes/user.route.js'
// import publicationRoute from './routes/publication.route.js'
// import commentRoute from './routes/comment.route.js'
// import ubicationRoute from './routes/ubication.route.js'
// import notificationRoute from './routes/notification.route.js'

/* Creacion de la app */
const application = createApp(App);

//Arranque
application.mount('#app');
