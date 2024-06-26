import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.join(process.cwd(), ".env") })
export default {
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    bc_hash: process.env.BC_HASH,
    jwt_secrate: process.env.JWT_SECRATE,
    jwt_refresh: process.env.JWT_REFRESH
}