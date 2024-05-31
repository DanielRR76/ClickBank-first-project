import fs from 'fs';
import chalk from 'chalk';

function getAccount(accountName) {
    var accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: 'utf-8',
        flag: 'r'
    });
    return JSON.parse(accountJSON);
}

export default getAccount;