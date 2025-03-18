const PLACE_ID = "ChIJBWiZm6tWKhMRfu32dauQp9E";
const API_KEY = "AIzaSyAh4XQWIUmpr36ew1SANDe9jys0PIywnUM";

export default async function getReviews() {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log("Fetched Data:", data); // Verify if the data is being received

    // Check if data.result and data.result.reviews exist
    if (data.result && data.result.reviews) {
      return data.result.reviews;
    } else {
      console.log("No reviews found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching reviews", error);
    return [];
  }
}
