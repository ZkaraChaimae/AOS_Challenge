const puppeteer = require('puppeteer');

(async () => {
    console.log('Opening browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('Navigate to : http://localhost:3000');
    response = await page.goto('http://localhost:3000/');
    await page.screenshot({ path: 'screenshots/loginFailed/LoginPage.png' });

    console.log('Typing email and password...');
    await page.type('#login', 'test');
    await page.type('#password', 'test');
    await page.screenshot({ path: 'screenshots/loginFailed/typeInForm.png' });

    console.log('Submitting form...');
    await page.click('#btnSubmit');
    await page.screenshot({ path: 'screenshots/loginFailed/errorMsg.png' });

    const errorMsg = await page.evaluate(() => document.querySelector('#errorMsg').innerText);
    if (errorMsg == 'Login or password not valid, please try again!')
        console.log('Test is successful...');
    else console.log('Test has failed...');

    console.log('Terminating test...');
    await browser.close();
})();