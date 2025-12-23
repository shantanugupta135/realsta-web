"use client";

import { useState, useEffect } from "react";
import "./NavigationMenu.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavigationMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname(); // replaces useLocation()
  const router = useRouter(); // replaces useNavigate()

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isActive = (href: string) => {
    if (href === "/our-services") {
      return pathname.startsWith("/our-services");
    }
    if (href === "/property") {
      return pathname.startsWith("/property");
    }
    return pathname === href;
  };

  return (
    <nav className="navbar navbar-expand-md position-static">
      <div className="customContainer container-fluid">

        {/* Logo */}
        <Link href="/">
          <img
            loading="lazy"
            src="/assets/RealstaLogo.svg"
            className="nm-logo"
            alt="Logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end${
            mobileMenuOpen ? " show" : ""
          }`}
        >
          <ul className="navbar-nav ml-md-auto mr-md-1 ml-sm-2">

            {/* Home */}
            <li className="nav-item link_spacing">
              <Link
                href="/"
                className={`nav-link${isActive("/") ? " active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li className="nav-item link_spacing">
              <Link
                href="/about-us"
                className={`nav-link${isActive("/about-us") ? " active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            {/* OUR SERVICES (Desktop: dropdown) */}
            {!isMobile ? (
              <li
                className={`nav-item link_spacing dropdown${
                  dropdownOpen ? " show" : ""
                }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span
                  className={`nav-link dropdown-toggle${
                    isActive("/our-services") ? " active" : ""
                  }`}
                  role="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/our-services")}
                >
                  Our Services
                </span>

                <ul
                  className={`dropdown-menu dropdown-menu-right${
                    dropdownOpen ? " show" : ""
                  }`}
                >
                  <li>
                    <Link
                      href="/our-services/investment-advisory"
                      className={`dropdown-item${
                        isActive("/our-services/investment-advisory")
                          ? " active"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Investment Advisory
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/our-services/asset-management"
                      className={`dropdown-item${
                        isActive("/our-services/asset-management")
                          ? " active"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Asset Management
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/our-services/corporate-leasing"
                      className={`dropdown-item${
                        isActive("/our-services/corporate-leasing")
                          ? " active"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Corporate Leasing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/our-services/workspace-solutions"
                      className={`dropdown-item${
                        isActive("/our-services/workspace-solutions")
                          ? " active"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Workspace Solutions
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                {/* Mobile menu items */}
                <li className="nav-item">
                  <Link
                    href="/our-services"
                    className={`nav-link${
                      isActive("/our-services") ? " active" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/our-services/investment-advisory"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Investment Advisory
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/our-services/asset-management"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Asset Management
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/our-services/corporate-leasing"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Corporate Leasing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/our-services/workspace-solutions"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Workspace Solutions
                  </Link>
                </li>
              </>
            )}

            {/* Properties */}
            <li className="nav-item link_spacing">
              <Link
                href="/property"
                className={`nav-link${isActive("/property") ? " active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </Link>
            </li>

            {/* Insights & Media (Desktop dropdown) */}
            {!isMobile ? (
              <li
                className={`nav-item link_spacing dropdown${
                  dropdownOpen2 ? " show" : ""
                }`}
                onMouseEnter={() => setDropdownOpen2(true)}
                onMouseLeave={() => setDropdownOpen2(false)}
              >
                <span
                  className={`nav-link dropdown-toggle${
                    isActive("/blogs") ||
                    isActive("/case-study") ||
                    isActive("/resources") ||
                    isActive("/in-the-news")
                      ? " active"
                      : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/blogs")}
                >
                  Insights & Media
                </span>

                <ul
                  className={`dropdown-menu dropdown-menu-right${
                    dropdownOpen2 ? " show" : ""
                  }`}
                >
                  <li>
                    <Link
                      href="/blogs"
                      className={`dropdown-item${
                        isActive("/blogs") ? " active" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/resources"
                      className={`dropdown-item${
                        isActive("/resources") ? " active" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/case-study"
                      className={`dropdown-item${
                        isActive("/case-study") ? " active" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Success Stories
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/in-the-news"
                      className={`dropdown-item${
                        isActive("/in-the-news") ? " active" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      In the News
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    href="/blogs"
                    className={`nav-link${isActive("/blogs") ? " active" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Insights & Media
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/blogs"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/resources"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Resources
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/case-study"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;Success Stories
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/in-the-news"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &nbsp;&nbsp;In the News
                  </Link>
                </li>
              </>
            )}

            {/* Contact Us */}
            <li className="nav-item link_spacing">
              <Link
                href="/contact-us"
                className={`nav-link${
                  isActive("/contact-us") ? " active" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
