
export function validarPedido(req, res, next) {
  const { cliente_id } = req.body;

  if (!cliente_id || typeof cliente_id !== 'number') {
    return res.status(400).json({
      erro: 'cliente_id é obrigatório e deve ser um número',
    });
  }
  next();
}

export function validarAtualizacaoPedido(req, res, next) {
  const { status } = req.body;
  if (!status || typeof status !== 'string' || !status.trim()) {
    return res.status(400).json({
      erro: 'status é obrigatório e deve ser um texto',
    });
  }
  next();
}





















