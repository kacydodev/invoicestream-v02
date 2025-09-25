/// <reference types="vite/client" />

// interface ViteTypeOptions {}
// By adding this line, you can make the type of ImportMetaEnv strict
// to disallow unknown keys.
// strictImportMetaEnv: unknown

interface ImportMetaEnv {
	readonly VITE_SUPABASE_URL: string;
	readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
	readonly VITE_GOOGLE_MAPS_API_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
