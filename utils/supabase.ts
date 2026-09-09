import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _supabaseClient: SupabaseClient | null = null

export const getSupabase = (): SupabaseClient => {
	if (!_supabaseClient) {
		const config = useRuntimeConfig()
		const url = config.public.supabaseUrl as string
		const key = config.public.supabaseKey as string
		_supabaseClient = createClient(url, key)
	}
	return _supabaseClient
}

export const supabase = new Proxy({} as SupabaseClient, {
	get(_target, prop, receiver) {
		const client = getSupabase()
		const value = Reflect.get(client, prop, receiver)
		return typeof value === 'function' ? value.bind(client) : value
	},
})

