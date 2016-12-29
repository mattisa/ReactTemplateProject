import React from 'react';
import { isStrictModeEnabled } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import TopBar from './Components/TopBar';
import styles from './styles/sharedStyles.css';

import AppStateStore from './Pages/AppStateStore';

isStrictModeEnabled(true);

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
            <DevTools position={{ bottom: 0, right: 20 }} />
        </div>
    );
}
