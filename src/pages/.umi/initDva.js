import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'demo', ...(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/models/demo.js').default) });
app.model({ namespace: 'global', ...(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/models/global.js').default) });
app.model({ namespace: 'login', ...(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/models/menu.js').default) });
app.model({ namespace: 'role', ...(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/models/role.js').default) });
app.model({ namespace: 'user', ...(require('/home/lorock/go/src/xubaojin.com/lorock/rootops/web/src/models/user.js').default) });
