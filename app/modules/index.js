import React, { Component, cloneElement } from 'react';
import { isStrictModeEnabled } from 'mobx';
import { Provider } from 'mobx-react';

import SideNav from './Components/SideNav';
import TopBar from './Components/TopBar';

import DevTools from 'mobx-react-devtools';
import styles from './styles/sharedStyles.css';

import AppStateStore from './Pages/AppStateStore';

isStrictModeEnabled(true);

function renderDevtools() {
    if (window.cordova) {
        return '<div />';
    }
    return <DevTools position={{ bottom: 0, right: 20 }} />;
}

export default function App({ children }) {
    return (
        <div>
            <Provider {...{ AppStateStore }}>
                <div className={styles.rootContainer}>
                    <TopBar />
                    <main role="main">
                        <div className={styles.mainWrapper}>
                            {children}
                        </div>
                    </main>
                </div>
            </Provider>
            {renderDevtools()}
        </div>
    );
}
