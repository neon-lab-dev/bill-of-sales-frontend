"use client";
import React, { useRef, useState } from "react";
// Dynamically import the rich text editor
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import the styles

import { ICONS } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleUploadFormService } from "@/services/forms";
import dynamic from "next/dynamic";

const AddNewBillModel = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formName, setFormName] = useState(""); // State to handle form name
  const [metaDescription, setMetaDescription] = useState(""); // State to handle meta description
  const [editorContent, setEditorContent] = useState(""); // State to handle editor content
  const modalCloseRef = useRef(null);
  const [isNextTab, setIsNextTab] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: handleUploadFormService,
    onSuccess: (msg) => {
      toast.success(msg);
      queryClient.invalidateQueries({
        queryKey: ["forms"],
      });
      // Close the modal
      //@ts-ignore
      modalCloseRef.current.click();
      setFormName("");
      setMetaDescription("");
      setEditorContent("");
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });
  const onSubmit = (data: any) => {
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    } else {
      const fd = new FormData();
      fd.append("file", selectedFile);
      fd.append("formName", formName);
      fd.append("metaDescription", metaDescription);
      fd.append("description", editorContent);
      toast.info("Uploading...");
      mutate(fd);
    }
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7">
        <div className="bg-primary text-white p-3 mt-14 mx-16 font-500 rounded-lg w-[300px] text-center">
          Add New Bill
        </div>
      </label>

      {/* Modal structure */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-3xl h-[550px] bg-white p-0">
          <div className="flex flex-col rounded-xl bg-white">
            {/* Modal header */}
            <div className="bg-primary p-4 rounded-t-xl flex justify-between">
              <span className="text-xl p-2 text-white font-500">
                Add New Bill
              </span>
              {/* Close button */}
              <label
                ref={modalCloseRef}
                className="modal-backdrop"
                htmlFor="my_modal_7"
              >
                Close
              </label>
            </div>

            {!isNextTab ? (
              <form
                onSubmit={handleSubmit((data) => {
                  setIsNextTab(true);
                  setFormName(data.formName);
                  setMetaDescription(data.metaDescription);
                })}
                className="p-4"
              >
                {/* Title */}
                <label
                  htmlFor="file"
                  className="block text-black font-bold mb-2"
                >
                  Upload Thumbnail
                </label>
                <div className="mb-4  border-dashed border-2 border-gray-300  bg-[#A4C6FF] rounded-lg p-3 w-[200px]">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    // accept .pdf .doc and .docx
                    accept="image/*"
                    onChange={(e) =>
                      setSelectedFile(e.target.files && e.target.files[0])
                    }
                    className="hidden "
                  />
                  <label
                    htmlFor="file"
                    className="cursor-pointer text-gray-700 hover:text-gray-900"
                  >
                    <div>
                      <Image
                        src={ICONS.choosefile}
                        alt="dd"
                        className="pl-10"
                      />
                      <span className="text-base leading-normal pl-4">
                        {selectedFile ? selectedFile.name : "Choose a file"}
                      </span>
                    </div>
                  </label>
                </div>
                <div className="mb-4 bg-white">
                  <label
                    htmlFor="title"
                    className="block text-black font-bold mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("formName", { required: true })}
                    className=" bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                  />
                  {errors.formName && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Editor */}
                <div className="mb-4">
                  <label
                    htmlFor="editor"
                    className="block text-black font-bold mb-2"
                  >
                    Short Description
                  </label>
                  <textarea
                    {...register("metaDescription", { required: true })}
                    className=" bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                  />
                  {errors.metaDescription && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Button to submit */}
                <div className="text-center mt-16">
                  <Button className="bg-primary text-white px-4 py-1 rounded-lg">
                    Next
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mb-4 mx-4">
                <label
                  htmlFor="editor"
                  className="block text-black font-bold mb-2"
                >
                  Rich Text Editor
                </label>
                <ReactQuill
                  id="editor"
                  value={editorContent}
                  onChange={(value: any) => setEditorContent(value)}
                  theme="snow"
                  className="w-[700px]"
                  style={{ height: "300px" }}
                />
                <div className="text-center mt-16 flex gap-4">
                  <Button
                    onClick={onSubmit}
                    className="bg-primary text-white px-4 py-1 rounded-lg"
                  >
                    {
                      // If the form is in pending state, show the loading spinner
                      isPending ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        "Submit"
                      )
                    }
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default AddNewBillModel;
