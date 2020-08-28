const ResultPage = require('../pageobjects/Result.page');
const HomePage = require('../pageobjects/Home.page');

describe('Travels application', () => {

    beforeEach(()=>
    {
       browser.url('https://www.kiwi.com/es/buscar/results/aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido/2020-09-10/2020-09-20')
     
    })

      it('filter by train', () => {
        browser.setTimeout({ 'pageLoad': 40000 });
       ResultPage.clicOnbusCheck();
       ResultPage.clicOnflightCheck();
       browser.pause(30000);
       ResultPage.getnoresults();
       browser.setTimeout({'implicit':10000})
       
       expect(ResultPage.getnoresults()).toBeDisplayed();

      });
      it('filter by bus', () => {
       ResultPage.clicOntrainCheck();
       ResultPage.clicOnflightCheck();
       browser.pause(30000);
       expect(HomePage.getTravelListSize).toBeDisplayed();
      });

     

   
    });   


