"use client";
import { handleAddStateService } from "@/services/forms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  id: string;
  formName: string;
};

const AddStateModal = ({ id, formName }: Props) => {
  const queryClient = useQueryClient();
  const [files, setFiles] = React.useState<FileList | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: handleAddStateService,
    onSuccess: (msg) => {
      toast.success(msg);
      queryClient.invalidateQueries({
        queryKey: ["forms"],
      });
      // Close the modal
      //@ts-ignore
      document.getElementById(`state-${id}`)?.close();
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (!files) {
      toast.error("Please select a file");
      return;
    } else {
      const fd = new FormData();
      for (let i = 0; i < files.length; i++) {
        fd.append("files", files[i]);
      }
      fd.append("stateName", data.stateName);
      fd.append("formId", id);
      toast.info("Uploading...");
      mutate(fd);
    }
  };

  return (
    <>
      <dialog id={`state-${id}`} className="modal z-10">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{formName}</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            <label htmlFor="stateName">State Name</label>
            <input
              type="text"
              id="stateName"
              {...register("stateName", { required: true })}
              className="border p-2"
            />
            <label htmlFor="Files">Upload Files</label>
            {
              // @ts-ignore
              errors?.Files && <span>{errors?.Files?.message}</span>
            }
            <input
              type="file"
              id="Files"
              onChange={(e) => setFiles(e.target.files)}
              className="border p-2"
              multiple
              // accept=".pdf, .doc, .docx"
              accept=".pdf,.doc,.docx"
            />
            <button
              disabled={isPending}
              className="bg-primary text-white p-2 rounded-lg w-1/2 ml-auto"
            >
              {isPending ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddStateModal;
