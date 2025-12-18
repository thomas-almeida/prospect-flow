
import dotenv from "dotenv"
dotenv.config()

import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: process.env.APIFY_TOKEN,
});

export async function runActor(actorId, input) {

    try {
        const run = await client.actor(actorId).call(input);
        const { items } = await client.dataset(run.defaultDatasetId).listItems()
        return {
            message: 'success',
            data: items
        }
    } catch (error) {
        console.error(error)
        return {
            message: 'error',
            error: error
        }
    }

}
