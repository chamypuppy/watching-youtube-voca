# 🗒 React VOCA

리액트 도서 + Youtube 코딩앙마님의 <<React js 강좌>>로 리액트를 공부하고 실습한 코드를 실은 레포지토리입니다. <br/>

실습 프로젝트는 [리액트로 단어암기장 만들기 - VOCA] 이고,
Netlify로 server에 build하였습니다.<br/>
https://66d5827d7ea1d4f6af4a344c--glowing-salmiakki-cb9c21.netlify.app/

### 아직 해결되지 않은 문제점
빌드는 완료하였으나 Day 추가 버튼을 클릭하면 아무 일도 일어나지 않는 문제점을 확인하였습니다. <br/>
고민해본 결과, Day 추가 버튼을 클릭하면 서버에서 Day가 있는지 확인하는 과정을 거쳐야 하는데<br/>
그 서버가 json-server로 만든 서버여서 올려진 json 데이터 서버가 타인에게는 접근되지 않는 개인 localhost 서버임을 알게 되었습니다.<br/>
9/23 현재는 임시 서버에서 타인도 접근 가능한 실제 서버로 구축하기 위해 개선점을 찾고 있습니다.<br/>
이 문제점을 해결하여 README 파일도 추가 패치할 예정입니다.


## Available Scripts

In the project directory, you can run:

### `npm start`

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
