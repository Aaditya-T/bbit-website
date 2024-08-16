import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zmxakjcdriifuftsmkvj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpteGFramNkcmlpZnVmdHNta3ZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDQzODM5NCwiZXhwIjoyMDM2MDE0Mzk0fQ.VwdhlJmpaJEN5gKrODuvhfP0oOxTvESImIkahVo1Xf0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AddLab() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("/lab");
    const [lab_id, setLab_id] = useState("");
    
    const [message, setMessage] = useState(null);  
    const [isError, setIsError] = useState(false);

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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input 
                        type="text" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Lab ID:</label>
                    <input 
                        type="text" 
                        value={lab_id} 
                        onChange={(e) => setLab_id(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Add Lab</button>
            </form>
            
            {message && (
                <div style={{ color: isError ? 'red' : 'green', marginTop: '10px' }}>
                    {message}
                </div>
            )}
        </div>
    );
}
