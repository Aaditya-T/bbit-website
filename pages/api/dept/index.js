const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async (req, res) => {
    const { data, error } = await supabase
        .from('department')
        .select(`
          *,
          faculty (
            *
          ),
          lab (
            *
          )
        `)
        
    if (error) return res.status(401).json({ error: error.message })
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
    return res.status(200).json(data)
}
