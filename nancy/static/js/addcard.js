

document.addEventListener('DOMContentLoaded', function() {
        document.getElementsByTagName('main')[0].innerHTML +=  `
        <!-- Modal to add a Card  -->
        <div id="add-card" class="modal modal-fixed-footer">
        <form method="POST" id="card_form" action="${addCardRedirect}">
            ${hidden_tag}
            <!-- Header  -->
            <div class="modal-content">
            <div class="row">
                <div class="col s12">
                <h4 class="teal-text" style="font-weight: 500;" >Add New Credit Card</h4>

                </div>
            </div>

            
            
            <!-- Card holders name -->
            <div class="row">
            <div class="col s12"  >
                <div class="row">
                <div class="input-field col s12 m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input class="validate" id="card_holder" name="holder" required type="text" value="">
                    <label for="card_holder">Card Holder Name</label>
                    <span id="card_holder_error" class="red-text"></span>
                </div>
                </div>
            </div>
            </div>

            <!-- Cred- Card Info Row 2 -->
            <div class="row">
            
            <!-- Credit Card Number -->
            <div class="input-field col s12">
                <i class="material-icons prefix">credit_card</i>
                <input class="validate" id="card_number" name="number" required type="tel" value="" required>
                <label class="active" for="card_number">Card Number</label>
                <span id="card_number_error" class="red-text"></span>
                            
            </div>
        
            <!-- Expiry Month-->
            <div class="input-field col s6 m3  ">
                <i class="material-icons prefix">date_range</i>
                <input class="validate" id="card_expiry_month" name="expiry_month" required type="text" value="">
                <label class="active" for="card_expiry_month">Expiry Month</label>
                <span id="card_expiry_month_error" class="red-text"></span>
            </div>  

            <!-- Expiry Year -->
            <div class="input-field col s6 m3  ">
                <!-- <i class="material-icons prefix">credit_card</i> -->
                <input class="validate" id="card_expiry_year" name="expiry_year" required type="text" value="">
                <label class="active" for="card_expiry_year">Expiry Year</label>
                <span id="card_expiry_year_error" class="red-text"></span>

            </div> 

            <div class="input-field col s12 m6  ">
                <!-- <i class="material-icons prefix">credit_card</i> -->
                <select id="card_type" name="card_type" class='validate' required>
                <option value="" disabled selected>Choose Card Provider</option>
                <option value="VISA">VISA</option>
                <option value="MASTERCARD">Master Card</option>
                <option value="AMERICAN Express">American Exress</option>
                </select>
                <label>Card Provider</label>
                <span id="card_type_error" class="red-text"></span>
            </div>

            </div>

            </div>

            <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
            <button href="#!" type="button" onclick="addCard()" class=" waves-effect waves-green btn-flat">Submit</button>
            </div>
        </form>
        </div>


        `
});


document.addEventListener('DOMContentLoaded', function(){
    var elems = document.getElementById('add-card');
    var instances = M.Modal.init(elems);
})

function addCard() {
    

    fields = {
        "card_holder" : [data_required, length_required(null, max=8)],
        "card_number" : [data_required, number_required, length_required(min=8, max=8)],
        "card_expiry_month" : [data_required, number_required, integer_between(null, max=12)],
        "card_expiry_year" : [data_required, number_required, integer_between(min=2020, max=2080)],
        "card_type" : [data_required]

    }
    
    if (validateForm(fields)) {
        document.getElementById('card_form').submit()
    }
    
  };