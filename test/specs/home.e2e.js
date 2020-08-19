
const HomePage = require('../pageobjects/Home.page');


describe('Travels application', () => {

    before(()=>
    {
       browser.url('https://www.kiwi.com/')
        console.log('antes de todos los test')
    })
 /*   beforeEach(()=>
    {
        console.log('antes de cada test')
    })
    after(()=>{

        console.log('despues de todos los test')
    })
*/

    it('click on travel tab', () => {
       
        browser.setTimeout({ 'pageLoad': 40000 })
        HomePage.clicOnTravelTab();
      
      });

      it('insert origin', () => {
    
        HomePage.cleanOrigin();
        browser.pause(5000);
        HomePage.insertOrigin('TXL');
        browser.pause(30000);

      });
    /* it('insert destination', () => {
    
        browser.pause(10000);
        HomePage.insertDestination();
        browser.pause(30000);

      });
*/
   
    });   


