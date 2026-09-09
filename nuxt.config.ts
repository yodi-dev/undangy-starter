// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
		  meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		  ],
		  link: [
			{ rel: 'icon', type: 'image/png', href: '/images/favicon.ico' }
		  ]
		}
	  },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		families: {
		  'Great Vibes': [400],
		  Montserrat:    [400, 600],
		  Lato: [100, 300],
		},
		display: 'swap',
		prefetch: true,
		preconnect: true,
	  },
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL || '',
			supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY || '',
		},
	},
	devtools: { enabled: true },
	compatibilityDate: "2024-11-01",
	eslint: {
		config: {
			stylistic: {
				semi: false,
				quotes: "single",
				commaDangle: "always-multiline",
				indent: 2,
			},
		},
	},
});
