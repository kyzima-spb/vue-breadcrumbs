function makeStore(
  {
    // Состояние хранилища в момент инициализации.
    // Хлебные крошки, имена которых известны заранее.
    breadcrumbs = {},
  } = {}
)
{
  const state = () => ({
    items: breadcrumbs,
  });

  const getters = {
    // Возвращает крошку по имени маршрута, либо пустоту.
    getCrumb: state => routeName => {
      return state.items[routeName];
    },
  };

  const mutations = {
    addCrumb(state, crumb) {
      state.items[crumb.routeName] = crumb;
    },

    removeCrumb(state, routeName) {
      delete state.items[routeName];
    },
  };

  const actions = {
    // Добавляет или обновляет крошку.
    addCrumb({ commit }, { routeName, text, icon }) {
      commit('addCrumb', {routeName, text, icon});
    },

    // Удаляет крошку по имени маршрута если найдет.
    removeCrumb({ commit }, routeName) {
      commit('removeCrumb', routeName);
    },
  };

  return store => {
    store.registerModule('breadcrumbs', {
      namespaced: true,
      state,
      getters,
      mutations,
      actions,
    });
  };
}


module.exports = makeStore;
