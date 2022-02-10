// const Vue = require('vue').default;
// import Vue from 'vue';

const { BreadcrumbsMixin } = require('./mixin');


const BreadcrumbItem = {
  name: 'BreadcrumbItem',

  props: {
    to: {
      type: [String, Object],
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  render(h) {
    return h(
      'li',
      [
        h(
          'router-link',
          {
            props: {
              to: this.to,
              exact: true,
              tag: this.active ? 'span' : 'a',
            },
          },
          this.$slots.default
        )
      ]
    );
  },
};


function defaultRender(h) {
  return h('ol', {class: 'breadcrumbs' }, this.items.map((item, key) => {
    return h(
      BreadcrumbItem,
      {
        key,
        props: {
          to: item.to,
          active: item.active,
        }
      },
      item.text
    );
  }));
}


function bootstrapRender(h) {
  return h('b-breadcrumb', this.items.map((item, key) => {
    const children = [
      item.icon ? h('fa', {props: {icon: item.icon}}) : undefined,
      item.text,
    ];
    const props = {
      to: item.to,
      active: item.active,
    };
    return h('b-breadcrumb-item', { props, key }, children);
  }));
}


function vuetifyRender(h) {
  const itemSlot = ({ item }) => {
    const children = [
      item.icon ? h('v-icon', item.icon) : undefined,
      item.text,
    ];
    const props = {
      to: item.to,
      disabled: item.active,
      nuxt: true,
      exact: true,
    };
    return h('v-breadcrumbs-item', { props }, children);
  };

  return h('v-breadcrumbs', {
    props: {
      items: this.items,
      large: true,
    },
    scopedSlots: { item: itemSlot },
  });
}


const renderMap = {
  'bootstrap': bootstrapRender,
  'default': defaultRender,
  'vuetify': vuetifyRender,
};


function makeVueComponent({
  componentName = 'VueBreadcrumbs',
} = {})
{
  return {
    name: componentName,
    mixins: BreadcrumbsMixin,

    props: {
      // Показать или скрыть активную крошку.
      showActive: {
        type: Boolean,
        default: true,
      },
      // Имя функции отрисовки, доступные значения: default, bootstrap и vuetify.
      templateName: {
        type: String,
        default: 'default',
        validator: name => renderMap[name],
      },
    },

    computed: {
      items() {
        let crumbs = [this.$router.match('/'), ...this.$route.matched]
          .map(route => route.name ? route : this.$router.match(route.path))
          .map(route => Object.assign(
            {
              name: route.name,
              text: route.name,
              active: route.name === this.$route.name,
              to: {name: route.name, params: this.$route.params},
            },
            route.meta,
            this.getCrumb(route.name)
          ))
          .map(crumb => [crumb.name, crumb]);

        crumbs = [...new Map(crumbs).values()];

        if (!this.showActive) {
          crumbs = crumbs.filter(item => !item.active);
        }

        return crumbs;
      },
    },

    render(h) {
      return renderMap[this.templateName].call(this, h);
    },
  };
}


module.exports = makeVueComponent;
// export default makeVueComponent;
