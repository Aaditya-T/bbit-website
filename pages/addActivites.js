import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { put } from "@vercel/blob";

const supabaseUrl = 'https://zmxakjcdriifuftsmkvj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpteGFramNkcmlpZnVmdHNta3ZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDQzODM5NCwiZXhwIjoyMDM2MDE0Mzk0fQ.VwdhlJmpaJEN5gKrODuvhfP0oOxTvESImIkahVo1Xf0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AddActivites(){
    const [dept_Id , setDept_id] = useState("");
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [image , setImage] = useState("/dept_activites");
    const [uploadImage , setUploadImage] = useState(null);
    const [message , setMessage] = useState(null);
    const [isError , setIsError] = useState(false);

    async function uploadImageToBlobStorage(file) {
        const blob = await put(image, file, { 
            access: 'public',
            addRandomSuffix : false,
            token: "vercel_blob_rw_CVPJO1EOTXjWVktS_yMDecTgF1Z4UKrnYhxCLyApBTHbZva",
        });
        return blob.url;
    }

    useEffect(()=>{
        if (uploadImage){
            uploadImageToBlobStorage(uploadImage).then((url) => {
                setImage(url);
            }).catch((err) => {
                setIsError(true);
                setMessage("Error uploading image: " + err.message);
            });
        }
    },[uploadImage])

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const {data , error} = await supabase
        .from('dept_activities')
        .insert([
            {dept_Id, title , description , image}
        ])
        if (error) {
            setIsError(true);
            setMessage("Error inserting data: " + error.message);
        } else {
            setIsError(false);
            setMessage("Data inserted successfully!");
            setDept_id("");
            setTitle("");
            setDescription("");
            setImage("dept_activites/");
            setUploadImage(null);
        }
    }
    const handleFileChange = (e) => {
        setUploadImage(e.target.files[0]);
    };

    return(
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                    <label className="block font-semibold mb-2">Activity ID:</label>
                    <input 
                        type="text" 
                        value={dept_Id} 
                        onChange={(e) => setDept_id(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
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
                    <label className="block font-semibold mb-2">Description</label>
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Activiy Image Name:</label>
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
    )
    
}
