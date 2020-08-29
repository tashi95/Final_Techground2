const ResultPage = require('../pageobjects/Result.page');
const HomePage = require('../pageobjects/Home.page');

describe('Travels application', () => {

    before(()=>
    {
      
       browser.url('https://www.kiwi.com/es/buscar/results/aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido/2020-09-10/2020-09-20')
       

    })
     it('go to results page', () => {
      browser.setTimeout({ 'pageLoad': 40000 });
      expect(browser).toHaveUrlContaining('results');
      expect(HomePage.getTravelListSize()).toBeDisplayed();
      expect(HomePage.getTravelListSize()).toBeElementsArrayOfSize({gte:1});
     });
     
     it('filter by train', () => {
      
      ResultPage.clicOnbusCheck();
      ResultPage.clicOnflightCheck();
       browser.setTimeout({'implicit':30000})
       expect(ResultPage.getnoresults()).toBeDisplayed();

     });
    
      it('add bus to list', () => {
       ResultPage.clicOnbusCheck();
       ResultPage.clicOnBelgicaCheck();
       expect(HomePage.getTravelListSize()).toBeElementsArrayOfSize({lte:30});
       browser.setTimeout({'implicit':10000})

      });
    

   
    });   


