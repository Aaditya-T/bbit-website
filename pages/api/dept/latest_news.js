import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL , process.env.SUPABASE_KEY);

export default async function fetchData(req , res){
    const { data, error } = await supabase
    .from('latest_news')
    .select('*')
        
    if (error) return res.status(401).json({ error: error.message })
    return res.status(200).json(data)
}