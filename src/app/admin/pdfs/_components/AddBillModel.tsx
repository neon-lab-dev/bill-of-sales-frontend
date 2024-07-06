"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic for async loading of the editor component
import Image from 'next/image';
import Link from 'next/link';
import { ICONS } from '@/assets';
import Button from '@/components/Button';

// Dynamically import the rich text editor
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Import the styles

const AddBillModel = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [editorContent, setEditorContent] = useState(''); // State to handle editor content

    // Function to handle file selection
    const handleFileSelect = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        // Validate file type (only accept PDF)
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            alert('Please select a PDF file.');
        }
    };

    // Function to handle editor content change
    const handleEditorChange = (content: React.SetStateAction<string>) => {
        setEditorContent(content);
    };

    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7">
                <div className='bg-primary text-white p-3 mt-14 mx-16 font-500 rounded-lg w-[300px] text-center'>
                    Add New State
                </div>
            </label>

            {/* Modal structure */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box max-w-3xl h-[550px] bg-white p-0">
                    <div className='flex flex-col rounded-xl bg-white'>
                        {/* Modal header */}
                        <div className='bg-primary p-4 rounded-t-xl flex justify-between'>
                            <span className='text-xl p-2 text-white font-500'>Add New State</span>
                            {/* Close button */}
                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div>

                        {/* Modal content */}
                        <div className="p-4 w-[200px]">
                            {/* Title */}
                            <label htmlFor="file" className="block text-black font-bold mb-2">Upload PDF File</label>
                            <div className="mb-4  border-dashed border-2 border-gray-300  bg-[#A4C6FF] rounded-lg p-3">
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".pdf"
                                    onChange={handleFileSelect}
                                    className="hidden "
                                />
                                <label
                                    htmlFor="file"
                                    className="cursor-pointer text-gray-700 hover:text-gray-900"
                                >
                                    <div>
                                    <Image src={ICONS.choosefile} alt='dd' className='pl-10' />
                                    <span className="text-base leading-normal pl-4">
                                        {selectedFile ? selectedFile.name : 'Choose a file'}
                                    </span>
                                    </div>
                                   
                                </label>
                            </div>
                            <div className="mb-4 w-[400px] bg-white">
                                <label htmlFor="title" className="block text-black font-bold mb-2">Title</label>
                                <input type="text" id="title" name="title" className=" bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight " />
                            </div>

                           
                            {/* Button to submit */}
                            <div className="text-center mt-16">
                                <Button className="bg-primary text-white px-4 py-1 rounded-lg">Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
}

export default AddBillModel;
