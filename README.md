# Inspiração

Esse projeto foi inspirado em um pequeno sistema de amigo secreto. Me inspirei no website criado em uma das aulas da Alura, um site de Sorteio de Amigo Secreto.

<p align="center">
  
A ideia do Modelador Aleatório surgiu pelo anime de Fantasia Medieval, [Dungeon Meshi](https://www.netflix.com/br/title/81564899), que na qual em determinado episódio os personagens tem suas raças fantasiosas trocadas entre outros membros do grupo.

<p align="center">
  <img alt="Arte do anime Dungeon Meshi. Contendo os quatro personagens principais sentados ao redor de uma panela funda cheia de comida em cima de uma fogueira. Atrás dos personagens há a garra de uma criatura avermelhada e de proporções gigantescas."  src="https://github.com/user-attachments/assets/359bda09-27e3-4adb-a67b-735ecbcd9db5">
</p>

# Sobre o Projeto

Abaixo há as explicações sobre as Estruturas dos Componentes e Modo de Uso.

## Tecnologias
  <p display="inline-block">
    <img width="48" src="https://github.com/user-attachments/assets/bea06e9f-7f40-4a2f-a505-550885327e9d" alt="logo-react"/>
    <img width="48" src="https://github.com/user-attachments/assets/c76d91e4-a1d6-44b9-bbb6-95509a34b546" alt="logo-javascript"/>
  </p>

## Ferramentas de Desenvolvimento
  <p display="inline-block">
    <img width="48" src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" alt="logo-vs-code"/>
    <img width="48" src="https://github.com/user-attachments/assets/065a4627-29f3-42b7-9e83-0762e24cbe85" alt="logo-figma"/>
  </p>

## Modo de Uso

Ao abrir o site você se depara com um pequeno formulário que no primeiro campo pede que você adicione o **Nome** de seu personagem e do outro lado a **Raça** de seu personagem;
  
Clicando no botão de **Adicionar**, é guardado aquelas informações de um **Personagem**. Lembre-se de que o mínimo valor aceitável são de três personagens;
  
Depois de adicionar seu grupo de personagens na lista, ao clicar no botão de **Sorteio** a ordem da lista de Nomes se manterá a mesma, mas as raças serão embaralhadas;
  
Você ainda pode adicionar mais personagens mesmo depois de ter sorteado, se quiser limpar todos os campos basta clicar no botão Reiniciar.

_Por exemplo:_
- Adicionamos uma lista de 4 personagens, a cada Nome e Raça inseridos o botão de Adicionar é clicado. Nossa lista é composta pelos personages:

| Nome          | Raça          |
| ------------- | ------------- |
| Aragorn       | Homem         |
| Legolas       | Elfo          |
| Gimli         | Anão          |
| Gandalf       | Istari        |

- Clicando no botão de Sortear logo após termos criado nossa lista inicial, podemos ter o seguinte resultado:

| Nome          | Raça          |
| ------------- | ------------- |
| Aragorn       | Anão          |
| Legolas       | Istari        |
| Gimli         | Homem         |
| Gandalf       | Elfo          |

- E como dito anteriormente, podemos clicar no botão de Reiniciar para limpar a lista ou seguir adicionando e sorteando mais personagens.

<p align="center">
  <img alt="Tela de captura do website 'O Modelador Aleatório'. Temos um cabeçalho vermelho escuro com o mesmo nome do site; seu conteúdo principal é composto por um contêiner amarelo claro com os dois campos de formulário lado a lado (campo de nome e raça); abaixo temos os três botões, sendo Adicionar, Sortear e Reiniciar; em seguida temos dois pequenos contêineres de resultados onde as informações de listas são guardadas e onde são sorteadas; por fim temos um rodapé da mesma cor que o cabeçalho contendo a tecnologia usada para criar o site, data criada e autor do projeto."  src="https://github.com/user-attachments/assets/68bac2b6-3099-4912-8d27-4fc81f6c833d">
</p>

## Estruturas dos Componentes

Como o projeto foi desenvolvido com React.js, foram criados três componentes, o Cabeçalho, Botões e Rodapé. 
  
- O componente dos Botões foi criado utilizando o método de _props_ para o nome dos botões e também a estilização de cada um dos três. Tendo sido criado um arquivo JavaScript chamado "Constantes" para dividir cada botão em tipos, sofrendo uma mudança visual em cada um dos botões.
- O Cabeçalho e Rodapé tiveram a mesma implementação do código, apenas uma tag de título com sua estilização parecida, apenas com poucas mudanças em tamanho e espaçamento.

## Funcionalidade do Projeto

Já foi dito anteriormente que esse projeto funciona com base em um formulário, e é nessa seção em que será melhor explicado.

- Iniciamos com variáveis atribuidas aos dois campos de escrita, chamadas "nome" e "raca" que ao ser adicionado uma série de caractéres e o clicão Adicionar for pressionado, as _strings_ serão atualizadas nas duas variáveis. Adicionar essas duas variáveis significa atribuir elas a uma variável única chamada "novoPersonagem". No fim dessa função é apagado os campos de escrita, para que o usuário adicione mais conteúdo a lista.
- A próxima função é a de Sorteio, um evento que se inicia com uma condição de que é necessário haver no mínimo três personagens criados na lista. Duas variáveis foram criadas, a primeira sendo "racasEmbaralhadas" e a segunda "todosDiferentes" e sendo atribuido como _false_ 
  - Um laço de repetição é criado com a condição de: **enquanto todos os personagens não tiverem suas raças diferentes** terá seu loop mantido. Dentro desse laço de repetição há mais um laço de **para o embaralhamento da quantidade de raças** em lista. Após o fim desses dois laços é enfim salvo essa nova lista. Fazendo com que ao clicar no botão de Sorteio seja renderizada a nova lista com as raças embaralhadas.
- A última função é a de resetar tudo o que foi alterado e criado. Sendo a função mais simples, ela é invocada ao clicar no botão "Reiniciar", zerando todas as listas e variáveis.
