
class Home{


    get TravelTab(){return $('//span[@class="Links__Label-sc-17vwg4-1 hQEAKQ"]')}
    get Xicon(){return $('[data-Test=SearchPlaceField-origin]').$('[data-Test=PlacePickerInputPlace-close]')}
    get XiconDest(){return $('[data-Test=SearchPlaceField-destination]').$('[data-Test=PlacePickerInputPlace-close]')}
    get OriginInput(){return $('[data-Test=SearchPlaceField-origin]')}
    get DestinationInput(){return $('[data-Test=SearchPlaceField-destination]')}
    get firstCountry(){return $('//div[@class="Stack__StyledStack-sc-1t576ow-0 gDgpcl"]')}

    get Passengerslist(){return $('[data-Test=PassengersField]')}
    get incrementButtonAdults(){return $('[data-Test=PassengersRow-adults]').$('button[aria-label=increment]')}
    get incrementButtonChilds(){return $('[data-Test=PassengersRow-children]').$('button[aria-label=increment]')}
    get confirmationButton(){return $('[data-Test=PassengersFieldFooter-done]')}
   
    get departureCalendar(){return $('[data-Test=SearchFieldDateInput]')}
    get departuredate(){return $('//div[@data-type="DayContainer"][@data-value="2020-09-10"]')}
    get returndate(){return $('//div[@data-type="DayContainer"][@data-value="2020-09-20"]')}
    get SetDatesButton(){return $('[data-test=SearchFormDoneButton]')}
    get SearchButton(){return $('[data-Test=LandingSearchButton]')}
   
    get TravelList(){return $('[data-test=ResultList]').$$('[data-test=ResultCardWrapper]')}

  //Getters
    getTravelTab() {return this.TravelTab; }
    getOriginInput(){return this.OriginInput;}
    getDestinationInput(){return this.DestinationInput;}
    getfirstCountry(){return this.firstCountry;}
    getXicon(){return this.Xicon;}
    getXiconDest(){return this.XiconDest;}

    getPassengerlist(){return this.Passengerslist;}
    getIncrementButtonAdults(){return this.incrementButtonAdults;}
    getIncrementButtonChilds(){return this.incrementButtonChilds;}
    getConfirmationButton(){return this.confirmationButton;}

    getDeparturecalendar(){return this.departureCalendar;}
    getDeparturedate(){return this.departuredate;}
    getReturndate(){return this.returndate;}
    getSetDatesbutton(){return this.SetDatesButton;}
    getSearchbutton(){return this.SearchButton;}

  // functions
    clicOnTravelTab()
    {
        this.TravelTab.click(); 
    }
    insertOrigin(Country)
    {
        this.Xicon.click();
        this.OriginInput.setValue(Country);
        this.firstCountry.click();
    }
    insertDestination(Country)
    {  
     this.XiconDest.click();
     this.DestinationInput.setValue(Country);
     browser.pause(2000);
     this.firstCountry.click();
    }
    selectPassengers()
    {
       this.Passengerslist.click();
       this.incrementButtonAdults.click();
       this.incrementButtonChilds.click();
       browser.pause(2000);
       this.confirmationButton.click();
    
    }
   
   selectTraveldate()
   {
       this.departureCalendar.click();
       this.departuredate.click();
       this.returndate.click();
       this.SetDatesButton.click();
   
   }
   searchTravel()
   {
    this.SearchButton.click();
   }
   getTravelListSize()
   {
     return this.TravelList;
 
   }

}   
    
    module.exports = new Home();
    