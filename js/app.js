import Storage from "./workers/storage.js";
import Interface from "./workers/interface.js";
import Envelope from "./workers/envelope.js";

class App {
    constructor(){
        this.storage = new Storage("$");
        this.interface = new Interface();
        

        this._renderGreetingAndBalance();
        this._renderMiscelleneous();
        this._renderAllEnvelopes();
        this._allowFormHandling();

        // this.storage.setBalance(100000)
    }

    _renderGreetingAndBalance(){
        const greetingMessage = `Good Morning, ${this.storage.getFirstName()}`;
        this.interface.renderAlocatedTotal(this.storage.getCurrency(), this.storage.getBalance())
        this.interface.renderGreeting(greetingMessage);
    }

    _renderMiscelleneous(){
        this.interface.renderEnvelope(this.storage.getCurrency(), null ,this.storage.getMiscelleousBalance());
    }
    
    _renderAllEnvelopes(){
        // console.log(this.storage.getBasket())
        this.storage.getBasket().forEach(envlope => this.interface.renderEnvelope(this.storage.getCurrency(), envlope))
    }

    _allowFormHandling(){
        this.interface.addBtn.addEventListener("click", () => {
            this.interface.validateForm({
                miscFund : this.storage.getMiscelleousBalance(),
                envelopeNames: this.storage.getEnvelopeNames()
            })
        });

        this.interface.formMain.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = this.interface.getFormData();

            const envelope = new Envelope(formData.name, formData.allocation, formData.increment, formData.decrement, formData.color, formData.icon);

            // ADD ENVELOPE STORAGE
            this.storage.addEnvelope(envelope);

            // Render new envelope
            this.interface.renderEnvelope(this.storage.getCurrency(),envelope);

            // Update Misc
            this.interface.updateMiscelleneous(this.storage.getCurrency(), this.storage.getMiscelleousBalance());

            // Hide Form
            this.interface.hideForm();
            this.interface.clearForm();
        })
    }


}

new App()