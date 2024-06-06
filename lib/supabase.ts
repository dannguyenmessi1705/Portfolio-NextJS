import {
  createClient,
  RealtimeChannel,
  SupabaseClient,
} from "@supabase/supabase-js";

export const supabase: SupabaseClient<RealtimeChannel | null> = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!,
);