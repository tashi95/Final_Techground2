
class Home{

    get TravelTab() {return $('span=Viaje')}
    get OriginInput(){return $('//input[@data-test="SearchField-input"]')}
    get OriginCheck(){return $('input[type=checkbox]')}
    get firstCountryOrigin(){return $('//div[@class="Stack__StyledStack-sc-1t576ow-0 gDgpcl"]')}
    
    get DestinationInput(){return $('div[data-Test=PlacePickerInput-destination]').$('input[data-Test="SearchField-input]')}

  //Getters
    getTravelTab() {return this.TravelTab; }
    getOriginInput(){return this.OriginInput;}
    getDestinationInput(){return this.DestinationInput;}
    getOriginCheck(){return this.OriginCheck;}
    getfirstCountryOrigin(){return this.firstCountryOrigin;}
    
  // functions
    clicOnTravelTab()
    {
        this.TravelTab.click(); 
    }


    cleanOrigin()
    {
        this.OriginInput.click();
        this.clicOncheckbox();
    }
    insertOrigin(Country)
    {
   
        this.OriginInput.setValue(Country);
        browser.pause(1000);
        this.firstCountryOrigin.click();
      
    }
    insertDestination(Country)
    {
        this.DestinationInput.setValue(Country);

    }
    clicOncheckbox()
    {
        this.OriginCheck.click();
    }

}   
    
    module.exports = new Home();
    