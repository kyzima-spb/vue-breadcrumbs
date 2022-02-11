const state = () => ({
  all: {
    cpus: {
      title: 'Процессоры',
      products: [
        {
          title: 'Intel Core i7 7700k',
        },
        {
          title: 'Intel Code2Duo e8400',
        },
      ],
    },
    motherboards: {
      title: 'Материнские платы',
      products: [
        {
          title: 'Asus Z270E Gaming',
        },
      ],
    },
    memory: {
      title: 'Оперативная память',
      products: [
        {
          title: 'Kingston DDR4 HyperX Fury',
        },
        {
          title: 'Kingston DDR2 HyperX',
        },
      ],
    },
    hdd: {
      title: 'Жесткие диски',
      products: [
      ],
    },
  },
});


export default {
  namespaced: true,
  state,
};
