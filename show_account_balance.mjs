import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import checkAccount from './checkaccount.mjs';
import menu from './index.mjs';
import getAccount from './get_account.mjs';

function showAccountBalance() {

    inquirer.prompt([{
        name: 'name',
        message: 'Qual o nome da sua conta?',
    }]).then((answer)=>{
        const name = answer['name'];
        if(!checkAccount(name)) {
            console.log(chalk.bgRed.black('Esta conta não existe, tente novamente!'));
            return showAccountBalance();
        }
        const  accountData = getAccount(name);
        console.log(chalk.bgBlue(`Ola ${name}, seu saldo é de R$${accountData.balance}`));
        menu();
    }).catch((err) => console.log(err));
}




export default showAccountBalance;