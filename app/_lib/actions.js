"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Regular expression for alphanumeric string between 6 and 12 characters
const nationalIDRegex = /^[a-zA-Z0-9]{6,12}$/;

// Function to check if the nationalID is valid
function validateNationalID(nationalID) {
  return nationalIDRegex.test(nationalID);
}

export async function updateBikerProfileAction(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const nationalId = formData.get("nationalId");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!validateNationalID(nationalId))
    throw new Error("Please provide a valid national ID");

  const updatedData = {
    nationality,
    countryFlag,
    nationalId,
  };

  const { data, error } = await supabase
    .from("riders")
    .update(updatedData)
    .eq("id", session.user.bikerId)
    .select();

  if (error) throw new Error("Biker's profile could not be updated");

  revalidatePath("/account/profile"); // doesn't work for whole path (component tree), and I cannot figure out why!!!

  // Completely idiotic solution for the problem above, but it's solution...
  redirect("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}