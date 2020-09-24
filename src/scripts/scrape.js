const puppeteer = require('puppeteer-core');

const scrape = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
  });

  const page = await browser.newPage()

  await page.goto(`https://web.whatsapp.com`);

  await page.waitFor('#app', {
    timeout: 30000
  });

  await page.waitFor('._210SC', {
    timeout: 30000
  })

  await page.click('span[title=ICONPEÕES]')

  await page.waitFor('._3uMse ._3FRCZ', {
    timeout: 5000
  })

  await page.click('._3uMse ._3FRCZ')

  await page.type('._3uMse ._3FRCZ', 'é seriooo, ', { delay: 50 });


 await page.evaluate(() => {
    return 0;
  })

  await page.keyboard.press('Enter');


  return 0
};


scrape().then(() => {

  console.log("Done! Verify the wpp.");

})
