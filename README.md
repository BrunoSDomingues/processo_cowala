# Processo Seletivo Cowala

Repositório para realização dos desafios do Processo Seletivo da Cowala. Os desafios estão divididos entre algoritmos e CRUDs.

## Algoritmos

Os algoritmos estão na pasta `algoritmos` do repositório. Nela, estão contidos os arquivos `.ts`, os arquivos `.js` gerados e o `tsconfig.json`.

## CRUDs

Os CRUDs foram desenvolvidos em Express.js e TypeScript. Os códigos de cada um se encontram dentro da pasta `backend`.

Como existem métodos iguais nos dois CRUDs, o código foi reaproveitado para os métodos repetidos.

Métodos presentes em `shopping_list`:

- CREATE: feito utilizando o método POST em `api/menu/items/`, e passando o JSON com os dados de entrada. Não é necessário passar um id.
- UPDATE: feito utilizando o método PATCH em `api/menu/items/`, e passando um JSON com os dados a serem substituídos. É necessário informar o id.
- READ-ALL: feito utilizando o método GET em `api/menu/items/`.
- READ-ONE: feito utilizando o método GET em `api/menu/items/seu_id_aqui`.
- DELETE: feito utilizando o método DELETE, se encontra na aba `api/menu/items/seu_id_aqui`.

Métodos presentes em `convert_currency`:

- CREATE: feito utilizando o método POST em `api/menu/items/`, e passando o JSON com os dados de entrada. Não é necessário passar um id.
- READ-ALL: feito utilizando o método GET em `api/menu/items/`.
- READ-ONE: feito utilizando o método GET em `api/menu/items/seu_id_aqui`.
- DELETE: feito utilizando o método DELETE, se encontra na aba `api/menu/items/seu_id_aqui`.
