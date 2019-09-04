const puppeteer = require('puppeteer');

(async () => {
    console.log('Opening browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('Navigate to : http://localhost:3000');
    response = await page.goto('http://localhost:3000/');
    await page.screenshot({ path: 'screenshots/loginIsSuccessful/LoginPage.png' });

    console.log('Typing email and password...');
    await page.type('#login', 'zkara.chaimae@gmail.com');
    await page.type('#password', 'aos');
    await page.screenshot({ path: 'screenshots/loginIsSuccessful/typeInForm.png' });

    console.log('Submitting form...');
    await page.click('#btnSubmit');
    await page.screenshot({ path: 'screenshots/loginIsSuccessful/welcomeAOS.png' });

    const currentURL = page.url();
    if (currentURL == 'http://localhost:3001/')
        console.log('Test is successful...');
    else console.log('Test has failed...');

    console.log('Terminating test...');
    await browser.close();
})();
