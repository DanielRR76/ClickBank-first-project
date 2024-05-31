import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import checkAccount from './checkaccount.mjs';
import getAccount from './get_account.mjs';
import menu from './index.mjs';
import subtractAmount from './subtract_amount.mjs';


function withdraw() {

    inquirer.prompt([{
        name: 'name',
        message: 'Qual o nome da sua conta?',
    }]).then((answer) => {
        const name = answer['name'];
        if(!checkAccount(name)) {
            console.log(chalk.bgRed.black('Esta conta não existe, tente novamente!'));
            return withdraw();
        }
        inquirer.prompt([{
            name: 'value',
            message: 'Quanto deseja sacar?',
        }]).then((answer) => {
            const value = answer['value'];
            subtractAmount(name, value);

        }).catch((err) => console.log(err));
    }).catch((err) => console.log(err));
}

export default withdraw;