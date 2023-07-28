
import Image from "next/image";
import Link from "next/link";
import LightDark from "./LightDark";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() { 

const user = "kk"
    return (
        <div className="navbar  bg-slate-100 z-40">
          <div className="navbar-start">
            {user ? (
              <div className="dropdown z-40">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
    
                <ul
                  tabIndex="1"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-fit bg-slate-100 z-40"
                >
                  <li tabIndex="1">
                    <span>
                      Заявки
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </span>
                    <ul className="p-2 bg-slate-100">
                      <li>
                        <Link href="/lockout/lockout-request-main">
                          Заяви обезопасяване
                        </Link>
                      </li>
                      <li>
                        <Link href="/lockout/lockout-requests-action-needed-open">
                          Чакащи обезопасяване
                        </Link>
                      </li>
                      <li>
                        <Link href="/lockout/lockout-requests-open">
                          Отворени заявки
                        </Link>
                      </li>
                      <li>
                        <Link href="/lockout/lockout-requests-action-needed-close">
                          Чакащи възстановяване
                        </Link>
                      </li>
                      <li>
                        <Link href="/lockout/lockout-requests-archive">
                          Архив заявки
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li tabIndex="0">
                  <a href="#">
                    Схеми
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-slate-100">
                    <li>
                      <Link href="/process-diagrams/process-diagrams-main">
                        Процесни схеми
                      </Link>
                    </li>
                    <li>
                      <Link href="/electricalRooms/substation6kV1B">
                      Електрозали захранвани от подстанция 1Б
                      </Link>
                    </li>
                    <li>
                      <Link href="/electricalRooms/substation6kV1A">
                      Електрозали захранвани от подстанция 1A
                      </Link>
                    </li>
                  </ul>
                </li>
                  <li tabIndex="1">
                    <span>
                      Ресурси
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </span>
                    <ul className="p-2 bg-slate-100">
                      <li>
                        <Link href="/resources/electric-motor-list">
                          Ел.двигатели
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/electric-motor-list-spare">
                          Резервни ел.двигатели
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/equipment-list">Оборудвания</Link>
                      </li>
    
                      <li>
                        <Link href="/resources/procedure-list">
                          Процедури за обезопасяване
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <LightDark />
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
            <Link href="/">
              <Image
                src="/logo.svg"
                width="120"
                height="60"
                className="ml-2"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex  z-40">
            {user ? (
              <ul className="menu menu-horizontal px-1">
                <li tabIndex="0">
                  <a href="#">
                    Заявки
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-slate-100">
                    <li>
                      <Link href="/lockout/lockout-request-main">
                        Заяви обезопасяване
                      </Link>
                    </li>
                    <li>
                      <Link href="/lockout/lockout-requests-action-needed-open">
                        Чакащи обезопасяване
                      </Link>
                    </li>
                    <li>
                      <Link href="/lockout/lockout-requests-open">
                        Отворени заявки
                      </Link>
                    </li>
                    <li>
                      <Link href="/lockout/lockout-requests-action-needed-close">
                        Заявки чакащи възстановяване
                      </Link>
                    </li>
                    <li>
                      <Link href="/lockout/lockout-requests-archive">
                        Архив заявки
                      </Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex="0">
                  <a href="#">
                    Схеми
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-slate-100">
                    <li>
                      <Link href="/process-diagrams/process-diagrams-main">
                        Процесни схеми
                      </Link>
                    </li>
                    <li>
                      <Link href="/electricalRooms/substation6kV1B">
                      Електрозали захранвани от подстанция 1Б
                      </Link>
                    </li>
                    <li>
                      <Link href="/electricalRooms/substation6kV1A">
                      Електрозали захранвани от подстанция 1A
                      </Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex="1">
                  <a href="#">
                    Ресурси
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
    
                  <ul className="p-2 bg-slate-100">
                    <li>
                      <Link href="/resources/electric-motor-list">
                        Ел.двигатели
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/electric-motor-list-spare">
                        Резервни ел.двигатели
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/equipment-list">Оборудвания</Link>
                    </li>
                    <li>
                      <Link href="/resources/procedure-list">
                        Процедури за обезопасяване
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <LightDark />
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      width="50"
                      height="50"
                      alt="User image"
                      src={user.picture}
                    />
                  </div>
                </label>
    
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li
                  >
                   <Link href="/user/proposals">Предложения</Link>
                  </li>
                  <li
                    onClick={() =>
                      window.open(
                        "https://lockout-app-backend.herokuapp.com/admin",
                        "_blank"
                      )
                    }
                  >
                    <a>Админстраторски панел</a>
                  </li>
                  <li>
                    <Link href="/api/auth/logout">Изход</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <ul>
                  <li>
                    <Link href="/api/auth/login">
                      <FiLogIn className="text-xl mr-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      );
    }
    




