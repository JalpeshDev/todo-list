import Vue from "vue";
import Vuex, { ActionTree, GetterTree, MutationTree } from "vuex";
import Task from "@/model/Task";

Vue.use(Vuex);

export interface State {
  taskList: Task[];
}

const actions: ActionTree<State, unknown> = {};

const mutations: MutationTree<State> = {
  addTask: (s: State, task: Task) => {
    // add new task to the taskList
    s.taskList.push(task);
  },
  updateTaskStatus: (s: State, { id, isChecked }) => {
    // update task status based on id
    const index = s.taskList.findIndex((task: Task) => task.id === id);
    if (index !== -1) {
      s.taskList[index].isCompleted = isChecked;
    }
  },
};
const getters: GetterTree<State, State> = {
  getTaskList: () => () => {
    if (store.state.taskList) {
      return store.state.taskList;
    }
    return [];
  },
};

const state: State = {
  taskList: [],
};

const store = new Vuex.Store<State>({
  state,
  mutations,
  actions,
  getters,
});

export default store;
