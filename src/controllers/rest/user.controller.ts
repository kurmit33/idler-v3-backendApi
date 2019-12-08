import {Path, POST} from "typescript-rest";
import {Users} from "../../entity/Users";
import * as bcrypt from "bcrypt";
import {getConnection} from "typeorm";
import {GenerateUniqueID} from "../../services/usage.services";

@Path('/api')
export class UserController {

    @POST
    @Path('/register')
    async register(user: Users) {
        user.loggedKey = '';
        user.loginExpired = new Date();
        user.loginExpired.setHours(user.loginExpired.getHours() + 1);
        user.status = 10;
        try {
            user.password = bcrypt.hashSync(user.password, 10);
        } catch (error) {
            console.log(error.message);
            return {
                status: false,
                message: 'Register failed. Please try again later'
            }
        }
        try {
            await getConnection().createQueryBuilder().insert().into(Users).values(user).execute();
        } catch (error) {
            console.log(error.message);
            return {
                status: false,
                message: 'Register failed. Please try again later'
            }
        }
        return {
            status: true,
            message: 'Register successful!'
        };
    }

    @POST
    @Path('/login')
    async login(user: Users) {
        const loginFail = {
            status: false,
            message: 'Login or password is incorrect. Please try again!',
            user: null,
        };
        try {
            const mysqlUser: Users | undefined = await getConnection().createQueryBuilder().select("users").from(Users, "users").where("users.nick = :nick").setParameter("nick", user.nick).getOne();
            try {
                const passwordValidation = bcrypt.compare(user.password, user.password);
                const uid = GenerateUniqueID.generator();
                if(!passwordValidation) {
                    return loginFail;
                } else {
                    try {
                        await getConnection().createQueryBuilder().update(Users).set({loginExpired: new Date(), loggedKey: uid}).where("users.nick = :nick").setParameter("nick", user.nick).execute();
                        return {
                            status: true,
                            message: 'Login successful!',
                            user: mysqlUser,
                        };
                    } catch (error) {
                        return loginFail;
                    }
                }
            } catch (error) {
                console.log(error.message);
                return loginFail;
            }
        } catch (error) {
            console.log(error.message);
            return loginFail;
        }
    }

    @POST
    @Path('/relogin')
    async reLogin(user: Users) {
        if(!user) {
            return {
                status: false,
                user: null,
            }
        } else {
            const mysqlUser: Users | undefined = await getConnection().createQueryBuilder().select("users").from(Users, "users")
                .where("users.nick = :nick", {nick: user.nick})
                .andWhere("users.loggedKey = :loggedKey", {loggedKey: user.loggedKey})
                .andWhere("user.loginExpired > STR_TO_DATe(:time)", {time: user.loginExpired}).getOne();
            if (!mysqlUser) {
                return {
                    status: false,
                    user: null,
                }
            } else {
                return {
                    status: true,
                    user: mysqlUser,
                }
            }
        }
    }
}
