import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { put } from "@vercel/blob";

// Initialize Supabase client
const supabaseUrl = 'https://zmxakjcdriifuftsmkvj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpteGFramNkcmlpZnVmdHNta3ZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDQzODM5NCwiZXhwIjoyMDM2MDE0Mzk0fQ.VwdhlJmpaJEN5gKrODuvhfP0oOxTvESImIkahVo1Xf0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AddLab() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("/lab");
    const [lab_id, setLab_id] = useState("");
    const [uploadImage , setUploadImage] = useState(null);
    
    const [message, setMessage] = useState(null);  
    const [isError, setIsError] = useState(false);

    async function uploadImageToBlobStorage(file) {
        const blob = await put(image, file, { 
            access: 'public',
            token: "vercel_blob_rw_CVPJO1EOTXjWVktS_yMDecTgF1Z4UKrnYhxCLyApBTHbZva",
            addRandomSuffix: false,
        });
        return blob.url;
    }
    useEffect(() => {
        if (uploadImage) {
            uploadImageToBlobStorage(uploadImage)
        }
    }, [uploadImage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { data, error } = await supabase
            .from('lab') 
            .insert([
                { title, desc : description, image, lab_id }
            ]);

        if (error) {
            setIsError(true);
            setMessage("Error inserting data: " + error.message);
        } else {
            setIsError(false);
            setMessage("Data inserted successfully!");
            setTitle("");
            setDescription("/lab");
            setImage("");
            setLab_id("");
        }
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-2">Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Description:</label>
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Image URL:</label>
                    <input 
                        type="text" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Lab ID:</label>
                    <input 
                        type="text" 
                        value={lab_id} 
                        onChange={(e) => setLab_id(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Image:</label>
                    <input 
                        type="file"
                        onChange={(e) => setUploadImage(e.target.files[0])} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Lab</button>
            </form>
            
            {message && (
                <div className={`mt-4 p-2 rounded-md ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message}
                </div>
            )}
        </div>
    );
}
