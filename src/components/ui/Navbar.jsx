import { Bell, ChevronsLeftRight, Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";

const Navbar = ({
  handleSidebar,
  searchShowInput,
  show,
  mode,
  currentMode,
}) => {
  const searchInput = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");

  const showInput = () => setShowModal(true);
  return (
    <nav>
      <ChevronsLeftRight
        className="bx bx-menu"
        style={{ cursor: "pointer" }}
        onClick={handleSidebar}
      />
      <form
        action="#"
        onSubmit={(e) => {
          if (window.innerWidth < 576) {
            e.preventDefault();
            searchShowInput;
          }
        }}
      >
        <div className={"form-input" + (show ? "show" : "")}>
          <input ref={searchInput} type="search" placeholder="Search..." />
          <button
            type="submit"
            className="search-btn"
            onClick={(e) => {
              if (window.innerWidth < 576) {
                e.preventDefault();
                searchShowInput;
              }
            }}
          ></button>
          {/* <Search size={18} onClick={showInput} className="cursor-pointer" /> */}
        </div>
      </form>
      <input
        type="checkbox"
        id="switch-mode"
        hidden
        checked={currentMode}
        onChange={mode}
      />
      <label htmlFor="switch-mode" className="switch-mode">
        {currentMode ? (
          <Sun
            color="white"
            style={{ display: "flex", position: "absolute", left: "5" }}
          />
        ) : (
          <Moon
            color="black"
            style={{
              display: "flex",
              position: "absolute",
              right: "5",
            }}
          />
        )}
      </label>
      <a href="#" className="notification">
        <Bell size={22} />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src={"../src/assets/people.png"} alt="Profile" />
      </a>
      {/* {showModal && (
        <Dialog
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={(text) => {
            alert("Kamu cari: " + text);
            setShowModal(false);
          }}
          query={query}
          setQuery={setQuery}
        />
      )} */}
    </nav>
  );
};

export default Navbar;
