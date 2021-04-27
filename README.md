# Getting Started with Create React App

제품 운영 어드민입니다

### App.tsx

root역할을 하게 됩니다. theme 정보와 BrowserRouter, AdminContext, AdminRouter 설정이 진행됩니다.

### AdminContext

Admin 내에서 사용될 resource정보(auth provider, data provider, i18n provider 등등)를 다루게 됩니다.

- authProvider: authentication 레이어를 담당합니다.

### AdminRouter

Admin 내에서 사용되는 모든 route 정보들을 포함합니다.

- loginPage: login 페이지를 setup 합니다.
- children: login step 이 후 route 정보들을 setup합니다. 이 children에는 authProvider를 통해서 얻어온 permissions 정보가 passing 됩니다.

### pages

Admin 에서 사용되는 route의 구체적인 정보들과 page 단위 component를 포함합니다. 비즈니스 로직을 포함한 route정보와 NotFound, login, dashboard등의 route 정보도 포함합니다.

- routes.tsx: pages내의 route정보가 이곳에서 모입니다. AdminRouter에서 passing 되는 permissions object를 통해서 실질적인 route 정보에 대한 권한 설정을 할 수 있습니다.

### auth

authentication과 관련된 Context 정보와 이와 관련된 custom hook을 포함합니다.
