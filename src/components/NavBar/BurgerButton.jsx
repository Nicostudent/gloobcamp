// TODO: not provide a button description will cause accessibility issues
// you should put an aria-label attribute or aria-labelledby
// ref: https://dequeuniversity.com/rules/axe/4.4/button-name?application=axeAPI

const BurgerButton = ({ isOpen, toggleDropdown }) => (
    <button
      onClick={toggleDropdown}
      type="button"
      className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
    >
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        )}
      </svg>
    </button>
  );
  
  export default BurgerButton;
  