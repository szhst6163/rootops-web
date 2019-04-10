import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/UserLayout'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "component": _dvaDynamic({
  
  component: () => import('../Login/Index'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/AdminLayout'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard",
        "exact": true
      },
      {
        "path": "/dashboard",
        "component": _dvaDynamic({
  
  component: () => import('../Dashboard/Home'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/example",
        "routes": [
          {
            "path": "/example/demo",
            "component": _dvaDynamic({
  
  component: () => import('../Demo/DemoList'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/system",
        "routes": [
          {
            "path": "/system/menu",
            "component": _dvaDynamic({
  
  component: () => import('../Menu/MenuList'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/system/role",
            "component": _dvaDynamic({
  
  component: () => import('../Role/RoleList'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/system/user",
            "component": _dvaDynamic({
  
  component: () => import('../User/UserList'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/cmdb",
        "routes": [
          {
            "path": "/cmdb/networkdevice",
            "component": _dvaDynamic({
  
  component: () => import('../NetworkDevice/NetworkDeviceList'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": _dvaDynamic({
  
  component: () => import('../404'),
  LoadingComponent: require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/components/PageLoading/index').default,
}),
    "exact": true
  },
  {
    "component": () => React.createElement(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
