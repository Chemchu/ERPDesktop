import { NextApiRequest, NextApiResponse } from "next";
import { envInformation } from "../../../utils/envInfo";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method) {
            case 'GET':
                const response = await fetch(`${envInformation.ERPGATEWAY_URL}api`, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' }
                });
                const resJson = JSON.parse((await response.json()).data)
                return res.status(response.status).json({ isOnline: resJson.successful });

            default:
                return res.status(400).json({ message: `Solo se puede hacer un GET` });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ isOnline: false });
    }
}

export default handler;