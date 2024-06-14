import { CO_Attain_UE } from "../models/coAttainUE.js";

const createUE = async (ese, midesem, pr_or, termwork, total) => {
    try {
        const ESE = ese || null
        const MidSem = midesem || null
        const PR_OR = pr_or || null
        const TermWork = termwork || null
        const Total = total || null
        const UE = new CO_Attain_UE({
            ESE,
            MidSem,
            PR_OR,
            TermWork,
            Total
        })
        await UE.save()
        return { UE }
    } catch (error) {
        return res.status(500).json({ message: "There was error while creating UE object" })
    }


}

export { createUE };