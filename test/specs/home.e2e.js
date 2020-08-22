
const HomePage = require('../pageobjects/Home.page');


describe('Travels application', () => {

    before(()=>
    {
       browser.url('https://www.kiwi.com/es/')
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
      it('look for a travel', () => {
        HomePage.clicOnTravelTab();
        HomePage.insertOrigin('TXL');
        browser.pause(1000);
        HomePage.insertDestination('LONDRES');
        HomePage.selectPassengers();
        browser.pause(1000);
        HomePage.selectTraveldate();
        browser.pause(1000);

        expect(browser).toHaveUrlContaining('aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido/2020-09-10/2020-09-20');

      });

      it('RESULTS', () => {
        

       console.log('CANTIDAD'+ HomePage.getTravelAmount().lenght);

      });


   
    });   


