-- Uma empresa de vendas tem um banco de dados com informações sobre os seus 
-- produtos. Ela precisa criar um relatório que faça um levantamento diário 
-- da quantidade de produtos comprados por dia. Para ajudar a empresa, crie 
-- um procedure para agilizar esse processo.

CREATE PROCEDURE qtdCompraProdutoDia
AS
BEGIN
    SELECT nome_produto,SUM(valor_compra) FROM venda
    WHERE data_produto = NOW();
END