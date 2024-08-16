import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { put } from "@vercel/blob";

const supabaseUrl = 'https://zmxakjcdriifuftsmkvj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpteGFramNkcmlpZnVmdHNta3ZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDQzODM5NCwiZXhwIjoyMDM2MDE0Mzk0fQ.VwdhlJmpaJEN5gKrODuvhfP0oOxTvESImIkahVo1Xf0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AddFaculty() {
    const [dept_id, setDept_id] = useState("");
    const [full_name, setFull_name] = useState('');
    const [designation, setDesignation] = useState('');
    const [image, setImage] = useState('/Faculty');
    const [yoe, setYoe] = useState('');
    const [qualification, setQualification] = useState('');
    const [uploadImage, setUploadImage] = useState(null);
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    async function uploadImageToBlobStorage(file) {
        const blob = await put(image, file, { 
            access: 'public',
            token: "vercel_blob_rw_CVPJO1EOTXjWVktS_yMDecTgF1Z4UKrnYhxCLyApBTHbZva",
        });
        return blob.url;
    }

    useEffect(() => {
        if (uploadImage) {
            uploadImageToBlobStorage(uploadImage).then((url) => {
                setImage(url);
            }).catch((err) => {
                setIsError(true);
                setMessage("Error uploading image: " + err.message);
            });
        }
    }, [uploadImage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { data, error } = await supabase
            .from('faculty')
            .insert([
                { dept_id, full_name, designation, image, yoe, qualification }
            ]);

        if (error) {
            setIsError(true);
            setMessage("Error inserting data: " + error.message);
        } else {
            setIsError(false);
            setMessage("Data inserted successfully!");
            setDept_id("");
            setFull_name("");
            setDesignation("");
            setImage("/Faculty");
            setYoe("");
            setQualification("");
        }
    }

    const handleFileChange = (e) => {
        setUploadImage(e.target.files[0]);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-2">Department ID:</label>
                    <input 
                        type="text" 
                        value={dept_id} 
                        onChange={(e) => setDept_id(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Full Name:</label>
                    <input 
                        type="text" 
                        value={full_name} 
                        onChange={(e) => setFull_name(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Designation:</label>
                    <input 
                        type="text" 
                        value={designation} 
                        onChange={(e) => setDesignation(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Years of Experience:</label>
                    <input 
                        type="text" 
                        value={yoe} 
                        onChange={(e) => setYoe(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Qualification:</label>
                    <input 
                        type="text" 
                        value={qualification} 
                        onChange={(e) => setQualification(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Profile Image:</label>
                    <input 
                        type="text" 
                        value = {image}
                        onChange={(e) => setImage(e.target.value)}
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Profile Image:</label>
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
                {message && (
                    <p className={`mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
