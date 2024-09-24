"use client";

import { useState } from "react";
import { HomeListItemLayout } from "./HomeListItemLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import { subscribe } from "actions/newsletter";
import classNames from "classnames";
import { PostgreSQLErrorCode } from "utils/supabase";

type NewsletterForm = {
  email: string;
};

export function Newsletter() {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSubscribed: false,
    feedback: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>({
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<NewsletterForm> = async ({ email }) => {
    setFetchState({
      isLoading: true,
      isSubscribed: false,
      feedback: "Loading...",
    });

    const { error } = await subscribe(email);

    setFetchState({
      isLoading: false,
      isSubscribed:
        !error || error.code === PostgreSQLErrorCode.unique_violation,
      feedback: error
        ? error.message
        : "Thank you, you will hear from me soon!",
    });
  };

  return (
    <HomeListItemLayout leftCol="NEWSLTTR" centered>
      {isInputOpen ? (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex md:max-w-96 py-1 border-b border-neutral-900"
          >
            <input
              type="email"
              {...register("email", {
                required: "This field is required",
                maxLength: {
                  value: 255,
                  message: "Maximum of 255 characters is accepted",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="grow font-mono outline-none"
              placeholder="handsome@joe.com"
              autoFocus
            />
            <button className="px-2 font-mono" disabled={fetchState.isLoading}>
              Subscribe
            </button>
          </form>
          <div
            className={classNames("mt-2 font-mono text-sm", {
              "text-red-500": !fetchState.isSubscribed && !fetchState.isLoading,
              "text-green-500": fetchState.isSubscribed,
            })}
          >
            {errors.email ? errors.email.message : fetchState.feedback}
          </div>
        </>
      ) : (
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setIsInputOpen(true)}
        >
          <div className="hiddsen md:block w-11 h-0 border-b-[1.5px] border-dashed border-neutral-800 dark:border-neutral-100" />
          <div className="hiddsen md:block font-mono h-5 w-[10.5px] relative overflow-x-hidden text-2xl">
            <span className="absolute leading-[0] right-0 top-[9.7px]">→</span>
          </div>
          <div className="md:w-2/3 pl-2">
            <span className="font-monos uppercases tracking-tights animate-blink">
              Subscribe
            </span>{" "}
          </div>
        </div>
      )}
    </HomeListItemLayout>
  );
}
