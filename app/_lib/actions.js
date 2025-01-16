"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getReservations } from "@/app/_lib/data-service";

// Regular expression for alphanumeric string between 6 and 12 characters
const nationalIDRegex = /^[a-zA-Z0-9]{6,12}$/;

// Function to check if the nationalID is valid
function validateNationalID(nationalId) {
  return nationalIDRegex.test(nationalId);
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

export async function deleteReservation(reservationId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bikerReservations = await getReservations(session.user.bikerId);
  const bikerReservationIds = bikerReservations.map(
    (reservation) => reservation.id
  );

  if (!bikerReservationIds.includes(reservationId))
    throw new Error("You are not allowed to delete this reservation");

  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", reservationId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const reservationId = Number(formData.get("reservationId"));

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bikerReservations = await getReservations(session.user.bikerId);
  const bikerReservationIds = bikerReservations.map(
    (reservation) => reservation.id
  );

  if (!bikerReservationIds.includes(reservationId))
    throw new Error("You are not allowed to delete this reservation");

  const updatedFields = {
    additionalRequest: formData.get("additionalRequest").slice(0, 1000),
  };

  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", reservationId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${reservationId}`);

  redirect("/account/reservations");
}

export async function createReservation(reservationData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newReservationData = {
    ...reservationData,
    status: "unconfirmed",
    isPaid: false,
    riderId: session.user.bikerId,
    additionalRequest: formData.get("additionalRequest").slice(0, 1000),
  };

  const { data, error } = await supabase
    .from("bookings")
    .insert([newReservationData]);

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be created");
  }

  revalidatePath(`/motorbikes/${reservationData.bikeId}`);
  // redirect("/motorbikes/reservationCompleted");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
