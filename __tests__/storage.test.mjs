import Storage from '../src/storage.mjs';
const sessionStorage = {
    setItem: (str, objStr) => typeof str === 'string' && JSON.parse(objStr) instanceof Array ? true : false ,
    getItem: (str) => typeof str === 'string' ? true : false
}

test('Storage successfully connected', () => {
    expect(Storage.connect()).toBeTruthy();
})

test('New item Created Successfully', () => {
    expect(Storage.create() instanceof Object).toBeTruthy();
});

test('Updating the storage works', () => {
    expect(Storage.update()).toBeTruthy();
})