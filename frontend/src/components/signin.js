//import logo from '../assets/icon-left-font.png'
import '../styles/signin.css'

function Signin() {
    return (
    <div class="form-signin">
        <form>
          
          <h1 class="h3 mb-3 fw-normal">S'identifier</h1>
      
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
            <label for="floatingPassword">Mot de passe</label>
          </div>
      
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"></input> se souvenir de moi
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Se connecter</button>
          
        </form>
    </div>
    
    );
}
export default Signin