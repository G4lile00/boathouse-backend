import jwt from "jsonwebtoken";
import { JWToken } from "../models/jwt.model";
export async function verifyToken(req: any, res:any, next: any): Promise<any> {
    try {
        const token = req.headers['x-access-token'];
        if (!!!token) {
            return res.status(401).json({ auth: false, message: 'Token indefinido.' });
        }
        jwt.verify(token, "eb7d887a714a628fd6c87eb85d9f6cd413909746536519aaad7471b57bd02f90", (err: any, decoded: any) => {
            if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });
            
            // se tudo estiver ok, salva no request para uso posterior
            req.body.user = decoded.user;
            req.body.company = decoded.company
            req.body.operator = decoded.operator
            req.body.operational = decoded.operational
            req.body.manager = decoded.manager
            next();
          });




    } catch (error) {
        console.log(error)
    }
}
  