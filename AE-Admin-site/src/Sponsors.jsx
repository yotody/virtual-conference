import React, { useContext, useState } from "react";
import { EventContext } from "./MyContext";

function Sponsors() {
  const { sponsors } = useContext(EventContext);
  const [name, setName] = useState("");
  const [description, setDescriptions] = useState("");
  const { addSponsor } = useContext(EventContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sponsorData = {
      name,
      description,
    };

    const handleSuccess = (speaker_registered) => {
      setName("");
      setDescriptions("");
    };
    const handleError = () => {
      alert("register failed");
    };

    addSponsor(sponsorData, handleSuccess, handleError);
  };

  return (
    <div>
      <table class="table caption-top rounded mt-2 bg-white">
        <caption className="text-white fs-4">Sponsors</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sponsor Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sponsors.map((sponsor) => (
            <tr key={sponsor.id}>
              <th scope="row">{sponsor.id}</th>
              <td>{sponsor.name}</td>
              <td>{sponsor.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <a href="/sponsors/add" className="btn btn-success fw-bold">
        <i class="bi bi-plus-circle"></i> Add Sponsor
      </a> */}

      <button
        type="button"
        className="btn btn-success fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#addSpeaker"
      >
        <i className="bi bi-plus-circle" /> Add Sponsor
      </button>

      <div
        className="modal fade"
        id="addSpeaker"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <h3>Add Sponsor</h3>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container text-white">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescriptions(e.target.value)}
                      required
                    />
                  </div>

                  <div class="d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Add Sponsor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
