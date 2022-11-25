import LocalStorage from "./ls.js";

export default class Storage{
    constructor(currency){
        this.localPreferences = new LocalStorage("preferences");
        this.localBasket = new LocalStorage("basket");
        this.localBalance = new LocalStorage("balance");
        this.plannedFunds = 0;

        this.preferences = this.localPreferences.getSaved() || {
            firstName : "Kelvin",
            darkMode : false,
            currency : currency
        };

        this.basket = this.localBasket.getSaved() || [];
        this.balanceTotal = this.localBalance.getSaved() || 0;


        this._updateLocalBasket();
        this._updateLocalBalance();
        this._updateLocalPreferences();
        
        this.updatePlannedFunds();
    }

    getBalance(){
        return this.balanceTotal;
    }

    setBalance(balance){
        this.balanceTotal = balance;
        this._updateLocalBalance();
    }

    getCurrency(){
        return this.preferences.currency;
    }

    setCurrency(currency){
        this.preferences.currency= currency
    }
    // ENVELOPEs AND BASKET
    getMiscelleousBalance(){
        return this.getBalance() - this.plannedFunds;
    }

    updatePlannedFunds(){
        this.plannedFunds = 0;
        this.getBasket().forEach(envelope => {
            this.plannedFunds += Number(envelope.allocatedFund);
        })
    }

    getBasket(){
        return this.basket;
    }

    addEnvelope(envelope){
        this.basket.push(envelope);
        this._updateLocalBasket();
        this.updatePlannedFunds();
    }

    deleteEnvelope(key){
        this.basket.splice(this._getEnvelopeIndex(key), 1);
        this._updateLocalBasket();

        return this.basket;
    }

    updateEnvelope(envelope){
        const envelopeIndex = this._getEnvelopeIndex(envelope.key);
        this.basket.splice(envelopeIndex, 1 , envelope);
        this._updateLocalBasket();

        return envelope;
    }
        
    _getEnvelopeIndex(key){
        return this.basket.findIndex(env => env.key == key);
    }

    getEnvelope(key){
        return this.basket[this._getEnvelopeIndex(key)];
    }

    getEnvelopeNames(){
        return this.basket.map(envelope => envelope.name);
    }

    // USER PREFERENCES
    setDarkMode(boolean){
        this.preferences.darkMode = boolean;
    }

    getDarkMode(){
        return this.preferences.darkMode;
    }

    getFirstName(){
        return this.preferences.firstName;
    }
    getFormat(){
        return new Intl.NumberFormat(navigator.language);
    }

    // Update Local
    _updateLocalPreferences(){
        this.localPreferences.updateStorage(this.preferences);
    }

    _updateLocalBasket(){
        this.localBasket.updateStorage(this.basket);
    }

    _updateLocalBalance(){
        this.localBalance.updateStorage(this.balanceTotal);
    }
}