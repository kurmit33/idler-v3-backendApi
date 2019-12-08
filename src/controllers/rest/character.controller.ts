import {GET, Path, POST} from "typescript-rest";
import {Users} from "../../entity/Users";
import {getConnection} from "typeorm";
import {Characters} from "../../entity/Characters";

@Path('/character')
export class CharacterController {

    @GET
    @Path('/show')
    async getCharacter(user: Users) {
        try {
            const character = await getConnection().createQueryBuilder().select('characters').from(Characters, 'characters').where('characters.userid = :userId', {userId: user.id}).getOne();
            if(!character) {
                return {
                    status: false,
                    message: 'Character doesnt exist. Please make your character!',
                    character: null,
                };
            } else {
                return {
                    status: true,
                    message: '',
                    character: character,
                };
            }
        } catch (error) {
            console.log(error.message);
            return {
                status: false,
                message: 'Character doesnt exist. Please make your character!',
                character: null,
            };
        }
    }

    @POST
    @Path('/make')
    async makeCharacter(character: Characters) {
        try {
            await getConnection().createQueryBuilder().insert().into(Characters).values(character).execute();
            return {
                status: true,
                message: '',
                character: character,
            };
        } catch (error) {
            console.log(error.message);
            return {
                status: false,
                message: 'Cant create new character. Pleas try again later',
                character: null
            }
        }

        
    }


    /*@POST
    @Path('/change')
    async changeCharacter(payload: {what: string, selected: number}) {
        switch(payload.what) {
            case 'race':
                try {
                    await getConnection().createQueryBuilder().update(Characters).set({

                    })
                } catch (error) {

                }
            case 'class':
                try {

                } catch (error) {

                }
            default:
                return {
                    status: false,
                    message: 'You should select what you want to change.'

                }
        }
    }*/


}
