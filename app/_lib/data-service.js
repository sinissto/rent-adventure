import { supabase } from "@/app/_lib/supabase";
import { notFound } from "next/navigation";
import { eachDayOfInterval } from "date-fns";

/////////////
// GET

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );

    return await res.json();
  } catch {
    throw new Error("Could not fetch countries");
  }
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export const getBikes = async function () {
  const { data, error } = await supabase
    .from("motorbikes")
    // .select("id, brand, model, price, image")
    .select("*")
    .order("model");

  if (error) {
    console.error(error);
    throw new Error("Motorbikes could not be loaded");
  }

  return data;
};

export async function getBike(id) {
  const { data, error } = await supabase
    .from("motorbikes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getBiker(email) {
  const { data, error } = await supabase
    .from("riders")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function getBookedDatesByBikeId(bikeId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("bikeId", bikeId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

// CREATE

export async function createBiker(newBiker) {
  const { data, error } = await supabase.from("riders").insert([newBiker]);

  if (error) {
    console.error(error);
    throw new Error("New Biker could not be created");
  }

  return data;
}
