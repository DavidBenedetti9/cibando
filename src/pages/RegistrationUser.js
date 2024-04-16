import { event } from "jquery";
import React, { useState } from "react";
import styled from "styled-components";

const RegistrationUser = () => {
  const foto =
    "https://static1.bigstockphoto.com/9/7/3/large1500/379216846.jpg";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    ripetiPassword: "",
    accetto: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleOnChange = (evento) => {
    //ci andiamo a copiare tutto il contenuto dentro al formValues
    //quando all'onChange chiamiamo il metodo richiamiamo noi stessi
    //è come se diventasse name: 'David'
    /// ... si chiamano spreadArray
    setFormValues({ ...formValues, [evento.target.name]: evento.target.value });
  };

  const validazioneCampi = (evento) => {
    //creo due costanti una name e una value e sono destrutturate e vanno a prendere il valore che gli passa evento.target
    const { name, value } = evento.target;

    //se il valore è nullo
    if (value.trim() === "") {
      setFormErrors((prevError) => ({
        ...prevError,
        [name]: "Questo campo è obbligatorio",
      }));
    } else {
      if (name === "email") {
        const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        if (!emailRegex.test(value)) {
          setFormErrors((prevError) => ({
            ...prevError,
            [name]: "Email non valida",
          }));
        } else {
          setFormErrors((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } else {
        setFormErrors((prevError) => ({
          ...prevError,
          [name]: undefined,
        }));
      }
    }
  };

  //essendo un evento quando vado a richiamare il metodo non serve che ci passo niente
  function onSubmitForm(event) {
    //quando viene chiamato questo metodo non deve refreshare la pagina
    //in html quando premiamo un bottone si refresha la pagina
    event.preventDefault();
    console.log("Campi del form: ", formValues);
  }

  return (
    <Contenitore>
      <section className="mb-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registrazione
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={onSubmitForm}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="text"
                              id="name"
                              className={`form-control ${
                                formErrors.name ? "is-invalid" : ""
                              }`}
                              name="name"
                              value={formValues.name}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label className="form-label" htmlFor="name">
                              Nome
                            </label>
                            {formErrors.name && (
                              <p className="help is-danger">
                                <strong>{formErrors.name}</strong>
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="email"
                              id="email"
                              className={`form-control ${
                                formErrors.email ? "is-invalid" : ""
                              }`}
                              name="email"
                              value={formValues.email}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                            {formErrors.email && (
                              <p className="help is-danger">
                                <strong>{formErrors.email}</strong>
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="password"
                              className={`form-control ${
                                formErrors.password ? "is-invalid" : ""
                              }`}
                              name="password"
                              value={formValues.password}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            {formErrors.password && (
                              <p className="help is-danger">
                                <strong>{formErrors.password}</strong>
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="ripetiPassword"
                              className={`form-control ${
                                formErrors.ripetiPassword ? "is-invalid" : ""
                              }`}
                              name="ripetiPassword"
                              value={formValues.ripetiPassword}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label
                              className="form-label"
                              htmlFor="ripetiPassword"
                            >
                              Ripeti password
                            </label>
                            {formErrors.ripetiPassword && (
                              <p className="help is-danger">
                                <strong>{formErrors.ripetiPassword}</strong>
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className={`form-check-input me-2 ${
                              formErrors.accetto ? "is-invalid" : ""
                            }`}
                            type="checkbox"
                            id="accetto"
                            name="accetto"
                            value={formValues.accetto}
                            onChange={handleOnChange}
                            onBlur={validazioneCampi}
                          />
                          <label className="form-check-label" htmlFor="accetto">
                            Accetto i termini del contratto
                          </label>
                          {formErrors.accetto && (
                            <p className="help is-danger">
                              <strong>{formErrors.accetto}</strong>
                            </p>
                          )}
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                            disabled={!formValues}
                          >
                            Registrati
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 colonna-dx">
                      <img
                        className=" w-100 img"
                        src={foto}
                        alt="Immagine Cibo"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  section {
    
    .card-body {
      padding: 0;
    }

    .colonna-dx {
      height: 100%;
      .img {
        height: auto;
        border-radius: 0 5px 5px;
      }
    }

    .is-danger {
      color: red;
      font-size: small;
      margin-top: -10px;
    }
  }
`;

export default RegistrationUser;
