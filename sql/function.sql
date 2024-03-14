-- Uma loja tem um banco de dados que contém todo o controle de vendas de 
-- produtos e de cadastro de clientes. Pensando nisso, crie uma função para 
-- somar todos os clientes que foram cadastrados na loja durante um dia.

CREATE FUNCTION qtdCadastroCliente(@dt int)
RETURNS TABLE
AS
RETURN (SELECT nome_cliente,COUNT(id_cliente)
        FROM  cliente)