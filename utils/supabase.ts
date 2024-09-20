import { createClient } from "@supabase/supabase-js";
import { Database } from "database.types";

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * Standard PostgreSQL Error Codes
 *
 * {@link https://www.postgresql.org/docs/current/errcodes-appendix.html}
 */
export const PostgreSQLErrorCode = {
  unique_violation: "23505",
} as const;
