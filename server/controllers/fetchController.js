import InstagramProfile from "../db/models/InstagramProfiles.js";
import dotenv from "dotenv"
dotenv.config()

import { runActor } from "../services/apify-service.js";
import { igStoresInput } from "../utils/actorInputs.js";

const igActorId = process.env.IG_PROFILES_ACTORID;

export async function fetchIgStores(req, res) {
    try {

        const response = await runActor(igActorId, igStoresInput)

        // Processar cada perfil retornado
        for (const profile of response?.data || []) {
            try {
                // Verificar se o perfil já existe pelo username
                const existingProfile = await InstagramProfile.findOne({ username: profile?.username });
                
                // Se não existir, cria um novo perfil
                if (!existingProfile) {
                    await InstagramProfile.create({
                        username: profile?.username,
                        fullName: profile?.fullName,
                        url: profile?.url,
                        bio: profile?.biography,
                        externalUrls: profile?.externalUrls,
                        followers: profile?.followersCount,
                        verified: profile?.verified,
                        profilePicUrl: profile?.profilePicUrl,
                        postsCount: profile?.postsCount,
                        latestPosts: profile?.latestPosts
                    });
                    console.log(`Perfil ${profile?.username} adicionado com sucesso.`);
                } else {
                    console.log(`Perfil ${profile?.username} já existe no banco de dados.`);
                }
            } catch (error) {
                console.error(`Erro ao processar perfil ${profile?.username}:`, error);
            }
        }

        res.status(200).json({
            message: `Perfis Encontrados com sucesso`,
            data: response?.data
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'error',
            error: error
        })
    }
}