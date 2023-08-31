


let users = []
allocateCenter = () => {
      let name = document.getElementById('name')
      let email = document.getElementById('email')

      let userInput = {
            name: name.value,
            email: email.value,
      };


      

      let city_name = allocate()
      // console.log(city_name)
      userInput.city_name= city_name;
      // users.push(city_name)

      AddUser(userInput)
      console.log(users)

      displayUsers()


}

function AddUser(userInput) {
      let checkUser = users.filter((user) => {
            return user.email == userInput.email;
      })
      //check if user already exist, length is 0 means no user of that email
      if (checkUser.length == 0) {
            users.push(userInput);
            // let city_name= allocate(userInput)
            // console.log(city_name)
            notifyUserAdded();
      }
      else{
            notifyUserExist();
      }
}

function notifyUserExist(){
      let alert= document.getElementById('alert-danger')
      alert.classList.remove('alert')
      alert.classList.add('alert-danger')
  
  
      setTimeout(()=>{
          alert.classList.remove('alert-danger');
          alert.classList.add('alert')
      }, 2000);
      //2000 is millisecong
  }
  function notifyUserAdded(){
      let alert= document.getElementById('alert-success');
      alert.classList.remove('alert')
      alert.classList.add('alert-success')
  
      setTimeout(()=>{
          alert.classList.remove('alert-success');
          alert.classList.add('alert')
      }, 2000);
  }

function allocate() {
      const city = ["Delhi", "Bangalore", "Chennai", "Pune", "Jaipur", "Ahemdabad", "Indore", "Lucknow", "Kanpur", "Vadodara", "Bhopal", "Mumbai", "Kolkata"]
      let randomCity = Math.floor(Math.random() * city.length);
      return city[randomCity];

      // users.push(city[randomCity])
}

displayUsers = () => {
      let containeruser = document.getElementById('container2')
      containeruser.innerHTML= " "
      // containeruser.style.backgroundColor= 'pink'
      users.map((a) => {
            
            let users= document.createElement('div')
            users.classList.add('users')

            let userDivName = document.createElement('div')
            userDivName.classList.add('name2')

            // let name_user= document.createElement('div')
            // name_user.innerHTML= 'Name'

            let name = document.createElement('div');
            name.classList.add('n');
            name.innerText = 'Name: ';

            let nameUser = document.createElement('p');
            nameUser.classList.add('pname');
            nameUser.innerText = a.name;


            containeruser.appendChild(users)
            users.appendChild(userDivName)
            userDivName.appendChild(name)
            userDivName.appendChild(nameUser)

            // -------------------------------------------

            let userDivEmail = document.createElement('div')
            userDivEmail.classList.add('email2')

            let email = document.createElement('div');
            email.classList.add('n');
            email.innerText = 'Email: ';

            let emailUser = document.createElement('p');
            emailUser.classList.add('pemail');
            emailUser.innerText = a.email;


            containeruser.appendChild(users)
            users.appendChild(userDivEmail)
            userDivEmail.appendChild(email)
            userDivEmail.appendChild(emailUser)

            // ---------------------------------------------

            let userDivAdd = document.createElement('div')
            userDivAdd.classList.add('center2')

            let center = document.createElement('div');
            center.classList.add('n');
            center.innerText = 'Allocated City: ';

            let AddUser = document.createElement('p');
            AddUser.classList.add('acenter');
            AddUser.innerText = a.city_name;


            containeruser.appendChild(users)
            users.appendChild(userDivAdd)
            userDivAdd.appendChild(center)
            userDivAdd.appendChild(AddUser)

            
            users.appendChild(userDivName)
            users.appendChild(userDivEmail)
            users.appendChild(userDivAdd)


      })
      



}