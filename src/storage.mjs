const dbName = "Todolist";
let db = [];

const Storage = {
    create: function(description) {
        try {
            const task = {
                description,
                creationDate: new Date()
            }
            db.push(task);
            this.update();
            return task;
        } catch (error) {
            console.log(`Problem creating the task \n ${error}`);
            return false;
        }
        
    },
    update: () => {
        try {
            sessionStorage.setItem(dbName, JSON.stringify(db));
            return true;
        } catch (e) {
            console.log('Unable to update the storage');
            return false;
        }
    },
    connect: () => {
        db = JSON.parse(sessionStorage.getItem(dbName)) || [];
    }
}
export default Storage;