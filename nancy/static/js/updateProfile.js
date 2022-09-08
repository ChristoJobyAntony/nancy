document.addEventListener('DOMContentLoaded', 
    () => {
        document.getElementById('hidden-away').innerHTML += `
      <!-- Modal Structure -->
      <form id="profile_form" method="POST" enctype="multipart/form-data">
      ${crsf_token}
      <div id="update_profile" class="modal">
        <div class="modal-content">
            <div class="row">
                <div class="col s12">
                  <h4 class="teal-text" style="font-weight: 500;" >Edit Profile</h4>
                </div>
            </div>
            <div class="row">
                <div class="col s3 m2">
                    <div class="aspect-ratio-box">
                        <img id="picture-preview"  class=" circle responsive-img " src="${profile_picture_url}">
                    </div>
                </div>
                <div class="col s9 m10">
                    <div class="file-field input-field">
                        <div class="btn btn-flat waves-effect waves-light">
                          <span>Edit Profile Picture</span>
                          <input name="picture"  onchange="loadFile(event)" type="file">
                        </div>
                        <div class="hide file-path-wrapper">
                          <input id="profile_image"  name="picture" class="file-path validate" type="text">
                        </div>
                        <span id="profile_image_error" class="red-text"></span>
                    </div>
                </div>
            </div>
            
            <div class="row">
              <div class="col input-field s12 m6">
                <input  id="profile_first_name" value="${first_name}" name="firstName" type="text" class="validate">
                <label for="profile_first_name">First Name</label>
                <span id="profile_first_name_error" class="red-text"></span>
              </div>
              <div class="col input-field s12 m6">
                <input  id="profile_last_name" value="${last_name}" name="lastName" type="text" class="validate">
                <label for="profile_last_name">Last Name</label>
                <span id="profile_last_name_error" class="red-text"></span>
              </div>
            </div>

            
        </div>

        <div class="modal-footer">
            <button type="button" onclick="updateProfile()" class="waves-effect waves-green btn-flat">Submit</button>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>

      </div>
  </form>

    `;
    });


    
//  INit the modal  
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.getElementById('update_profile');
    var instances = M.Modal.init(elems, {
        onOpenEnd : ()=>{M.updateTextFields();}
    });
    });

// Update the preview image
function loadFile(event) {
var output = document.getElementById('picture-preview');M.updateTextFields();
output.src = URL.createObjectURL(event.target.files[0]);
output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
    }
}

function updateProfile() {
    fields = {
        "profile_image" : [],
        "profile_first_name" : [data_required],
        "profile_last_name" : [data_required],
    }
    if (validateForm(fields)) {
        document.getElementById('profile_form').submit()
    }
    
  };