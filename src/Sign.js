
const Sign = () => {
 
  return (
    <div className="sign">
      <h2>Register Form</h2>
      <br></br>
      <br></br>
      <div className="conatiner">
        <form>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example1" class="form-control" />
                <label class="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example1" class="form-control" />
                <label class="form-label" for="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example1" class="form-control" />
            <label class="form-label" for="form3Example3">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form3Example1" class="form-control" />
            <label class="form-label" for="form3Example4">
              Password
            </label>
          </div>
          <br></br>
          <div class="form-check d-flex justify-content-center mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
              checked
            />

            <label class="form-check-label" for="form2Example33">
              I agree all statements of T & C
            </label>
          </div>
          <br />
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Sign;
