class Ticketdetail{
   
    get name() {return $('//span[@class="Text__StyledText-sc-19qtt4y-0 cKZayu"]')}
    get birthdate() {return $('//p[@class="Text__StyledText-sc-19qtt4y-0 erjWHx"]')}
    get ID() {return $('//p[@class="Text__StyledText-sc-19qtt4y-0 cKZayu"]')}

    get seating() {return $('div[data-test=SeatingSelectOptionDesktop-window]')}
    get continuebutton() {return $('button[data-test=StepControls-AdditionalService-next]')}
    

    getName(){return this.name;}
    getBirthdate(){return this.birthdate;}
    getID(){return this.ID;}
    getseating(){return this.seating;}
    getContinuebutton(){return this.continuebutton;}

    selectseating()
    { 
        return this.seating.click();
    }
    cliconcontinuebutton()
    {
    this.continuebutton.click();
    }
   
   
   
   
   }module.exports = new Ticketdetail();