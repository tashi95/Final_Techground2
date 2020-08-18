
const HomePage = require('../pageobjects/Home.page');


describe('Travels application', () => {

    before(()=>
    {
       browser.url('https://www.phptravels.net/')
        console.log('antes de todos los test')
    })
    beforeEach(()=>
    {
        console.log('antes de cada test')
    })
    after(()=>{

        console.log('despues de todos los test')
    })


    it('click on flights tab', () => {
       
        browser.pause(10000);
        HomePage.clicOnFlightTab();
        browser.pause(10000);
      //  HomePage.insertFromCountry();

      });
       
       
   
    });   


