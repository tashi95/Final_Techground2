
class Home{

    get flightsTab() {return $('a=Flights')}
    get fromInput() {return $('input[type="text"')}
  


  /*  get noArticleslabel(){ return $('div=No articles are here... yet.')}
    get yourFeedTap(){return $('.nav-link=Your Feed')}
    get globalFeedTap(){return $('.nav-link=Global Feed')}
    get articlesRows(){return $('<article-list />').$$('<article-preview />')}
    get articlesRowsReadMore(){return $('<article-list />').$$('<article-preview />')[1].$('span=Read more...')}
*/
    getflightsTab()
    {
        return this.flightsTab;   
    }

    clicOnFlightTab()
    {
        this.flightsTab.click(); 
    }

    insertFromCountry()
    {
        this.fromInput.setValue('SJO');
    }
}

    module.exports = new Home();
    