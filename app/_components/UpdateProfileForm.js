"use client";

import { useState } from "react";
import { updateBikerProfileAction } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";

function UpdateProfileForm({ children, biker }) {
  const { fullName, email, nationalId, countryFlag } = biker;

  return (
    <form
      action={updateBikerProfileAction}
      className={"bg-accent-900-900 py-8 px-12 text-lg flex gap-6 flex-col"}
    >
      <div className={"space-y-2"}>
        <label>Full name</label>
        <input
          disabled={true}
          defaultValue={fullName}
          name={"fullName"}
          className={
            "px-5 py-3 bg-accent-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
          }
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled={true}
          defaultValue={email}
          name={"email"}
          className={
            "px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
          }
        />
      </div>

      <div className={"space-y-2"}>
        <div className={"flex items-center justify-between"}>
          <label htmlFor={"nationality"}>Where are you from?</label>
          <img
            src={countryFlag}
            alt={"Country flag"}
            className={"h-5 rounded-sm"}
          />
        </div>

        {children}
      </div>

      <div className={"space-y-2"}>
        <label htmlFor={"nationalId"}>National ID number</label>
        <input
          defaultValue={nationalId}
          name={"nationalId"}
          className={
            "px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          }
        />
      </div>

      <div className={"flex justify-end items-center gap-6"}>
        <SubmitButton pendingLabel={"Updating..."}>Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
