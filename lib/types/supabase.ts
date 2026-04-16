export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	// Required by @supabase/postgrest-js 2.x for type inference.
	__InternalSupabase: {
		PostgrestVersion: "12";
	};
	public: {
		Tables: {
			profiles: {
				Row: {
					created_at: string;
					display_name: string | null;
					email: string;
					id: string;
					image_url: string | null;
				};
				Insert: {
					created_at?: string;
					display_name?: string | null;
					email: string;
					id: string;
					image_url?: string | null;
				};
				Update: {
					created_at?: string;
					display_name?: string | null;
					email?: string;
					id?: string;
					image_url?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			stripe_events: {
				Row: {
					id: string;
					type: string;
					received_at: string;
				};
				Insert: {
					id: string;
					type: string;
					received_at?: string;
				};
				Update: {
					id?: string;
					type?: string;
					received_at?: string;
				};
				Relationships: [];
			};
			subscription: {
				Row: {
					created_at: string;
					customer_id: string | null;
					email: string;
					end_at: string | null;
					subscription_id: string | null;
				};
				Insert: {
					created_at?: string;
					customer_id?: string | null;
					email: string;
					end_at?: string | null;
					subscription_id?: string | null;
				};
				Update: {
					created_at?: string;
					customer_id?: string | null;
					email?: string;
					end_at?: string | null;
					subscription_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_subscription_email_fkey";
						columns: ["email"];
						isOneToOne: true;
						referencedRelation: "profiles";
						referencedColumns: ["email"];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database["public"];

export type Tables<TableName extends keyof PublicSchema["Tables"]> =
	PublicSchema["Tables"][TableName]["Row"];

export type TablesInsert<TableName extends keyof PublicSchema["Tables"]> =
	PublicSchema["Tables"][TableName]["Insert"];

export type TablesUpdate<TableName extends keyof PublicSchema["Tables"]> =
	PublicSchema["Tables"][TableName]["Update"];
