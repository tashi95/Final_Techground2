const TravelPage = require('../pageobjects/Travel.page');
const HomePage = require('../pageobjects/Home.page');

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
      browser.pause(30000);
      expect(browser).toHaveUrlContaining('booking');
    });   
    it('insert email', () => {
      TravelPage.InsertEmail('joseth.castro@ucreativa.com');
      browser.pause(30000);
    });  
    it('insert phone', () => {
      browser.pause(30000);
      TravelPage.InsertPhone(85745123);
      browser.pause(30000);
    });  
    it('insert name', () => {
      browser.pause(30000);
      TravelPage.InsertName('Joseth');
      browser.pause(30000);
    });  
    it('insert lastname', () => {
      browser.pause(30000);
      TravelPage.InsertLastname('Castro');
      browser.pause(30000);
    });  
 
       it('select nationality', () => {
    browser.pause(30000);
    TravelPage.selectNationality('cr');
  });  
 
  it('select gender', () => {
    browser.pause(30000);
    TravelPage.selectGender('ms');
  
  });  


  it('insert birthday', () => {
    browser.pause(10000);
    TravelPage.insertBirthday('28');
    browser.pause(10000);
  });  
  it('insert birthmonth', () => {
    browser.pause(10000);
    TravelPage.selectBirthmonth('11'); 
  }); 
  it('insert birthyear', () => {
    browser.pause(10000);
    TravelPage.insertBirthyear('1995');
  }); 

  it('insert passport or id number', () => {
    browser.pause(30000);
    TravelPage.insertIdnumber('504080074');
  });  
 
it('insert expiration day', () => {
  browser.pause(10000);
  TravelPage.insertExpirationday('15');
});  
it('insert expiration month', () => {
  browser.pause(10000);
  TravelPage.selectExperationmonth('10');
});  
it('insert expiration year', () => {
  browser.pause(10000);
  TravelPage.insertExperationyear('2022');
}); 
 
it('clic on no expiration checkbox', () => {
  browser.pause(10000);
  TravelPage.clicOnNoIdexpiration();
  expect(TravelPage.getExpirationday()).toBeDisabled();
}); 
 
it('clic on no assurance radio', () => {
  browser.pause(10000);
  TravelPage.clicOnAssuranceRdio();
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
  expect(TravelPage.getAdditionalServicebutton()).toBeDisplayed();
}); 
it('go to pay', () => {
  browser.pause(10000);
  TravelPage.clicOnadditionalServicebutton();
}); 
})
