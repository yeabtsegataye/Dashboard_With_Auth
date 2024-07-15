import { Link } from "react-router-dom";

const SideBar = () => {
  const sidebarConfig = [
    {
      title: "Users",
      iconClass: "gd-user",
      items: [
        { name: "All Users", link: "/Users" },
        { name: "Add New", link: "/Users" },
      ],
    },
    {
      title: "Authentication",
      iconClass: "gd-lock",
      items: [
        { name: "Login", link: "/Authentication" },
        { name: "Register", link: "/Authentication" },
      ],
    },
    {
      title: "Settings",
      iconClass: "gd-settings",
      items: [
        { name: "General", link: "/setting" },
        { name: "Security", link: "/setting" },
      ],
    },
    // Add more sections as needed
  ];
  const YourComponent = () => {
    return (
      <div id="borderedAccordion">
        {sidebarConfig.map((section, index) => (
          <div
            key={index}
            className="accordion accordion-bordered-y accordion-stacked"
            style={{ margin: "-1rem -0.1rem" }}
          >
            <header
              id={`accordion-heading-${index}`}
              className="accordion-header"
              aria-expanded={index}
              aria-controls={`accordion-${index}`}
              data-toggle="collapse"
              data-target={`#accordion-${index}`}
            >
              <span className="side-nav-menu-icon d-flex mr-3">
                <i className={section.iconClass}></i>
              </span>
              <span className="side-nav-fadeout-on-closed media-body">
                {section.title}
              </span>
              <span className="side-nav-control-icon d-flex">
                <i
                  className={`accordion-control gd-angle-down icon-text ml-auto`}
                ></i>
              </span>
            </header>

            <div
              id={`accordion-${index}`}
              className={`collapse`}
              aria-labelledby={`accordion-heading-${index}`}
              data-parent="#borderedAccordion"
            >
              <div
                className="accordion-body"
                style={{ margin: "-1rem -0.5rem" }}
              >
                <ul className="side-nav-menu side-nav-menu-second-level mb-0">
                  {section.items.map((item, idx) => (
                    <li className="side-nav-menu-item" key={idx}>
                      <Link className="side-nav-menu-link" to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    // <!-- Sidebar Nav -->
    <aside
      id="sidebar"
      className="js-custom-scroll side-nav mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar"
    >
      <ul id="sideNav" className="side-nav-menu side-nav-menu-top-level mb-0">
        {/* <!-- Title --> */}
        <li className="sidebar-heading h6">Dashboard</li>
        {/* <!-- End Title --> */}

        {/* <!-- Dashboard --> */}
        <li className="side-nav-menu-item active">
          <Link className="side-nav-menu-link media align-items-center" to="/">
            <span className="side-nav-menu-icon d-flex mr-3">
              <i className="gd-dashboard"></i>
            </span>
            <span className="side-nav-fadeout-on-closed media-body">Dashboard</span>
          </Link>
        </li>
        {/* <!-- End Dashboard -->

        <!-- Documentation --> */}
        <li className="side-nav-menu-item">
          <Link
            className="side-nav-menu-link media align-items-center"
            to="/"
            target="_blank"
          >
            <span className="side-nav-menu-icon d-flex mr-3">
              <i className="gd-window"></i>
            </span>
            <span className="side-nav-fadeout-on-closed media-body">
              employee
            </span>
          </Link>
        </li>
        {/* <!-- End Documentation -->

        <!-- Title --> */}
        <li className="sidebar-heading h6">Examples</li>
        {/* <!-- End Title -->
        <!-- Users --> */}
        {YourComponent()}
      </ul>
    </aside>
  );
};

export default SideBar;
