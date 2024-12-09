//asignar nombre y version de la cache
const CACHE_NAME = 'Raul Damian Rafael';
//ficheros a cachear

var urlsToCache = [
    './',
    './css/style.css',
    './img/favicon1.png',
    './games/apex.jpeg',
    './games/FG.jpeg',
    './games/wz.jpeg',

    './img/facebookr.jpeg',
    './img/whatsapp.jpeg',
    './img/twitter.jpeg',
    
    './img/favicons/favicon-32.png',
    './img/favicons/favicon-64.png',
    './img/favicons/favicon-128.png',
    './img/favicons/favicon-192.png',
    './img/favicons/favicon-256.png',
    './img/favicons/favicon-384.png',
    './img/favicons/favicon-512.png',
    './img/favicons/favicon-768.png',
    './img/favicons/favicon-1024.png',
    './img/favicons/favicon-2048.png',
];


self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() =>{
                self.skipWaiting();
        });
        })
        .catch(err => console.log('no se ha registrado el cache' , err))
    );
});                         

//Evento fetch
self.addEventListener('fetch', e => {

	e.respondWith(
		caches.match(e.request)
		.then(res =>{
			if(res){
				return res;
			}
			return fetch(e.request);
		})
	);
});       