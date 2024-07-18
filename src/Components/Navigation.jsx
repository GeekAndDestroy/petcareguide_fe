import { useEffect } from 'react';
import { themeChange } from 'theme-change'

export default function Navigation({ dogs }) {

    useEffect(() => {
        themeChange(false)
        
      }, [])

    return (
        <div className="navbar bg-base-300 sticky top-0 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
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
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {dogs.map(d => (
                            <li key={d.id}>
                                <a href={"/dog/" + d.id}>{d.name}</a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl">
                    How to keep my dogs alive!
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {dogs.map(d => (
                            <li key={d.id}>
                                <a href={"/dog/" + d.id}>{d.name}</a>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Add Dog</a> */}
                <select data-choose-theme className='appearance-none dropdown dropdown-end dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-30' id="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cupcake">Cupcake</option>
          <option value="aqua">Aqua</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="emerald">Emerald</option>
          <option value="corporate">Corporate</option>
          <option value="synthwave">Synthwave</option>
          <option value="retro">Retro</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="valentine">Valentine</option>
          <option value="halloween">Halloween</option>
          <option value="garden">Garden</option>
          <option value="forest">Forest</option>
          <option value="aerolite">Aerolite</option>
          <option value="dracula">Dracula</option>
      </select>
            </div>
        </div>
    );
}
