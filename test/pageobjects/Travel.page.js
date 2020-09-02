
class Travel{

   
    get FirstBookingButton(){return $('[data-test=ResultList]').$$('[data-test=ResultCardWrapper]')[1].$('div[data-test=BookingButton]')}
    get EmailInput(){return $('[data-Test=ContactEmail]')}
    get PhoneInput(){return $('[data-Test=ContactPhone]')}
    get NameInput(){return $('[data-Test=ReservationPassenger-FirstName]')}
    get LastnameInput(){return $('[data-Test=ReservationPassenger-LastName]')}
    get NationalityDropdown(){return $('//select[@name="nationality"]')}
    get GenderDropdown(){return $('//select[@name="title"]')}
 
   
    get Birthday(){return $('//input[@name="birthDay"]')}
    get Birthmonth() {  return $('[name=birthMonth]').$('//option[@value="11"]')}
    get Birthyear() {return $('//input[@name="birthYear"]')}
    get id(){return $('input[name=idNumber]')}

    get Expirationday(){return $('//input[@name="idExpirationDay"]')}
    get Expirationmonth() {return $('//select[@name="idExpirationMonth"]')}
    get Expirationyear() {return $('//input[@name="idExpirationYear"]')}
    get idNoexperationcheck(){return $('//input[@type="checkbox" ][@name="idNoExpiration"]')}
    get AssuranceRadio(){return $('[data-test=ReservationPassengerInsurance-content-insurance-type]')}
    get ContinueButton(){return $('[data-test=StepControls-passengers-next]')}
    get FareTypeButton(){return $('[data-test=fareTypesStandardButton]')}
    get PackageButton(){return $('[data-test=servicePackagesPremiumButton]')}
    get AdditionalserviceButton(){return $('[data-test=StepControls-AdditionalService-next]')}

   getFirstBookingButton(){return this.FirstBookingButton; }
   getEmailInput(){return this.EmailInput;}
   getPhoneInput(){return this.PhoneInput;}
   getNameInput(){return this.NameInput;}
   getLastnameInput(){return this.LastnameInput;}
   getNationalityDropdown(){ return this.NationalityDropdown;}
   getGender(){return this.GenderDropdown;}
   getBirthday(){return this.Birthday;}
   getBirthmonth(){return this.Birthmonth;}
   getBirthyear(){return this.Birthyear;}
   getid(){return this.id;}
   getExpirationday(){return this.Expirationday;}
   getExpirationmonth(){return this.Expirationmonth;}
   getExpirationyear(){return this.Expirationyear;}
   getNoExpirationId(){return this.idNoexperationcheck;}
   getAssuranceRdio(){return this.AssuranceRadio;}
   getContinueButton(){return this.ContinueButton;}
   getFaretypeButton(){return this.FareTypeButton;}
   getPackageButton(){return this.PackageButton;}
   getAdditionalServicebutton(){return this.AdditionalserviceButton;}
   //metodos
   clicOnBookingbutton()
   {
        this.FirstBookingButton.click();
   }
    InsertEmail(email)
   { this.EmailInput.click();
     this.EmailInput.setValue(email);
   }
   InsertPhone(phone)
   {
     this.PhoneInput.click();
     this.PhoneInput.setValue(phone);
   }
   InsertName(name)
   {
     this.NameInput.click();
     this.NameInput.setValue(name);
   }
   InsertLastname(lastname)
   {
     this.LastnameInput.click();
     this.LastnameInput.setValue(lastname);
   }
   selectNationality(nationality)
   {
      
      this.NationalityDropdown.selectByAttribute('value', nationality);
   }
   selectGender(gender)
   {
    this.GenderDropdown.selectByAttribute('value',gender);

   }
   insertBirthday(day)
   {
    
     this.Birthday.click();
     this.Birthday.setValue(day);

   }
   selectBirthmonth()
   {
    this.Birthmonth.click();
   
   }
   insertBirthyear(year)
   {
    this.Birthyear.click();
    this.Birthyear.setValue(year);
   }
   insertIdnumber(id)
   {
     this.id.click();
     this.id.setValue(id);
   }

   insertExpirationday(expday)
   {
     this.Expirationday.click();
     this.Expirationday.setValue(expday);
   }
   selectExperationmonth(expmonth)
   {
    this.Expirationmonth.selectByAttribute('value',expmonth);
   }
   insertExperationyear(expyear)
   {
    this.Expirationyear.click();
    this.Expirationyear.setValue(expyear);
   }
   clicOnNoIdexpiration()
   {
     this.idNoexperationcheck.click();
   }
   clicOnAssuranceRdio()
   {
     this.AssuranceRadio.click();
   }
   clicOncontinueButton()
   {
     this.ContinueButton.click();
   }
   clicOnfaretypeButton()
   {
     this.FareTypeButton.click();
   }
   clicOnpackageButton()
   {
     this.PackageButton.click();
   }
   clicOnadditionalServicebutton()
   {
     this.AdditionalserviceButton();
   }

}   
    
    module.exports = new Travel();
    