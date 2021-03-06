// (function () {
//     var $usernameFld, $passwordFld;
//     var $firstNameFld, $lastNameFld, $roleFld;
//     var $removeBtn, $editBtn, $createBtn;
//     var $userRowTemplate, $tbody;
//     var userService = new AdminUserServiceClient();
//     $(main);
//
//     function main() { … }
//     function createUser() { … }
//     function deleteUser() { … }
//     function selectUser() { … }
//     function updateUser() { … }
//     function renderUsers(users) { … }
//     function findAllUsers() { … } // optional - might not need this
//     function findUserById() { … } // optional - might not need this
// })();

let $theTableBody;
let $usernameFld;
let $pwdFld;
let $firstNameFld;
let $lastNameFld;
let $roleSelect;
let $createBtn;
let $deleteBtn;
let $updateBtn;
let $searchBtn;
let users = [];
let selectedUser;
// const self = this;
const userService = new UserServiceClient();

function addUser() {
    createUser({
        username: 'newuser',
        password: 'newpwd',
        firstname: 'new',
        lastname: 'user',
        role: 'fac'
    })
}

function clearInputFields() {
    $usernameFld.val("");
    $pwdFld.val("");
    $firstNameFld.val("");
    $lastNameFld.val("");
//   $roleSelect.find('option[value="STUDENT"]').attr("selected", true);
//   $roleSelect.find('option[value="FACULTY"]').removeAttr("selected");
//   $roleSelect.find('option[value="STAFF"]').removeAttr("selected");
    $roleSelect.prop('selectedIndex', 2);
}

function createUser(user) {
    return userService.createUser(user).then(function (createdUser) {
        users.push(createdUser);
        renderUsers(users);
        clearInputFields();
    })
}

function deleteUser(event) {
    let deleteBtn = $(event.target);
    let theClass = deleteBtn.attr("class");
    let theIndex = deleteBtn.attr("id");
    let theId = users[theIndex]._id;

    userService.deleteUser(theId).then(function (status) {
        users.splice(theIndex, 1);
        renderUsers(users)
    })
}

function updateUser() {
    selectedUser.username = $usernameFld.val();
    selectedUser.password = $pwdFld.val();
    selectedUser.firstname = $firstNameFld.val();
    selectedUser.lastname = $lastNameFld.val();
    selectedUser.role = $roleSelect.val();
    userService.updateUser(selectedUser._id, selectedUser).then(
        function (status) {
            const index = users.findIndex(user => user._id === selectedUser._id);
            users[index] = selectedUser;
            renderUsers(users);
        });
    clearInputFields();
}

selectedUser = null;
function selectUser(event) {
    const selectBtn = $(event.target);
    const theId = selectBtn.attr("id");
    selectedUser = users.find(user => user._id === theId);
    $usernameFld.val(selectedUser.username);
    $pwdFld.val(selectedUser.password);
    $firstNameFld.val(selectedUser.firstname);
    $lastNameFld.val(selectedUser.lastname);
    $roleSelect.val(selectedUser.role);
    $searchBtn.id = selectedUser._id;
}

function findUserById() {
    const userId = $searchBtn.id;
    userService.findUserById(userId).then(function (foundUser) {
        users = [foundUser];
        renderUsers(users);
    })
}

function findAllUsers() {
    userService.findAllUsers().then(function (fetchedUsers) {
        users = fetchedUsers;
        return users;
    });
}

function renderUsers(users) {
    //empty the table
    $theTableBody.empty();
    //set default dropdown to STUDENT
    $roleSelect.find('option[value="STUDENT"]').attr("selected", true);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        $theTableBody.append(`
      <tr>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.role}</td>
        <td>
          <div class="row">
            <div class="mr-1 center">
              <button class="btn btn-primary btn-sm fas fa-times wbdv-useradmin-delete-user" id="${i}"></button>
            </div>
            <div class="mr-1 center">
              <button class="btn btn-primary btn-sm fas fa-pen wbdv-useradmin-select-user" id="${user._id}"></button>
            </div>
          </div>
        </td>
    </tr>
    `)
    }
    $(".wbdv-useradmin-delete-user").click(deleteUser);
    $(".wbdv-useradmin-select-user").click(selectUser);
}

function main() {
    $usernameFld = $(".wbdv-useradmin-input-username");
    $pwdFld = $(".wbdv-useradmin-input-password");
    $firstNameFld = $(".wbdv-useradmin-input-firstname");
    $lastNameFld = $(".wbdv-useradmin-input-lastname");
    $roleSelect = $(".wbdv-useradmin-input-role");
    $theTableBody = jQuery("tbody");
    $createBtn = $(".wbdv-useradmin-create-btn");
    $deleteBtn = $(".wbdv-useradmin-delete-user");
    $updateBtn = $(".wbdv-useradmin-edit-btn");
    $searchBtn = $(".wbdv-useradmin-search-btn");

    userService.findAllUsers().then(function (fetchedUsers) {
        users = fetchedUsers;
        renderUsers(users)
    });

    // findAllUsers(function (fetchedUsers) {
    //   renderUsers(fetchedUsers);
    // });

    $updateBtn.click(updateUser);
    $searchBtn.click(findUserById);

    $createBtn.click(() => createUser({
        username: $usernameFld.val(),
        password: $pwdFld.val(),
        firstname: $firstNameFld.val(),
        lastname: $lastNameFld.val(),
        role: $roleSelect.val()
    }))

}

jQuery(main);