"use server";

import { PostgrestError } from "@supabase/supabase-js";
import { TablesInsert } from "database.types";
import { supabase } from "utils/supabase";

export async function subscribe(email: string) {
  const response = await supabase
    .from("Subscriber")
    .insert<TablesInsert<"Subscriber">>([
      { email, newsletter: "ex-sideproject" },
    ]);

  return {
    ...response,
    error: response.error ? dumbDownError(response.error) : null,
  };
}

function dumbDownError(error: PostgrestError): PostgrestError {
  const { code } = error;
  const errorClass = code.slice(0, 2);
  const errorCondition = code.slice(2);

  const dumbedDownError = { ...error };

  switch (errorClass) {
    case "23":
      dumbedDownError.message =
        errorCondition === "505"
          ? "We got this, you're already subscribed ;)"
          : "This operation is not allowed";
      break;
    case "28":
    case "OL":
    case "OP":
      dumbedDownError.message = "You're not allowed to do this operation";
      break;
    default:
      dumbedDownError.message = "Something went wrong, try again later.";
  }

  return dumbedDownError;
}
