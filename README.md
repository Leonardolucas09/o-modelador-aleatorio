# Inspiração

Esse projeto foi inspirado em um pequeno sistema de amigo secreto. Me inspirei no website feito tempos atrás em uma das aulas da Alura que na qual ao adicionar nomes de pessoas, ao clicar no botão de sortear era aleatorizado uma ordem de nomes que tiraram outros nomes da lista.

<p align="center">
  
A ideia do Modelador Aleatório surgiu pelo anime de Fantasia Medieval, [Dungeon Meshi](https://www.netflix.com/br/title/81564899), que na qual em determinado episódio os personagens tem suas raças fantasiosas trocadas entre outros membros do grupo.

<p align="center">
  <img alt="Arte do anime Dungeon Meshi. Contendo os quatro personagens principais sentados ao redor de uma panela funda cheia de comida em cima de uma fogueira. Atrás dos personagens há a garra de uma criatura avermelhada e de proporções gigantescas."  src="https://github.com/user-attachments/assets/359bda09-27e3-4adb-a67b-735ecbcd9db5">
</p>

# Sobre o Projeto

Abaixo há as explicações sobre as Estruturas do Componente e Modo de Uso.

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
  <img alt="Tela de captura do website 'O Modelador Aleatório'. Temos um cabeçalho vermelho escuro com o mesmo nome do site; seu conteúdo principal é composto por um contêiner amarelo claro com os dois campos de formulário lado a lado (campo de nome e raça); abaixo temos os três botões, sendo Adicionar, Sortear e Reiniciar; em seguida temos dois pequenos contêineres de resultados onde as informações de listas são guardadas e onde são sorteadas; por fim temos um rodapé da mesma cor que o cabeçalho contendo a tecnologia usada para criar o site, data criada e autor do projeto."  src="https://github.com/user-attachments/assets/702b3e1e-a86a-428a-8937-ecdb68e4342e">
</p>



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
