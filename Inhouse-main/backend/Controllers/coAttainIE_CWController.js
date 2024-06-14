import { CO_Attain_IE_CW } from "../models/coAttainIECW.js";

const createIE_CW = async (CO) => {
    try {
        const { co1, co2, co3, co4, co5, co6 } = CO;

        const co1_UT = co1?.UT1 || null;
        const co1_CW = co1?.CW || null;
        const co1_Total = co1?.Total || null;

        const co2_UT = co2?.UT1 || null;
        const co2_CW = co2?.CW || null;
        const co2_Total = co2?.Total || null;

        const co3_UT = co3?.UT2 || null;
        const co3_CW = co3?.CW || null;
        const co3_Total = co3?.Total || null;

        const co4_UT = co4?.UT2 || null;
        const co4_CW = co4?.CW || null;
        const co4_Total = co4?.Total || null;

        const co5_CW = co5?.CW || null;
        const co5_Total = co5?.Total || null;

        const co6_CW = co6?.CW || null;
        const co6_Total = co6?.Total || null;

        const IE_CW = new CO_Attain_IE_CW({
            CO1: {
                UT1: co1_UT,
                CW: co1_CW,
                Total: co1_Total
            },
            CO2: {
                UT1: co2_UT,
                CW: co2_CW,
                Total: co2_Total
            },
            CO3: {
                UT2: co3_UT,
                CW: co3_CW,
                Total: co3_Total
            },
            CO4: {
                UT2: co4_UT,
                CW: co4_CW,
                Total: co4_Total
            },
            CO5: {
                CW: co5_CW,
                Total: co5_Total
            },
            CO6: {
                CW: co6_CW,
                Total: co6_Total
            }
        });

        const createdIE_CW = await IE_CW.save();

        return { cos: createdIE_CW };
    } catch (error) {
        throw new Error("There was an error while creating IE_CW object: " + error.message);
    }
}

export { createIE_CW };
