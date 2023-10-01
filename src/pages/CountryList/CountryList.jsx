import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from "../../components/CountryCard/CountryCard";
import icon from "../../assets/img/icon.png";
import icon1 from "../../assets/img/icon-1.png";
import icon2 from "../../assets/img/icon2.png";
import path from "../../assets/img/path.svg";
import "./CountryList.css";
import { CountryListAction } from "../../redux/action/CountryListAction";

const CountryList = () => {
    const [activeTab, setActiveTab] = useState('All');
    const dispatch = useDispatch();

    const getCountryData = useCallback(async () => {
        dispatch(CountryListAction.CountryListAsync());
    }, [dispatch]);

    useEffect(() => {
        getCountryData();
    }, [getCountryData]);

    const countries = useSelector((state) => state.CountryListReducer.CountryListData);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="sign-in-desktop">
            <div className="overlap-wrapper1">
                <header className="header">
                    <div className="countryTitle-TAG">Countries</div>
                    <div className="tabs">
                        <div
                            className={`tab-item-2 ${activeTab === 'All' ? 'active' : ''}`}
                            onClick={() => handleTabClick('All')}
                        >
                            <div className="overlap-3">
                                <div className="area" />
                                {activeTab === 'All' && <div className="bar-STATE-ACTIVE" />}
                                <div className="label-2">All</div>
                            </div>
                        </div>
                        <div
                            className={`tab-item-2 ${activeTab === 'Asia' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Asia')}
                        >
                            <div className="overlap-3">
                                <div className="area" />
                                {activeTab === 'Asia' && <div className="bar-STATE-ACTIVE" />}
                                <div className="label-2">Asia</div>
                            </div>
                        </div>
                        <div
                            className={`tab-item ${activeTab === 'Europe' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Europe')}
                        >
                            <div className="overlap-groups">
                                <div className="area" />
                                {activeTab === 'Europe' && <div className="bar-STATE-ACTIVE" />}
                                <div className="label-2">Europe</div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="countries">
                {countries
                    .filter((country) => {
                        if (activeTab === 'All') {
                            return true;
                        }
                        return country.region === activeTab;
                    })
                    .map((country, index) => (
                        <CountryCard key={index} {...country} />
                    ))}
            </div>
            <footer className="footer">
                <div className="social-buttons">
                    <div className="circle-button-2">
                        <div className="icon">
                            <img className="icon-3" alt="Icon" src={icon} />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="icon">
                            <img className="icon-2" alt="Icon" src={icon1} />
                        </div>
                    </div>
                    <div className="circle-button">
                        <div className="icon">
                            <div className="div">
                                <img className="path" alt="Path" src={path} />
                                <div className="rect" />
                                <div className="path-2" />
                            </div>
                        </div>
                    </div>
                    <div className="icon-wrapper">
                        <div className="icon">
                            <img className="img1" alt="Icon" src={icon2} />
                        </div>
                    </div>
                </div>
                <div className="typographyTAG-UI">Example@email.com</div>
                <p className="text-wrapper">Copyright © 2020 Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CountryList;
