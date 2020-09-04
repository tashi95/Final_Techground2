
const HomePage = require('../pageobjects/Home.page');


describe('Travels application', () => {

    before(()=>
    {
       browser.url('https://www.kiwi.com/es/')
       browser.maximizeWindow();
        console.log('antes de todos los test')
    })
 
     it('Clic on travel tab', () => {
        HomePage.clicOnTravelTab();
      
      });
  
     it('insert origin country', () => {
        HomePage.insertOrigin('TXL');
        browser.pause(30000);

      });

      it('insert destination country', () => {
      
        HomePage.insertDestination('LONDRES');
        browser.pause(30000);

      });

    it('select passengers', () => {
      
        HomePage.selectPassengers();
        browser.pause(30000);

      });

       it('select dates', () => {
    
        HomePage.selectTraveldate();
        browser.pause(30000);

      });
     
    it('look for a travel', () => {
    
        HomePage.searchTravel();
  
        
        expect(HomePage.getTravelListSize()).toBeDisplayed();
        browser.setTimeout({'implicit':10000});
      
        expect(HomePage.getTravelListSize()).toBeElementsArrayOfSize({gte:1});
        expect(browser).toHaveUrlContaining('2020-09-10/2020-09-20');

      });
 


   
    });   



