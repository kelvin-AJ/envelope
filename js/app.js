import Storage from "./workers/storage.js";
import Interface from "./workers/interface.js";
import Envelope from "./workers/envelope.js";
import EnvelopeWorker from "./workers/envelopeWorker.js";

class App {
    constructor(){
        this.storage = new Storage("$");
        this.interface = new Interface();
        this.envelopeWorker = new EnvelopeWorker();

        this.tempEnvelope = {};
        

        this._renderGreetingAndBalance();
        this._renderMiscelleneous();
        this._renderAllEnvelopes();
        this._allowFormHandling();
        this._handleEnvelopeInteraction();

        // this.storage.setBalance(100000);
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

        this.storage.getBasket().forEach(envlope => this.interface.renderEnvelope(this.storage.getCurrency(), envlope))
    }
    _constructEnvelope(formData, key=null){
        return new Envelope(formData.name, formData.allocation, formData.increment, formData.decrement, formData.color, formData.icon, key);
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

            const envelope = this._constructEnvelope(formData);

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


    _allowEnvelopeEditing() {

        const self = this

        function formEditHandler() {
            const formData = self.interface.getFormData();
            if(formData.name == "") return;
            const newEnvelope = self._constructEnvelope(formData, self.tempEnvelope.key);

            console.log(newEnvelope, this.tempEnvelope)
    
            self.interface.reRenderEnvelope(newEnvelope, self.storage.getCurrency());
            self.storage.updateEnvelope(newEnvelope);
    
            // Update Miscelleneaus Balance
            self.storage.updateMiscelleneousBalance();
            self.interface.updateMiscelleneous(self.storage.getCurrency(), self.storage.getMiscelleousBalance());
    
            // Hide Form
            self.interface.hideForm();
            self.interface.clearForm();
        }


        
        // Save
        this.interface.formSaveBtn.addEventListener("click", formEditHandler);
        

        this.interface.executeOncloseForm(() => {
            this.interface.formSaveBtn.removeEventListener("click", formEditHandler);
        })
  
    }

    _handleEnvelopeInteraction() {

        this.interface.basketElement.addEventListener("click", (e) => {


            const eventOutput = this.interface.handleEnvelopeClick(e);
            if(!eventOutput) return;
            const [clickedFunction, envelopeKey] = eventOutput;

            this.tempEnvelope = this.storage.getEnvelope(envelopeKey);
            

            if(clickedFunction == "decrement") {
                const deductedEnvelope = this.envelopeWorker.makeDeduction(this.tempEnvelope)
                this.interface.reRenderEnvelope(deductedEnvelope, this.storage.getCurrency());
                this.storage.updateEnvelope(deductedEnvelope);
                this.storage.updateBalance();

                this.interface.renderAlocatedTotal(this.storage.getCurrency(), this.storage.getBalance());

                this.tempEnvelope = {}
            }

            if(clickedFunction == "increment") {
                const incrementEnvelope = this.envelopeWorker.madeIncrementation(this.tempEnvelope)
                this.interface.reRenderEnvelope(incrementEnvelope, this.storage.getCurrency());
                this.storage.updateEnvelope(incrementEnvelope);


                this.storage.updateMiscelleneousBalance();


                this.interface.updateMiscelleneous(this.storage.getCurrency(), this.storage.getMiscelleousBalance());


                this.tempEnvelope = {}
            }

            if(clickedFunction == "edit") {

                this.interface.showForm(null, true, this.tempEnvelope);

                // VALIDATE EDIT FORM
                this.interface.validateForm({
                    miscFund: this.storage.getMiscelleousBalance(),
                    edit: true,
                    allocated: this.tempEnvelope.allocatedFund,
                    envelopeName: this.tempEnvelope.name,
                    envelopeNames: this.storage.getEnvelopeNames()
                });

                this._allowEnvelopeEditing();
            }

            if(clickedFunction == "delete") {
                
                this.interface.showDialogueMessage(`Are you sure you want to delete ${this.tempEnvelope.name} envelope?`, () => {

                    console.log("hello")
                    this.storage.deleteEnvelope(this.tempEnvelope.key);
        
                    this.interface.deleteEnvelope(this.tempEnvelope.key);
        
                    this.interface.updateMiscelleneous(this.storage.getCurrency(), this.storage.getMiscelleousBalance());
                })

                this.tempEnvelope = {}
            }

            return

        });
    }

}

new App()