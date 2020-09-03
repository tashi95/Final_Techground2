const TravelPage = require('../pageobjects/Travel.page');
const HomePage = require('../pageobjects/Home.page');
const TicketPage = require('../pageobjects/Ticketdetail.page');

describe('Travels application', () => {

    before(()=>
    {
      
       browser.url('https://www.kiwi.com/es/buscar/results/aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido/2020-09-10/2020-09-20')
       

    })
    /it('go to results page', () => {
     
      browser.setTimeout({ 'pageLoad': 40000 });
      expect(browser).toHaveUrlContaining('results');
      expect(HomePage.getTravelListSize()).toBeDisplayed();
      expect(HomePage.getTravelListSize()).toBeElementsArrayOfSize({gte:1});
     });
     
     it('clic on booking button', () => {
      
      TravelPage.clicOnBookingbutton();
      browser.setTimeout({'implicit':20000});
      expect(browser).toHaveUrlContaining('booking');
    });   
    it('insert email', () => {
      TravelPage.InsertEmail('joseth.castro@ucreativa.com');
      browser.pause(10000);
    });  
    it('insert phone', () => {
      TravelPage.InsertPhone(85745123);
      browser.pause(10000);
    });  
    it('insert name', () => {
      TravelPage.InsertName('Joseth');
      browser.pause(10000);
    });  
    it('insert lastname', () => {
  
      TravelPage.InsertLastname('Castro');
      browser.pause(10000);
    });  
    it('select nationality', () => {
  
      TravelPage.selectNationality('cr');
      browser.pause(10000);    
    }); 
    it('select gender', () => {
   
      TravelPage.selectGender('ms');
      browser.pause(10000);
    });  
  it('insert birthday', () => {
    
    TravelPage.insertBirthday('28');
    browser.pause(30000);
});  
it('select birthmonth', () => {
    
  TravelPage.selectBirthmonth('11'); 
  browser.pause(10000);
}); 
  it('insert birthyear', () => {
   
    TravelPage.insertBirthyear('1995');
    
  }); 

  it('insert passport or id number', () => {
   
    TravelPage.insertIdnumber('504080074');
    browser.pause(10000);
  });  

it('clic on no expiration checkbox', () => {
  TravelPage.clicOnNoIdexpiration();
  expect(TravelPage.getExpirationday()).toBeDisabled();
  browser.pause(10000);
}); 

it('clic on no assurance radio', () => {
 
  TravelPage.clicOnAssuranceRdio();
  browser.pause(10000);

}); 


it('clic on continue button', () => {
  browser.pause(10000);
  TravelPage.clicOncontinueButton();
  expect(TravelPage.getFaretypeButton()).toBeDisplayed();
}); 
it('clic on standar button', () => {
  browser.pause(10000);
  TravelPage.clicOnfaretypeButton();
  expect(TravelPage.getPackageButton()).toBeDisplayed();
}); 
it('clic on package button', () => {
  browser.pause(10000);
  TravelPage.clicOnpackageButton();
  expect(TicketPage.getContinuebutton()).toBeDisplayed();
}); 
it('go to pay', () => {
  browser.pause(10000);
  TicketPage.selectseating();
  expect(TicketPage.getseating()).toBeDisplayed();
  TicketPage.cliconcontinuebutton();

}); 

it('validate information', () => {

  expect(TicketPage.getName()).toBeDisplayed();
  expect(TicketPage.getName()).toHaveTextContaining('joseth');
  expect(TicketPage.getBirthdate()).toBeDisplayed();
  expect(TicketPage.getBirthdate()).toHaveTextContaining('28');
  expect(TicketPage.getID()).toBeDisplayed();
  expect(TicketPage.getID()).toHaveTextContaining('0074');

}); 

})
