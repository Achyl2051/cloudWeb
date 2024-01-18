import React from 'react';
import logo from '../assets/img/omby.png';

import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/quill/quill.snow.css'
import '../assets/vendor/quill/quill.bubble.css'
import '../assets/vendor/remixicon/remixicon.css'
import '../assets/vendor/simple-datatables/style.css'
import '../assets/css/style.css'

function Login() {
    return (
        <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div class="d-flex justify-content-center py-4">
                  <a href="index.html" class="logo d-flex align-items-center w-auto">
                    <img src={logo} alt=""/>
                    <span class="d-none d-lg-block">Ombaika mitady</span>
                  </a>
                </div>

                <div class="card mb-3">

                  <div class="card-body">

                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p class="text-center small">Vous devez vous connecter avant d'accéder à la page</p>
                    </div>

                    <form class="row g-3 needs-validation" action="Login" method="post" novalidate>

                      <div class="col-12">
                        <label for="yourUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" class="form-control" id="yourUsername" value="achyl" required/>
                          <div class="invalid-feedback">Please enter your pseudo.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Password</label>
                        <input type="password" name="pass" class="form-control" id="yourPassword" value="root" required/>
                        <div class="invalid-feedback">Please enter your password!</div>
                      </div>
                        
                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">Don't have account? <a href="#"> sign in</a></p>
                      </div>
                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

      </div>
    );
}

export default Login;