import { useSearchParams } from "react-router-dom";

// export function useUrlPosition() {
//   const [searchParams] = useSearchParams();
//   const lat = searchParams.get("lat");
//   const lng = searchParams.get("lng");
//   return [lat, lng];
// }

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get("lat")); // Ensure these are parsed as floats
  const lng = parseFloat(searchParams.get("lng"));
  // console.log("URL Position:", { lat, lng }); // Debug the values
  return [lat, lng];
}
