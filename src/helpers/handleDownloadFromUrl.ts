import { toast } from "sonner";

export const handleDownloadFromUrl = (
  url: string | undefined,
  selectedState: string
) => {
  if (!selectedState) {
    toast.error("Please select a state to download the bill");
    return;
  }
  if (!url) {
    toast.error("No bill found of this type!");
    return;
  }
  window.open(url, "_blank");
};
