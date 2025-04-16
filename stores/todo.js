import { PawPrint } from "lucide-vue-next";
import { defineStore } from "pinia";

export const useTodo = defineStore("todo-list", {
  state: () => ({
    tasks: JSON?.parse(localStorage?.getItem("tasks")) || [],
  }),

  actions: {
    addCategory(categoryName) {
      const category = {
        category: categoryName,
        items: [],
      };
      this?.tasks?.push(category);
      this?.saveToLocalStorage();
    },

    addTask(categoryName, task) {
      const category = this.tasks.find((data) => data?.category === categoryName);
      if (category) {
        category?.item?.push({
          task,
          isdone: false,
        });
        this.saveToLocalStorage();
      }
    },

    toggleTask (categoryName,taskIndex){
        const category =this?.tasks?.find((data)=> data?.category ===categoryName)
        if(category && categoryName?.items[taskIndex]){
            category?.items[taskIndex]?.isdone =!category?.items[taskIndex]?.isdone
            this.saveToLocalStorage()
        }
    },

    deleteTask(categoryName, taskIndex){
        const category =this?.tasks?.find((data)=> data?.category === categoryName)
        if(category && category?.items[taskIndex]){
            category?.items?.splice(taskIndex,1)
            this?.saveToLocalStorage()
        }
    },

    editTask(categoryName, taskIndex, newTask){
        const category = this?.tasks?.find((data)=> data?.category === categoryName)
        if(category && category?.items[taskIndex]){
            category?.items[taskIndex]?.task = newTask
            this?.saveToLocalStorage()
        }
    },

    saveToLocalStorage() {
      localStorage?.setItem("tasks", JSON?.stringify(this?.tasks));
    },
  },
});
