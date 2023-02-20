import React from "react";

function Colors() {
  return (
    <div>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
              <p className="mb-4">
                Bootstrap's default utility classNamees can be found on the
                official{" "}
                <a href="https://getbootstrap.com/docs">
                  Bootstrap Documentation
                </a>{" "}
                page. The custom utilities below were created to extend this
                theme past the default utility classNamees built into
                Bootstrap's framework.
              </p>

              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- First Column --> */}
                <div className="col-lg-4">
                  {/* <!-- Custom Text Color Utilities --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Custom Text Color Utilities
                      </h6>
                    </div>
                    <div className="card-body">
                      <p className="text-gray-100 p-3 bg-dark m-0">
                        .text-gray-100
                      </p>
                      <p className="text-gray-200 p-3 bg-dark m-0">
                        .text-gray-200
                      </p>
                      <p className="text-gray-300 p-3 bg-dark m-0">
                        .text-gray-300
                      </p>
                      <p className="text-gray-400 p-3 bg-dark m-0">
                        .text-gray-400
                      </p>
                      <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
                      <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
                      <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
                      <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
                      <p className="text-gray-900 p-3 m-0">.text-gray-900</p>
                    </div>
                  </div>

                  {/* <!-- Custom Font Size Utilities --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Custom Font Size Utilities
                      </h6>
                    </div>
                    <div className="card-body">
                      <p className="text-xs">.text-xs</p>
                      <p className="text-lg mb-0">.text-lg</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Second Column --> */}
                <div className="col-lg-4">
                  {/* <!-- Background Gradient Utilities --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Custom Background Gradient Utilities
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="px-3 py-5 bg-gradient-primary text-white">
                        .bg-gradient-primary
                      </div>
                      <div className="px-3 py-5 bg-gradient-secondary text-white">
                        .bg-gradient-secondary
                      </div>
                      <div className="px-3 py-5 bg-gradient-success text-white">
                        .bg-gradient-success
                      </div>
                      <div className="px-3 py-5 bg-gradient-info text-white">
                        .bg-gradient-info
                      </div>
                      <div className="px-3 py-5 bg-gradient-warning text-white">
                        .bg-gradient-warning
                      </div>
                      <div className="px-3 py-5 bg-gradient-danger text-white">
                        .bg-gradient-danger
                      </div>
                      <div className="px-3 py-5 bg-gradient-light text-white">
                        .bg-gradient-light
                      </div>
                      <div className="px-3 py-5 bg-gradient-dark text-white">
                        .bg-gradient-dark
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Third Column --> */}
                <div className="col-lg-4">
                  {/* <!-- Grayscale Utilities --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Custom Grayscale Background Utilities
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="p-3 bg-gray-100">.bg-gray-100</div>
                      <div className="p-3 bg-gray-200">.bg-gray-200</div>
                      <div className="p-3 bg-gray-300">.bg-gray-300</div>
                      <div className="p-3 bg-gray-400">.bg-gray-400</div>
                      <div className="p-3 bg-gray-500 text-white">
                        .bg-gray-500
                      </div>
                      <div className="p-3 bg-gray-600 text-white">
                        .bg-gray-600
                      </div>
                      <div className="p-3 bg-gray-700 text-white">
                        .bg-gray-700
                      </div>
                      <div className="p-3 bg-gray-800 text-white">
                        .bg-gray-800
                      </div>
                      <div className="p-3 bg-gray-900 text-white">
                        .bg-gray-900
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
