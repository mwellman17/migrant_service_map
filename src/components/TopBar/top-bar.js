import React, { Component } from "react";
import "components/ProviderList/provider-list.css";
import VisaStatusDropdown from "./visa-status-dropdown";
import ProviderTypeDropdown from "./provider-type-dropdown";
import Search from "./search";
import DistanceDropdown from "./distance-dropdown";
import "./top-bar.css";

class TopBar extends Component {
  onSearchInputClick = () => {
    const { selectTab } = this.props;
    selectTab(0);
  };
  toggle = (name, event) => {
    const myDiv = event.currentTarget;
    Array.from(myDiv.classList).includes("expanded")
      ? myDiv.classList.remove("expanded")
      : myDiv.classList.add("expanded");
  };

  render() {
    const {
      changeVisaFilter,
      providerTypes,
      toggleProviderVisibility,
      visaTypes
    } = this.props;
    const topBarItemClass = "top-bar-item";

    return (
      <div className="top-bar">
        <VisaStatusDropdown
          className={topBarItemClass}
          onChange={changeVisaFilter}
          visaTypes={visaTypes}
        />
        <ProviderTypeDropdown
          className={topBarItemClass}
          providerTypes={providerTypes}
          onChange={toggleProviderVisibility}
        />
        <Search
          className={topBarItemClass}
          onSearchInputClick={this.onSearchInputClick}
        />
        <DistanceDropdown className={topBarItemClass} />
      </div>
    );
  }
}

export default TopBar;