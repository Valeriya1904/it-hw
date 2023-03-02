class ToDo {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description) {
        this.tasks.push({
            title,
            id: this.tasks.length + 1,
            description,
            taskDate: date,
            isComplited: false,
            priority: true,
        })
    }

    showAll() {
        return this.tasks
    }

    deleteTask(id) {
        return this.tasks = this.tasks.filter((item) => item.id !== id);
    }

    editTask(task) {
        const { id, title, description, taskDate, isComplited, priority } = task;
        this.tasks = this.tasks.map((item => {
            if (item.id === id) {
                return {
                    ...item,
                    title,
                    description,
                    taskDate,
                    isComplited,
                    priority,
                };
            }
            return item;
        }))
    }

    completeTask(id, isComplited, title,description,priority) {
        this.tasks = this.tasks.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    isComplited,
                    title,
                    description, 
                    priority,                  
                }
            }
            return item;
        })
    }

    sortData() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.date - b.date) {
                return 1;
            }
            if (a.date > b.date) {
                return 1;
            }
            return 0;
        });
    }

    sortTitle() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }

    sortPriority() {
        this.tasks = this.tasks.sort((a,b) => a.priority > b.priority ? 1 : -1)
    }
}

const todolist = new ToDo();

todolist.addTask('Выучить JS','Выучить методы массива');
todolist.addTask('Выучить React','Выучить объекты');
todolist.addTask('Выучить Angular','Выучить все');
todolist.completeTask(1,'true','Выучить JS','Разобраться с ...','false')
todolist.sortPriority()
console.log(todolist.showAllTasks());