
class Result{

    
    get flightCheckbox(){return $('[data-Test=TransportOptionCheckbox-aircraft]')}
    get busCheckbox(){return $('[data-Test=TransportOptionCheckbox-bus]')}
    get trainCheckbox(){return $('[data-Test=TransportOptionCheckbox-train]')}
    get belgicaCheck(){return $('//input[@type="checkbox"][@value="BE"]')}
  
    get noResults(){return $('//div[@class="Heading__StyledHeading-sc-1b8cso5-0 fGFWje"]')}

    getFlightcheck(){return this.flightCheckbox;}
    getbuscheck(){return this.busCheckbox;}
    gettraincheck(){return this.trainCheckbox;}
    getnoresults(){return this.noResults;}
    getbelgicacheck(){return this.belgicaCheck;}

    clicOnflightCheck()
    {
        this.flightCheckbox.click(); 
    }
    clicOnbusCheck()
    {
        this.busCheckbox.click(); 
    }
    clicOntrainCheck()
    {
        this.trainCheckbox.click(); 
    }

    getNoresultslabel()
    {
        return this.noResults;
    }
    clicOnBelgicaCheck()
    {
        this.belgicaCheck.click();
    }

}   
    
    module.exports = new Result();
    