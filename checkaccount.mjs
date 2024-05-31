import fs from 'fs';
import chalk from 'chalk';

function checkAccount(account) {
    if(!fs.existsSync(`accounts/${account}.json`)) {
        
        return false;
    }
    else {
        return true;
    }
}

export default checkAccount;