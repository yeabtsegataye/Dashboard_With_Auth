import React from "react";

export const AllUsers = () => {
  return (
    <div className="py-4 px-3 px-md-4">
      <div className="card mb-3 mb-md-4">
        <div className="card-body">
          {/* <!-- Breadcrumb --> */}
          <nav className="d-none d-md-block" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Users</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                All Users
              </li>
            </ol>
          </nav>
          {/* <!-- End Breadcrumb --> */}

          <div className="mb-3 mb-md-4 d-flex justify-content-between">
            <div className="h3 mb-0">Users</div>
          </div>

          {/* <!-- Users --> */}
          <div className="table-responsive-xl">
            <table className="table text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="font-weight-semi-bold border-top-0 py-2">#</th>
                  <th className="font-weight-semi-bold border-top-0 py-2">
                    Name
                  </th>
                  <th className="font-weight-semi-bold border-top-0 py-2">
                    Email
                  </th>
                  <th className="font-weight-semi-bold border-top-0 py-2">
                    Registration Date
                  </th>
                  <th className="font-weight-semi-bold border-top-0 py-2">
                    Status
                  </th>
                  <th className="font-weight-semi-bold border-top-0 py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">1</td>
                  <td className="align-middle py-3">
                    <div className="d-flex align-items-center">
                      <div className="position-relative mr-2">
                        <span className="indicator indicator-lg indicator-bordered-reverse indicator-top-left indicator-success rounded-circle"></span>
                        {/* <!--img className="avatar rounded-circle" src="#" alt="John Doe"--> */}
                        <span className="avatar-placeholder mr-md-2">J</span>
                      </div>
                      John Doe
                    </div>
                  </td>
                  <td className="py-3">john.doe@example.com</td>
                  <td className="py-3">January 15, 2019</td>
                  <td className="py-3">
                    <span className="badge badge-pill badge-success">
                      Verified
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="position-relative">
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-pencil icon-text"></i>
                      </a>
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-trash icon-text"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">2</td>
                  <td className="align-middle py-3">
                    <div className="d-flex align-items-center">
                      <div className="position-relative mr-2">
                        {/* <!--img className="avatar rounded-circle" src="#" alt="John Doe"--> */}
                        <span className="avatar-placeholder mr-md-2">S</span>
                      </div>
                      Sam Dew
                    </div>
                  </td>
                  <td className="py-3">sam.dew@example.com</td>
                  <td className="py-3">January 15, 2019</td>
                  <td className="py-3">
                    <span className="badge badge-pill badge-warning">
                      Pending
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="position-relative">
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-pencil icon-text"></i>
                      </a>
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-trash icon-text"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">3</td>
                  <td className="align-middle py-3">
                    <div className="d-flex align-items-center">
                      <div className="position-relative mr-2">
                        <span className="indicator indicator-lg indicator-bordered-reverse indicator-top-left indicator-success rounded-circle"></span>
                        {/* <!--img className="avatar rounded-circle" src="#" alt="John Doe"--> */}
                        <span className="avatar-placeholder mr-md-2">A</span>
                      </div>
                      Anna Doe
                    </div>
                  </td>
                  <td className="py-3">anna.doe@example.com</td>
                  <td className="py-3">January 15, 2019</td>
                  <td className="py-3">
                    <span className="badge badge-pill badge-success">
                      Verified
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="position-relative">
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-pencil icon-text"></i>
                      </a>
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-trash icon-text"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="card-footer d-block d-md-flex align-items-center d-print-none">
              <div className="d-flex mb-2 mb-md-0">
                Showing 1 to 8 of 24 Entries
              </div>

              <nav
                className="d-flex ml-md-auto d-print-none"
                aria-label="Pagination"
              >
                <ul className="pagination justify-content-end font-weight-semi-bold mb-0">
                  {" "}
                  <li className="page-item">
                    {" "}
                    <a
                      id="datatablePaginationPrev"
                      className="page-link"
                      href="#!"
                      aria-label="Previous"
                    >
                      <i className="gd-angle-left icon-text icon-text-xs d-inline-block"></i>
                    </a>{" "}
                  </li>
                  <li className="page-item d-none d-md-block">
                    <a
                      id="datatablePaginationPage0"
                      className="page-link active"
                      href="#!"
                      data-dt-page-to="0"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item d-none d-md-block">
                    <a
                      id="datatablePagination1"
                      className="page-link"
                      href="#!"
                      data-dt-page-to="1"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item d-none d-md-block">
                    <a
                      id="datatablePagination2"
                      className="page-link"
                      href="#!"
                      data-dt-page-to="2"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    {" "}
                    <a
                      id="datatablePaginationNext"
                      className="page-link"
                      href="#!"
                      aria-label="Next"
                    >
                      <i className="gd-angle-right icon-text icon-text-xs d-inline-block"></i>
                    </a>{" "}
                  </li>{" "}
                </ul>
              </nav>
            </div>
          </div>
          {/* <!-- End Users --> */}
        </div>
      </div>
    </div>
  );
};
