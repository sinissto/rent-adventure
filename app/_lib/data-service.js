import { supabase } from "@/app/_lib/supabase";
import { notFound } from "next/navigation";

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
