import jwt from 'jsonwebtoken';


export function autenticar(req, res, next) {
const header = req.headers.authorization;
if (!header) {
return res.status(401).json({ erro: 'sem token' });
}
const token = header.split(' ')[1];
try {
req.usuario = jwt.verify(token, process.env.JWT_SECRET);
next();
} catch (erro) {
res.status(401).json({ erro: 'token invalido' });
}
}