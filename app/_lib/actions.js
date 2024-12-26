"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getReservations } from "@/app/_lib/data-service";

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

  revalidatePath("/account/profile"); //todo Doesn't work for whole path (component tree), and I cannot figure out why!!!

  //todo Completely idiotic solution for the problem above, but it works...
  redirect("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bikerReservations = await getReservations(session.user.bikerId);
  const bikerReservationIds = bikerReservations.map(
    (reservation) => reservation.id
  );

  if (!bikerReservationIds.includes(bookingId))
    throw new Error("You are not allowed to delete this reservation");

  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
