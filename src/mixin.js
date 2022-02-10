module.exports = {
  methods: {
    /**
     * Добавляет крошку в состояние приложения.
     * @param crumb String|Object крошка в виде строки или объекта.
     *     Если передана строка, то добавляет крошку к текущему маршруту.
     *     Объект позволяет указать больше параметров крошки:
     *     - routeName: имя маршрута, по-умолчанию текущий;
     *     - text: видимое название крошки;
     *     - icon: имя иконки в зависимости от используемого фреймворка;
     */
    addCrumb(crumb) {
      if (typeof crumb === 'string') {
        crumb = {text: crumb};
      }

      if (!('routeName' in crumb)) {
        crumb.routeName = this.$route.name;
      }

      this.$store.dispatch('breadcrumbs/addCrumb', crumb);
    },

    getCrumb(routeName) {
      routeName = routeName || this.$route.name;
      return this.$store.getters[`breadcrumbs/getCrumb`](routeName);
    },

    removeCrumb(routeName) {
      routeName = routeName || this.$route.name;
      this.$store.dispatch('breadcrumbs/removeCrumb', routeName);
    },
  },
};
