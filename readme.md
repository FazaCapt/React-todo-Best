#### Install:
1. node-uuid --save-dev
2. moment@2.12.0 --save-dev
3. deep-freeze-strict --save-dev
4. redux@3.3.1 --save-dev
5. react-redux@4.4.1 --save-dev
6. firebase@3.0.2 --save-dev
7. redux-thunk@2.1.0 --save-dev
8. redux-mock-store@1.0.3 --save-dev
9. node-env-file@0.1.8

#### New Git Way:

1. git clone 'https://github.com/FazaCapt/React-todo-Best.git'
2. mv react-boilerplate ReactTodo
3. ls
4. git remote -v
5. git remote rm origin
6. git remote -v
7. dan membuat git repository baru

#### Penjelasan:
1. Jadi Spread adalah (...) => titik tiga

#### cara menggunakannya:

1. untuk menghapus data di localstorage: localStorage.removeItem('todos');
2. untuk mengambil data di localstorage: localStorage.getItem('todos');

#### USE WEBPACK:
1. NODE_ENV=production webpack (ini lumayan)
2. NODE_ENV=production webpack -p (ini dicompress lebih kecil lagi)

#### Heroku Environment Variables:
1. heroku config
2. heroku config:set name=Faza
3. heroku config
4. heroku config: unset name
5. heroku config
6. heroku config:set API_KEY=AIzaSyAmg0KjPDY9i0F6lpIrRiC9H3uCGmywwPM
7. heroku config:set AUTH_DOMAIN=todo-app-2507b.firebaseapp.com
8. heroku config:set DATABASE_URL=https://todo-app-2507b.firebaseio.com
9. heroku config:set STOREAGE_BUCKET=todo-app-2507b.appspot.com
10. git status
11. git push heroku master
