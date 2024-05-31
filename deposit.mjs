import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import checkAccount from './checkaccount.mjs';
import addAmount from './add_amount.mjs';
import menu from './index.mjs';

function deposit() {

    inquirer.prompt([{
        name: 'name',
        message: 'Qual o nome da sua conta?',
    }]).then((answer) => {
        const name = answer['name'];
        if(!checkAccount(name)) {
            console.log(chalk.bgRed.black('Esta conta não existe, tente novamente!'));
            return deposit();
        }

        inquirer.prompt([{
            name: 'value',
            message: 'Quanto deseja depositar?',
        }]).then((answer) => {
            const value = answer['value'];
            addAmount(name, value);

            
        }).catch((err) => console.log(err));
        
    }).catch((err) => console.log(err));
}



export default deposit;