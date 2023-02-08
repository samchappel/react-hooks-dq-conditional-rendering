import React from "react";

function MenuBar({ handleClick }) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <span className="item active">
        <i className="user large icon" onClick={() => handleClick("Profile")} />
      </span>

      <span className="item">
        <i className="photo large icon" onClick={() => handleClick("Photos")} />
      </span>

      <span className="item">
        <i className="cocktail large icon" onClick={() => handleClick("Cocktails")} />
      </span>

      <span className="item">
        <i className=" themeisle large icon" onClick={() => handleClick("Pokemon")} />
      </span>
    </div>
  );
}

export default MenuBar;
