import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import getAccount from './get_account.mjs';
import withdraw from './withdraw.mjs';
import menu from './index.mjs';

function subtractAmount(accountName, value) {
    var accountData = getAccount(accountName);
    if(!value) {
        console.log(chalk.bgRed.black('O valor deve ser informado!'));
        return withdraw();
    }
    if(parseFloat(value) > parseFloat(accountData.balance)) {
        console.log(chalk.bgRed.black('O valor informado é maior que o saldo da conta!'));
        return withdraw();
    }
    accountData.balance = parseFloat(accountData.balance) - parseFloat(value);
    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => console.log(err));
    console.log(chalk.green(`O valor de R$${value} foi sacado da sua conta, ${accountName}`));
    menu();

}

export default subtractAmount;