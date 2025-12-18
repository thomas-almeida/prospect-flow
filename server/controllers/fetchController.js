import { runActor } from "../services/apify-service.js";
import { igStoresInput } from "../utils/actorInputs.js";

const igActorId = process.env.IG_PROFILES_ACTORID;

export async function fetchIgStores(req, res) {
    try {
        const response = await runActor(igActorId, igStoresInput)
        res.status(200).json({
            message: 'success',
            data: response
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'error',
            error: error
        })
    }
}