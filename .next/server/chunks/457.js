"use strict";
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidebar_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/sidebarData.js
var sidebarData = __webpack_require__(6000);
var sidebarData_default = /*#__PURE__*/__webpack_require__.n(sidebarData);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/CopyRight.jsx


const CopyRight = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "copyright",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                "\xa9 ",
                new Date().getFullYear(),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        })
    });
};
/* harmony default export */ const components_CopyRight = (CopyRight);

;// CONCATENATED MODULE: ./utilis/linkActiveChecker.js
// is active link check
const isActiveLink = (menuPath, routePath)=>{
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/PasswordProtection.jsx


const PASSWORD = "24863b"; // Set your password here
const PasswordProtection = ({ onPasswordCorrect  })=>{
    const [inputPassword, setInputPassword] = (0,external_react_.useState)("");
    const handlePasswordSubmit = (e)=>{
        e.preventDefault();
        if (inputPassword === PASSWORD) {
            onPasswordCorrect();
        } else {
            alert("Incorrect password. Please try again.");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handlePasswordSubmit,
        style: {
            textAlign: "center",
            marginTop: "2em"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "password",
                value: inputPassword,
                onChange: (e)=>setInputPassword(e.target.value),
                placeholder: "Enter Password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const components_PasswordProtection = (PasswordProtection);

;// CONCATENATED MODULE: ./components/sidebar/Sidebar.jsx









const Sidebar = ()=>{
    const router = (0,router_.useRouter)();
    const [click, setClick] = (0,external_react_.useState)(false);
    const [isPasswordModalOpen, setPasswordModalOpen] = (0,external_react_.useState)(false);
    const [lockedRoute, setLockedRoute] = (0,external_react_.useState)("");
    const handleClick = ()=>setClick(!click);
    const handleProtectedLinkClick = (routePath)=>{
        setPasswordModalOpen(true);
        setLockedRoute(routePath);
    };
    const onPasswordCorrect = ()=>{
        setPasswordModalOpen(false);
        router.push(lockedRoute);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header-inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "navbar-brand",
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 140,
                                    height: 20,
                                    src: "/img/logo/dark.png",
                                    alt: "brand"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my_trigger",
                            onClick: handleClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: click ? "hamburger hamburger--collapse-r is-active" : "hamburger",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hamburger-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: click ? "leftpart active" : "leftpart",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "leftpart_inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "navbar-brand",
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 135,
                                    height: 20,
                                    src: "/img/logo/dark.png",
                                    alt: "brand"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: sidebarData_default().map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: handleClick,
                                        children: item.isLocked ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                handleProtectedLinkClick(item.routePath);
                                            },
                                            className: `${isActiveLink(item.routePath, router.asPath) ? "active " : ""}`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        width: 15,
                                                        height: 15,
                                                        className: "svg",
                                                        src: item.icon,
                                                        alt: "homerun"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "menu_content",
                                                        children: item.menuName
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            className: `${isActiveLink(item.routePath, router.asPath) ? "active " : ""}`,
                                            href: item.routePath,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    width: 15,
                                                    height: 15,
                                                    className: "svg",
                                                    src: item.icon,
                                                    alt: "homerun"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "menu_content",
                                                    children: item.menuName
                                                })
                                            ]
                                        })
                                    }, item.id))
                            })
                        }),
                        isPasswordModalOpen && /*#__PURE__*/ jsx_runtime_.jsx(components_PasswordProtection, {
                            onPasswordCorrect: onPasswordCorrect
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_CopyRight, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const sidebar_Sidebar = (Sidebar);


/***/ }),

/***/ 6000:
/***/ ((module) => {


module.exports = [
    {
        id: 1,
        icon: "/img/svg/home-run.svg",
        menuName: "Home",
        routePath: "/home",
        isLocked: false
    },
    {
        id: 2,
        icon: "/img/svg/avatar.svg",
        menuName: "About",
        routePath: "/about",
        isLocked: false
    },
    {
        id: 3,
        icon: "/img/svg/setting.svg",
        menuName: "Programs",
        routePath: "/service",
        isLocked: true
    },
    {
        id: 4,
        icon: "/img/svg/briefcase.svg",
        menuName: "Portfolio",
        routePath: "/portfolio",
        isLocked: false
    },
    {
        id: 6,
        icon: "/img/svg/mail.svg",
        menuName: "Contact",
        routePath: "/contact",
        isLocked: false
    }
];


/***/ })

};
;