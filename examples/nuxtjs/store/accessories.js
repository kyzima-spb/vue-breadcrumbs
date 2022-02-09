const state = () => ({
  all: {
    cpus: "Процессоры",
    motherboards: "Материнские платы",
    memory: "Оперативная память",
    hdd: "Жесткие диски"
  }
});

export default {
  namespaced: true,
  state
};
