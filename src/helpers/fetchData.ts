import { NEXT_REVALIDATE_TIME } from "@/constants/time.constants";

export const fetchData = async <T>(
  url: string,
  revalidate: number = NEXT_REVALIDATE_TIME
) => {
  const data = await fetch(url, {
    next: {
      revalidate: revalidate,
    },
  });
  if (!data.ok) return null;
  const json = await data.json();
  return json as T;
};

// export const fetchDataOnClient = async <T>(url: string) => {
//   const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
//   const data = await fetch(`${baseUrl}${url}`);
//   const json = await data.json();
//   return json as T;
// };
