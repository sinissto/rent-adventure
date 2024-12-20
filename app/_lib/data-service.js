import { supabase } from "@/app/_lib/supabase";

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// GET

export const getBikes = async function () {
  const { data, error } = await supabase
    .from("motorbikes")
    .select("id, brand, model, price, image")
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

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
  }

  return data;
}
