# Processo Seletivo Cowala

## Algoritmos

Os algoritmos estão na pasta `algoritmos` do repositório. Nela, estão contidos os arquivos `.ts`, os arquivos `.js` gerados e o `tsconfig.json`.

## Backend

Os CRUDs foram desenvolvidos em Express.js e TypeScript. Como existem métodos iguais nos dois CRUDs, o código foi reaproveitado para os métodos repetidos.

Métodos presentes em `shopping_list`:

- CREATE: Deve ser possivel criar um item na lista de mercado, o modelo a ser criado deve ter um nome, um preço e um id. Exemplo: [{ id: 1, item: arroz, preco: 1.50}]
- UPDATE: Deve ser possivel atualizar o preço de um item. O item deve ser encontrado atraves do seu id
- READ-ALL: Deve ser possivel listar todos itens da lista
- READ-ONE: Deve ser possivel listar um unico item. A busca deve ser feita por id
- DELETE: Deve ser possivel Deletar um item da lista. O item a ser deletado deve ser buscado atraves do seu id

Métodos presentes em `convert_currency`:

- CREATE: Deve ser possivel criar um registro no banco de dados contendo o valor enviado, o valor convertido, a moeda original e a moeda da conversão. Exemplo: [{ id:1, moedaOriginal: BRL, moedaDaConversão: USD, valorEnviado: 10, valorConvertido: 50 }]
- READ-ALL: Deve ser possivel lista todos registros de conversão feitos
- READ-ONE: Deve ser possivel lista um registro de conversão buscando pelo ID da conversão
- DELETE: Deve ser possivel deletar um registro de conversão
