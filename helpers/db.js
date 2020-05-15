import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('lugares.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_lugar (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, imagemUri TEXT NOT NULL, endereco TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirLugar = (nomeLugar, imagemUri, endereco, lat, lng) => {
    const promise = new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_lugar (nome, imagemUri, endereco, lat, lng) VALUES (?,?,?,?,?);',
                [nomeLugar, imagemUri, endereco, lat, lng],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const buscarLugares = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_lugar',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}