import Image from "next/image";
import Link from "next/link";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useRouter } from "next/router";
import { useState } from "react";
import PasswordProtection from '../PasswordProtection';

const Sidebar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [lockedRoute, setLockedRoute] = useState('');

  const handleClick = () => setClick(!click);

  const handleProtectedLinkClick = (routePath) => {
    setPasswordModalOpen(true);
    setLockedRoute(routePath);
  };

  const onPasswordCorrect = () => {
    setPasswordModalOpen(false);
    router.push(lockedRoute);
  };

  return (
    <>
      <div className="header">
        <div className="header-inner">
          {/* <div className="logo">
            <Link className="navbar-brand" href="/">
              <Image
                width={80}
                height={28}
                src="/img/logo/dark.png"
                alt="brand"
              />
            </Link>
          </div> */}
          <Link className="details" href="/"style={{ textDecoration: 'none'}}>
            <h3 className="name" style={{ color: '',fontWeight: 'bold'} }>{"B I N H"}</h3>
          </Link>
          {/* End logo */}

          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            {/* End hamburger menu */}
          </div>
        </div>
      </div>
      {/* Header */}

      {/* START LEFT MENU CONTENT */}
      <div className={click ? "leftpart active" : "leftpart"}>
        <div className="leftpart_inner">
          <Link className="details" href="/"style={{ textDecoration: 'none'}}>
            <h3 className="name" style={{fontWeight: 'bold'} }>{"B I N H"}</h3>
          </Link>
          {/* END LOGO */}

      <div className="menu">
        <ul>
          {sidebarData.map((item) => (
            <li key={item.id} onClick={handleClick}>
              {item.isLocked ? (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProtectedLinkClick(item.routePath);
                  }}
                  className={`${
                    isActiveLink(item.routePath, router.asPath) ? "active " : ""
                  }`}
                >
                  <div>
                    <Image
                      width={15}
                      height={15}
                      className="svg"
                      src={item.icon}
                      alt="homerun"
                    />
                    <span className="menu_content">{item.menuName}</span>
                  </div>
                </a>
              ) : (
                <Link
                  className={`${
                    isActiveLink(item.routePath, router.asPath) ? "active " : ""
                  }`}
                  href={item.routePath === "/" ? "/" : `${item.routePath}/`}
                >
                  <Image
                    width={15}
                    height={15}
                    className="svg"
                    src={item.icon}
                    alt="homerun"
                  />
                  <span className="menu_content">{item.menuName}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* END MENU */}

      {isPasswordModalOpen && (
        <PasswordProtection onPasswordCorrect={onPasswordCorrect} />
      )}

          <CopyRight />
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT MENU CONTENT */}
    </>
  );
};

export default Sidebar;
