// business logic hooks

import { supabase } from "@/lib/supabase";
import { useState } from "react"

export const useView = () => {
    const [view, setView] = useState<any[]>([]);

    const getView = async () => {
        const { data, error } = await supabase
        .from('view')
        .select('*')

        if(data) {
            setView(data);
        }

        return {
            view,
            setView
        }
    }
}