import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagina from '@/components/Pagina'
import Elenco from '@/components/Elenco'
import ElementoSingolo from '@/components/ElementoSingolo'





Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/pagina',
			name: 'Pagina',
			component: Pagina
		},
		{
			path: '/elenco',
			name: 'Elenco',
			component: Elenco
		},
		{
			path: '/elementosingolo/:elementoId',
			name: 'ElementoSingolo',
			component: ElementoSingolo,
			props: true,
		},
	]
})


export default router