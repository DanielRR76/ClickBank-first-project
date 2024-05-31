import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import getAccount from './get_account.mjs';
import deposit from './deposit.mjs';
import menu from './index.mjs';

function addAmount(accountName, value) {
    var accountData = getAccount(accountName);
    if(!value) {
        console.log(chalk.bgRed.black('O valor deve ser informado!'));
        return deposit();
    }
    accountData.balance = parseFloat(value) + parseFloat(accountData.balance);
    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => console.log(err));
    console.log(chalk.green(`O valor de R$${value} foi depositado na sua conta, ${accountName}`));
    menu();

}

export default addAmount;