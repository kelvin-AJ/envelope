export default class Interface{
    _svgs = {
        envelope : `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M7.875 31.125q-.958 0-1.625-.687-.667-.688-.667-1.605V11.167q0-.917.667-1.605.667-.687 1.625-.687h24.25q.958 0 1.625.687.667.688.667 1.605v17.666q0 .917-.667 1.605-.667.687-1.625.687ZM33.458 10.5l-12.75 8.583q-.166.084-.375.146-.208.063-.333.063-.125 0-.312-.063-.188-.062-.313-.146L6.542 10.5v18.292q0 .583.375.958t.958.375h24.25q.583 0 .958-.375t.375-.958ZM20 18.292l12.75-8.417H7.25ZM6.542 10.5v.333V10.021v.062-.208.167-.063.854-.291 19.583-1.333Z"/>
        </svg>`,
        commute : `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M8 29.417v3q0 .125-.104.25t-.271.125q-.208 0-.313-.125-.104-.125-.104-.292V20.417l3.25-9.375q.084-.209.313-.354.229-.146.479-.146h17.667q.208 0 .375.125.166.125.25.375l3.25 9.375v12q0 .125-.104.25-.105.125-.313.125-.167 0-.271-.125-.104-.125-.104-.292v-2.958Zm.583-10h22.834l-2.792-7.875h-17.25Zm-.375 1v8.041Zm4 5.625q.709 0 1.167-.48.458-.479.458-1.145 0-.709-.479-1.146-.479-.438-1.146-.438-.666 0-1.125.438-.458.437-.458 1.146 0 .708.458 1.166.459.459 1.125.459Zm15.584 0q.708 0 1.146-.48.437-.479.437-1.145 0-.709-.458-1.146-.459-.438-1.125-.438-.667 0-1.146.438-.479.437-.479 1.146 0 .708.5 1.166.5.459 1.125.459ZM8.208 28.458h23.584v-8.041H8.208Z"/>
        </svg>`,
        bills : `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M22.083 20.542q-1.166 0-1.979-.813-.812-.812-.812-1.979t.791-1.958q.792-.792 2-.792 1.167 0 1.959.792.791.791.791 1.958 0 1.208-.771 2-.77.792-1.979.792Zm-10.208 5.583q-.958 0-1.646-.687-.687-.688-.687-1.605V11.708q0-.958.687-1.646.688-.687 1.646-.687h20.417q.916 0 1.604.687.687.688.687 1.646v12.125q0 .917-.687 1.605-.688.687-1.604.687Zm1.292-.958H31q0-1.084.792-1.875.791-.792 1.833-.792V13q-1.083 0-1.854-.792Q31 11.417 31 10.375H13.167q0 1.042-.792 1.833-.792.792-1.833.792v9.5q1.041 0 1.833.792.792.791.792 1.875Zm-5.459 5.125q-.916 0-1.604-.688-.687-.687-.687-1.646V14.75q0-.167.145-.312.146-.146.355-.146.166 0 .312.146.146.145.146.312v13.208q0 .5.417.917.416.417.916.417h21.5q.209 0 .354.146.146.145.146.354 0 .208-.146.354-.145.146-.354.146Zm4.167-5.125h-1.333V10.375h1.333q-.542 0-.937.396-.396.396-.396.937v12.125q0 .542.396.938.395.396.937.396Z"/></svg>`,
        food: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M28.375 35.542q-.208 0-.354-.146t-.146-.354V22.208h-1.417q-.958 0-1.646-.687-.687-.688-.687-1.604v-8.459q0-2.5 1.208-4.479Q26.542 5 28.875 4.542v30.5q0 .208-.146.354t-.354.146Zm-15.042 0q-.208 0-.354-.146t-.146-.354v-14.5Q10.917 20.417 9.604 19q-1.312-1.417-1.312-3.5V4.917q0-.167.146-.313.145-.146.354-.146.208 0 .333.146.125.146.125.313V15.5h3.583V4.917q0-.167.146-.313t.354-.146q.167 0 .313.146t.146.313V15.5h3.541V4.917q0-.167.146-.313t.354-.146q.209 0 .334.146.125.146.125.313V15.5q0 2.083-1.313 3.5-1.312 1.417-3.187 1.542v14.5q0 .208-.146.354t-.313.146Z"/>
        </svg>`,
        shopping: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M12.417 34.667q-.917 0-1.521-.625-.604-.625-.604-1.542t.604-1.542q.604-.625 1.521-.625.916 0 1.541.625.625.625.625 1.542t-.625 1.542q-.625.625-1.541.625Zm15.25 0q-.875 0-1.5-.625t-.625-1.542q0-.917.604-1.542t1.521-.625q.916 0 1.562.625t.646 1.542q0 .917-.625 1.542t-1.583.625ZM9.583 8.75l4.709 9.917H26l4.792-8.75q.25-.459.041-.813-.208-.354-.708-.354Zm2.75 17.542q-1.291 0-1.875-1-.583-1-.041-2.084l2.666-4.75L6.875 5.417H4.458q-.208 0-.333-.125Q4 5.167 4 4.958q0-.208.125-.354t.375-.146h2.292q.375 0 .646.188.27.187.395.479l1.25 2.667h20.75q1.209 0 1.771.854.563.854-.021 1.896l-4.333 7.916q-.333.542-.854.854-.521.313-1.104.313H13.5l-2.208 4.042q-.292.5 0 1.083.291.583.916.583h17.25q.167 0 .292.146.125.146.125.313 0 .208-.146.354t-.312.146Zm1.959-7.625H26Z"/>
        </svg>`,
        edit: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M8.875 31.792h1.5l17.958-17.959-1.5-1.541-17.958 18Zm21.542-18.625L27.5 10.25l1.833-1.792q.292-.291.688-.291.396 0 .729.291l1.5 1.5q.25.292.25.688 0 .396-.292.687ZM9.083 32.75q-.541 0-.854-.312-.312-.313-.312-.855v-1.25q0-.208.083-.416.083-.209.25-.417l18.625-18.542 2.833 2.834-18.583 18.625q-.167.125-.375.229-.208.104-.417.104Zm18.5-19.708-.75-.75 1.5 1.541Z"/></svg>`

    }

    constructor(){
        this._formIsOpen = false;
        this.document = document;
        this.sideBarElement = document.querySelector(".header__side-bar");
        this.infoGreetingElement = document.querySelector(".info-bar__greeting");
        this.navBtnElement = document.querySelector(".info-bar__nav-btn");
        this.infoAlloctedElement = document.querySelector(".info-bar__allocated");
        this.basketElement = document.querySelector(".basket");
        this.formAreaElement = document.querySelector(".form-area");
        this.formMain = document.querySelector(".evelope-creation-form");
        this.addBtn = document.querySelector(".envelope-add-btn");
        this.inputElements = [...this.document.querySelectorAll("input[type='number']")];
        this.allocationEl = this.formMain.querySelector(`input[name="allocation"]`);
        this.envelopeNameEl = this.formMain.querySelector(`input[name="name"]`);
        this.decrementEl = this.formMain.querySelector(`input[name="decrement"]`);
        this.incrementEl = this.formMain.querySelector(`input[name="increment"]`);
        this.format = new Intl.NumberFormat(navigator.language);



        this.addDefaultListeners();
    }

    getFormData(){
        const formData = {
            icon : this.formMain.elements.icon.value,
            name : this.formMain.elements.name.value,
            allocation : this.formMain.elements.allocation.value,
            increment : this.formMain.elements.increment.value,
            decrement : this.formMain.elements.decrement.value,
            color : this.formMain.elements.color.value
        }

        return formData;
    }

    validateForm(parameters={miscFund:500}){
        this.allocationEl.setAttribute("max", `${parameters.miscFund}`);



        this.formMain.addEventListener("keyup", () => {
            // ENVELOPE NAME VALIDATION
            if(parameters.envelopeNames.find(envName => envName == this.envelopeNameEl.value.trim())){
                this.envelopeNameEl.setAttribute("pattern", "[0-9]")
                this.createFormError("name","Envelope Already exists")
            }else if(this.envelopeNameEl.validity.tooLong){
                this.createFormError("name","Name is too long")
            }
            else{
                this.envelopeNameEl.removeAttribute("pattern")
                this.removeFormError("name");
            }

            // ALLOCATION VALIDATION
            if(this.allocationEl.validity.rangeOverflow){
                this.createFormError("allocation","Insufficient Funds")
            }else if(this.allocationEl.validity.rangeUnderflow){
                this.createFormError("allocation","Allocation too little")
            }
            else{
                this.removeFormError("allocation")
            }

            if(this.decrementEl.value < 1 && (!this.decrementEl.validity.valueMissing)){
                this.createFormError("decrement","Rate can't be less than 1");
                this.decrementEl.value = 1
            }else{
                this.removeFormError("decrement");
            }

            if(this.incrementEl.value < 1 && (!this.incrementEl.validity.valueMissing)){
                this.createFormError("increment","Rate can't be less than 1");
                this.incrementEl.value = 1
            }else{
                this.removeFormError("increment");
            }
        })
      
    }

    _toggleSideBar(){
        this.sideBarElement.classList.toggle("in-view");
        this.navBtnElement.classList.toggle("change");
    }

    showForm(edit=false, envelope=null){
        this._formIsOpen = true;
        this.formMain.classList.remove("hidden");
        this.formMain.scrollIntoView({behavior:"smooth"});
        setTimeout(() => this._formIsOpen = false, 350);
    }

    clearForm(){
        this.envelopeNameEl.value = "";
        this.allocationEl.value = "";
    }

    // WORK
    hideForm(){
        this.formMain.classList.add("hidden");
    }


    _handleFormScroll(){
        if(this._formIsOpen) return;
        if(this.formMain.getBoundingClientRect().top > 450){
            this.hideForm();
        }
    }

    addDefaultListeners(){
        this.navBtnElement.addEventListener("click", this._toggleSideBar.bind(this));
        this.addBtn.addEventListener("click", this.showForm.bind(this));
        this.document.addEventListener("scroll", this._handleFormScroll.bind(this));
    }

    renderGreeting(greeting){
        this.infoGreetingElement.textContent = greeting;
    }

    renderAlocatedTotal(currency, allocatedTotal){
        this.infoAlloctedElement.textContent = `${currency}${this.format.format(allocatedTotal)}`;
    }

    renderBasket(basket){
        basket.forEach(envelope => {
            this.basketElement.insertAdjacentHTML("afterbegin", 
            `
            
            `)
        })
    }
    createFormError(element, message) {
        this.document.querySelector(`div.${element}-error`).innerHTML = message;
    }
    removeFormError(element) {
        this.document.querySelector(`div.${element}-error`).innerHTML = "";
    }

    updateMiscelleneous(currency, miscBalance){
        this.document.querySelector("div[data-key='misc']").querySelector(".envelope__balance").innerHTML= `${currency}${miscBalance}`
    }

    renderEnvelope(currency, envelope=null, miscBalance=null){
        this.basketElement.insertAdjacentHTML("afterbegin", 
        `
        <div class="basket-envelope ${envelope?.color || "red"}-envelope" data-key="${envelope?.key || "misc"}">
                    ${this._svgs[envelope?.icon] || this._svgs.envelope}

                    ${
                        miscBalance? `
                        `:
                        `<button class="btn edit-btn">
                        ${this._svgs.edit}
                        </button>`
                    }

                    
                    <span class="envelope__name">${envelope?.name || "Miscelleneous"}</span>
                        <span class="envelope__balance">${currency}${this.format.format(envelope?.allocatedFund || miscBalance)}</span>
                    ${
                        envelope ?
                        `<button class="btn increment-btn">+${currency}${envelope?.incrementSteps}</button>
                        <button class="btn decrement-btn">Deduct(-${currency}${envelope?.decrementSteps})</button>`
                        : ""
                    }
                        
                    
                </div>`)
    }
}
