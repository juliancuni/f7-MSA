import React, { useState } from 'react';
import {
    f7,
    Page,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
    Navbar,
    Block,
    ListItem,
    Button,
    LoginScreen,
} from 'framework7-react';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginScreenOpened, setLoginScreenOpened] = useState(false);

    const signIn = () => {
        // f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
        //     f7.loginScreen.close();

        // });
    };

    return (

        <LoginScreen
            className="demo-login-screen"
            opened={loginScreenOpened}
            onLoginScreenClosed={() => {
                setLoginScreenOpened(false);
            }}
        >
            <Page loginScreen>
                <LoginScreenTitle>{f7.name} Login</LoginScreenTitle>
                <List form>
                    <ListInput
                        label="Username"
                        type="text"
                        placeholder="Your username"
                        value={username}
                        onInput={(e) => {
                            setUsername(e.target.value);
                        }}
                        errorMessage='Test'
                        errorMessageForce={true}
                    />
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onInput={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </List>
                <List>
                    <ListButton onClick={signIn}>Sign In</ListButton>
                    <BlockFooter>
                        Some text about login information.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </BlockFooter>
                </List>
            </Page>
        </LoginScreen>
    );
};